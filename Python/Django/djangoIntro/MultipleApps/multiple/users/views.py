from django.shortcuts import render, HttpResponse, redirect

def register(request):
    response = "register a brand new user"
    return HttpResponse(response)

def login(request):
    response = "used for user login"
    return HttpResponse(response)

def new(request):
    response = register(request)
    return HttpResponse(response)

def users(request):
    response = "display a list of users"
    return HttpResponse(response)