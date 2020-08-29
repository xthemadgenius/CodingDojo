from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User, Book
import bcrypt

# Create your views here.
def index(request):
    return render(request, 'login_reg.html')

def register(request):
    errors = User.objects.registration_validator(request.POST)
    if len(errors) > 0:
        for msg in errors.values():
            messages.error(request, msg)
        return redirect('/')
    hash1 = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
    this_user = User.objects.create(
        first_name=request.POST['first_name'],
        last_name=request.POST['last_name'],
        email=request.POST['email'],
        password=hash1,
    )
    request.session['user_id'] = this_user.id
    return redirect('/books')

def login(request):
    users = User.objects.filter(email=request.POST['email'])
    if users:
        print('got users list')
        print(users)
        login_user = users[0]
        if bcrypt.checkpw(request.POST['password'].encode(), login_user.password.encode()):
            print('checked users passwords')
            print(request.POST['password'], login_user.password)
            request.session['user_id'] = login_user.id
            return redirect("/books")
    messages.error(request, "Invalid email or password, please try again")
    return redirect('/')

def books(request):
    user = User.objects.get(id=request.session['user_id'])
    context = {
        'user': user,
        'all_books': Book.objects.all()
    }
    return render(request, 'books.html', context)

def create_book(request):
    errors = Book.objects.new_book(request.POST)
    if len(errors) > 0:
        for msg in errors.values():
            messages.error(request, msg)
        return redirect('/books')
    this_user = User.objects.get(id=request.session['user_id'])
    new_book = Book.objects.create(
        title=request.POST['title'],
        description=request.POST['description'],
        poster=this_user
        )
    new_book.liked_by.add(this_user)
    return redirect('/books')

def book_details(request, book_id):
    context = {
        'this_book': Book.objects.get(id=book_id),
        'user': User.objects.get(id=request.session['user_id'])
    }
    return render(request, "book_details.html", context)

def like_book(request, user_id, book_id):
    this_book = Book.objects.get(id=book_id)
    this_user = User.objects.get(id=user_id)
    this_book.liked_by.add(this_user)
    return redirect(f'/book/{book_id}')

def unlike_book(request, user_id, book_id):
    this_book = Book.objects.get(id=book_id)
    this_user = User.objects.get(id=user_id)
    this_book.liked_by.remove(this_user)
    return redirect(f'/book/{book_id}')

def edit_book(request, book_id):
    this_book = Book.objects.get(id=book_id)
    this_book.title = request.POST['title']
    this_book.description = request.POST['description']
    this_book.save()
    return redirect(f'/book/{book_id}')

def delete_book(request, book_id):
    this_book = Book.objects.get(id=book_id)
    this_book.delete()
    return redirect('/books')

def add_book(request):
    return render(request, 'add_book.html')

def logout(request):
    request.session.flush()
    return redirect('/')