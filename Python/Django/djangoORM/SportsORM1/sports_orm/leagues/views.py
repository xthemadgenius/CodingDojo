from django.shortcuts import render, redirect
from .models import League, Team, Player

from . import team_maker

def index(request):
	# shortcuts
	theLeague = League.objects
	theTeam = Team.objects
	thePlayer = Player.objects
	isAlex = thePlayer.order_by("first_name").filter(first_name="Alexander") 
	isWyatt = thePlayer.order_by("first_name").filter(first_name="Wyatt") 
	# context
	context = {
		# "leagues": League.objects.all(),
		"teams": Team.objects.all(),
		"players": Player.objects.all(),
		"baseballLeagues": theLeague.filter(sport__contains="Baseball"),
		"womensLeagues": theLeague.filter(name__contains="Womens"),
		"hockeyLeagues": theLeague.filter(sport__contains="Hockey"),
		"notFootballLeagues": theLeague.exclude(sport__contains="Football"),
		"conferenceLeagues": theLeague.filter(name__icontains="conference"),
		"alanticLeagues": theLeague.filter(name__contains="Alantic"),
		"dallasTeams": theTeam.filter(location="Dallas"),
		"raptorsTeams": theTeam.filter(team_name__icontains="Raptors"),
		"cityTeams": theTeam.filter(location__icontains="City"),
		"tBeginsTeams": theTeam.filter(team_name__startswith="T"),
		"alphabeticalTeams": theTeam.order_by("location"),
		"reverseAlphaTeams": theTeam.order_by("-team_name"),
		"cooperPlayers": thePlayer.filter(last_name="Cooper"),
		"joshuaPlayers": thePlayer.filter(first_name="Joshua"),
		"cooperNotJoshuaPlayers": thePlayer.filter(last_name="Cooper").exclude(first_name="Joshua"),
		"alexOrWyattPlayers": isAlex | isWyatt,
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")