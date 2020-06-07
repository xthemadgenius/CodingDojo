from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return HttpResponse("this is the equivalent of @app.route('/')!")