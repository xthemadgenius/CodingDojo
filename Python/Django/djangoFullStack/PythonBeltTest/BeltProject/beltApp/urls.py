from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('edit/<int:tripId>', views.edit),
    path('update/<int:tripId>', views.update),
    path('add', views.add),
    path('addtrip', views.addTrip),
    path('delete/<int:tripId>', views.delete),
    path('trips/<int:tripId>', views.showTrip),
    path('logout', views.logout),
]