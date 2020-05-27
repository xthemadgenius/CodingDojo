// question #1
function sigma(num){
    var arr = [];
    for(var i = 1; i <= num; i++){
        arr.push(i);
    }
    return arr.reduce((a,b) => a + b);
}
sigma(5);

// question #2
function facrorial(num){
    var arr = [];
    for(var i = 1; i <= num; i++){
        arr.push(i);
    }
    return arr.reduce((a,b) => a * b);
}
facrorial(5);

// question #3
function fibonacci(n) {
    var newNum = 0;
    var prev = 0;
    var curr = 1;
    if (n === 0 || n === 1) {
        return n;
    }
    for (var i = 2; i <= n; i++) {
        newNum = prev + curr;
        prev = curr;
        curr = newNum;
    }
    return curr;
}
fibonacci(12)

// question #4
function secToLast(arr) {
    if (arr.length <= 2) {
        return null;
    }
    return arr[arr.length - 2];
}
secToLast([42, true, 4, "Liam", 7])

// question #5
function nthToLast(arr, y) {
    if (arr.length < y) {
        return null;
    }
    return arr[arr.length - y];
}
nthToLast([5,2,3,6,4,9,7],3)

// question #6
var getSec = arr => arr.sort(function(a,b){
    return b-a;
})[1];
console.log(getSec([42,1,4,3.14,7,14]));

// question #7
var doubTrop = dup => dup.reduce(function (res, current) {
    return res.concat([current, current]);
}, []);
console.log(doubTrop( [4, "Ulysses", 42, false]));

// ***** Part 2 *********

var world = [
    [1,1,1,0,0,0,0,3,2,2],
    [0,0,0,0,1,0,0,3,3,3],
    [0,2,2,0,1,0,0,0,0,0],
    [0,2,2,0,1,1,1,1,0,0],
    [0,2,2,0,1,0,0,0,0,3],
    [0,2,2,0,1,0,0,3,3,3],
    [0,0,0,0,1,0,0,3,3,3]];

var mapping = {
    0: 'white',
    1: 'red',
    2: 'yellow',
    3: 'blue',
    4: 'green'
}

function drawWorld()
{
    var output = '';
    for(var i=0; i<world.length; i++)
    {
        output += '<div class="row">';
        for(var j=0; j<world[i].length; j++)
        {
            output += "<div class='"+mapping[world[i][j]]+"'></div>";
        }
        output += '</div>';
    }
    document.getElementById('container').innerHTML = output;
    // console.log(output);
}

document.onclick = function(e)
{
    // console.log('Coordinate Clicked', e.x, e.y);

    var x = Math.floor(e.x/50);
    var y = Math.floor(e.y/50);

    // console.log('X, Y', x, y);
    // console.log('Original Color', world[y][x]);

    console.log('Replace color', world[y][x], ' with color 4 starting from x:', x, 'y:', y);
    fill(x, y, world[y][x], 4);
}

function fill(x,y,original_color, color)
{
if(y<0 || y>=world.length || x<0 || x>=10)
return false;

    if(world[y][x] != original_color)
        return false;
    
    world[y][x] = color;
    fill(x, y-1, original_color, color);
    fill(x, y+1, original_color, color);
    fill(x-1, y, original_color, color);
    fill(x+1, y, original_color, color);	

    drawWorld();
    
}

drawWorld();

// had some help on the second part was difficult to figure out 