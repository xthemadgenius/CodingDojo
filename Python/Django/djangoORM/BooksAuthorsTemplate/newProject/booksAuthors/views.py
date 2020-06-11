from django.shortcuts import render, HttpResponse, redirect
from .models import Book, Author

def index(request):
    return HttpResponse("New Page")

def createBooks(request):
    context = {
        'all_books': Book.objects.all()
    }
    return render(request, 'books.html', context)

def createAuthors(request):
    context = {
        'all_authors': Author.objects.all()
    }
    return render(request, 'authors.html', context)