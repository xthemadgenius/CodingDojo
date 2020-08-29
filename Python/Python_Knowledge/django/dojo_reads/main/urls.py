from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('books', views.books),
    path('logout', views.logout),
    path('login', views.login),
    path('create_book', views.create_book),
    path('book/<int:book_id>', views.book_details),
    path('like/<int:user_id>/<int:book_id>', views.like_book),
    path('unlike/<int:user_id>/<int:book_id>', views.unlike_book),
    path('edit/<int:book_id>', views.edit_book),
    path('delete/<int:book_id>', views.delete_book),
    path('add_book', views.add_book),
]