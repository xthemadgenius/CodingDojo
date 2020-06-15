from django.shortcuts import render, HttpResponse
from django.contrib import messages
from .models import Show

def index(request):
    context = {
        "all_shows": Show.objects.all()
    }
    return render(request, "all.html", context)

def about(request):
    return render(request, "about.html")

def create(request):
    return render(request, "create.html")

def edit(request):
    return render(request, "edit.html")