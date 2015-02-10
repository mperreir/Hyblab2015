var s = Snap("#bar_chart");
path = "",
bar1 = s.path(path), 
percDiv = document.getElementById('percent'),
spe = document.getElementById('spe'),
//create bars

document.onload = function(){
  //run(input.value);
  run(200);
};


function run(percent) {
    var endpoint = percent;
    Snap.animate(0, endpoint,   function (val) {
    bar1.remove();
    bar1 = s.rect(0, 10, val, 20, 0).attr({
    fill: "#bada55"
});
 percDiv.innerHTML =    Math.round(val);
    }, 2000, mina.easeinout);  
  spe.innerHTML =  "Genraliste";
}
run(300);