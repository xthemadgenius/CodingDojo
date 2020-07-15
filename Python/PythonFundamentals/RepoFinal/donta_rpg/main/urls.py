from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('login', views.login),
    path('select', views.select),
    path('dashboard', views.dashboard),
    path('chosen', views.chosen),
    path('create/character', views.chosen_create_character),
    path('create/item', views.chosen_create_item),
    path('create/obstacle', views.chosen_create_obstacle),
    path('game', views.game),
    path('gamePlay', views.boss),
    path('main-game', views.main_game),
    path('character', views.character_select),
    path('shop', views.shop),
    path('viewPlayer', views.viewPlayer),
    path('logout', views.logout),
    path('submit-score', views.submit_score)
]
