from django.db import models

# Create your models here.
class Banner(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=100)
    description = models.TextField()
    image1 = models.ImageField(upload_to="banners/")
    image2 = models.ImageField(upload_to="banners/")
    image3 = models.ImageField(upload_to="banners/")

    def __str__(self):
        return self.title