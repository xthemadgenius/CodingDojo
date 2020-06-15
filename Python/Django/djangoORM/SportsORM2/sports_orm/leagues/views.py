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
		"intBaseballPlayers": thePlayer.filter(curr_team__league__name__contains="International Collegiate Baseball Conference"),
		"lopezFooteball": thePlayer.filter(curr_team__league__name__contains="American Conference of Amateur Football", last_name__contains="Lopez"),
		"footballPlayers": thePlayer.filter(curr_team__league__sport__contains="football"),
		"findSophia": theTeam.filter(curr_players__first_name__contains="Sophia"),
		"leagueWSophia": theLeague.filter(teams__curr_players__first_name__contains="Sophia"),
		"floresNotRough": thePlayer.filter(Q(last_name__contains="Flores"), ~Q(curr_team__location__contains="Washington", curr_team__team_name__contains="Roughriders")),
		"samsHistory": theTeam.filter(all_players__first_name__contains="Samuel", all_players__last_name__contains="Evans"),
		"tigerCatsWhere":thePlayer.filter(all_teams__location__contains="Manitoba", all_teams__team_name__contains="Tiger-Cats"),
		"wasViking": thePlayer.filter(Q(all_teams__location__contains="Wichita", all_teams__team_name__contains="Vikings"), ~Q(curr_team__location__contains="Wichita", curr_team__team_name__contains="Vikings")),
		"jacobWhere": theTeam.exclude(team_name="Colts", location="Oregon").filter(all_players__first_name__contains="Jacob", all_players__last_name__contains="Gray"),
		"joshuaPlays": thePlayer.filter(first_name__contains="Joshua", all_teams__league__name="Atlantic Federation of Amateur Baseball Players"),
		"tweleveOrMore": theTeam.annotate(count_players=Count("all_players")).filter(count_players__gte=12),
		"teamArgByNum": thePlayer.annotate(count_teams=Count("all_teams")).order_by("-count_teams", "first_name"),
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")