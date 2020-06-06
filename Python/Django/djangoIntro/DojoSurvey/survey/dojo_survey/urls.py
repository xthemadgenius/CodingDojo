from django.urls import path  

from . import views
urlpatterns = [
    path('', views.index),
    path('process',views.create_user),
    path('/home', views.home),   
]

# urlpatterns = [
#     path('', views.index),
#     path('process',views.process),
#     path('success', views.success),	   
# ]

