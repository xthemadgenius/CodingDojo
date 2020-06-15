from django.urls import path     
from . import views
urlpatterns = [
    path('', views.index),
    path('new', views.new),
    path('new/create',views.create),
    path('<int:id>', views.about),
    path('edit', views.edit),
    path('destroy/<int:id>', views.destroy),	   
]