from django.shortcuts import render, redirect

# request.session = {}

# Create your views here.
def index(request):
    context={'key':42}
    print(request.session.items())
    if 'all_users' not in request.session:
        request.session['all_users'] = []
    if 'name_from_form' not in request.session:
        request.session['name_from_form'] = request.POST["name"]
    return render(request, 'index.html', context)

def process(request):
    print(request.session.items())
    request.session['all_users'].append(request.POST["name"])
    request.session['favorite_flavor'] = request.POST['fav_ice_cream']
    request.session["pass"] = request.POST['password']
    print(request.session.items())
    request.session.save()
    return redirect('/success')

def success(request):
    print(request.session.items())
    context = {
        'name': request.session['name_from_form']
    }
    return render(request, "results.html", context)




# session = {
# 'all_users': ['Billy Bobby'],
# 'favorite_flavor': 'Moose Tracks'
# }