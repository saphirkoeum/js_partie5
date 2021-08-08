var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
 
canvas.width = "600";
canvas.height = "300";

(function roof (){
    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(200, 10);
    ctx.lineTo(100, 100);
    ctx.lineTo(300, 100);
    ctx.lineTo(300, 100);
    ctx.closePath();
    ctx.fill();
    })();

(function house (){
    ctx.fillStyle = 'grey';
    ctx.fillRect(100, 100, 200, 190);
    })();

(function roofWindow (){
    ctx.fillStyle = 'lightblue';
    ctx.beginPath();
    ctx.arc (200, 65, 30, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();
})();
    
(function ovalRightWindow (){
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.ellipse(150, 150, 30, 40, 0 * Math.PI/180, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
})();

(function ovalWindow2 (){
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.ellipse(250, 150, 30, 40, 0 * Math.PI/180, 0, 2 * Math.PI);
    ctx.fill();
})();
(function house (){
    ctx.fillStyle = 'yellow';
    ctx.fillRect(150, 220, 90, 70);
    })();

(function house (){
    ctx.fillStyle = 'red';
    ctx.fillRect(160, 230, 70, 50);
    })();
