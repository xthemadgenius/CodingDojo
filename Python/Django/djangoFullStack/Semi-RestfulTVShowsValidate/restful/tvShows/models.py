from django.db import models
from datetime import date, datetime
from django.utils.dateparse import parse_date

# Create your models here.
class Show(models.Model):
    title = models.CharField(max_length=255)
    tv_network = models.CharField(max_length=255)
    release_date = models.DateField()
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)