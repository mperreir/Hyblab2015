"use strict";

var color1 = d3.scale.quantize().range(["#127EB6"]);
var color2 = d3.scale.quantize().range(["#F9A21C"]);
var color3 = d3.scale.quantize().range(["#111420"]);

var size = 400;

var pack = d3.layout.pack()
    .sort(null)
    .size([size, size])
    .value(function(d) { return d.effectifs * d.effectifs; })
    .padding(5);

/*var svg = d3.select(document.getElementById('bubbles'))
	.append("svg")
	.attr("id", "bubblesSVG")
    .attr("width", size)
    .attr("height", size);*/
var svg = d3.select(document.getElementById('bubblesSVG'));

d3.csv("DatavizBubble/bubbleBD.csv", type, function(error, bubbleBD) {
   	svg.selectAll("circle")
	  	.data(pack.nodes({children: bubbleBD}).slice(1))
	  	.enter().append("circle")
	  	.attr("id", function(d) { return d.numero; })
	  	.attr("r", function(d) { return d.r; })
	  	.attr("cx", function(d) { return d.x; })
	  	.attr("cy", function(d) { return d.y; })	 
	  	.on("click", clic)
		.append("title")
	  	.text(function(d) {
			return d.praticiens
				+ "\nEffectifs : " + d.effectifs;
	  	});
	chargeBubble(0);
});
	
  function chargeBubble(nombre) {
	  var ret;
	  svg.selectAll("circle")
	  .style("fill", function(d) { 
	  if(nombre == 0){return color2(d.effectifs);}
	  else{
		if(d.numero == nombre){
			ret = d.effectifs; 
			return color2(d.effectifs);}
		else{return color3(d.effectifs);}
	  }
	 });
	 return ret;
	}

function type(d) {
  d.effectifs = +d.effectifs;
  return d;
}

function clic(evt) {
	choixBubble(Number.parseInt(evt.numero));
    }

d3.select(self.frameElement).style("height", size + "px");
