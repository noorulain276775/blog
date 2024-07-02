from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router= DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')

urlpatterns = [
    path('', include(router.urls))

]