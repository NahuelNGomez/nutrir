from django.contrib import admin
from .models import AsistentesDiariosComedor

# Register your models here.
class AsistentesDiariosComedorAdmin(admin.ModelAdmin):

    list_display = ['rango']
    search_fields = ('rango',)

admin.site.register(AsistentesDiariosComedor, AsistentesDiariosComedorAdmin)