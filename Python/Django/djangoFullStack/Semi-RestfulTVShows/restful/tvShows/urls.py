from django.urls import path     
from . import views
urlpatterns = [
    path('shows', views.index),
    path('shows/new', views.new),
    path('shows/new/create',views.create),
    path('shows/<int:id>', views.about),
    path('shows/<int:id>/edit', views.edit),
    path('shows/<int:id>/update', views.update),
    path('shows/<int:id>/destroy', views.destroy),
    path('', views.home),	   
]