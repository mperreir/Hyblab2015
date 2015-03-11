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
	
var pictosPraticiens = {
    '0'		: '../imgs/picto/praticiens/praticiens.svg',
    '1'  	: '../imgs/picto/praticiens/generalistes.svg',
    '13'    : '../imgs/picto/praticiens/audio.svg',
    '2'   	: '../imgs/picto/praticiens/cardiologue.svg',
    '11'    : '../imgs/picto/praticiens/dentiste.svg',
    '4'     : '../imgs/picto/praticiens/gastro.svg',
    '5'   	: '../imgs/picto/praticiens/psychiatrie.svg',
    '3'   	: '../imgs/picto/praticiens/gynecologue.svg',
    '12'    : '../imgs/picto/praticiens/gastro.svg',
    '10'    : '../imgs/picto/praticiens/radio.svg',
    '6' 	: '../imgs/picto/praticiens/ophtalmologie.svg',
    '8'     : '../imgs/picto/praticiens/pediatrie.svg',
    '9'   	: '../imgs/picto/praticiens/pneumologue.svg',
    '14'    : '../imgs/picto/praticiens/podologue.svg',
    '7'     : '../imgs/picto/praticiens/rhino.svg'
};

function chargeBubble(nombre) {
	var ret;
	
	svg.selectAll("circle")
	.style("fill", function(d) { 
		if(nombre == 0){
			return color2(d.effectifs);
		}
		else{
			if(d.numero == nombre){
				ret = d.effectifs; 
				/*var defs = svg.append('svg:defs');
			    defs.append('svg:pattern')
			        .attr('id', 'fill'+nombre.toString())
			        .attr('patternUnits', 'userSpaceOnUse')
			        .attr('width', d3.select(this).attr("r")*2)
			        .attr('height', d3.select(this).attr("r")*2)
			        .append('svg:image')
			        .attr('xlink:href', pictosPraticiens[nombre])
			        .attr('x', 10)
			        .attr('y', 5)
			        .attr('width', d3.select(this).attr("r")*2)
			        .attr('height', d3.select(this).attr("r")*2);
			    return 'url(#fill'+nombre.toString()+')';*/
				return color2(d.effectifs);
			}
			else{
				return color3(d.effectifs);
			}
		}
	});
	return ret;
}

function type(d) {
	d.effectifs = +d.effectifs;
	return d;
}

function clic(evt) {
	choixBubble(Number.parseInt(evt.numero),0);
}

d3.select(self.frameElement).style("height", size + "px");
