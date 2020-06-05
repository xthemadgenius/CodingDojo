from django.shortcuts import render, HttpResponse

def index(request):
    return HttpResponse("this is the equivalent of @app.route('/')!")

def timeDisplay(request):
    print("\nits time to tell time\n")
    return render(request, 'time_display.html')