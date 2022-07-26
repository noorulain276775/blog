from django.urls import path
from blog.views import Home

urlpatterns = [
    path('', Home.as_view())
]