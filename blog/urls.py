from django.urls import path
from .views import *

urlpatterns = [
    path('', Home.as_view()),
    path('articles/<int:id>', ArticleDetailView.as_view()),
    path('articles/', ArticleView.as_view()),
]