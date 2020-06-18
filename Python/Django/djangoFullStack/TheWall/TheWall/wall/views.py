from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Messages, Comments
from login.models import User
from datetime import datetime

# Create your views here.
def wall(request):
    if 'user_id' not in request.session:
        return redirect('/')
    elif 'user_id' in request.session:
        context = {
            'username': User.objects.get(id = request.session['user_id']),
            'all_messages':reversed(Messages.objects.all()),
            'user_id': request.session['user_id'],
        }
        return render(request, 'comments.html',context)

def messagePost(request):
    Messages.objects.create(
        message = request.POST['message'],
        user = User.objects.get(id=request.session['user_id']),
    )
    return redirect('/wall')

def comment_post(request, messageId):
    Comments.objects.create(
        message = Messages.objects.get(id=messageId),
        user = User.objects.get(id=request.session['user_id']),
        comment = request.POST['comment'],
    )
    return redirect('/wall')

def delete_post(request, messageId):
    errors = Messages.objects.message_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.errors(request, value, extra_tags=key)
        return redirect('/wall')
    else:
        Messages.objects.get(id=messageId).delete()
        return redirect('/')

def logout(request):
    request.session.flush()
    return redirect('/')