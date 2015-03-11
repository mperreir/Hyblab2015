"use strict";	
	
	var width = 960,
	    height = 600;

	var medById = d3.map();

	var dsv = d3.dsv(";", "text/plain");

	// CREATE SVG DRAWING CANVAS
	/*var paper = d3.select(document.getElementById('carte'))
    .append("svg")
    .attr("id", "canvas")
    .attr("width", 800)
    .attr("height", 600);*/

	queue()
		.defer( d3.xml, "DatavizCarte/Map.svg")
		.defer( dsv, "DatavizCarte/Medecins.csv", function(d) {
			if( parseInt(d.POPU) > 0 )
				ratio = 1000 * parseFloat(d.MEDECINS) / parseInt(d.POPU);
			else
				ratio = 0;
			medById.set(d.CODGEO, ratio); })
		.await(ready);

	function ready(error, map_data)
	{
		var svgNode = document.importNode(map_data.documentElement,true);

		//paper.node().appendChild(svgNode);
		
		if(window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
    		xmlhttp=new XMLHttpRequest();
  		}
		else{// code for IE6, IE5
  			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  		}
		xmlhttp.open("GET","map_data.xml",false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML; 

		var canvas = new fabric.Canvas('canvas', {
  backgroundColor: 'rgb(100,100,100)' , renderOnAddRemove: false 
		});
		
		var i;
		var insee = new Array();
		var path = new Array();
		var l = map_data.getElementsByTagName("svg")[0].childNodes[3].getElementsByTagName("g")[0].getElementsByTagName("g");

    	var insee;
    	var cache=0;
    	for(j=0; j<10000; j+=1000)
    	{
    		if( cache )
    		{
	    		//canvas.getContext().putImageData(cache,0,0);
	    		fabric.Image.fromURL(cache, function(img) {
            img.left = 0;
            img.top = 0;
            canvas.add(img);
        })
    		}
	    	for(i=j; i<j+1000; i++){
	    		insee=l[i].attributes[1].nodeValue;
	    		var ratio=25*medById.get(insee);
	    		if( l[i].childNodes.length == 3)
	    		{
						var path = new fabric.Path(l[i].childNodes[1].attributes[0].nodeValue);
						path.set({fill: 'rgb('+parseInt(255-ratio)+','+parseInt(255)+','+parseInt(255-ratio)+')'});
						canvas.add(path);
	    			
	    		}
	    	}
	    	canvas.renderAll();
	    	//cache = canvas.getContext().getImageData(0,0,1500,1000);
	    	cache = canvas.toDataURL({
					  format: 'png',
					  left: 0,
					  top: 0,
					  width: 1500,
					  height: 1000
					});
	    	canvas.clear();
    	}
    	canvas.addImage(cache)
    	canvas.renderAll();
    	alert('fin');

    	/*var insee=map_data.getElementsByTagName("svg")[0].childNodes[3].getElementsByTagName("g")[0].getElementsByTagName("g")[12].attributes[1].nodeValue;
		alert(insee);
		var path=map_data.getElementsByTagName("svg")[0].childNodes[3].getElementsByTagName("g")[0].getElementsByTagName("g")[12].getElementsByTagName("path")[0].attributes[0].nodeValue;
		alert(path);*/
	}

	function updateMapFill(seuil)
	{
		d3.selectAll("#medecins-light > g > g")
			.datum( function(d) { return medById.get(this.attributes["code_insee"].value); } )
			.attr("fill", function(d) { 
				val=25*this.__data__;
				if( val >= seuil)
					return d3.rgb(255-val,255,255-val);
				else
					return "#FF0000";
			}) 
			.attr("stroke","None");
	}