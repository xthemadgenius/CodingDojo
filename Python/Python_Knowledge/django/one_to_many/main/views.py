from django.shortcuts import render, HttpResponse, redirect
from .models import Chef, Dish, Utensil

# Create your views here.
def index(request):
    context = {
        'all_chefs': Chef.objects.all(),
        'all_dishes': Dish.objects.all(),
        'all_utensils': Utensil.objects.all()
    }
    return render(request, "index.html", context)

def process_chef(request):
    Chef.objects.create(
        name=request.POST["name"],
        cuisine=request.POST['cuisine'],
        rank=request.POST['rank']
    )
    return redirect('/')

def process_dish(request):
    this_chef = Chef.objects.get(id=request.POST["maker"])
    Dish.objects.create(
        name=request.POST["name"],
        tastiness_level=request.POST['tastiness-level'],
        spice=request.POST['spice'],
        maker=this_chef
    )
    return redirect('/')

def process_utensil(request):
    Utensil.objects.create(
        name=request.POST["name"],
        is_sharp=request.POST["is_sharp"]
    )
    return redirect('/')

def one_utensil(request, utensil_id):
    one_utensil = Utensil.objects.get(id=utensil_id)
    context = {
        'one_utensil': one_utensil,
        'all_chefs': Chef.objects.all()
    }
    print(context['all_chefs'])
    return render(request, "one_utensil.html", context)

def add_user_to_utensil(request):
    one_utensil = Utensil.objects.get(id=request.POST["utensil_id"])
    one_chef = Chef.objects.get(id=request.POST["chef_id"])
    one_utensil.users.add(one_chef)
    return redirect(f'/utensil/{one_utensil.id}')

def remove_chef_from_utensil(request, utensil_id, chef_id):
    uty_ut = Utensil.objects.get(id=utensil_id)
    chefy_chef = Chef.objects.get(id=chef_id)
    uty_ut.users.remove(chefy_chef)
    return redirect(f'/utensil/{utensil_id}')
