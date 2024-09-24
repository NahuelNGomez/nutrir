# admin.py
from django.contrib import admin
from .models import Alimento
from .models import AlimentoSARA
from django import forms
from django.utils.html import format_html


class AlimentoAdminForm(forms.ModelForm):
    # Creamos un campo de selección para elegir un alimento ya existente de la tabla SARA
    alimento_sara = forms.ModelChoiceField(
        queryset=AlimentoSARA.objects.all(),
        required=False,
        label="Seleccionar Alimento de tabla SARA",
        help_text="Seleccione un alimento para rellenar automáticamente los valores nutricionales"
    )

    class Meta:
        model = Alimento
        fields = ['alimento_sara', 'foto', 'nombre', 'cantidad_porcion', 'hidratos_carbono', 
                  'proteinas', 'grasas', 'grasas_totales', 'energia', 'sodio']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # # Llenar campos si hay un objeto existente
        # if self.instance and self.instance.pk:
        #     try:
        #         alimento_sara_instance = AlimentoSARA.objects.get(nombre=self.instance.nombre)
        #         self.fields['alimento_sara'].initial = alimento_sara_instance
        #         self.fields['nombre'].initial = alimento_sara_instance.nombre
        #         self.fields['cantidad_porcion'].initial = alimento_sara_instance.cantidad_porcion
        #         self.fields['hidratos_carbono'].initial = alimento_sara_instance.hidratos_carbono
        #         self.fields['proteinas'].initial = alimento_sara_instance.proteinas
        #         self.fields['grasas'].initial = alimento_sara_instance.grasas
        #         self.fields['grasas_totales'].initial = alimento_sara_instance.grasas_totales
        #         self.fields['energia'].initial = alimento_sara_instance.energia
        #         self.fields['sodio'].initial = alimento_sara_instance.sodio
        #     except AlimentoSARA.DoesNotExist:
        #         pass

        # Inicialmente, todos los campos son NO requeridos
        for field in ['nombre', 'cantidad_porcion', 'hidratos_carbono', 'proteinas', 
                      'grasas', 'grasas_totales', 'energia', 'sodio']:
            self.fields[field].required = False
                
    def clean(self):
        cleaned_data = super().clean()
        alimento_sara = cleaned_data.get('alimento_sara')
                
        # Si se ha seleccionado un alimento de la tabla SARA, se completan los campos automaticamente
        if alimento_sara:
            cleaned_data['nombre'] = alimento_sara.nombre
            cleaned_data['cantidad_porcion'] = alimento_sara.cantidad_porcion
            cleaned_data['hidratos_carbono'] = alimento_sara.hidratos_carbono
            cleaned_data['proteinas'] = alimento_sara.proteinas
            cleaned_data['grasas'] = alimento_sara.grasas
            cleaned_data['grasas_totales'] = alimento_sara.grasas_totales
            cleaned_data['energia'] = alimento_sara.energia
            cleaned_data['sodio'] = alimento_sara.sodio
            
		# Si no se seleccionó un alimento de la tabla SARA, se deben ingresar manualmente
        else:
            for field in ['nombre', 'cantidad_porcion', 'hidratos_carbono', 'proteinas', 'grasas', 'grasas_totales', 'energia', 'sodio']:
                if not cleaned_data.get(field):
                    self.add_error(field, 'Este campo es requerido.') # Marco todos los campos como requeridos

        return cleaned_data

class AlimentoAdmin(admin.ModelAdmin):
    form = AlimentoAdminForm

    def foto_tag(self, obj):
        return format_html('<img src="{}" style="max-width:200px; max-height:200px"/>'.format(obj.foto.url))

    list_display = ['nombre', 'foto_tag',]
    search_fields = ('nombre',)
    ordering = ['nombre']

admin.site.register(Alimento, AlimentoAdmin)


