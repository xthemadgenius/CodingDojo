from django.shortcuts import render, HttpResponse, redirect
from .models import User

# Create your views here.
def index(request):
    context = {
        'all_users' : User.objects.all(),
    }
    return render(request, "index.html", context)

def new_user(request):
    return render(request, 'new_user.html')

def process(request):
    print(request.POST)
    User.objects.create(
        name=request.POST['name'], 
        email=request.POST['email'],
        password=request.POST['password'],
        dog_name=request.POST["dog_name"],
        is_cool=request.POST['is_cool'],
        num_of_cars=request.POST['num_of_cars']
    )
    return redirect('/')

def dummy_user(request):
    User.objects.create(
        name="Jayne Doe", 
        email="masterof@shows.net",
        password="password87",
        dog_name="Scorn",
        is_cool=True,
        num_of_cars=1
    )
    return redirect('/')