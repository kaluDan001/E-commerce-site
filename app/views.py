from django.shortcuts import render
from .models import HeroBanner

# Create your views here.
def home_page(request):
    banners = HeroBanner.objects.filter(active=True)

    context = {
        "banners" : banners
    }
    return render(request, "app/index.html", context)