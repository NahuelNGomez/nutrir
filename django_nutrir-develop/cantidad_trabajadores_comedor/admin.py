from django.contrib import admin
from .models import CantidadTrabajadoresComedor

# Register your models here.
class CantidadTrabajadoresComedorAdmin(admin.ModelAdmin):

    list_display = ['rango']
    search_fields = ('rango',)

admin.site.register(CantidadTrabajadoresComedor, CantidadTrabajadoresComedorAdmin)