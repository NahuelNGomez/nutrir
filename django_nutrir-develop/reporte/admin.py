from collections import Counter
from datetime import date, timedelta
from itertools import chain

from dateutil.relativedelta import relativedelta
from django.db.models import Count, Sum, F, Q
from .models import ReporteNutricional, ReportesGenerales, ReportesRaciones
from django.contrib import admin
from comedor.models import Comedor
from encuesta.models import Encuesta, AlimentoEncuesta
from comida.models import Comida
from responsable_organizacion.models import ResponsableOrganizacion


class ReportesGeneralesAdmin(admin.ModelAdmin):

	change_list_template = 'reportes_generales.html'

	def changelist_view(self, request, extra_context=None):

		response = super().changelist_view(
			request,
			extra_context=extra_context,
		)

		r = ResponsableOrganizacion.objects.filter(responsable=request.user).values('organizacion')
		if (request.user.is_superuser or request.user.groups.filter(name='Administrador').exists()):
			lc = Comedor.objects.all()
		else:
			lc = Comedor.objects.filter(
				Q(responsable_comedor=request.user) |
				Q(organizacion_regional__in=r) |
				Q(organizacion_regional__organizacion_superior__in=r)
			)

		# Comedores por provincia
		comedores_qs = lc.values('provincia__nombre').annotate(dcount=Count('provincia__nombre')).order_by()
		comedores = list(comedores_qs)
		response.context_data['comedores_provincia'] = comedores

		# Listado de provincias
		response.context_data['provincias'] = comedores_qs.values('provincia__nombre')

		# Listado de departamentos

		comedores = lc.values('provincia__nombre', 'departamento__nombre').annotate(dcount=Count('departamento__nombre')).order_by()
		comedores = list(comedores)
		response.context_data['comedores_departamento'] = comedores

		# Listado de gobiernos_locales

		comedores = lc.values('provincia__nombre', 'departamento__nombre', 'gobierno_local__nombre').annotate(dcount=Count('gobierno_local__nombre')).order_by()
		comedores = list(comedores)
		response.context_data['comedores_gobierno_local'] = comedores

		# Listado de gobiernos_locales

		comedores = lc.values('provincia__nombre', 'departamento__nombre', 'gobierno_local__nombre', 'localidad__nombre').annotate(dcount=Count('localidad__nombre')).order_by()
		comedores = list(comedores)
		response.context_data['comedores_localidad'] = comedores

		# Comedores por organizacion

		comedores_qs_or = lc.filter(organizacion_regional__es_organizacion_regional=True).values('organizacion_regional__organizacion_superior__nombre').values_list('organizacion_regional__organizacion_superior__nombre', flat=True)
		comedores_qs_o = lc.filter(organizacion_regional__es_organizacion_regional=False).values('organizacion_regional__nombre').values_list('organizacion_regional__nombre', flat=True)
		comedores = list(comedores_qs_or) + list(comedores_qs_o)
		comedores = dict(Counter(comedores))

		c = []
		for a in comedores:
			c.append({
				'organizacion': a,
				'dcount': comedores[a],
			})

		response.context_data['comedores_organizacion'] = c

		# Listado de organizaciones

		comedores = lc.filter(organizacion_regional__es_organizacion_regional=True).values('organizacion_regional__organizacion_superior__nombre').values_list('organizacion_regional__organizacion_superior__nombre', flat=True)
		comedores = list(set(comedores))
		response.context_data['comedores_organizaciones'] = comedores

		# Listado de organizaciones regionales

		comedores = lc.filter(organizacion_regional__es_organizacion_regional=True).values('organizacion_regional__organizacion_superior__nombre', 'organizacion_regional__nombre').annotate(dcount=Count('organizacion_regional__nombre')).order_by()
		comedores = list(comedores)
		response.context_data['comedores_organizacion_regional'] = comedores

		return response


class ReportesRacionesAdmin(admin.ModelAdmin):

	change_list_template = 'reportes_raciones.html'

	def getMesAñoComida(self, e):
		mes = e['mes']
		if mes < 10:
			mes = '0' + str(mes)
		else:
			mes = str(mes)
		return str(e['año']) + ' ' + mes + ' ' + e['comida']

	def getAñoMes(self, e):
		e = e.split('/')
		mes = e[0]
		if int(mes) < 10:
			mes = '0' + str(mes)
		else:
			mes = str(mes)
		return e[1] + ' ' + mes

	def getComidaMesAño(self, e):
		mes = e['encuesta__fecha__month']
		if mes < 10:
			mes = '0' + str(mes)
		else:
			mes = str(mes)
		return e['comida__nombre'] + ' ' + str(e['encuesta__fecha__year']) + ' ' + mes

	def getFechaComida(self, e):
		return str(e['fecha'].year)+str(e['fecha'].month)+str(e['fecha'].day) + ' ' + e['comida']

	def getComidaFecha(self, e):
		return e['comida__nombre'] + ' ' + str(e['encuesta__fecha'].year)+str(e['encuesta__fecha'].month)+str(e['encuesta__fecha'].day)

	def changelist_view(self, request, extra_context=None):

		response = super().changelist_view(
			request,
			extra_context=extra_context,
		)

		r = ResponsableOrganizacion.objects.filter(responsable=request.user).values('organizacion')
		if (request.user.is_superuser or request.user.groups.filter(name='Administrador').exists()):
			lc = Comedor.objects.all()
		else:
			lc = Comedor.objects.filter(
				Q(responsable_comedor=request.user) |
				Q(organizacion_regional__in=r) |
				Q(organizacion_regional__organizacion_superior__in=r)
			)

		# Encuestas de los ultimos 12 meses ----------------------------------------------------------------------------

		today = date.today()
		td = relativedelta(months=-11)
		fecha = today + td
		fecha_limite = date(day=1, month=fecha.month, year=fecha.year)

		r_mes_total = Encuesta.objects.filter(comedor__in=lc, fecha__range=(fecha_limite, today))

		# Cantidad de raciones por mes de los ultimos 12 meses
		cantidad_raciones_meses = r_mes_total.values('fecha__year', 'fecha__month', 'cantidad_rango_1', 'cantidad_rango_2', 'cantidad_rango_3', 'cantidad_rango_4')
		cantidad_raciones_meses = cantidad_raciones_meses.values('fecha__year', 'fecha__month').annotate(cantidad=Sum(F('cantidad_rango_1') + F('cantidad_rango_2') + F('cantidad_rango_3') + F('cantidad_rango_4'))).order_by('fecha__year', 'fecha__month')
		response.context_data['raciones_mes'] = cantidad_raciones_meses

		# Cantidad de raciones por funcionamiento de los ultimos 12 meses
		cantidad_raciones_funcionamiento_meses = r_mes_total.values('fecha__year', 'fecha__month', 'cantidad_rango_1', 'cantidad_rango_2', 'cantidad_rango_3', 'cantidad_rango_4', 'funcionamiento')
		cantidad_raciones_funcionamiento_meses = cantidad_raciones_funcionamiento_meses.values('fecha__year', 'fecha__month', 'funcionamiento').annotate(cantidad=Sum(F('cantidad_rango_1') + F('cantidad_rango_2') + F('cantidad_rango_3') + F('cantidad_rango_4')))
		response.context_data['raciones_mes_funcionamiento'] = cantidad_raciones_funcionamiento_meses

		# Cantidad de raciones por rango etario de los ultimos 12 meses
		cantidad_raciones_rango_etario_meses = r_mes_total.values('fecha__year', 'fecha__month', 'cantidad_rango_1', 'cantidad_rango_2', 'cantidad_rango_3', 'cantidad_rango_4')
		cantidad_raciones_rango_etario_meses = cantidad_raciones_rango_etario_meses.values('fecha__year', 'fecha__month').annotate(cantidad_rango_1=Sum(F('cantidad_rango_1')), cantidad_rango_2=Sum(F('cantidad_rango_2')), cantidad_rango_3=Sum(F('cantidad_rango_3')), cantidad_rango_4=Sum(F('cantidad_rango_4')))
		response.context_data['raciones_mes_rango_etario'] = cantidad_raciones_rango_etario_meses

		# Cantidad de raciones por comida de los ultimos 12 meses
		cantidad_raciones_comida_meses = AlimentoEncuesta.objects.select_related('encuesta').filter(encuesta__fecha__range=(fecha_limite, today), encuesta__comedor__in=lc).values('encuesta__fecha__year', 'encuesta__fecha__month', 'encuesta__cantidad_rango_1', 'encuesta__cantidad_rango_2', 'encuesta__cantidad_rango_3', 'encuesta__cantidad_rango_4', 'comida')
		cantidad_raciones_comida_meses = cantidad_raciones_comida_meses.values('encuesta__fecha__year', 'encuesta__fecha__month', 'comida__nombre').annotate(cantidad=Sum(F('encuesta__cantidad_rango_1') + F('encuesta__cantidad_rango_2') + F('encuesta__cantidad_rango_3') + F('encuesta__cantidad_rango_4')))
		comidas = set(cantidad_raciones_comida_meses.values_list('comida__nombre', flat=True))
		fechas_bd = set(cantidad_raciones_comida_meses.values_list('encuesta__fecha__month', 'encuesta__fecha__year'))
		agregar = []
		fechas = []
		for f in fechas_bd:
			fechas.append(str(f[0])+'/'+str(f[1]))
			for c in comidas:
				t = cantidad_raciones_comida_meses.filter(comida__nombre=c, encuesta__fecha__month=f[0], encuesta__fecha__year=f[1])
				if not t:
					agregar.append({'comida__nombre': c, 'encuesta__fecha__month': f[0], 'encuesta__fecha__year': f[1], 'cantidad': 0})
		cantidad_raciones_comida_meses = list(cantidad_raciones_comida_meses) + agregar
		cantidad_raciones_comida_meses.sort(key=self.getComidaMesAño)
		fechas.sort(key=self.getAñoMes)
		response.context_data['raciones_comida_mes'] = cantidad_raciones_comida_meses
		response.context_data['fechas_mes'] = fechas

		# Encuestas de los ultimos 30 dias -----------------------------------------------------------------------------

		today = date.today()
		td = timedelta(29)
		raciones_30_dias_total = Encuesta.objects.filter(comedor__in=lc, fecha__range=(today - td, today))
		raciones_30_dias_total = raciones_30_dias_total.values('fecha').annotate(cantidad=Sum(F('cantidad_rango_1') + F('cantidad_rango_2') + F('cantidad_rango_3') + F('cantidad_rango_4'))).order_by('fecha')
		response.context_data['raciones_dia'] = raciones_30_dias_total

		# Cantidad de raciones de los ultimos 7 dias -------------------------------------------------------------------

		today = date.today()
		td = timedelta(6)
		fecha = today - td
		r_semana_total = Encuesta.objects.filter(comedor__in=lc, fecha__range=(fecha, today))

		# Cantidad de raciones por funcionamiento de los ultimos 7 dias

		cantidad_raciones_funcionamiento_dias = r_semana_total.values('fecha', 'cantidad_rango_1', 'cantidad_rango_2', 'cantidad_rango_3', 'cantidad_rango_4', 'funcionamiento')
		cantidad_raciones_funcionamiento_dias = cantidad_raciones_funcionamiento_dias.values('fecha', 'funcionamiento').annotate(cantidad=Sum(F('cantidad_rango_1') + F('cantidad_rango_2') + F('cantidad_rango_3') + F('cantidad_rango_4')))
		response.context_data['raciones_semana_funcionamiento'] = cantidad_raciones_funcionamiento_dias

		# Cantidad de raciones por rango etario de los ultimos 7 dias
		cantidad_raciones_rango_etario_dias = r_semana_total.values('fecha', 'cantidad_rango_1', 'cantidad_rango_2', 'cantidad_rango_3', 'cantidad_rango_4')
		cantidad_raciones_rango_etario_dias = cantidad_raciones_rango_etario_dias.values('fecha').annotate(cantidad_rango_1=Sum(F('cantidad_rango_1')), cantidad_rango_2=Sum(F('cantidad_rango_2')), cantidad_rango_3=Sum(F('cantidad_rango_3')), cantidad_rango_4=Sum(F('cantidad_rango_4')))
		response.context_data['raciones_semana_rango_etario'] = cantidad_raciones_rango_etario_dias

		# Cantidad de raciones por comida de los ultimos 7 dias
		cantidad_raciones_comida_dias = AlimentoEncuesta.objects.select_related('encuesta').filter(encuesta__fecha__range=(fecha, today), encuesta__comedor__in=lc).values('encuesta__fecha', 'encuesta__cantidad_rango_1', 'encuesta__cantidad_rango_2', 'encuesta__cantidad_rango_3', 'encuesta__cantidad_rango_4', 'comida')
		cantidad_raciones_comida_dias = cantidad_raciones_comida_dias.values('encuesta__fecha', 'comida__nombre').annotate(cantidad=Sum(F('encuesta__cantidad_rango_1') + F('encuesta__cantidad_rango_2') + F('encuesta__cantidad_rango_3') + F('encuesta__cantidad_rango_4'))).order_by('encuesta__fecha')
		comidas = set(cantidad_raciones_comida_dias.values_list('comida__nombre', flat=True))
		fechas = set(cantidad_raciones_comida_dias.values_list('encuesta__fecha', flat=True))
		agregar = []
		for f in fechas:
			for c in comidas:
				t = cantidad_raciones_comida_dias.filter(comida__nombre=c, encuesta__fecha=f)
				if not t:
					agregar.append({'comida__nombre': c, 'encuesta__fecha': f, 'cantidad': 0})
		cantidad_raciones_comida_dias = list(cantidad_raciones_comida_dias) + agregar
		cantidad_raciones_comida_dias.sort(key=self.getComidaFecha)
		response.context_data['raciones_comida_semana'] = cantidad_raciones_comida_dias
		response.context_data['fechas_semana'] = fechas

		return response

admin.site.register(ReportesGenerales, ReportesGeneralesAdmin)
admin.site.register(ReportesRaciones, ReportesRacionesAdmin)


class ReporteNutricionalAdmin(admin.ModelAdmin):
	list_display = ['fecha', 'comedor', 'organizacion', 'encuesta']
	search_fields = ('comedor',)
	list_filter=('fecha','organizacion','comedor')

admin.site.register(ReporteNutricional, ReporteNutricionalAdmin)
