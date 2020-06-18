from django.db import models
from datetime import date, datetime
from django.utils.dateparse import parse_date
import bcrypt, re

class UserManager(models.Manager):
    def register_validator(self, post_data):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        # FIRST NAME error control
        if len(post_data['first_name']) == 0:
            errors['first_name'] = "Your First Name cannot be left Empty"
        elif len(post_data['first_name']) < 2:
            errors['first_name'] = "Your First N has to be longer than 2 Characters"
        # LAST NAME error control
        if len(post_data['last_name']) == 0:
            errors['last_name'] = "Your Last Name cannot be left Empty"
        elif len(post_data['last_name']) < 2:
            errors['last_name'] = "Your Last Name has to be longer than 2 Characters"
        # EMAIL error control
        if not EMAIL_REGEX.match(post_data['email']):
            errors['email'] = "Invalid Email Address"
        elif len(User.objects.filter(email=post_data['email'])) > 0:
            errors['email'] = "this email already exists, please enter another login"
        # PASSWORD error controls
        if len(post_data['password']) < 8:
            errors['password'] = "Your Password has to be longer than 8 Characters"
        if not (post_data['password'] == post_data['confirm_password']):
            errors['password'] = "The password and confirm password dont match!"

        return errors


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email  = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    confirm_password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()