var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
 
width = window.innerWidth;
height = window.innerHeight;

canvas.width = width;
canvas.height = height;

(function taxiContainer (){
    ctx.strokeStyle = 'black';
    ctx.strokeRect(250, 110, 50, 20);
    })();

(function taxiName(){
    ctx.fillStyle = "black";
    ctx.font = "15px Comic Sans MS";
    ctx.fillText("TAXI", 255, 125);
 })();

(function TopCar (){
ctx.beginPath();
ctx.moveTo(200, 130);
ctx.lineTo(130, 200);
ctx.lineTo(400, 200);
ctx.lineTo(350, 130);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();
})();

(function frontWindow (){
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(130, 200);
    ctx.lineTo(200, 130);
    ctx.closePath();
    ctx.fillStyle = "lightblue";
    ctx.fill();
})();

(function RecWindow1 (){
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(210, 140, 50, 40);
    })();

(function RecWindow2 (){
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(270, 140, 80, 40);
    })();


(function CarBottom (){
    ctx.fillStyle = 'yellow';
    ctx.fillRect(50, 180, 400, 70);
    })();

(function LeftWheel (){
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc (90, 250, 30, 0, Math.PI * 2, false);
    ctx.fill();
    })();

    (function LeftWheel (){
        ctx.fillStyle = 'grey';
        ctx.beginPath();
        ctx.arc (90, 250, 20, 0, Math.PI * 2, false);
        ctx.fill();
        })();

(function RightWheel (){
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc (400, 250, 30, 0, Math.PI * 2, false);
    ctx.fill();
    })();

(function RightWheel (){
    ctx.fillStyle = 'grey';
    ctx.beginPath();
    ctx.arc (400, 250, 20, 0, Math.PI * 2, false);
    ctx.fill();
})();
    

(function LogoCircle (){
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc (300, 210, 15, 0, Math.PI * 2, false);
    ctx.fill();
    })();

(function TLogo(){
    ctx.fillStyle = "yellow";
    ctx.font = "15px Comic Sans MS";
    ctx.fillText("T", 295, 215);
    })();