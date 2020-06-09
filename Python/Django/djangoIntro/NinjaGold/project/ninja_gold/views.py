from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return render(request, 'index.html')

def process_money(request):
    
def reset(request):
    # if request.method == "POST":
    #     request.session['total_gold'] = 0
    #     request.session['activities'] = []
    return redirect('/')