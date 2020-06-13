from django.shortcuts import render, redirect
from .models import League, Team, Player

from . import team_maker

def index(request):
	# main cases
	theLeague = League.objects
	theTeam = Team.objects
	thePlayer = Player.objects
	isAlex =  thePlayer.order_by('first_name').filter(first_name="Alexander")
	isWyatt = thePlayer.order_by('first_name').filter(first_name="Wyatt")
	context = {
		"leagues": League.objects.all(),
		"teams": Team.objects.all(),
		"players": Player.objects.all(),
		"baseball": theLeague.filter(sport="Baseball"),
		"womens": theLeague.filter(name__contains="Womens'"),
		"hockey": theLeague.filter(sport__contains="Hockey"),
		"notFootball": theLeague.exclude(sport__contains="Football"),
		"conference": theLeague.filter(name__icontains="conference"),
		"atlantic": theLeague.filter(name__contains="Atlantic"),
		"dallas": theTeam.filter(location="Dallas"),
		"raptor": theTeam.filter(team_name__icontains="Raptors"),
		"city": theTeam.filter(location__icontains="City"),
		"tStarts": theTeam.filter(team_name__startswith="T"),
		"alphabetical": theTeam.order_by("location"),
		"reverseAlpha": theTeam.order_by("-team_name"),
		"cooper": thePlayer.filter(last_name="Cooper"),
		"joshua": thePlayer.filter(first_name="Joshua"),
		"cooperNotJoshua": thePlayer.filter(last_name="Cooper").exclude(first_name="Joshua"),
		"alexOrWyatt": isAlex | isWyatt
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")