from rest_framework import serializers
from .models import Todo, STATUS_CHOICES

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ['title', 'description', 'due_date', 'status']
        extra_kwargs = {'status': {'default': 'new'}}
