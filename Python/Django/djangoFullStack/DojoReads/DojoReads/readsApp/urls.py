from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('add', views.add),
    path('create', views.create),
    path('ratings', views.rating),
    path('logout', views.logout),
]