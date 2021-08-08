var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
 
canvas.width = "500";
canvas.height = "500";

(function head (){
    ctx.fillStyle = '#a77803';
    ctx.beginPath();
    ctx.arc (250, 70, 65, 0, Math.PI * 2, false);
    ctx.fill();
    //left eye
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(70, 200);
    ctx.arc (230, 50, 10, 0, Math.PI * 2, false);
    ctx.fill();
    //left eye
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(70, 200);
    ctx.arc (270, 50, 10, 0, Math.PI * 2, false);
    ctx.fill();
})();

// (function body (){
//     ctx.strokeStyle = 'black';
//     ctx.beginPath();
//     ctx.moveTo(50, 120);
//     ctx.lineTo(210, 120);
//     ctx.stroke();
//     ctx.fill();
//     })();
(function body (){
ctx.fillStyle = '#a77803';
ctx.fillRect(100, 110, 300, 40);
})();
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.moveTo(100, 130);
ctx.arc(100, 130, 20, 1.5 * Math.PI, Math.PI * 0.5, true);
ctx.fillStyle = 'green';
ctx.moveTo(400, 130);
ctx.arc(400, 130, 20, 1.5 * Math.PI, Math.PI * 0.5, false);
ctx.fill();
