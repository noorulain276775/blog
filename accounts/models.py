from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class MyUser(AbstractUser):
    first_name = models.CharField(max_length=256)
    last_name = models.CharField(max_length=256)
    groups = models.ManyToManyField(Group, related_name='myuser_set')
    user_permissions = models.ManyToManyField(Permission, related_name='myuser_set')