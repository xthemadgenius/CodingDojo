from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('bananas', views.bananas),
    path('bananas/<int:num_of_nanners>', views.nanners_in_bunch),
    path('go_home', views.direct_to_index),
    path('simple', views.simple_page),
    path('complex/<int:fav_num>', views.complex_page),
]