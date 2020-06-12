from django.urls import path     
from . import views

urlpatterns = [	
    path('', views.createBooks), 
    path('authors', views.createAuthors),
    path('process_book', views.process_book),
    path('process_author', views.process_author),
    path('books/<int:book_id>', views.display_book),
    path('authors/<int:author_id>', views.display_author),
    path('books/<int:book_id>/add_author', views.add_author),
    path('authors/<int:author_id>/add_book', views.add_book),
]