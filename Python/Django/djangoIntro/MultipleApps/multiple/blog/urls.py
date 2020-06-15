from django.urls import path     
from . import views

urlpatterns = [
    path('', views.index),
    path('blog', views.showBlogs),
    path('blog/new', views.new),
    path('blog/create', views.create),
    path('blog/<number>', views.show),
    path('blog/<number>/edit', views.edit),
    path('blog/<number>/delete', views.destroy),	   
]