from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('login', views.login),
    path('messages', views.all_messages),
    path('process_message', views.process_message),
    path('comments', views.all_comments),
    path('process_comment', views.process_comment),
    path('logout', views.logout),
]
