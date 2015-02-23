"use strict";

var paysSelectionne="";

function Graph21draw(dataset)
{
 	//Largeur et hauteur du graphe
	var larg = 600;
	var haut = 400;

	var x = 300;
	var y = 200;
	var nbPays=0;
	
	// Dimensions de chaque arc de cercle
	var dimensions = [170,138,110,85];
	
	// On vide la div avant d'insérer le nouveau graphique
	$("#graph2_consommation").empty();
	
	//Creation de l'élément SVG
	var svg = d3.select("#graph2_consommation")
		.append("svg")
		.attr("id", "graph21")
		.attr("width", larg)
		.attr("height", haut)
		.attr("viewBox", "0 0 " + larg + " " + haut);
	
	var groups = svg.selectAll("g")
		.data(dataset)
		.enter()
		.append("g");
		
	var texts= svg.selectAll("text")
					.data(dataset)
    				.enter();
	
	var circles = svg.selectAll("circle")
		.data(dataset)
    	.enter();
    
    var rects = svg.selectAll("rect")
    	.data(dataset)
    	.enter();
	
	// On rajoute les arcs de cercle (path)
	groups.append("path")
		.attr("d", function(d){
			if(paysSelectionne==="Lettonie"||paysSelectionne==="France"||paysSelectionne==="Malte")
				paysSelectionne="";
			if(nbPays>3 || (paysSelectionne==="" && nbPays===3))//On doit réinitialiser le nombre
				nbPays=0;
			if(d.Nom==="Lettonie"||d.Nom==="France"||d.Nom==="Malte"||d.Nom===paysSelectionne)
			{
				nbPays++;
				var r = dimensions[nbPays-1];
				// On retourne un path avec un arc de cercle, selon les coordonnées que l'on a
				return "M " + x + "," + y + 
				"m 0, -" + r + 
				"a -" + r + "," + r + " 0 1,0 0," + (r*2) + 
				" l 0, -" + (15/100)*r + 
				" a -" + (85/100)*r + "," + (85/100)*r +" 0 0,1 0,-" + (85/100)*r*2;
			}
			else
				return 0;
		})
		.attr("fill", function(d){
                    var r=0, g=0, b=0;
            if (d.Pourcentage*(100/27.5) < 50){//On met la couleur en fonction du pourcentage
                g = Math.round(((d.Pourcentage*(100/27.5)*136)/100) + 27);
                b = Math.round(((d.Pourcentage*(100/27.5)*14)/100) + 2);
            } else {
                r = Math.round(((d.Pourcentage*(100/27.5)*219)/100) + 0);
                g = Math.round(((d.Pourcentage*(100/27.5)*79)/100) + 163);
                b = Math.round(((d.Pourcentage*(100/27.5)*207)/100) + 14);
            }
            
            return "rgb("+r+","+g+","+b+")";
        });
    
    // On rajoute les jolis cercles, mais d'abord les cercles du fond
    nbPays = 0;
    circles.append("circle")
    	.attr("cx", x)
    	.attr("r", function(d){
    		if(paysSelectionne==="Lettonie"||paysSelectionne==="France"||paysSelectionne==="Malte")
				paysSelectionne="";
			if(nbPays>3 || (paysSelectionne==="" && nbPays===3))//On doit réinitialiser le nombre
				nbPays=0;
			if(d.Nom==="Lettonie"||d.Nom==="France"||d.Nom==="Malte"||d.Nom===paysSelectionne)
			{
				nbPays++;
				var r = dimensions[nbPays-1];
				return (20/200)*r;
			}
			else
				return 0;
    	})
    	.attr("cy", function(d){
    		if(paysSelectionne==="Lettonie"||paysSelectionne==="France"||paysSelectionne==="Malte")
				paysSelectionne="";
			if(nbPays>3 || (paysSelectionne==="" && nbPays===3))//On doit réinitialiser le nombre
				nbPays=0;
			if(d.Nom==="Lettonie"||d.Nom==="France"||d.Nom==="Malte"||d.Nom===paysSelectionne)
			{
				nbPays++;
				var r = dimensions[nbPays-1];
				return y - (92.5/100)*r;
			}
			else
				return 0;
    	})
    	.attr("fill", "#fff3d2");
    
    // Et maintenant les vrais cercles
    nbPays = 0;
    circles.append("circle")
    	.attr("cx", x)
    	.attr("r", function(d){
    		if(paysSelectionne==="Lettonie"||paysSelectionne==="France"||paysSelectionne==="Malte")
				paysSelectionne="";
			if(nbPays>3 || (paysSelectionne==="" && nbPays===3))//On doit réinitialiser le nombre
				nbPays=0;
			if(d.Nom==="Lettonie"||d.Nom==="France"||d.Nom==="Malte"||d.Nom===paysSelectionne)
			{
				nbPays++;
				var r = dimensions[nbPays-1];
				return (15/200)*r;
			}
			else
				return 0;
    	})
    	.attr("cy", function(d){
    		if(paysSelectionne==="Lettonie"||paysSelectionne==="France"||paysSelectionne==="Malte")
				paysSelectionne="";
			if(nbPays>3 || (paysSelectionne==="" && nbPays===3))//On doit réinitialiser le nombre
				nbPays=0;
			if(d.Nom==="Lettonie"||d.Nom==="France"||d.Nom==="Malte"||d.Nom===paysSelectionne)
			{
				nbPays++;
				var r = dimensions[nbPays-1];
				return y - (92.5/100)*r;
			}
			else
				return 0;
    	})
    	.attr("fill", "#fac768");
    
    // Pareil pour les rectangles oranges
    nbPays = 0;
    rects.append("rect")
    	.attr("x", x - 4)
    	.attr("y", function(d){
    		if(paysSelectionne==="Lettonie"||paysSelectionne==="France"||paysSelectionne==="Malte")
				paysSelectionne="";
			if(nbPays>3 || (paysSelectionne==="" && nbPays===3))//On doit réinitialiser le nombre
				nbPays=0;
			if(d.Nom==="Lettonie"||d.Nom==="France"||d.Nom==="Malte"||d.Nom===paysSelectionne)
			{
				nbPays++;
				var r = dimensions[nbPays-1];
				return y + (85/100)*r - 5;
			}
			else
				return 0;
    	})
    	.attr("width", 13)
    	.attr("height", function(d){
    		if(paysSelectionne==="Lettonie"||paysSelectionne==="France"||paysSelectionne==="Malte")
				paysSelectionne="";
			if(nbPays>3 || (paysSelectionne==="" && nbPays===3))//On doit réinitialiser le nombre
				nbPays=0;
			if(d.Nom==="Lettonie"||d.Nom==="France"||d.Nom==="Malte"||d.Nom===paysSelectionne)
			{
				nbPays++;
				var r = dimensions[nbPays-1];
				return (15/100)*r + 10;
			}
			else
				return 0;
    	})
    	.attr("fill","#fff3d2");
    
    
    nbPays = 0;
    rects.append("rect")
    	.attr("x", x)
    	.attr("y", function(d){
    		if(paysSelectionne==="Lettonie"||paysSelectionne==="France"||paysSelectionne==="Malte")
				paysSelectionne="";
			if(nbPays>3 || (paysSelectionne==="" && nbPays===3))//On doit réinitialiser le nombre
				nbPays=0;
			if(d.Nom==="Lettonie"||d.Nom==="France"||d.Nom==="Malte"||d.Nom===paysSelectionne)
			{
				nbPays++;
				var r = dimensions[nbPays-1];
				return y + (85/100)*r + (15/800)*r;
			}
			else
				return 0;
    	})
    	.attr("width", 5)
    	.attr("height", function(d){
    		if(paysSelectionne==="Lettonie"||paysSelectionne==="France"||paysSelectionne==="Malte")
				paysSelectionne="";
			if(nbPays>3 || (paysSelectionne==="" && nbPays===3))//On doit réinitialiser le nombre
				nbPays=0;
			if(d.Nom==="Lettonie"||d.Nom==="France"||d.Nom==="Malte"||d.Nom===paysSelectionne)
			{
				nbPays++;
				var r = dimensions[nbPays-1];
				return (45/400)*r;
			}
			else
				return 0;
    	})
    	.attr("fill","#e94c2d");
    
    // On insère les texts sur les noms de pays, et aussi les pourcentages
    texts.append("text")
    	.text(function(d){
    		if(d.Nom==="Lettonie"||d.Nom==="France"||d.Nom==="Malte"||d.Nom===paysSelectionne)
    			if (d.Nom==="Malte")
    				return d.Nom + " (moins performant)"
    			else if (d.Nom==="Lettonie")
    				return d.Nom + " (plus performant)"
    			else
    				return d.Nom;
    		else
    			return "";
    	})
    	.attr("x",function(d){
    		return x + 20;
    	})
    	.attr("y",function(d){
    		if(nbPays>3 || (paysSelectionne==="" && nbPays===3))//On doit réinitialiser le nombre 
				nbPays=0;
			if(d.Nom==="Lettonie"||d.Nom==="France"||d.Nom==="Malte"||d.Nom===paysSelectionne){
    			nbPays++;	
    			return y+dimensions[nbPays-1];
			}
			else
				return 0;
    	})
    	.attr("font-family", "HelveticaLTStd-BoldObl")
        .attr("font-size", "20px")
        .attr("opacity","0.6")
        .attr("fill","#001B02");
    	
   	 texts.append("text")    	
    	.text(function(d){
    		if(d.Nom==="Lettonie"||d.Nom==="France"||d.Nom==="Malte"||d.Nom===paysSelectionne)
    		{
    			return d.Pourcentage.toFixed(2) + "%";
    		}
    		else
    		{
    			return "";
    		}
    	})
    	.attr("x",function(d){
    		return x + 20;
    	})
    	.attr("y",function(d){
    		if(nbPays>3 || (paysSelectionne==="" && nbPays===3))
				nbPays=0;
    		if(d.Nom==="Lettonie"||d.Nom==="France"||d.Nom==="Malte"||d.Nom===paysSelectionne)
    		{
    			nbPays++;
    			return y-dimensions[nbPays-1] + 15;
    		}
    		else
    			return 0;
    	})
    	.attr("font-family", "HelveticaNeue-Thin")
        .attr("font-size", "20px")
        .attr("font-weight", "bold")
        .attr("opacity", "0.6")
        .attr("fill","#001B02");
    
    
}

function loadGraph21(pays){
	file = "data/graph2/graph21.json";
	paysSelectionne = pays;
	d3.json(file,Graph21draw);
}
// Initialisation du graphique
d3.json("data/graph2/graph21.json", Graph21draw);

