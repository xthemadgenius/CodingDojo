from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return render(request, "survey.html")

def create_user(request):
    print("Got Post Info", "."*80)
    user_name = request.POST['name']
    user_location = request.POST['location']
    fav_lang = request.POST['language']
    user_com = request.POST['comment']
    context={
        "name_user": user_name,
        "location_user": user_location,
        "lang_user": fav_lang,
        "com_user": user_com
    }
    return render(request,"result.html", context)