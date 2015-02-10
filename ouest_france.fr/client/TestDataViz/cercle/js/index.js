var canvasSize = 200,
    centre = canvasSize/2,
    radius = canvasSize*0.8/2,
    s = Snap('#svg'),
    path = "",
    arc = s.path(path), 
    arc2 = s.path(path), 
    //startY = centre-radius,
    runBtn = document.getElementById('run'),
    percDiv = document.getElementById('percent'),
    input = document.getElementById('input');

input.onkeyup = function(evt) {
    if(isNaN(input.value)) {
      input.value = '';
    }
};

/*runBtn.onclick = function() {
 //cercle(180);
   run(input.value);
};*/
document.onload = function(){
  //run(input.value);
  run(200);
};
  


function cercle(d,support,color,stroke){
   startX = centre,
   startY = centre-radius,
   radians = Math.PI*(d-90)/180,
   endX = centre + radius*Math.cos(radians),
   endY = centre + radius*Math.sin(radians),
   largeArc = d>180 ? 1 : 0;
   path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endX+","+endY;
      support = s.path(path);
      support.transform("scale(-1,1) translate(-"+canvasSize+",0)"),
      support.attr({
          stroke: color,
          fill: 'none',
          strokeWidth: stroke,
        });
 
}

function run(percent) {
    var endpoint = percent;
    cercle(230,arc2,'#c8cccd',8);
    Snap.animate(0, endpoint,   function (val) {
        arc.remove();
   cercle(val,arc,'#127eb6',10);
        

  
        percDiv.innerHTML =    Math.round(val)+" <br> <br>Generalistes";

    }, 2000, mina.easeinout);  
}

run(200);





