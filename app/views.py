from django.shortcuts import render
from .models import Banner

# Create your views here.
def home_page(request):
    banners = Banner.objects.all()
    return render(request, "app/index.html", {'banners': banners})