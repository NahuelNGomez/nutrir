from email.policy import default
from typing_extensions import Required
from django.db import models



class Alimento(models.Model):

	nombre = models.CharField("Nombre", max_length=100, unique=True)
	foto = models.ImageField(upload_to='images')
	cantidad_porcion = models.DecimalField("Cantidad de Referencia", null=False, blank=False, decimal_places=2, max_digits=16)
	hidratos_carbono = models.DecimalField("Hidratos de Carbono", null=False, blank=False, decimal_places=2, max_digits=16, help_text="En gramos")
	proteinas = models.DecimalField("Proteinas", null=False, blank=False, decimal_places=2, max_digits=16, help_text="En gramos")
	grasas = models.DecimalField("Grasas Saturadas", null=False, blank=False, decimal_places=2, max_digits=16, help_text="En gramos")
	grasas_totales = models.DecimalField("Grasas Totales", null=False, blank=False, decimal_places=2, max_digits=16, help_text="En gramos")
	energia = models.DecimalField("Kilocalorias", null=False, blank=False, decimal_places=2, max_digits=16)
	sodio = models.DecimalField("Sodio", null=False, blank=False, decimal_places=2, max_digits=16, help_text="En gramos")


	def __str__(self):
		return f"{self.nombre}"

	class Meta:
		verbose_name_plural = "Alimentos"
