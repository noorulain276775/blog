from django.contrib import admin
from blog.models import *
# Register your models here.


@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_filter= ('title', 'created_at')
    list_display = ('title', 'description', 'updated_at')
    date_hierarchy= "created_at"