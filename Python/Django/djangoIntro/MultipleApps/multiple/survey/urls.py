from django.urls import path     
from . import views

urlpatterns = [
    path('survey', views.index),
    path('survey/new', views.new),	   
]