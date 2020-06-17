from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Messages, Comments
from login.models import User
from datetime import datetime

# Create your views here.
def wall(request):
    return render(request, 'comments.html')

def logout(request):
    request.session.flush()
    return redirect('/')