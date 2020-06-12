from django.urls import path     
from . import views

urlpatterns = [	
    path('', views.createBooks), 
    path('authors', views.createAuthors),
    path('process_book', views.processBook),
    path('process_author', views.processAuthor),
    path('books/<int:book_id>', views.displayBook),
    path('authors/<int:author_id>', views.displayAuthor),
    path('books/<int:book_id>/add_author', views.addAuthor),
    path('authors/<int:author_id>/add_book', views.addBook),
]