var context;
var x = 75;
var y = 75;
var dx = 3;
var dy = 2;
var blueShade = 0;

function init(){
    context = playball.getContext('2d');
    setInterval(draw, 10);
}

function draw(){
    context.clearRect(0, 0, 320, 240);
    context.beginPath();
    if(blueShade >= 255){
        blueShade = 0;
    }
    context.fillStyle = "#00" + "00" + blueShade.toString(16);
    blueShade++;
    //Draws a circle of radius 10 at the coordinate 50, 50 on the canvas
    context.arc(x, y, 10, 0, Math.PI*2, true);
    context.closePath();
    context.fill();
    //Boundary logic
    if(x < 0 || x > 320){
        dx = -dx;
    }
    if(y < 0 || y > 240){
        dy = -dy;
    }
    x += dx;
    y += dy;
}

