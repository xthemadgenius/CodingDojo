var score = 0;

var hero = {
    x: 300,
    y: 400
}

var enemies = [{x: 50, y: 50}, {x: 250, y: 150}, {x: 450, y: 250}, {x: 550, y: 50},{x: 150, y: 450},{x: 350, y: 350},{x: 500, y: 50}];

var bullets = [];

function displayHero(){
    document.getElementById('hero').style["top"] = hero.y + "px";
    document.getElementById('hero').style["left"] = hero.x + "px";
}

function displayEnemies(){
    var output = "";
    for (var i = 0; i < enemies.length; i++){
        output += "<div class='enemy1' style='top:" + enemies[i].y + "px; left:" + enemies[i].x + "px;'></div>";
    }
    document.getElementById('enemies').innerHTML = output;
}

function moveEnemies(){
    for (var i = 0; i < enemies.length; i++){
        enemies[i].y += 5;
        if(enemies[i].y > 540){
            enemies[i].y=0;
            enemies[i].x=Math.random()*500;
        }
    }
}

function moveBullets(){
    for (var i = 0; i < bullets.length; i++){
        bullets[i].y -= 5;
        if(bullets[i].y < 0){
            bullets.shift();
            console.log(bullets);
        }
    }
}

function displayBullets(){
    var output = "";
    for (var i=0; i < bullets.length; i++){
        output += "<div class='bullet' style='top:" + bullets[i].y + "px; left:" + bullets[i].x + "px;'></div>";
    }
    document.getElementById('bullets').innerHTML = output;
}

function displayScore(){
    document.getElementById('score').innerHTML = score;
}

function gameLoop(){
    displayHero();
    moveEnemies();
    displayEnemies();
    moveBullets();
    displayBullets();
    detectCollision();
    displayScore();
}

function detectCollision(){
    for (var i = 0; i < bullets.length; i++){
        for (var j = 0; j < enemies.length; j++){
            if((Math.abs(bullets[i].x - enemies[j].x) < 10) && (Math.abs(bullets[i].y - enemies[j].y) < 10)){
                score += 10;
            }
        }
    }
}

setInterval(gameLoop, 50);

document.onkeydown = function(a){
    if(a.keyCode == 37){
        hero.x -= 10;
    } else if(a.keyCode == 39){
        hero.x += 10;
    } else if(a.keyCode == 38){
        hero.y -= 10;
    } else if(a.keyCode == 40){
        hero.y += 10;
    } else if(a.keyCode == 32 && 37 || a.keyCode == 32 && 39 || a.keyCode == 32 && 38 || a.keyCode == 32 && 40){
        // hero.x -= 10;
        bullets.push({x: hero.x+5, y: hero.y-15});
        displayBullets();
    } 
}
$(document).ready(function(){
    gameLoop()
})