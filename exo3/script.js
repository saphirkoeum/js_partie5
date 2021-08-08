var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
 
canvas.width = "300";
canvas.height = "300";


(function cone (){
    ctx.strokeStyle = "black";
    ctx.fillStyle = "#ffb700";
    ctx.beginPath();
    ctx.moveTo(150, 300);
    ctx.lineTo(230, 100);
    ctx.lineTo(70, 100);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    })();

(function quadrillage(){
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(210, 150);
    ctx.lineTo(180, 100);
    ctx.moveTo(140, 100);
    ctx.lineTo(190, 200);
    ctx.moveTo(100, 100);
    ctx.lineTo(170, 250);
    ctx.moveTo(100, 100);
    ctx.lineTo(80, 130);
    ctx.moveTo(140, 100);
    ctx.lineTo(100, 170);
    ctx.moveTo(180, 100);
    ctx.lineTo(115, 210);
    ctx.moveTo(210, 150);
    ctx.lineTo(140, 280);
    ctx.closePath();
    ctx.stroke();
    })();

(function iceCream (){
    ctx.fillStyle = 'pink';
    ctx.beginPath();
    ctx.moveTo(70, 100);
    ctx.quadraticCurveTo(190, -90, 230, 100);
    ctx.fill();
})();

(function leftEye (){
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc (130, 50, 10, 0, Math.PI * 2, false);
    ctx.fill();
})();
(function leftEye (){
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc (130, 50, 5, 0, Math.PI * 2, false);
    ctx.fill();
})();
(function leftRight (){
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc (180, 50, 10, 0, Math.PI * 2, false);
    ctx.fill();
})();
(function leftEye (){
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc (180, 50, 5, 0, Math.PI * 2, false);
    ctx.fill();

})();
(function smile (){
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc (155, 80, 10, 0, Math.PI, false);
    ctx.fill();
})();
(function smile (){
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc (155, 80, 5, 0, Math.PI, false);
    ctx.fill();
})();



// A quadratic Béziurver curve


// (function iceCream (){
//     ctx.fillStyle = 'pink';
//     ctx.beginPath();
//     ctx.arc (150, 99, 80, 0, Math.PI, true);
//     ctx.fill();
// })();
