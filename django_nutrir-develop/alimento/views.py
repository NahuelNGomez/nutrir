from django.shortcuts import render

# Create your views here.
from rest_framework import generics, status
from rest_framework.response import Response

from .serializers import AlimentoSerializer
from .models import Alimento


class AlimentoViewList(generics.ListAPIView):
    """Vista para que muestre el listado"""

    serializer_class = AlimentoSerializer
    def get_queryset(self):
        return Alimento.objects.all()

