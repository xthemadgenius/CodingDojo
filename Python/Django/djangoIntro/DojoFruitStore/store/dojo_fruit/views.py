from __future__ import unicode_literals
from datetime import datetime
from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return render(request, 'store.html')

def order_made(request):
    print("Got POST Info", "*"*80)
    now = datetime.today()
    strawberry = request.POST['strawberry']
    raspberry = request.POST['raspberry']
    apple = request.POST['apple']
    name = request.POST['name']
    identification = request.POST['identification']
    context={
        "strawberry": strawberry,
        "raspberry": raspberry,
        "apple": apple,
        "name": name,
        "identification": identification,
        "date": now.strftime('%b %d, %Y'),
        "time": now.strftime('%I:%M %p'),
        "addUp": int(apple) + int(raspberry) + int(strawberry),
    }
    return render(request, "checkout.html", context)