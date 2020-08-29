from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Hero, Villain

# Create your views here.

def index(request):
    context = {
        'all_heroes': Hero.objects.all()
    }
    return render(request, "hero.html", context)

def process_hero(request):
    errors = Hero.objects.hero_validator(request.POST)
    if len(errors) > 0:
        for key, error in errors.items():
            messages.error(request, error)
        return redirect('/')
    Hero.objects.create(
        alias=request.POST["alias"],
        power=request.POST["power"],
        alignment=request.POST["alignment"],
        email=request.POST["email"],
    )
    return redirect('/')
