from django.urls import path
from . import views

urlpatterns = [
    path('', views.AlimentoViewList.as_view(), name="alimento"),  # Captura solo la raíz
    path('get_alimento_sara/<int:alimento_id>/', views.get_alimento_sara, name='get_alimento_sara'),  # Nueva ruta para obtener el alimento de SARA

]