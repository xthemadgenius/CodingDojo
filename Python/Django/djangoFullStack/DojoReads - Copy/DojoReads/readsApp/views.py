from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import Book, Author, Review
from loginApp.models import User

# Create your views here.
def index(request):
    if 'user_id' not in request.session:
        return redirect('/')
    else:
        user = User.objects.get(id=request.session['user_id'])
        context = {
            'user': user,
            'review': reversed(Review.objects.all()),
            'all_books': Book.objects.all(),
        }
        return render(request, 'books.html', context)

def add(request):
    if 'user_id' not in request.session:
        return redirect('/')
    else:
        context = {
            'all_authors': Author.objects.all()
        }
        return render(request, 'create.html', context)

def create(request):
    if 'user_id' not in request.session:
        return redirect('/')
    return redirect('/books')

def rating(request):
    if 'user_id' not in request.session:
        return redirect('/')
    return render(request, 'ratings.html')

def delete(request, bookId, reviewId):
    if 'user_id' not in request.session:
        return redirect('/')
    review = Review.object.filter(id=reviewId)[0]
    if review.user_reviewed.id != request.session['user.id']:
        return redirect(f'/books/{bookId}')

def logout(request):
    request.session.flush()
    return redirect('/')
