var total_berries = 35;
	var generated_berries = 0;

    var world = [
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		[4, 0, 3, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 4],
		[4, 0, 4, 4, 4, 4, 0, 0, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4],
		[4, 0, 4, 4, 4, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 4, 4],
        [4, 0, 4, 4, 0, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4],
		[4, 0, 4, 4, 0, 3, 0, 0, 4, 0, 0, 0, 4, 0, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 0, 4, 3, 4],
        [4, 0, 4, 4, 0, 4, 0, 0, 4, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 3, 4],
        [4, 0, 4, 4, 0, 4, 4, 4, 4, 0, 4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 0, 3, 0, 4],
        [4, 0, 4, 4, 3, 4, 0, 4, 4, 4, 4, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 3, 4, 4, 3, 4],
        [4, 0, 4, 0, 0, 4, 0, 3, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 4, 3, 4],
        [4, 0, 4, 0, 0, 4, 0, 4, 4, 4, 4, 3, 4, 4, 4, 4, 0, 4, 0, 0, 0, 4, 4, 0, 0, 4, 0, 4],
        [4, 0, 4, 4, 4, 4, 0, 4, 0, 0, 3, 3, 3, 0, 0, 4, 0, 4, 0, 4, 0, 4, 4, 0, 0, 4, 4, 4],
        [4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 4],
        [4, 0, 3, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 4, 0, 3, 0, 3, 0, 0, 0, 4],
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
	];

	// Generate Berries
	while (generated_berries < total_berries){
		for(var y = 0; y < world.length; y++) {
			for(var x = 0; x < world[y].length; x++) {
				if(world[y][x] == 0){
					var chance_roll = Math.floor((Math.random() * 10) + 1);
					if( chance_roll < 3){
						world[y][x] = 1;
						generated_berries++
					}
				}
			}
		}
	}

	// WORLD DICTIONARY
	var worldDict = {
		0: 'grass',
		1: 'fruit',
        2: 'wall',
        3: 'breakable_rock',
		4: 'solid_rock',
		5: 'dirt'
	}

	// get existing score
	var gameScore = parseInt($('#existing_score').val());
	
	// SCORE KEEPING
	function keepScore(){
		var currentScore = document.getElementById('score-count');
		currentScore.innerHTML = gameScore;
	}
	keepScore()

	// RENDER WORLD
	function drawWorld() {
		output = "";
		for(var row = 0; row < world.length; row++){
			output += "<div class = 'row'></div>";
			for(var i = 0; i < world[row].length; i++){
				output += "<div class = '" + worldDict[world[row][i]]+"'></div>"
			}
			output += "</div>"
		}
		document.getElementById('world').innerHTML = output;
	}	
	drawWorld();
	
	// AGENTS
	var donta_pos = {
		x: 1,
        y: 7,
		health: 100
	}
	
	var dromaMovementDict = { 
		// LEFT
		0: function(agent){
			if(world[agent.y][agent.x - 1] < 2){
				agent.x --;
				document.getElementById(agent.name).style.backgroundImage = "url('/static/images/enemy_sprite_moving/enemy_left_moving.gif')";
				}
			},
		// RIGHT
		1:	function(agent){
				if(world[agent.y][agent.x + 1] < 2){
					agent.x ++;
					document.getElementById(agent.name).style.backgroundImage = "url('/static/images/enemy_sprite_moving/enemy_right_moving.gif')";
				}
			},
		// UP
		2:	function(agent){
				if(world[agent.y - 1][agent.x] < 2){
					agent.y --;
					document.getElementById(agent.name).style.backgroundImage = "url('/static/images/enemy_sprite_moving/enemy_back_moving.gif')";
				}
			},
		// DOWN
		3:	function(agent){
				if(world[agent.y + 1][agent.x] < 2){
					agent.y ++;
					document.getElementById(agent.name).style.backgroundImage = "url('/static/images/enemy_sprite_moving/enemy_front_moving.gif')";
				}
			},
		// UP & LEFT
		4:	function(agent){
				if(world[agent.y - 1][agent.x - 1] < 2){
					agent.x --;
					agent.y --;
					document.getElementById(agent.name).style.backgroundImage = "url('/static/images/enemy_sprite_moving/enemy_left_moving.gif')";
				}
			},
		// UP & RIGHT
		5:	function(agent){
				if(world[agent.y - 1][agent.x + 1] < 2){
					agent.x ++;
					agent.y --;
					document.getElementById(agent.name).style.backgroundImage = "url('/static/images/enemy_sprite_moving/enemy_right_moving.gif')";
				}
			},
		// DOWN & LEFT
		6:	function(agent){
				if(world[agent.y + 1][agent.x - 1 ] < 2){
					agent.y ++;
					agent.x --;
					document.getElementById(agent.name).style.backgroundImage = "url('/static/images/enemy_sprite_moving/enemy_left_moving.gif')";	
				}
			},
		// DOWN & RIGHT
		7:	function(agent){
				if(world[agent.y + 1][agent.x + 1] < 2){
					agent.y ++;
					agent.x ++;
					document.getElementById(agent.name).style.backgroundImage = "url('/static/images/enemy_sprite_moving/enemy_right_moving.gif')";
				}
			}
	}
	function checkDromaBlocks(droma){
		var blocks = [];
		
		if(world[droma.y - 1][droma.x - 1]  < 2){
			blocks.push(4);
		}
		if(world[droma.y - 1][droma.x] < 2){
			blocks.push(2);
		}
		if(world[droma.y - 1][droma.x + 1] < 2){
			blocks.push(5);
		}
		if(world[droma.y][droma.x + 1] < 2){
			blocks.push(1);
		}
		if(world[droma.y + 1][droma.x + 1] < 2){
			blocks.push(7);
		}
		if(world[droma.y + 1][droma.x] < 2){
			blocks.push(3);
		}		
		if(world[droma.y + 1][droma.x - 1 ] < 2){
			blocks.push(6);
		}
		return blocks;
	}
	
	// ENEMIES
	var droma1 = {
        name: 'droma1',
        x: 11,
        y: 3,
		health: 20
	}
	var droma2 = {
        name: 'droma2',
        x: 13,
        y: 5,
        health: 20
	}
	var droma3 = {
        name: 'droma3',
        x: 15,
        y: 6,
        health: 20
	}
	var droma4 = {
        name: 'droma4',
        x: 16,
        y: 9,
        health: 20
	}
	
	// DRAW AGENTS
	// donta
	function drawdonta_pos(){
		document.getElementById('donta').style.top = 
			donta_pos.y * 40 + 'px'
		document.getElementById('donta').style.left = 
			donta_pos.x * 40 + 'px'
    }
	drawdonta_pos();		
	
	// droma1
	function draw_droma1(){
		document.getElementById('droma1').style.top = 
            droma1.y * 40 + 'px'
		document.getElementById('droma1').style.left = 
            droma1.x * 40 + 'px'
	}
	draw_droma1();	
	
	// droma2	
	function draw_droma2(){
		document.getElementById('droma2').style.top = 
            droma2.y * 40 + 'px'
		document.getElementById('droma2').style.left = 
            droma2.x * 40 + 'px'
	}
	draw_droma2();

	// droma3	
	function draw_droma3(){
		document.getElementById('droma3').style.top = 
            droma3.y * 40 + 'px'
		document.getElementById('droma3').style.left = 
            droma3.x * 40 + 'px'
	}
	draw_droma3();	
	
	// droma4	
	function draw_droma4(){
		document.getElementById('droma4').style.top = 
            droma4.y * 40 + 'px'
		document.getElementById('droma4').style.left = 
            droma4.x * 40 + 'px'
	}
	draw_droma4();

	var dromaList = [ droma1, droma2, droma3, droma4 ];
	
	// Movement 	
	function updateAgents(e){
		switch(e.keyCode){
			// LEFT 
			case 37:
			case 100:
				if(world[donta_pos.y][donta_pos.x - 1] < 2){
					donta_pos.x --;
				} else {
                    var obstacleType = world[donta_pos.y][donta_pos.x - 1];
                    switch (obstacleType) {
                        // breakable rock
                        case 3:
							world[donta_pos.y][donta_pos.x - 1] = 0;
							gameScore += 20;
							console.log("Broke through Code Blocker +20 Points!!");
                            break;
                        // solid rock
                        case 4: 
                            break;
                    }
                }
                document.getElementById('donta').style.backgroundImage = "url('/static/images/user_sprite_moving/donta_left_walking.gif')";
				break;
			// RIGHT
			case 39:
			case 102:
				if(world[donta_pos.y][donta_pos.x + 1] < 2){
					donta_pos.x ++;
				} else {
                    var obstacleType = world[donta_pos.y][donta_pos.x + 1];
                    switch (obstacleType) {
                        // breakable rock
                        case 3:
							world[donta_pos.y][donta_pos.x + 1] = 0;
							gameScore += 20;
							console.log("Broke through Code Blocker +20 Points!!");
                            break;
                        case 4: 
                            // do nothing
                            break;
                    }
                }
				document.getElementById('donta').style.backgroundImage = "url('/static/images/user_sprite_moving/donta_right_walking.gif')";
				break;
			// UP
			case 38:
			case 104:
				if(world[donta_pos.y - 1][donta_pos.x] < 2){
					donta_pos.y --;
				} else {
                    var obstacleType = world[donta_pos.y - 1][donta_pos.x];
                    switch (obstacleType) {
                        // breakable rock
                        case 3:
							world[donta_pos.y - 1][donta_pos.x] = 0;
							gameScore += 20;
							console.log("Broke through Code Blocker +20 Points!!");
                            break;
                        // solid rock
                        case 4: 
                            // do nothing
                            break;
                    }
                }
				document.getElementById('donta').style.backgroundImage = "url('/static/images/user_sprite_moving/donta_back_walking.gif')";
				break;
			// DOWN
			case 40:
			case 98:				
				if(world[donta_pos.y + 1][donta_pos.x] < 2){
					donta_pos.y ++;
				} else {
                    var obstacleType = world[donta_pos.y + 1][donta_pos.x];
                    switch (obstacleType) {
                        // breakable rock
                        case 3:
							world[donta_pos.y + 1][donta_pos.x] = 0;
							gameScore += 20;
							console.log("Broke through Code Blocker +20 Points!!");
                            break;
                        // solid rock
                        case 4: 
                            // do nothing
                            break;
                    }
                }
				document.getElementById('donta').style.backgroundImage = "url('/static/images/user_sprite_moving/donta_front_walking.gif')";
				break;			
			// UP & LEFT
			case 103:
				if(world[donta_pos.y - 1][donta_pos.x - 1] < 2){
					donta_pos.x --;
					donta_pos.y --;
				} else {
                    var obstacleType = world[donta_pos.y - 1][donta_pos.x - 1];
                    switch (obstacleType) {
                        // breakable rock
                        case 3:
							world[donta_pos.y - 1][donta_pos.x - 1] = 0;
							gameScore += 20;
                            break;
                        // solid rock
                        case 4: 
                            // do nothing
                            break;
                    }
                }
				document.getElementById('donta').style.backgroundImage = "url('/static/images/user_sprite_moving/donta_left_walking.gif')";
				break;
			// UP & RIGHT 
			case 105:
				if(world[donta_pos.y - 1][donta_pos.x + 1] < 2){
					donta_pos.x ++;
					donta_pos.y --;
				} else {
                    var obstacleType = world[donta_pos.y - 1][donta_pos.x + 1];
                    switch (obstacleType) {
                        // breakable rock
                        case 3:
							world[donta_pos.y - 1][donta_pos.x + 1] = 0;
							gameScore += 20;
							console.log("Completed Sensei Bonus +20 Points!!");
                            break;
                        // solid rock
                        case 4: 
                            // do nothing
                            break;
                    }
                }
				document.getElementById('donta').style.backgroundImage = "url('/static/images/user_sprite_moving/donta_right_walking.gif')";
				break;
			// DOWN & LEFT 
			case 97:
				if(world[donta_pos.y + 1][donta_pos.x - 1 ] < 2){
					donta_pos.y ++;
					donta_pos.x --;			
				} else {
                    var obstacleType = world[donta_pos.y + 1][donta_pos.x - 1 ];
                    switch (obstacleType) {
                        // breakable rock
                        case 3:
							world[donta_pos.y + 1][donta_pos.x - 1 ] = 0;
							gameScore += 20;
							console.log("Completed Assignment +20 Points!!");
                            break;
                        // solid rock
                        case 4: 
                            // do nothing
                            break;
                    }
                }
				document.getElementById('donta').style.backgroundImage = "url('/static/images/user_sprite_moving/donta_left_walking.gif')";
				break;
			// DOWN & RIGHT
			case 99:
				if(world[donta_pos.y + 1][donta_pos.x + 1] < 2){
					donta_pos.y ++;
					donta_pos.x ++;
				} else {
                    var obstacleType = world[donta_pos.y + 1][donta_pos.x + 1];
                    switch (obstacleType) {
                        // breakable rock
                        case 3:
							world[donta_pos.y + 1][donta_pos.x + 1] = 0;
							gameScore += 20;
							console.log("Broke through Code Blocker +20 Points!!");
                            break;
                        // solid rock
                        case 4: 
                            // do nothing
                            break;
                    }
                }
				document.getElementById('donta').style.backgroundImage = "url('/static/images/user_sprite_moving/donta_right_walking.gif')";
				break;
		}		
		// enemy movement
		for(var i = 0; i < (dromaList.length); i++){
			var currentDroma = dromaList[i];
			var validMoves = checkDromaBlocks(currentDroma);
			if(validMoves == []){
				continue;
			}			
			var move =  Math.floor((Math.random() * 7) + 1);
			while(!validMoves.includes(move)){
				move =  Math.floor((Math.random() * 7) + 1);
			}	
			dromaMovementDict[move](currentDroma);			
			switch(currentDroma.name){
				case 'droma1':
                    if (droma1.health > 0) {
                        draw_droma1();
                    } 
					break;
				case 'droma2':
                    if (droma2.health > 0) {
                        draw_droma2();
                    }
					break;
				case 'droma3':
                    if (droma3.health > 0) {
                        draw_droma3();
                    }
					break;
				case 'droma4':
                    if (droma4.health > 0) {
                        draw_droma4();
                    }
					break;
			}
		}
		
	}
	// UPDATE WORLD
	document.onkeydown = function(e){		
		updateAgents(e);		
		// Lives		
		for(var i = 0; i < (dromaList.length); i++){
			var currentDroma = dromaList[i];
			if(( donta_pos.y ) == ( currentDroma.y ) && ( donta_pos.x ) == ( currentDroma.x )) {
                // enemy can do between 0 and 20 damage
                var player_dmg = Math.floor((Math.random() * 20) + 1)
                // player can do between 0 and 20 damage
                var enemy_damage = Math.floor((Math.random() * 20) + 1)
                // do damage
                donta_pos.health -= player_dmg;
                currentDroma.health -= enemy_damage;
                console.log("Player takes " + player_dmg + " damage! Player health: " + donta_pos.health);
                console.log("Enemy takes " + enemy_damage + " damage! Enemy (" + currentDroma.name + ") health: " + currentDroma.health)
                if (donta_pos.health <= 0) {
                    // player dead
					alert("You failed the belt! Please try again!");
					
					$.ajax({
						url:"/submit-score",
						type:"POST",
						data: { "score": gameScore, "csrfmiddlewaretoken": "{{ csrf_token }}" },
						dataType: "json",
						success: function(resp) {
							console.log(resp);
						}
					});
                    document.onkeydown = null;
                }
				console.log("Assignment Destroyed!");
                if (currentDroma.health <= 0) {
                    // enemy dead, remove from list
                    document.getElementById(currentDroma.name).style.backgroundImage = 'none';
					dromaList = dromaList.filter(droma => droma.name !== currentDroma.name);
					gameScore += 40;
                }
			}
		}
		
		// score
		if((world[donta_pos.y][donta_pos.x]) == 1){
			gameScore += 10;
			generated_berries --;
			console.log("Got help from George +10 Points!")
		}
		world[donta_pos.y][donta_pos.x] = 0;	
        // check to see if player won
        if (dromaList.length == 0 || generated_berries == 0){
            alert("Through the Power of George you have passed! BANANAS!!!!!")
			document.onkeydown = null;
			$.ajax({
					url:"/submit-score",
					type:"POST",
					data: { "score": gameScore, "csrfmiddlewaretoken": "{{ csrf_token }}" },
					dataType: "json",
					success: function(resp) {
						console.log(resp);
					}
				});
    }
		drawdonta_pos();
		drawWorld();
		keepScore();
	}