from datetime import datetime
from django.db import models

# Create your models here.

class Article(models.Model):
    title = models.CharField(max_length=256, verbose_name="Title")
    description=models.TextField(verbose_name="Description")
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
