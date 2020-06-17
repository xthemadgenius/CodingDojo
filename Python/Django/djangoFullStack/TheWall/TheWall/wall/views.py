from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def wall(request):
    return render(request, 'comments.html')