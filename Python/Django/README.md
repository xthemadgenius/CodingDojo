Notes

Framework is a big box, a big pile of files premade for you
    Django is a full MTV style framework: specifically designed to work on Python
        Models Templates Views
            Templates - What our users see
                HTML
            Views - What our server is doing
                Logic
            Models
            Link to Database

(In Django dir)(check if Django is installed= pip list) 
    1. pip install django==2.2
    2. django-admin startproject (enter desired name here)
    3. cd (project name)
    4. python manage.py runserver
    5. (stop server)
    6. python manage.py startapp (enter desired app name) ----never name your app and   project the same thing----
    7. go to settings.py in code editor
        a. find INSTALLED APPS
        b. add in ‘(app name)’,

    8. go to urls.py in code editor
        a. from django.urls import path, (add) include
        b. under urlpatters
            i. add: path( ‘ ‘ ), include(‘(app name).urls’)) 

    9. add a new file under in the apps folder named urls.py
    10. copy code from urls.py from project level directory and paste it in urls.py in app level directory
        a. get rid of admin, and we don’t need include
        b. don’t need admin function under urls patterns or include

    11. in views.py via code editor
        a. add (after import render), HttpResponse
        b. add def index(request):
            i. Return HttpResponse(“woo! We made a new route!!’)
            
    12. go to urls.py (in app level directory)
        a. add from . import views (under from django.urls)
        b. add , views.index (after path( ‘ ‘ )


