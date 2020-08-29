from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    request.session['user_id'] = 1
    return HttpResponse('woo')
