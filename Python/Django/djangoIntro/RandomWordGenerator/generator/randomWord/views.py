from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

def index(request):
    # word = get_random_string(length=14)
    # data = {
    #     'random_word': word,
    # }
    return render(request, 'random_word.html')

def random(request):
    request.session['random_count'] += 1
    return redirect('')

def reset(request):
    request.session.clear()
    return redirect('')