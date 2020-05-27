var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,2,1,1,1,1,1,2,1,1,2,1,2,1,1,1,1,2],
    [2,1,2,2,1,2,2,2,1,2,1,1,2,1,1,1,2,1,2,2],
    [2,1,1,2,1,2,1,2,1,2,1,1,1,1,1,1,2,1,1,2],
    [2,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,2,2,1,2],
    [2,1,1,2,2,2,1,2,1,2,1,1,1,2,2,1,2,1,1,2],
    [2,1,2,2,1,1,1,2,1,1,1,1,2,2,1,1,2,1,2,2],
    [2,1,1,1,1,1,1,1,1,2,1,1,3,1,1,2,2,1,1,2],
    [2,2,2,2,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2],
    [2,1,2,1,1,1,1,2,1,2,1,1,2,2,1,1,1,1,1,2],
    [2,1,2,2,2,1,1,1,1,2,1,1,4,2,1,1,2,2,2,2],
    [2,1,1,1,2,2,1,2,1,1,1,1,1,1,1,2,2,1,1,2],
    [2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];
var score = 0;
var lives = 3;

var pacman = {
    x: 1,
    y: 1
}
function displayWorld(){
    var output = '';
    for(var i = 0; i < world.length; i++){
        output += "\n<div class='row'>\n";
        for(var j = 0; j < world[i].length; j++){
            if(world[i][j] == 2){
                output += "<div class='brick'></div>";
            } else if(world[i][j] == 1){
                output += "<div class='coin'></div>";
            } else if(world[i][j] == 3){
            output += "<div class='cherry'></div>";
            } else if(world[i][j] == 4){
                output += "<div class='ghost'></div>";
            } else if(world[i][j] == 0){
                output += "<div class='empty'></div>";
            }
        }
        output += "\n</div>";
    }
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*24 + "px";
    document.getElementById('pacman').style.left = pacman.x*20 + "px";
}
function displayScore(){
    document.getElementById('score').innerHTML = score;
}
function displayLives(){
    document.getElementById('lives').innerHTML = lives;
}
displayWorld();
displayPacman();
displayScore();
displayLives();

document.onkeydown = function(e){
    if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){
        document.getElementById('pacman').style.transform = "rotate(-180deg)";
        pacman.x--;
    } else if(e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2){
        document.getElementById('pacman').style.transform = "none";
        pacman.x++;
    }else if(e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2){
        document.getElementById('pacman').style.transform = "rotate(-90deg)";
        pacman.y--;
    }else if(e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2){
        document.getElementById('pacman').style.transform = "rotate(90deg)";
        pacman.y++;
    }
    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score += 10;
        displayWorld();
        displayScore();
    } else if (world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 0;
        score+=50;
        displayWorld();
        displayScore();
    } else if (world[pacman.y][pacman.x] == 4) {
        world[pacman.y][pacman.x] = 4;
        score-= 100;
        lives -= 1;
        if(score <= 0){
            score = 0;
        }
        if(lives === 0){
            lives = 0;
        }
        displayWorld();
        displayScore();
        displayLives();
    }
    displayPacman();
}