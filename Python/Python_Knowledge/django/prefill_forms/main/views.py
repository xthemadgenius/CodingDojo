from django.shortcuts import render, redirect
from .models import User
from datetime import datetime

# Create your views here.
def index(request):
    first_user = User.objects.first()
    my_date = first_user.birthday
    form_date = my_date.strftime("%Y-%m-%d")
    context = {
        'first_user': first_user,
        'form_date': form_date
    }
    return render(request, 'index.html', context)

def process(request):
    print('in process!!')
    to_change = User.objects.get(id=request.POST['user_id'])
    to_change.first_name = request.POST['first_name']
    to_change.last_name = request.POST['last_name']
    to_change.email = request.POST['email']
    to_change.birthday = request.POST['birthday']
    to_change.save()
    return redirect(f'/user/{to_change.id}')

def user(request, user_id):
    context = {
        'this_user': User.objects.get(id=user_id)
    }
    return render(request, "user.html", context)