from django.db import models
import re
# Create your models here.

class HeroManager(models.Manager):
    def hero_validator(self, post_data):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(post_data['alias']) < 4:
            errors['alias'] = "Alias must be at least 4 characters!!"
        if len(post_data['power']) < 2:
            errors['power'] = "Power gots to bes at leasts 3 long!"
        if len(post_data['alignment']) < 5:
            errors['alignment'] = "Alignment has to contain at least 6 chars of data!!"
        if not EMAIL_REGEX.match(post_data['email']):        
            errors['email'] = "Invalid email address!"
        return errors

class VillainManager(models.Manager):
    def villain_validator(self, post_data):
        errors = {}
        return errors

class Hero(models.Model):
    alias = models.CharField(max_length=50)
    power = models.CharField(max_length=50)
    alignment = models.CharField(max_length=50)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = HeroManager()

class Villain(models.Model):
    alias = models.CharField(max_length=50)
    power = models.CharField(max_length=50)
    alignment = models.CharField(max_length=50)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
