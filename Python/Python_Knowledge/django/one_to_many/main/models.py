from django.db import models

# Create your models here.
class Chef(models.Model):
    name = models.CharField(max_length=45)
    cuisine = models.CharField(max_length=45)
    rank = models.CharField(max_length=45)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Dish(models.Model):
    name = models.CharField(max_length=95)
    tastiness_level = models.IntegerField()
    spice = models.IntegerField()
    maker = models.ForeignKey(Chef, related_name="dishes", on_delete=models.CASCADE)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Utensil(models.Model):
    name = models.CharField(max_length=45)
    is_sharp = models.BooleanField()
    users = models.ManyToManyField(Chef, related_name="utensil")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
