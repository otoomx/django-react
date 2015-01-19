from django.db import models

# Create your models here.
class Portfolio(models.Model):
	create_date = models.DateField()
	name = models.CharField(max_length=200)

class Position(models.Model):
	portfolio = models.ForeignKey(Portfolio,related_name='positions')
	symbol = models.CharField(max_length=6)
	quantity = models.IntegerField(default=0)
	cost_per_share = models.DecimalField(max_digits=10, decimal_places=2)