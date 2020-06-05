from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return HttpResponse("placeholder to later display a list of all blogs")

def new(request):
    word = "new page,\n new me,\n whats up bro"
    print(word)
    return HttpResponse(word)

def randomNum(request, ranNumbers):
    return HttpResponse(f'placeholder to edit blog {ranNumbers}')

def change_ways(request):
    print('Im starting an new page!')
    return redirect('/new')

def deleteNum(request, newNumbers):
    return redirect(f'/{newNumbers}/destroy')