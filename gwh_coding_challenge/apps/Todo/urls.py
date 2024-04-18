from django.urls import path
from .views import TodoListCreate

urlpatterns = [
    path('', TodoListCreate.as_view(), name='todos'),
]