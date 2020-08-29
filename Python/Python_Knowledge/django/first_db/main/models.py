from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    dog_name = models.TextField()
    is_cool = models.BooleanField()
    num_of_cars = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

# C - Create
# R - Read
# U - Update
# D - Destroy/delete

# ORM - Object Realational Mapper
