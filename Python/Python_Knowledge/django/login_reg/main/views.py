from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User
import bcrypt

# Create your views here.
def start(request):
    return redirect('/splash_page')

def index(request):
    return render(request, "index.html")

def register(request):
    errors = User.objects.register_validator(request.POST)
    if len(errors) > 0:
        for error in errors.values():
            messages.error(request, error)
        return redirect('/splash_page')
    hashed = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
    print(request.POST['password'])
    print(hashed)
    this_user = User.objects.create(
        first_name=request.POST['first_name'],
        last_name=request.POST['last_name'],
        email=request.POST['email'],
        password=hashed
    )
    request.session['user_id'] = this_user.id
    return redirect('/success')

def login(request):
    users = User.objects.filter(email=request.POST['email'])
    if users:
        logging_in_user = users[0]
        if bcrypt.checkpw(request.POST['password'].encode(), logging_in_user.password.encode()):
            request.session['user_id'] = logging_in_user.id
            return redirect('/success')
    messages.error(request, "Email/password not found")
    return redirect('/splash_page')

def success(request):
    context = {
        "user": User.objects.get(id=request.session['user_id']),
        'all_users': User.objects.all()
    }
    return render(request, "success.html", context)

def user_detail(request, user_id):
    user = User.objects.get(id=user_id)
    context = {
        'user': user
    }
    return render(request, "user_detail.html", context)

def logout(request):
    request.session.flush()
    return redirect('/splash_page')