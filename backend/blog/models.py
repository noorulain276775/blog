from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=256, verbose_name="Title")
    short_description = models.CharField(max_length=500, verbose_name="Short Overview")
    description=models.TextField(verbose_name="Description")
    image = models.ImageField(upload_to='blogs/', default='blogs/default.png', verbose_name="Blog Image")
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
