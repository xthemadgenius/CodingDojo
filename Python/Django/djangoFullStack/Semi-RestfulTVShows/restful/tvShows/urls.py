from django.urls import path     
from . import views
urlpatterns = [
    path('', views.index),
    path('create', views.create),
    path('about', views.about),
    path('edit', views.edit),	   
]