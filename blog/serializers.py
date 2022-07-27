from dataclasses import field, fields
from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'description']
        read_only_fields = ['updated_at', 'created_at']