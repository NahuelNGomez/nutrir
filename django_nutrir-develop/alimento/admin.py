from django.contrib import admin
from .models import Alimento
from django.utils.html import format_html

# Register your models here.
class AlimentoAdmin(admin.ModelAdmin):

	def foto_tag(self, obj):
		return format_html('<img src="{}" style="max-width:200px; max-height:200px"/>'.format(obj.foto.url))

	list_display = ['nombre', 'foto_tag',]
	search_fields = ('nombre',)
	ordering = ['nombre']

admin.site.register(Alimento, AlimentoAdmin)
