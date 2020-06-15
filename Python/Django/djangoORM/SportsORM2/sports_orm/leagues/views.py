from django.shortcuts import render, redirect
from .models import League, Team, Player
from django.db.models import Q, Count

from . import team_maker

def index(request):
	# main cases
	theLeague = League.objects
	theTeam = Team.objects
	thePlayer = Player.objects
	context = {
		"atlanticTeams": theTeam.filter(league__name__contains="Atlantic Soccer Conference"),
		"penguinPlayers": thePlayer.filter(curr_team__team_name__contains="Penguin", curr_team__location__contains="Boston"),
		"IntBaseballPlayers": thePlayer.filter(curr_team__league__name__contains="International Collegiate Baseball Conference"),
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")