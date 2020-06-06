from django.shortcuts import render, HttpResponse
from django.utils.crypto import get_random_string

def index(request):
    return render(request, 'random_word.html')
