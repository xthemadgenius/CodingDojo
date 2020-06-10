





from django.shortcuts import render, HttpResponse, redirect
from .models import User

def index(request):
    all_users = User.objects.all()
    context = {
        'all_users': all_users
    }
    return render(request, 'index.html', context)

def process(request):
    print(request.POST)
    User.objects.create(
        first_name=request.POST["first_name"],
        last_name=request.POST["last_name"],
        email=request.POST['email'],
        age=request.POST['age'],
    )
    return redirect('/')