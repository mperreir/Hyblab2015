// Fonction de dessin du graphique
function Graph22draw(dataset){
    //Largeur et hauteur du graphe
    var larg = 800;
    var haut = 200;
    var barHaut = 100;
    var barPadding =2; //Padding des barres
    var nbb = dataset.length; // Nb de barres
    var lb = ((larg - nbb) / nbb); // Largeur barre
    var ch = (barHaut / d3.max(dataset, function(d){
       return d.Pourcentage //Coef. hauteur.
    }));

    //Creation élément SVG
    var svg = d3.select("#container_graph22")
        .append("svg")
        .attr("id", "graph22")
        .attr("width", larg + 50)
        .attr("height", haut)
        .attr("viewBox", "0 0 " + larg + " " + haut);
    
    // On crée le pattern pour l'image de la flèche    
    var defs = svg.append("defs")
        .append("pattern")
        .attr("id", "imgArrow")
        .attr("width", 25)
        .attr("height", 15)
            .append("image")
            .attr("xlink:href", "svg/graph2/arrow_graph22.svg")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 25)
            .attr("height", 15);

    // Création d'un groupe pour le texte
    var groupText = svg.selectAll("g")
        .data(dataset)
        .enter()
        .append("g")
        .attr("id", function(d){
            return "text_graph22_" + d.Pays;
        })
        .attr("class","text_graph22");
    
    // On crée les rectangles à une certaine position, avec une certaine couleur, en fonction de la data
    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("class","rect_graph22")
        .attr("data", function(d){
            return d.Pays;
        })
        .attr("id", function(d){
            return "rect_graph22_" + d.Pays;
        })
        .attr("x", function(d, i){
            return(i * lb);
        })
        .attr("y", function(d){
            return haut - (d.Pourcentage * ch);
        })
        .attr("width", lb - barPadding)
        .attr("height", function(d){
            return(d.Pourcentage * ch);
        })
        .attr("fill", function(d){
            var r=0, g=0, b=0;
            if (d.Pourcentage < 50){
                g = Math.round(((d.Pourcentage*136)/100) + 27);
                b = Math.round(((d.Pourcentage*14)/100) + 2);
            } else {
                r = Math.round(((d.Pourcentage*219)/100) + 0);
                g = Math.round(((d.Pourcentage*79)/100) + 163);
                b = Math.round(((d.Pourcentage*207)/100) + 14);
            }
            
            return "rgb("+r+","+g+","+b+")";
        });
    
    // On rajoute le nom du pays avec une police
    groupText.append("text")
        .text(function(d){
            return d.Pays;
        })
        .attr("x", function(d, i){
            return(i * lb);
        })
        .attr("y", function(d){
            return haut -(d.Pourcentage * ch) - 50;
        })
        .attr("font-family", "HelveticaLTStd-BoldCond")
        .attr("font-size", "14px")
        .attr("fill","#001B02")
        .attr("text-anchor", "start")
        .attr("opacity", "0.6");
    
    // Et le pourcentage avec une autre police
    groupText.append("text")
        .text(function(d){
            return Math.floor(d.Pourcentage) + "%";
        })
        .attr("x", function(d, i){
            return(i * lb);
        })
        .attr("y", function(d){
            return haut -(d.Pourcentage * ch) - 35;
        })
        .attr("font-family", "HelveticaLTStd-Bold")
        .attr("font-size", "14px")
        .attr("fill","#001B02")
        .attr("text-anchor", "start")
        .attr("opacity", "0.6");
    
    groupText.append("rect")
        .attr("x", function(d, i){
            return(i * lb);
        })
        .attr("y", function(d){
            return haut -(d.Pourcentage * ch) - 30;
        })
        .attr("width", 25)
        .attr("height", 15)
        .attr("fill", "url(#imgArrow)");
    
    // Fonctions de gestion d'événements
    
    $('.rect_graph22').mouseover(function(){
        var id = $(this).attr("id").split("_")[2];
        $("#text_graph22_" + id).show();
    });
    
    $('.rect_graph22').click(function(){
        
        // On récupère l'id
        var id = $(this).attr("id").split("_")[2];
        
        // On cache tous les textes sauf celui sur lequel on a cliqué
        $(".text_graph22").attr("class","text_graph22");
        $(".text_graph22").hide();
        
        // On rajoute la classe sur celui sélectionné et on l'affiche
        $("#text_graph22_" + id).attr("class","text_graph22 rect-selected");
        $("#text_graph22_" + id).show();
        
		// On déclenche le clic et on fait le scroll automatique dans la vue de la liste
		$("#country-choice a[data='" + id + "']").trigger('click');
		var scrollToEl = $("#country-choice a[data='" + id + "']");
		scrollToEl.scrollintoview();
    });
    
    $('.rect_graph22').mouseout(function(){
        // On récupère l'id
        var id = $(this).attr("id").split("_")[2];
        
        // Si le rectangle n'est pas celui sélectionné, on le cache
        if ($("#text_graph22_" + id).attr("class").indexOf("rect-selected") == -1){
            $("#text_graph22_" + id).hide();
        }
    });
}

// Appel à la fonction de dessin
d3.json("data/graph2/graph22.json", Graph22draw);


