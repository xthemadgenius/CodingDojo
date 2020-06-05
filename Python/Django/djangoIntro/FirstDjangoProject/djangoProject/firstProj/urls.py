from django.urls import path     
from . import views

urlpatterns = [
    path('', views.index),
    path('new', views.new),
    path('new/<int:ranNumbers>', views.randomNum),
    path('new/<int:newNumbers>/delete', views.deleteNum),
    path('create', views.change_ways),  
]