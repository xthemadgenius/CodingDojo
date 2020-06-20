from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import Book, Author, Reviews
from login.models import User

# Create your views here.
def index(request):
    if 'user_id' not in request.session:
        return redirect('/')
    else:
        user = User.objects.get(id=request.session['user_id'])
        context = {
            'user': user,
            'review': Reviews.objects.all().order_by('-book_id')[:3],
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
    errors = Book.objects.book_validator(request.POST)
    if len(errors) > 0:
        for error in errors.values():
            messages.error(request, error)
        return redirect('/books/add')
    if len(request.POST['add_author']) == 0:
        author = Author.objects.get(id=request.POST['author'])
    else:
        author = Author.objects.create(name=request.POST['add_author'])
    book = Book.objects.create(
        title = request.POST['title'],
        author = author,
    )
    user = User.objects.get(id=request.session['user_id'])
    Reviews.objects.create(
        review = request.POST['review'],
        rating = request.POST['rating'],
        book = book,
        user = user,
    )
    return redirect('/books')

def rating(request):
    if 'user_id' not in request.session:
        return redirect('/')
    return render(request, 'ratings.html')

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
