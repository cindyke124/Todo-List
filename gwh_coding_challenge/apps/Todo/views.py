from .models import Todo
from .serializers import TodoSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

class TodoListCreate(APIView):
    def get(self, request):
        todos = Todo.objects.all().order_by('-id')
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
