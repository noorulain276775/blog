from django.shortcuts import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from .models import *

# Home View.

class Home(APIView):
    def get(self, request):
        return HttpResponse("Its a Home Page", 200)

# Individual Articles

class ArticleDetailView(APIView):

    def get(self, request, id):
        try:
            article = Article.objects.get(id=id)
            serializer = ArticleSerializer(article)
            return Response(serializer.data)
        except Article.DoesNotExist:
            return Response({"message": "Article does not exist"})

    def put(self, request, id):
        try:
            article = Article.objects.get(id=id)
            serializer = ArticleSerializer(article, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors)
        except Article.DoesNotExist:
            return Response({"message": "Article does not exist"})

    def delete(self, request, id):
        try:
            article = Article.objects.get(id=id)
            article.delete()
            return Response({"message": "article deleted"})
        except Article.DoesNotExist:
            return Response({"message": "Article does not exist"})

# All Articles

class ArticleView(APIView):

    def get(self, request):
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors)



