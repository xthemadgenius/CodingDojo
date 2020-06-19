from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from loginApp.models import User
from datetime import datetime

# Create your views here.

def index(request):
    if 'user_id' not in request.session:
        return redirect('/')
    return render(request, 'home.html')

def edit(request):
    if 'user_id' not in request.session:
        return redirect('/')
    return render(request, 'edit.html')

def add(request):
    if 'user_id' not in request.session:
        return redirect('/')
    return render(request, 'add.html')

def trips(request):
    if 'user_id' not in request.session:
        return redirect('/')
    return render(request, 'trips.html')


def logout(request):
    request.session.flush()
    return redirect('/')