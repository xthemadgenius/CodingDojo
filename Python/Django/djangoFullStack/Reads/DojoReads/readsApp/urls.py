from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('login', views.login),
    path('users', views.user),
    path('logout', views.logout),
    path('books', views.books),
    path('add', views.add),
    path('reviews', views.reviews),
    path('logout', views.logout),
]