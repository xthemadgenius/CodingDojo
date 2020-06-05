from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return HttpResponse("my words")

