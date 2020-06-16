from django.db import models
from datetime import date, datetime
from django.utils.dateparse import parse_date
import re

class ShowManager(models.Manager):
    EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
    def show_validator(self, postData):
        errors = {}
        if len(postData['title']) < 2:
            errors['title'] = "Title should be at least 2 Characters"
        if len(postData['tv_network']) < 3:
            errors['tv_network'] = "Network should be at least 2 Characters"
        if parse_date(postData['release_date']) > date.today():
            errors['release_date'] = "Must enter a date from the Past"
        if len(postData['desc']) > 0 and len(postData['desc']) < 10:
            errors['desc'] = "Description should be at least 10 characters long, or be empty"
        return errors
    
    def edit_validators(self, postData):
        errors = {}
        if len(postData['updated_title']) == 0:
            errors["updated_title"] = "The Title of the show cannot be empty"
        elif len(postData['updated_title']) < 2:
            errors["updated_title"] = "The Title of the show has to be at least 2 characters long"
        if len(postData["updated_tv_network"]) < 3:
            errors["updated_tv_network"] = "The Network has to be at least 2 characters long"
        if parse_date(postData["updated_release_date"]) > date.today():
            errors["updated_release_date"] = "Must enter a date from the Past"
        if len(postData["updated_desc"]) > 0 and len(postData['updated_desc']) < 10:
            errors["updated_desc"] = "The Description has to be at least 10 characters long, or be empty"

        return errors

class Show(models.Model):
    title = models.CharField(max_length=255)
    tv_network = models.CharField(max_length=255)
    release_date = models.DateField()
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()