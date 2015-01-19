from django.shortcuts import render
from rest_framework import viewsets
from .models import Portfolio, Position
from .serializers import PortfolioSerializer, PositionSerializer

# Create your views here.
class PortfolioViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

class PositionViewSet(viewsets.ModelViewSet):
	queryset = Position.objects.all()
	serializer_class = PortfolioSerializer
