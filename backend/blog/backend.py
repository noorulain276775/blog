from .serializers import *
from .models import *
from rest_framework import generics
from rest_framework import mixins


class ArticleDetailView(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.DestroyModelMixin, mixins.UpdateModelMixin):

    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'id'

    def get(self, request, id):
        return self.retrieve(request, id)

    def put(self, request, id):
        return self.update(request, id)
    
    def delete(self, request, id):
        return self.destroy(request, id)


# GET All Articles and POST the article


class ArticleView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)