from django import forms
from dal import autocomplete
from provincia.models import Provincia
from departamento.models import Departamento
from gobierno_local.models import GobiernoLocal
from localidad.models import Localidad
from .models import Comedor


class ComedorAdminForm(forms.ModelForm):
		"""Form para que en comedor se pueda buscar las localidades, los gobiernos locales
		 y los departamenos en cascada"""

		provincia = forms.ModelChoiceField(
			queryset=Provincia.objects.all(),
			widget=autocomplete.ModelSelect2(url='provincia-autocomplete')
		)
		departamento = forms.ModelChoiceField(
			queryset=Departamento.objects.all(),
			widget=autocomplete.ModelSelect2(url='departamento-autocomplete', forward=('provincia',)),
			blank=True,
			required=False
		)
		gobierno_local = forms.ModelChoiceField(
			queryset=GobiernoLocal.objects.all(),
			widget=autocomplete.ModelSelect2(url='gobiernoLocal-autocomplete', forward=('departamento',)),
			blank=True,
			required=False
		)
		localidad = forms.ModelChoiceField(
			queryset=Localidad.objects.all(),
			widget=autocomplete.ModelSelect2(url='localidad-autocomplete', forward=('gobierno_local',)),
			blank=True,
			required=False
		)


