from django.db import models
import re

class UserManager(models.Manager):
    def register_validator(self, post_data):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(post_data['first_name']) < 1:
            errors['first_name'] = "First name must be at least 2 characters long"
        if len(post_data['last_name']) < 1:
            errors['last_name'] = "Last name must be at least 2 characters long"
        if not EMAIL_REGEX.match(post_data['email']):
            errors['email'] = "Invalid email"
        if len(post_data['password']) < 7:
            errors['password'] = "Password must be at least 8 characters long"
        if post_data['password'] != post_data['confirm_password']:
            errors['password'] = "Passwords do not match!"
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField(max_length=20)
    password = models.CharField(max_length=20)
    confirm_password = models.CharField(max_length=20)
    chosen_one = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)   
    updated_at = models.DateTimeField(auto_now=True)
    score = models.IntegerField(default=0)
    coins = models.IntegerField(default=10000)
    objects = UserManager()

class Character(models.Model):
    name = models.CharField(max_length=20)
    attack = models.IntegerField()
    health = models.IntegerField()
    ability = models.CharField(max_length=20)
    link = models.CharField(max_length=255)
    user = models.ForeignKey(User, related_name="characters", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Item(models.Model):
    item_name = models.CharField(max_length=20)
    attack = models.IntegerField()
    health = models.IntegerField()    
    special_ability = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    character = models.ForeignKey(Character, related_name="items", on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Obstacle(models.Model):
    obstacle_name = models.CharField(max_length=20)
    health = models.IntegerField()
    link = models.CharField(max_length=255)
    item = models.ForeignKey(Item, related_name="obstacles", on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Enemy(models.Model):
    name = models.CharField(max_length=20)
    attack = models.IntegerField()
    health = models.IntegerField()
    enemy_ability = models.CharField(max_length=20)
    link = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
