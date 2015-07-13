from django.shortcuts import render

# Create your views here.
def home(request):
    title = "welcome"
    if request.user.is_authenticated():
        title = "My Title: %s" %(request.user)
    context = {"template_title": title,
    }
    return render(request, "home.html", context)

def computerlabs(request):
    return render(request, "computerlabs.html")

def tutorialrooms(request):
    return render(request, "tutorialrooms.html")

def favourites(request):
    return render(request, "favourites.html")

def history(request):
    return render(request, "history.html")