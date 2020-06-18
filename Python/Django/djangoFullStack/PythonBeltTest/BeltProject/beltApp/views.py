from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from loginApp.models import User
from datetime import datetime

# Create your views here.

def index(request):
    return render(request, 'home.html')

def logout(request):
    request.session.flush()
    return redirect('/')