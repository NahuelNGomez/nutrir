from django.shortcuts import render

# Create your views here.
from rest_framework import generics, status
from rest_framework.response import Response

from .serializers import AlimentoSerializer, UnidadSerializer
from .models import Alimento, Unidad


class AlimentoViewList(generics.ListAPIView):
    """Vista para que muestre el listado"""

    serializer_class = AlimentoSerializer
    def get_queryset(self):
        return Alimento.objects.all()

class UnidadesViewList(generics.ListAPIView):
    """Vista para que muestre el listado"""

    serializer_class = UnidadSerializer
    def get_queryset(self):
        return Unidad.objects.all()

