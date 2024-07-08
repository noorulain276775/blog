from django.db import models
from django.utils.text import slugify
from django.utils import timezone
from ckeditor.fields import RichTextField

class Category(models.Model):
    name= models.CharField(max_length=256, verbose_name="Category")

    def __str__(self):
        return self.name
    

class Article(models.Model):
    title = models.CharField(max_length=256, verbose_name="Title")
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    slug = models.SlugField(max_length=256, unique=True, null=True, blank=True)
    short_description = models.CharField(max_length=500, verbose_name="Short Overview")
    description = RichTextField(verbose_name="Description")
    image = models.ImageField(upload_to='blogs/', default='blogs/default.png', verbose_name="Blog Image")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
            original_slug = self.slug
            queryset = Article.objects.filter(slug=original_slug).exists()
            num = 1
            while queryset:
                self.slug = f'{original_slug}-{num}'
                num += 1
                queryset = Article.objects.filter(slug=self.slug).exists()
        super().save(*args, **kwargs)
