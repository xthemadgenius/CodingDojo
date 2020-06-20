from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import User, Author, Book, Review
import bcrypt

# Create your views here.
def index(request):
    return render(request, 'login.html')

def register(request):
    errors = User.objects.register_validator(request.POST)
    if len(errors) > 0:
        for error in errors.values():
            messages.error(request, error)
        return redirect('/')
    else:
        password = request.POST['password']
        pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
        confirmPassword = request.POST['confirm_password']
        confirm_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
        print(password)
        print(pw_hash)
        print(confirmPassword)
        print(confirm_hash)
        this_user = User.objects.create(
            name = request.POST['name'],
            username = request.POST['username'],
            email = request.POST['email'],
            password = pw_hash,
            confirm_password = confirm_hash,
        )
        request.session['user_id'] = this_user.id
        return redirect('/books')

def login(request):
    users = User.objects.filter(email=request.POST['email'])
    if users:
        logging_user = users[0]
        if bcrypt.checkpw(request.POST['password'].encode(), logging_user.password.encode()):
            request.session['user_id'] = logging_user.id
            return redirect('/books')
    messages.error(request, "Email/password not found")
    return redirect('/')

def logout(request):
    request.session.flush()
    return redirect('/')

# login End

def success(request):
    print('in success')
    if not "id" in request.session:
        return redirect('/')
    else:
        print(request.session["id"])
        context={
            'user': User.objects.get(id=request.session["id"]),
            'reviews' : Review.objects.all().order_by('-id')[:5],
            'books' : Book.objects.all()
        }
        return render(request,'books.html',context)

def add(request):
    if 'user_id' not in request.session:
        return redirect('/')
    else:
        context = {
            'authors' : Author.objects.all()
        }
        return render(request, 'create.html', context)

def bookReview(request):
    user = User.objects.get(id = request.session["id"])
    if (len(request.POST["new_author"])>1):
        author = Author.objects.create(name=request.POST["new_author"])
    else:
        author = Author.objects.get(id = request.POST["authors_dropdown"])
    book = Book.objects.create(title=request.POST["title"], author = author)
    book_id = Book.objects.last().id
    review = Review.objects.create(review=request.POST["review"],rating=request.POST["rating"],book = book, user = user)
    book.reviews.add(review)
    user.reviewcount = 1 
    user.save()
    return redirect(f'/books/{book_id}')


def books(request, book_id):
    if 'user_id' not in request.session:
        return redirect('/')
    else:
        user = User.objects.get(id=request.session['user_id'])
        context = {
            'user': user,
            'book': Book.objects.get(id = book_id),
            'reviews': reversed(Book.objects.get(id=book_id).reviews.all())
        }
        return render(request, 'reviews.html', context)

def reviews(request, book_id):
    if 'user_id' not in request.session:
        return redirect('/')
    user = User.objects.get(id = request.session["id"])
    book = Book.objects.get(id=book_id)
    review = Review.objects.create(review=request.POST["review"],rating=request.POST["rating"],book = book, user = user)
    book.reviews.add(review)
    user.reviewcount += 1 
    user.save()
    return redirect('/books/'+str(book_id))

def user(request, user_id):
    if 'user_id' not in request.session:
        return redirect('/')
    user = User.objects.get(id=request.session['user_id'])
    context = {
        'user': user,
        'reviews':User.objects.get(id=user_id).reviews.all()
    }
    return render(request, 'user.html', context)