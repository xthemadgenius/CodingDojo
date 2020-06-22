from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('add', views.add),
    path('create', views.create),
    path('<int:bookId>', views.rating),
    path('<int:bookId>/addReview', views.postRating),
    path('<int:bookId>/deleteReview/<int:reviewId>', views.delete),
    path('logout', views.logout),
]