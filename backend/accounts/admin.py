from django.contrib import admin
from .models import MyUser

@admin.register(MyUser)
class UserModel(admin.ModelAdmin):
    list_filter= ('username', )
    list_display = ('username', 'email', 'first_name', 'last_name')