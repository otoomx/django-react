from rest_framework import serializers
from .models import Portfolio, Position


class PositionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Position
        fields = ( 'symbol', 'quantity' ,'cost_per_share')

class PortfolioSerializer(serializers.ModelSerializer):
    #  facets = FacetSerializer(many=True, read_only=True, 
    positions = PositionSerializer(many=True, read_only=True)
    class Meta:
        model = Portfolio
        fields = ('id', 'name', 'create_date', 'positions')
