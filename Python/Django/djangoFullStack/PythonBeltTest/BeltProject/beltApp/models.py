from django.db import models
from datetime import datetime, date, time
from django.utils.dateparse import parse_date
from loginApp.models import User

class TripsManager(models.Manager):
    def trip_validator(self, postData):
        errors ={}
        # destination error codes
        if len(postData['destination']) == 0:
            errors['destination'] = "This Field Cannot be left Empty"
        if len(postData['destination']) < 2:
            errors['destination'] = "Destination name cannot bee shorter than 2 characters"
        # plan error codes
        if len(postData['plan']) == 0:
            errors['plan'] = "This Field Cannot be left Empty"
        if len(postData['plan']) < 2:
            errors['plan'] = "Plan cannot bee shorter than 2 characters"
        # start and end date error codes
        if not postData['start_date']:
            errors['start_date'] = "Please insert a Start Date"
        if not postData['end_date']:
            errors['end_date'] = "Please insert a end date"
        return errors

    def edit_validators(self, postData):
        errors ={}
        # destination error codes
        if len(postData['updated_destination']) == 0:
            errors['updated_destination'] = "This Field Cannot be left Empty"
        if len(postData['updated_destination']) < 2:
            errors['updated_destination'] = "Destination name cannot bee shorter than 2 characters"
        # plan error codes
        if len(postData['updated_plan']) == 0:
            errors['updated_plan'] = "This Field Cannot be left Empty"
        if len(postData['updated_plan']) < 2:
            errors['updated_plan'] = "Plan cannot bee shorter than 2 characters"
        # start and end date error codes
        if not postData['updated_start_date']:
            errors['updated_start_date'] = "Please insert a Start Date"
        if not postData['updated_end_date']:
            errors['updated_end_date'] = "Please insert a end date"
        return errors

# Create your models here.
class Trip(models.Model):
    destination = models.CharField(max_length=255)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    plan = models.TextField()
    trip_member = models.ForeignKey(User, related_name="trips", on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = TripsManager()