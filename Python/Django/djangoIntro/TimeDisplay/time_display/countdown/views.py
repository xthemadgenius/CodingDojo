from __future__ import unicode_literals
from datetime import datetime
from django.shortcuts import render, HttpResponse

def index(request):
    print('*'*80)
    now = datetime.today()
    context = {
        "date": now.strftime('%b %d, %Y'),
        "time": now.strftime('%I:%M %p')
    }
    return render(request, 'time_display.html', context)