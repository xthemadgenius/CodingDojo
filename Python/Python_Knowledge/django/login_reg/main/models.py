from django.db import models
import re

# Create your models here.

class UserManager(models.Manager):
    def register_validator(self, post_data):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(post_data['first_name']) < 2:
            errors['first_name'] = "First Name MUST be at least 3 chars long!"
        if len(post_data['last_name']) < 4:
            errors['last_name'] = "Last Name MUST be at least 5 chars long!"
        if not EMAIL_REGEX.match(post_data['email']):
            errors['email'] = "THAT doesn't look like an email! Try again nerd!"
        if len(post_data['password']) < 7:
            errors['password'] = "Password must contain at least 8 characters!"
        return errors


class User(models.Model):
    first_name = models.CharField(max_length=55)
    last_name = models.CharField(max_length=55)
    email = models.CharField(max_length=55)
    password = models.CharField(max_length=55)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()