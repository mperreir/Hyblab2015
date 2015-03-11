"use strict";

// requestAnimationFrame Shim
$("#page4").ready( function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
 

var canvas = document.getElementById('myCanvasBar');
 var context = canvas.getContext('2d');
var x = canvas.height / 2;
 var y = (canvas.height*0.8) / 2;
 var radius = 75;
 var endPercent = 70;
 var curPerc = 0;
 var counterClockwise = true;
 var circ = Math.PI * 2;
 var quart = Math.PI / 2;

 context.lineWidth = 10;
 context.fillStyle = '#FFFFFF';
 context.shadowOffsetX = 0;
 context.shadowOffsetY = 0;
 context.shadowBlur = 5;
 context.shadowColor = '#000000';

 function oneDataViz(data){
     for (var key in data){
               animate(key); 
    }
 }

 function animate(current) {
     context.clearRect(0, 0, x, y);
     context.beginPath();
     //context.rect(150,10,1-current*100,20);
     context.rect(10,10,current*100,20);
     context.fill();
     //context.stroke();
     var text =  Math.round(current*100);
     var text2 =  "Generalistes";
     context.fillText(text,120,50);
     context.fillText(text2,120,80);
     context.font="40px Verdana";
     //context.scale(-1,1);
     //context.translate(canvas.width,0);
     curPerc++;
     if (curPerc < endPercent) {
         requestAnimationFrame(function () {
             animate(curPerc / 100)
         });
     }
 }

 animate();
});