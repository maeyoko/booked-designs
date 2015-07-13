from django.shortcuts import render

# Create your views here.
def home(request):
    title = "welcome"
    if request.user.is_authenticated():
        title = "My Title: %s" %(request.user)
    context = {"template_title": title,
    }
    return render(request, "favourites.html", context)