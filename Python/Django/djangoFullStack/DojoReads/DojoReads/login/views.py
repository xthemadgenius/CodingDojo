from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, 'login.html')

def user(request):
    return render(request, 'user.html')

def logout(request):
    request.session.flush()
    return redirect('/')