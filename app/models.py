from django.db import models

# Create your models here.
class HeroBanner(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.TextField()
    discount = models.CharField(max_length=50)

    button1_text = models.CharField(max_length=50)
    button1_link = models.CharField(max_length=255)

    button2_text = models.CharField(max_length=50)
    button2_link = models.CharField(max_length=255)

    image1 = models.ImageField(upload_to='banner/')
    image2 = models.ImageField(upload_to='banner/')
    image3 = models.ImageField(upload_to='banner/')

    background_color = models.CharField(
        max_length=20,
        default="#0f172a"
    )

    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title