var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
 
canvas.width = "400";
canvas.height = "400";

(function soucoupeTop (){
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(120, 180);
    ctx.bezierCurveTo(100, 50, 250, 50, 220, 180);
    ctx.fill();
    })();
(function alien (){
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.ellipse(170, 130, 20, 30, 0 * Math.PI/180, 0, 2 * Math.PI);
    ctx.fill();
})();
(function alienEye (){
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.ellipse(160, 120, 5, 10, 0 * Math.PI/180, 0, 2 * Math.PI);
    ctx.ellipse(180, 120, 5, 10, 0 * Math.PI/180, 0, 2 * Math.PI);
    ctx.fill();
})();
(function alienMouth (){
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc (170, 140, 5, 0, Math.PI , false);
    ctx.fill();
})();
(function soucoupeBas (){
    ctx.fillStyle = 'pink';
    ctx.beginPath();
    ctx.moveTo(70, 200);
    ctx.quadraticCurveTo(170, 100, 280, 200);
    ctx.moveTo(70, 200);
    ctx.quadraticCurveTo(170, 300, 280, 200);
    // ctx.moveTo(230, 100);
    // // ctx.quadraticCurveTo(170, -60, 130, 100);
    ctx.fill();
})();
