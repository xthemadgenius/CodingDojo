from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, 'books.html')

def create(request):
    return render(request, 'create.html')

def rating(request):
    return render(request, 'ratings.html')

def logout(request):
    request.session.flush()
    return redirect('/')
