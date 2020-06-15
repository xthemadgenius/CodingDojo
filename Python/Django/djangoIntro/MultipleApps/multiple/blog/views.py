from django.shortcuts import render, HttpResponse, redirect, HttpResponseRedirect

def index(request):
    response = "Shows a list of all the blogs"
    return HttpResponse(response)

def showBlogs(request):
    response = "Lets see the Blog"
    return HttpResponse(response)

def new(request):
    response = "Shows a new Blog Form"
    return HttpResponse(response)

def create(request):
    return HttpResponseRedirect('/blog')

def show(request, number):
    response = "show blog"
    return HttpResponse(response + number)

def edit(request, number):
    response = "edit blog"
    return HttpResponse(response + number)

def destroy(request, number):
    response = "destroy blog"
    return HttpResponse(response + number)
