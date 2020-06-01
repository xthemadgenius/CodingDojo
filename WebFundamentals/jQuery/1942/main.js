var score = 0
var hero = {
    x:500,
    y:450
};
var enemies = []
var bullets = []
var explosions = []
var explosionDict = [
    "-140px -30px",
    "-110px -30px",
    "-85px -40px",
    "-65px -40px",
    "-45px -40px"
];
var enemyDict = [
    "-30px -10px",
    "-128px -135px"
];
var lives = 5
var level = 5000

var background = new Audio("sounds/background.mp3")
var interval = null

function start(){
    background.volume = 0.4
    background.loop = true
    background.play()
    interval =  setInterval(gameLoop, 20)
}

function displayHero(){
    document.getElementById("hero").style.top = hero.y + "px"
    document.getElementById("hero").style.left = hero.x + "px"
}

function displayLives(){
    var output = ""
    for(var i=0;i<lives;i++){
        output+="<div class='life' style='left: "+ (30*i) +"px;'></div>"
    }
    document.getElementById("lives").innerHTML=output
}

function displayEnemies(){
    var output = ""
    for(var i=0;i<enemies.length;i++){
        var style="top:"+enemies[i].y+"px; left:"+enemies[i].x+"px;"
        style+="background-position:"+enemyDict[enemies[i].type]+";"
        switch(enemies[i].type){
            case 1:
                style+="width:23px;height:15px;"
                break
        }
        output+="<div class='enemy1' style='"+style+"'></div>"
    }
    document.getElementById("enemies").innerHTML = output
}

function displayExplosions(){
    var output = ""
    for(var i=0;i<explosions.length;i++){
        if(explosions[i].state > 4){
            explosions.splice(i, 1)
        }else{
            var style = ""
            if(explosions[i].state > 1){
                style += "width:20px;height:20px;"
                style += "top:"+(explosions[i].y+5) + "px; left:"+(explosions[i].x+5)+"px;"
            }else{
                style += "top:"+explosions[i].y + "px; left:"+explosions[i].x+"px;"
            }
            style +="background-position:"+explosionDict[explosions[i].state]+";"
            output += "<div class='explosion' style='"+ style + "'></div>"
            explosions[i].state++
        }
    }
    document.getElementById("explotions").innerHTML = output
}

function spawnEnemies(){
    enemies.push({x:(Math.random()*600)+200,y:0,type:Math.floor(Math.random()*2)})
    clearInterval(enemyInterval)
    enemyInterval = setInterval(spawnEnemies,(Math.random()*3000)+level)
    level*=0.8

}
var enemyInterval = setInterval(spawnEnemies,Math.random()*3000+2000)

function moveEnemies(){
    for(var i=0;i<enemies.length;i++){
        enemies[i].y +=2
        if(enemies[i].y>520){
            enemies[i].y = 0
            enemies[i].x = Math.random()*600+200
        }
    }
}

function moveBullets(){
    for(var i=0;i<bullets.length;i++){
        bullets[i].y -=5
        if(bullets[i].y<0){
            bullets[i]=bullets[bullets.length-1]
            bullets.pop()
        }
    }
}

function displayBullets(){
    var output = ""
    for(var i=0;i<bullets.length;i++){
        output += "<div class='bullet' style='top:"+bullets[i].y+"px; left:"+bullets[i].x+"px;'></div>"
    }
    document.getElementById("bullets").innerHTML = output
}

function displayScore(){
    document.getElementById("score").innerHTML = score
}

function detectCollision(){
    for(var i=0;i<bullets.length;i++){
        for(var j=0;j<enemies.length;j++){
            if(Math.abs(bullets[i].x-enemies[j].x)<20 && Math.abs(bullets[i].y-enemies[j].y)<20){
                var audio = new Audio("sounds/hit-02.wav")
                audio.volume = 0.4;
                audio.play()
                killEnemy(j)
                bullets.splice(i,1)
                score+=100
            }
        }
    }
}

function playerHitDetected(){
    for(var i=0;i<enemies.length;i++){
        if(Math.abs(enemies[i].x-hero.x)<40 && Math.abs(enemies[i].y-hero.y)<40){
            var audio = new Audio("sounds/hit-01.wav")
            audio.volume = 0.4;
            audio.play()
            killEnemy(i)
            score-=500
            lives--
        }
    }
}

function killEnemy(index){
    explosions.push({x:enemies[index].x,y:enemies[index].y,state:0})
    enemies.splice(index,1)
}

document.onkeydown = function(e){
    if(lives>0){
        if((e.keyCode==32||(e.keyCode<=40 && e.keyCode>=37)) && background.paused)
            start()
        switch(e.keyCode){
            case 37:
                document.getElementById("hero").style.backgroundPosition="-55px -205px"
                if(hero.x>10) hero.x-=10 
                break
            case 39:
                document.getElementById("hero").style.backgroundPosition="-110px -205px"
                if(hero.x<970) hero.x+=10
                break
            case 40:
                document.getElementById("hero").style.backgroundPosition="-85px -230px"
                if(hero.y<520) hero.y+=10
                break
            case 38:
                document.getElementById("hero").style.backgroundPosition = "-85px -180px"
                if(hero.y>10) hero.y-=10
                break
            case 32:
                document.getElementById("hero").style.backgroundPosition = "-85px -180px"
                var audio = new Audio("sounds/gun-shot.mp3")
                audio.volume = 0.4;
                audio.play()
                bullets.push({x:hero.x+8,y:hero.y-15})
                displayBullets()
                break
        }
    }
}

function gameLoop(){
    if(lives > 0){
        displayHero()
        moveEnemies()
        displayEnemies()
        moveBullets()
        displayBullets()
        detectCollision()
        playerHitDetected()
        displayScore()
        displayExplosions()
        displayLives()
    }else{
        clearInterval(interval)
        var audio = new Audio("sounds/explosion.wav")
        audio.volume = 0.4;
        audio.play()
        document.getElementById("game-over").style.display = "block"
        document.getElementById("score").style.display = "none"
        document.getElementById("game-over").innerText = "GAME OVER! SCORE: "+score
    }
}
$(document).ready(function(){
    gameLoop();
})