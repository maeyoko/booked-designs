from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, "home.html")

def computerlabs(request):
    return render(request, "computerlabs.html")

def tutorialrooms(request):
    return render(request, "tutorialrooms.html")

def favourites(request):
    return render(request, "favourites.html")

def history(request):
    return render(request, "history.html")