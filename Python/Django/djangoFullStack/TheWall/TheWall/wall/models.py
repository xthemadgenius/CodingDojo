from django.db import models
from login.models import User
from datetime import datetime, timedelta
from django.utils import timezone

# Create your models here.
class MessageManager(models.Manager):
    def message_validator(self, post_data):
        errors = {}
        timeLimit = timezone.now() - timedelta(minutes = 30)
        print((Messages.objects.filter(id = post_data['messageId'])[0].created_at - timezone.now()), timedelta(minutes = 30))
        if Messages.objects.filter(id = post_data['messageId'])[0].created_at < timeLimit:
            errors[post_data['messageId']] = "Time limit to delete the comment has been exceeded!"
            print(f"Error message created for {post_data['messageId']}")
            print(errors[post_data['messageId']])
        return errors

class Messages(models.Model):
    user = models.ForeignKey(User, related_name="messages", on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = MessageManager()

class Comments(models.Model):
    message = models.ForeignKey(Messages, related_name='comments', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name="comments", on_delete=models.CASCADE)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)