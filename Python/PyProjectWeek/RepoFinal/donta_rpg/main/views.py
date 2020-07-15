from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib import messages
from .models import User, Character, Item, Obstacle
from datetime import datetime
import bcrypt

def index(request):
    return render(request, 'login.html')

def register(request):
    errors = User.objects.register_validator(request.POST)
    hashed = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
    if len(errors) > 0:
        for error in errors.values():
            messages.error(request, error)
        return redirect('/')
    this_user = User.objects.create(
        first_name=request.POST['first_name'],
        last_name=request.POST['last_name'],
        email=request.POST['email'],
        password=hashed,
        confirm_password=hashed,
        score=0
    )
    request.session['user_id'] = this_user.id
    return redirect('/dashboard')

def login(request):
    users = User.objects.filter(email=request.POST['email'])
    if users:
        log_in_user = users[0]
        if  bcrypt.checkpw(request.POST['password'].encode(), log_in_user.password.encode()):
            request.session['user_id'] = log_in_user.id
            return redirect('/dashboard')
    messages.error(request, "Email and/or Password not found")
    return redirect('/')
    
def dashboard(request):
    if 'user_id' not in request.session:
        return redirect('/')
    context = {
        "user": User.objects.get(id=request.session['user_id']),
        "all_characters": Character.objects.all(),
        "all_items": Item.objects.all(),
    }
    return render(request, 'dashboard.html', context)

def chosen(request):
    if 'user_id' not in request.session:
        return redirect('/')
    context = {
        "user": User.objects.get(id=request.session['user_id']),
    }
    return render(request, 'admin.html', context)

def chosen_create_character(request):
    user = User.objects.get(id=request.session['user_id'])
    Character.objects.create(
        name=request.POST['name'],
        attack=request.POST['attack'],
        health=request.POST['health'],
        ability=request.POST['ability'],
        link=request.POST['link'],
        user=user,
    )
    return redirect('/dashboard')

def chosen_create_item(request):
    character = Character.objects.get(id=request.session['user_id'])
    this_item = Item.objects.create(
        item_name=request.POST['item_name'],
        attack=request.POST['attack'],
        health=request.POST['health'],
        special_ability=request.POST['special_ability'],
        link=request.POST['link'],
        character=character,
    )
    request.session['item_id'] = this_item.id
    return redirect('/dashboard')

def chosen_create_obstacle(request):
    item = Item.objects.get(id=request.session['item_id'])
    Obstacle.objects.create(
        obstacle_name=request.POST['obstacle_name'],
        health=request.POST['health'],
        link=request.POST['link'],
        item=item,
    )
    return redirect('/dashboard')

def chosen_create_enemy(request):
    Enemy.objects.create(
        enemy_name=request.POST['enemy_name'],
        name=request.POST['name'],
        attack=request.POST['attack'],
        health=request.POST['health'],
        ability=request.POST['ability'],
        link=request.POST['link'],
    )
    return redirect('/dashboard')

def select(request):
    if 'user_id' not in request.session:
        return redirect('/')
    context = {
        "user": User.objects.get(id=request.session['user_id']),
    }
    return render(request, "select.html", context)

def edit(request):
    if 'user_id' not in request.session:
        return redirect('/')
    context = {
        "user": User.objects.get(id=request.session['user_id']),
    }
    return render(request, 'edit.html', context)

def game(request):
    if not request.session['user_id']:
        return redirect('/')

    current_user = User.objects.get(id=request.session['user_id'])

    context = {
        'current_score': current_user.score
    }
    
    return render(request, 'game.html', context)

def submit_score(request):
    current_user = User.objects.get(id=request.session['user_id'])
    new_score = request.POST['score']
    current_user.score = new_score
    current_user.save()
    return JsonResponse({'code':200})

def boss(request):
    if 'user_id' not in request.session:
        return redirect('/')
    context = {
        "user": User.objects.get(id=request.session['user_id']),
    }
    return render(request, 'boss.html', context)

def main_game(request):
    if 'user_id' not in request.session:
        return redirect('/')
    return render(request, 'game2.html')
    
def character_select(request):
    if 'user_id' not in request.session:
        return redirect('/')
    context = {
        "all_characters": Character.objects.all(),
    }
    return render(request, 'character_select.html', context)

def shop(request):
    if 'user_id' not in request.session:
        return redirect('/')
    context = {
        "all_items": Item.objects.all()
    }
    return render(request, 'shop.html', context)

def viewPlayer(request):
    if 'user_id' not in request.session:
        return redirect('/')
    context = {
        "all_items": Item.objects.all()
    }
    return render(request, 'player_info.html', context)

def logout(request):
    request.session.clear()
    return redirect('/')
