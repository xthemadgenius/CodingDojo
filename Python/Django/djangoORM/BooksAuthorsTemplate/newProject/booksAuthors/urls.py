from django.urls import path     
from . import views

urlpatterns = [	
    path('', views.createBooks), 
    path('authors', views.createAuthors),
]