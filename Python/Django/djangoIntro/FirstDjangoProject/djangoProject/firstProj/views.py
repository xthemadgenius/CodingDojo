from django.shortcuts import render, HttpResponse

def index(request):
    return HttpResponse("placeholder to later display a list of all blogs")

def new(request):
    word = "new page,\n new me,\n whats up bro"
    print(word)
    return HttpResponse(word)

def randomNum(request, ranNumbers):
    return HttpResponse(f'I have {ranNumbers} in my list!')

def changeWays(request):
    print('Im starting an new page!')
    return redirect('/')