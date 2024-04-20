# from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import Todo
import pytest
from django.urls import reverse


@pytest.mark.django_db
class TestTodoAPI:
    client = APIClient()

    def test_create_todo(self):
        url = reverse('todos')
        todo = {
            'title': 'test title',
            'description': ' test description',
            'due_date': '2024-01-01',
            'status': 'done'
        }
        original_count = Todo.objects.count()
        response = self.client.post(url, todo)
        assert response.status_code == status.HTTP_201_CREATED
        new_count = Todo.objects.count()
        assert new_count - original_count == 1
        assert Todo.objects.get().title == 'test title'

    def test_get_all_todos(self):
        url = reverse('todos')
        Todo.objects.create(title='First test Todo', description='First test description', due_date='2024-05-01',
                            status='new')
        Todo.objects.create(title='Second test Todo', description='Second test description', due_date='2024-04-16',
                            status='in_progress')
        response = self.client.get(url)
        assert response.status_code == status.HTTP_200_OK
        # test whether the db added 2 new records
        assert len(response.data) == 2
