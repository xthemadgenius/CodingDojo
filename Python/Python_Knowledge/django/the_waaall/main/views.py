from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User, Message, Comment
import bcrypt

# Create your views here.
def index(request):
    return render(request, "index.html")

def register(request):
    errors = User.objects.register_validator(request.POST)
    if len(errors) > 0:
        for error in errors.values():
            messages.error(request, error)
        return redirect('/')
    hashed = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
    print(request.POST['password'])
    print(hashed)
    this_user = User.objects.create(
        first_name=request.POST['first_name'],
        last_name=request.POST['last_name'],
        email=request.POST['email'],
        password=hashed
    )
    request.session['user_id'] = this_user.id
    return redirect('/messages')

def login(request):
    users = User.objects.filter(email=request.POST['email'])
    if users:
        logging_in_user = users[0]
        if bcrypt.checkpw(request.POST['password'].encode(), logging_in_user.password.encode()):
            request.session['user_id'] = logging_in_user.id
            return redirect('/')
    messages.error(request, "Email/password not found")
    return redirect('/')

def all_messages(request):
    if 'user_id' not in request.session:
        return redirect('/')
    print(User.objects.get(id=request.session['user_id']).first_name)
    context = {
        'user': User.objects.get(id=request.session['user_id']),
        'all_messages': Message.objects.all()
    }
    return render(request, "messages.html", context)

def process_message(request):
    errors = Message.objects.message_validator(request.POST)
    if len(errors) > 0:
        for error in errors.values():
            messages.error(request, error)
        return redirect('/messages')
    Message.objects.create(
        content=request.POST['message_content'],
        poster=User.objects.get(id=request.session['user_id'])
    )
    return redirect('/messages')

def all_comments(request):
    context = {
        'user': User.objects.get(id=request.session['user_id']),
        'all_messages': Message.objects.all()
    }
    return render(request, "comments.html", context)

def process_comment(request):
    errors = Comment.objects.comment_validator(request.POST)
    if len(errors) > 0:
        for error in errors.values():
            messages.error(request, error)
        return redirect('/comments')
    Comment.objects.create(
        content = request.POST['comment_content'],
        commented_on=Message.objects.get(id=request.POST['message_id']),
        writer=User.objects.get(id=request.session['user_id'])
    )
    return redirect('/comments')

def logout(request):
    request.session.flush()
    return redirect('/')