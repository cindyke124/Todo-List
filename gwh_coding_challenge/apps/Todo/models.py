from django.db import models
from django.db import connection

# Create your models here.
STATUS_CHOICES = [
    ("done", "Done"),
    ("in_progress", "In Progress"),
    ("new", "New"),
]


class Todo(models.Model):
    title = models.TextField()
    description = models.TextField()
    due_date = models.DateField()
    status = models.TextField(choices=STATUS_CHOICES, default="new")
