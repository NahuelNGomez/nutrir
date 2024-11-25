from django.urls import path, include, re_path
from . import views

urlpatterns = [
     re_path('(?P<id_p>.+)/departamentos/(?P<id_d>.+)/localidades/$', views.Localidad_ID_DeptoProvinciaview.as_view(), name='LocalidadDepartamentoProvincia')
]
