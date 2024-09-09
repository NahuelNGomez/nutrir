from django.contrib import admin
from .models import Alimento, Unidad
from django.utils.html import format_html

class AlimentoAdmin(admin.ModelAdmin):
    def foto_tag(self, obj):
        return format_html('<img src="{}" style="max-width:200px; max-height:200px"/>'.format(obj.foto.url))

    list_display = ['nombre', 'foto_tag']
    search_fields = ('nombre',)
    ordering = ['nombre']

class UnidadAdmin(admin.ModelAdmin):
    list_display = ['nombre']
    search_fields = ['nombre']

admin.site.register(Alimento, AlimentoAdmin)
admin.site.register(Unidad, UnidadAdmin)
