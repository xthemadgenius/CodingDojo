from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('edit', views.edit),
    path('add', views.add),
    path('trips', views.trips),
    path('logout', views.logout),
]