from django.urls import path
from . import views

urlpatterns = [
    path('', views.wall),
    path('postMessage', views.messagePost),
    path('logout', views.logout),
]