"use strict";

// requestAnimationFrame Shim
function lancerDataviz(valeur){
 
jQuery(function($) {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
 

 var canvas = document.getElementById('myCanvas');
 var context = canvas.getContext('2d');
 var x = canvas.width / 2;
 var y = (canvas.height*0.8) / 2;
 var radius = 75;
 var realValue = valeur;
 var endPercent = (valeur*100);
 var curPerc = 0;
 //var counterClockwise = true;
 var circ = Math.PI * 2;
 var quart = Math.PI / 2;

 context.lineWidth = 10;
 context.strokeStyle = '#ad2323';
 context.shadowOffsetX = 0;
 context.shadowOffsetY = 0;
 context.shadowBlur = 5;
 context.shadowColor = '#00000';


 function animate(current) {
     context.clearRect(0, 0, canvas.width, canvas.height);
     context.beginPath();
     context.arc(x, y, radius, ((circ) * (1-current)) - quart, - quart, false);
     context.stroke();
     var text =  Math.round((current));
     var text2 =  "Generalistes";
     context.fillText(text,120,50);
     context.fillText(text2,120,80);
     context.font="40px Verdana";
     //context.scale(-1,1);
     //context.translate(canvas.width,0);
     curPerc++;
     if (curPerc <= endPercent) {
         requestAnimationFrame(function () {
             animate(curPerc / 100)
         });
     }
 }

 animate(valeur);});
}