from rest_framework import status
from rest_framework.response import Response
from .serializers import ArticleSerializer, CategorySerializers
from .models import Article, Category
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.decorators import action

# CRUD operations on Articles
class ArticleViewSet(viewsets.ViewSet):

    def list(self, request):
        queryset = Article.objects.all()
        category_slug = request.query_params.get('category_slug')
        if category_slug:
            queryset = queryset.filter(category__name=category_slug)
        serializer = ArticleSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def retrieve(self, request, pk=None):
        queryset = Article.objects.all()
        article = get_object_or_404(queryset, pk=pk)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)

    def update(self, request, pk=None):
        article = get_object_or_404(Article, pk=pk)
        serializer = ArticleSerializer(article, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def destroy(self, request, pk=None):
        article = get_object_or_404(Article, pk=pk)
        article.delete()
        return Response({'message': 'Article deleted Successfully'},status=status.HTTP_204_NO_CONTENT)

    @action(detail=False, methods=['get'], url_path='detail/(?P<slug>[^/.]+)')
    def retrieve_by_slug(self, request, slug=None):
        queryset = Article.objects.all()
        article = get_object_or_404(queryset, slug=slug)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)



# CRUD operations on Categories
class CategoryViewSet(viewsets.ViewSet):

    def list(self, request):
        category= Category.objects.all()
        serializer = CategorySerializers(category, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = CategorySerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def retrieve(self, request, pk=None):
        queryset = Category.objects.all()
        category = get_object_or_404(queryset, pk=pk)
        serializer = CategorySerializers(category)
        return Response(serializer.data)

    def update(self, request, pk=None):
        category = get_object_or_404(Category, pk=pk)
        serializer = CategorySerializers(category, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def destroy(self, request, pk=None):
        category = get_object_or_404(Category, pk=pk)
        category.delete()
        return Response({'message': 'Category deleted Successfully'},status=status.HTTP_204_NO_CONTENT)