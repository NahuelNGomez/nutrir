from django.urls import path, include, re_path
from . import views

urlpatterns = [
     re_path('$', views.AlimentoViewList.as_view(), name="alimento"),
     re_path('$', views.UnidadesViewList.as_view(), name="unidad"),
]