from django.shortcuts import render, HttpResponse, redirect
from .models import Dojo, Ninja

def index(request):
    context = {
        "all_dojos": Dojo.objects.all(),
        "all_ninjas": Ninja.objects.all(),
    }
    return render(request,'index.html', context)

def process_dojo(request):
    Dojo.objects.create(
        name=request.POST['name'],
        city =request.POST['city'],
        state=request.POST['state'],
    )
    return redirect('/')

def process_ninja(request):
    this_dojo = Dojo.objects.get(id=request.POST["dojo"])
    Ninja.objects.create(
        first_name=request.POST['first_name'],
        last_name =request.POST['last_name'],
        school=this_dojo
    )
    return redirect('/')