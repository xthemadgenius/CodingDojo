Notes

Create Project
    django-admin startproject your_project_name_here

        #Navigate into the folder that was just created. A new Django project has just been created--let's run it!

        django_intro> cd your_project_name_here
        your_project_name_here> python manage.py runserver

        Create an app in the project
        your_project_name_here> python manage.py startapp your_app_name_here

        Adjust these pages
        your_project_name_here/your_project_name_here/settings.py
        
            INSTALLED_APPS = [
                'your_app_name_here', # added this line. Don't forget the comma!!
                'django.contrib.admin',
                'django.contrib.auth',
                'django.contrib.contenttypes',
                'django.contrib.sessions',
                'django.contrib.messages',
                'django.contrib.staticfiles',
            ]    # the trailing comma after the last item in a list, tuple, or dictionary is commonly accepted in Python

        your_project_name_here/your_project_name_here/urls.py
            from django.urls import path, include           # import include

            # from django.contrib import admin              # comment out, or just delete
            urlpatterns = [
                path('', include('your_app_name_here.urls')),	   
                # path('admin/', admin.sites.urls)         # comment out, or just delete
            ]

        Next, let's create a new urls.py file in the your_app_name_here folder. Put the following code
            your_project_name_here/your_app_name_here/urls.py

            from django.urls import path     
            from . import views
            urlpatterns = [
                path('', views.index),	   
            ]

        your_project_name_here/your_app_name_here/views.py
        
            from django.shortcuts import render, HttpResponse
            def index(request):
                return HttpResponse("this is the equivalent of @app.route('/')!")

        
        and Finally do this
        
        your_project_name_here> python manage.py runserver

        follow the video to help you create a Py server
        http://learn.codingdojo.com/m/119/6152/42897
