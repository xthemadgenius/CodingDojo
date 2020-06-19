from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import Book, Author, Reviews
from login.models import User

# Create your views here.
def index(request):
    if 'user_id' not in request.session:
        return redirect('/')
    else:
        user = User.objects.filter(id=request.session['user_id'])[0]
        context = {
            'user': user,
            'all_book_reviews': Book.objects.filter(reviews__isnull=False).distinct(),
            'recent_book_reviews': Reviews.objects.filter(user_reviewed=user).order_by('-created_at').distinct()[:3],
            'all_books': Book.objects.all(),
        }
        return render(request, 'books.html', context)

def add(request):
    if 'user_id' not in request.session:
        return redirect('/')
    else:
        context = {
            'all_authors': Author.objects.all().distinct()
        }
        return render(request, 'create.html', context)

def create(request):
    if 'user_id' not in request.session:
        return redirect('/')

    if request.method == "GET":
        return redirect('/books')
    book = Book.objects.filter(title = request.POST['book_title'])
    errors = Book.objects.book_validator(request.POST)
    # still needs more code

    
    return redirect(f'/books')

def rating(request, book_id):
    if 'user_id' not in request.session:
        return redirect('/')
    selected_book = Book.objects.filter(id=book_id)[0]
    context = {
        'book': selected_book,
        'all_reviews': Reviews.objects.filter(book_reviewed=selected_book).all(),
    }
    return render(request, 'ratings.html', context)

def createReview(request, bookId):
    if 'user_id' not in request.session:
        return redirect('/')
    # if request.method == "GET":
    #     return redirect('/books')
    errors = Book.objects.review_validator(request.POST)
    if len(errors) > 0:
        for key,value in errors.items():
            messages.error(request, value, extra_tags=key)
        return redirect(f'/books/{bookId}')
    Reviews.objects.create(
        desc = request.POST['review_desc'],
        rating = request.POST['book_rating'],
        user_reviewed = User.objects.filter(id = request.session['user_id'])[0],
        book_reviewed = Book.objects.filter(id = bookId)[0]
    )
    return redirect(f'books/{bookId}')

def delete(request, bookId, reviewId):
    if 'user_id' not in request.session:
        return redirect('/')
    review = Reviews.object.filter(id=reviewId)[0]
    if review.user_reviewed.id != request.session['user.id']:
        return redirect(f'/books/{bookId}')

def logout(request):
    request.session.flush()
    return redirect('/')
