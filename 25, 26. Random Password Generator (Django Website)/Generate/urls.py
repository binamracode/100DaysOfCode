from django.urls import path, include
from . import views

app_name = 'generate'
urlpatterns = [
    path('', views.index, name='index'),
    path('generate', views.generate, name='generate_password')
]
