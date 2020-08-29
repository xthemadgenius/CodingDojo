from django.db import models
import re

# Create your models here.
class UserManager(models.Manager):
    def registration_validator(self, post_data):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(post_data['first_name']) < 2:
            errors['first_name'] = "First name needs to be at least 2 chars!"
        if len(post_data['last_name']) < 2:
            errors['last_name'] = 'Last name needs to be at least 2 chars!'
        if len(post_data['password']) < 8:
            errors['password'] = 'Password needs to be at least 8 chars!'
        if post_data['password'] != post_data['confirm_password']:
            errors['confirm_password'] = "Passwords don't match, try again!"
        if not EMAIL_REGEX.match(post_data['email']):
            errors['email'] = "Invalid email address!"
        return errors

class BookManager(models.Manager):
    def new_book(self, post_data):
        errors = {}
        if len(post_data['title']) < 1:
            errors['title'] = 'Book title is required, no empty forms!'
        if len(post_data['description']) < 5:
            errors['description'] = 'Book description must be at least 5 characters!'
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Book(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    poster = models.ForeignKey(User, related_name="books", on_delete=models.CASCADE)
    liked_by = models.ManyToManyField(User, related_name="liked_books")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BookManager()