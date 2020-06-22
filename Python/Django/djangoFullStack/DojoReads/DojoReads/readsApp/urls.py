from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('add', views.add),
    path('create', views.create),
    path('<int:bookId>', views.rating),
    path('<int:bookId>/addReview', views.postRating),
    path('logout', views.logout),
]