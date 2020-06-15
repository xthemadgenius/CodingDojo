from django.shortcuts import render, HttpResponse, redirect

def index(request):
    response = "displays new survey created"
    return HttpResponse(response)

def new(request):
    response = "shows another path for the surveys"
    return HttpResponse(response)