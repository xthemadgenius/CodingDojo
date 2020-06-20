from django.db import models
from datetime import date, datetime
from django.utils.dateparse import parse_date
import bcrypt, re

class UserManager(models.Manager):
    def register_validator(self, post_data):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        # FIRST NAME error control
        if len(post_data['name']) == 0:
            errors['name'] = "Your First Name cannot be left Empty"
        elif len(post_data['name']) < 2:
            errors['name'] = "Your First N has to be longer than 2 Characters"
        # User NAME error control
        user = User.objects.filter(username =post_data['username'])
        if len(post_data['username']) == 0:
            errors['username'] = "Your User Name cannot be left Empty"
        if user:
            errors['username'] = "Someone already has this username. Plase try another one"
        # EMAIL error control
        user = User.objects.filter(email=post_data['email'])
        if not EMAIL_REGEX.match(post_data['email']):
            errors['email'] = "Invalid Email Address"
        elif len(User.objects.filter(email=post_data['email'])) > 0:
            errors['email'] = "this email already exists, please enter another login"
        elif user:
            errors['email'] = "Someone already has this email! Please try another one"
        # PASSWORD error controls
        if len(post_data['password']) < 8:
            errors['password'] = "Your Password has to be longer than 8 Characters"
        if not (post_data['password'] == post_data['confirm_password']):
            errors['password'] = "The password and confirm password dont match!"

        return errors

    def book_validator(self, post_data):
        errors = {}
        if len(post_data["title"]) == 0:
            errors["title"] = "You Cannot leave the Title Blank"
        elif len(post_data["title"]) < 2:
            errors["title"] = "Your Title must be Longer than 2 Characters"

        if post_data["add_author"] and not post_data["author"]:
            errors["author"] = "Please Select an Author"
        elif len(post_data["add_author"]) > 255:
            errors["add_author"] = "Please enter a title shorter than 255 characters"
        
        if len(post_data['review']) == 0:
            errors['review'] = "You cannot not leave the description field blank"
        if len(post_data['review']) < 8:
            errors['review'] = "Reiew must be 8 characters long minimum"
        return errors

class User(models.Model):
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    email  = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    confirm_password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

class Author(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(User, related_name="books", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Review(models.Model):
    review = models.TextField()
    rating = models.IntegerField()
    user = models.ForeignKey(User, related_name="reviews", on_delete=models.CASCADE)
    book = models.ForeignKey(Book, related_name="reviews", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
