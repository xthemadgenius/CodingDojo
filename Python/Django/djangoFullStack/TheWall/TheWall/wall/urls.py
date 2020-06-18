from django.urls import path
from . import views

urlpatterns = [
    path('', views.wall),
    path('postMessage', views.postMessage),
    path('postComment/<int:messageId>', views.postComment),
    path('deleteMessage/<int:messageId>', views.deletePost),
    path('logout', views.logout),
]