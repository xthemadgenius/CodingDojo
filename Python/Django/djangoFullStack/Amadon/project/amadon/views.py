from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return render(request, "shop.html")

def checkout(request):
    return render(request, "checkout.html")
