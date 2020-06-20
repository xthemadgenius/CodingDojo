from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import User
from readsApp.models import Author, Book, Review
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

def user(request, user_id):
    get_review = Book.objects.filter(review__user__id=user_id)
    context = {
        'user': User.objects.filter(id=user_id)[0],
        'reviewed_books':get_review,
    }
    return render(request, 'user.html', context)

def logout(request):
    request.session.flush()
    return redirect('/')