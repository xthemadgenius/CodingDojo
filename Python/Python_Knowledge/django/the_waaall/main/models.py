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

class MessageManager(models.Manager):
    def message_validator(self, post_data):
        errors = {}
        if len(post_data['message_content']) < 2:
            errors['message_content'] = 'Message must be longer than 2 characters!'
        return errors

class CommentManager(models.Manager):
    def comment_validator(self, post_data):
        errors = {}
        if len(post_data['comment_content']) < 2:
            errors['comment_content'] = 'Comment must have more than 2 chars!'
        return errors


class User(models.Model):
    first_name = models.CharField(max_length=55)
    last_name = models.CharField(max_length=55)
    email = models.CharField(max_length=55)
    password = models.CharField(max_length=55)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Message(models.Model):
    content = models.CharField(max_length=255)
    poster = models.ForeignKey(User, related_name="messages", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = MessageManager()

class Comment(models.Model):
    content = models.CharField(max_length=255)
    commented_on = models.ForeignKey(Message, related_name="comments", on_delete=models.CASCADE)
    writer = models.ForeignKey(User, related_name='comments', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = CommentManager()