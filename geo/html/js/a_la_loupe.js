"use strict";

  var lpicto = 22; // taille d'un pictogramme
  var start_val = 0; // valeur de depart de la transition  l'animation
  var larg = lpicto*40; // largeur du tracé
  var haut = 440; // hauteur de tracé
  var barPadding = lpicto - (2-lpicto/8); // espace entre les barres
  var lb = (lpicto*6); //Largeur d'une barre
  var valeurMax = 100; // valeur mawimale d'une bar27
  var ch = (haut / valeurMax); // coefficient d'ecartement
  var decalage = 8.8; // decalage entre l'energie renouvellable et non renouvellable
  var temps_transition_texte = 1700; // temps de la transition pour le texte
  var temps_transition_rectangle = 2700; //temps de la transition des rectangles
  
  // dessin des barres
  function draw (dataset){
    
      //Creation de élément SVG
      var svg = d3.select(".a_la_loupe")
        .append("svg")
        .attr("id","a_la_loupe")
        .attr("width", larg)
        .attr("height", haut);
            
      // construction des motifs
      creationMotif(svg,"svg/graph3/nuc.svg","nucleaire_clair");
      creationMotif(svg,"svg/graph3/geo.svg","geothermique_clair");
      creationMotif(svg,"svg/graph3/bio.svg","biomasse_clair");
      creationMotif(svg,"svg/graph3/sol.svg","solaire_clair");
      creationMotif(svg,"svg/graph3/eolien.svg","eolien_clair");
      creationMotif(svg,"svg/graph3/hyd.svg","hydrolique_clair");
  
      creationMotif(svg,"svg/graph3/nucp.svg","nucleaire_sombre");
      creationMotif(svg,"svg/graph3/geop.svg","geothermique_sombre");
      creationMotif(svg,"svg/graph3/biop.svg","biomasse_sombre");
      creationMotif(svg,"svg/graph3/solp.svg","solaire_sombre");
      creationMotif(svg,"svg/graph3/eolienp.svg","eolien_sombre");
      creationMotif(svg,"svg/graph3/hydp.svg","hydrolique_sombre");
  
      // ajout des barres de fond (toutes à 100 %)
      svg.selectAll("rect.fond")
        .data(dataset)
        .enter()
        .append("rect")
          .attr("class", "fond")
          .attr("x", function(d, i){
            if(i!=5)
             return(i * lb);
             return i*(lb+decalage);
          })
          .attr("y", function(d){
               return haut -(valeurMax*ch);
           })
          .attr("width", lb - barPadding)
          .attr("height", function(d){
               return(valeurMax*ch);
          })
          
           // remplissage des barres avec des motifs correspondants
          .style('fill',function(d){
            switch(d.energie){
              case 'Nucléaire' : return 'url(#nucleaire_sombre)';
              case 'Géothermique' : return 'url(#geothermique_sombre)';
              case 'Biomasse' : return 'url(#biomasse_sombre)';
              case 'Solaire' : return 'url(#solaire_sombre)';
              case 'Eolien' : return 'url(#eolien_sombre)';
              case 'Hydraulique' : return 'url(#hydrolique_sombre)';
            }
          });
           
      // ajout des barres en fonction du pourcentage à representer
      svg.selectAll("rect.forme")
       .data(dataset)
       .enter()
       .append("rect")
        .attr("class", "forme")
        .attr("x", function(d, i){
             if(i!=5)
              return(i * lb);
             return i*(lb+decalage);
         })
        .attr("y", function(d){
               return haut ;
           })
        .attr("width", lb - barPadding)
        .attr("height", 10) 
        // remplissage des barres avec des motifs correspondants
        .style('fill', function(d){
          switch(d.energie){
            case 'Nucléaire' : return 'url(#nucleaire_clair)';
            case 'Géothermique' : return 'url(#geothermique_clair)';
            case 'Biomasse' : return 'url(#biomasse_clair)';
            case 'Solaire' : return 'url(#solaire_clair)';
            case 'Eolien' : return 'url(#eolien_clair)';
            case 'Hydraulique' : return 'url(#hydrolique_clair)';
          }
        })
        .transition() 
          .delay(function (d, i) { return i*150; })
          .duration(temps_transition_rectangle)
          
          .attr("height", function(d){
                 return(d.valeur*ch);
          })
          .attr("y", function(d){
                 return haut -(d.valeur*ch);
             })
          .ease("elastic");
      
    // ajout texte pourcentage
    svg.selectAll("text.pourcentage")
      .data(dataset)
      .enter()
      .append("text")
      .attr("class", "pourcentage")
      .text(start_val)
      .attr("x", function(d, i){
        var decalage_texte = 20;
         if(i!=5)
            return((i * lb)+decalage_texte);
          return((i * (lb+decalage))+decalage_texte);
       })
      .attr("y", function(d){
             return haut -((d.valeur * ch))-10;
      })
      .attr("font-family", "HelveticaNeue-Thin")
      .attr("font-size", "35px")
      .attr("fill","black")
      .transition()
        .duration(temps_transition_texte)
        .tween("text", function(d) {
            var i = d3.interpolate(this.textContent,d.valeur);
              return function(t) {
                this.textContent = Math.round(i(t))+"%";
              };
        });
  }
  
  // ajournement des barres
  function redraw (dataset){
    
    //recuperation élément SVG
    var svg = d3.select("#a_la_loupe")
  
   // ajournement des barres en fonction du pourcentage à representer
    svg.selectAll("rect.forme")
      .data(dataset)
      .transition() 
        .delay(function (d, i) { return i*100; })
        .duration(temps_transition_rectangle)
        .attr("height", function(d){
               return(d.valeur * ch);
        })
        .attr("y", function(d){
               return haut -(d.valeur * ch)+ch;
           })
        .ease("elastic"); 

    // ajout texte
    svg.selectAll("text.pourcentage")
      .data(dataset)
      .attr("font-family", "HelveticaNeue-Thin")
      .attr("font-size", "35px")
      .attr("fill","black")
      .transition()
        .duration(temps_transition_texte)
        .attr("x", function(d, i){
          var decalage_texte = 20;
          if(i!=5)
            return((i * lb)+decalage_texte);
          return((i * (lb+decalage))+decalage_texte);
        })
        .attr("y", function(d){
               return haut -((d.valeur * ch))-10;
        })
        .tween("text", function(d) {
          var i = d3.interpolateRound(0, d.valeur);
            return function(t) {
             this.textContent = i(t)+"%";
           };
        });
       
  }

  function creationMotif (svg, file, nomID){
  svg.append('defs')
        
        .append('pattern')
          .attr('patternUnits', 'userSpaceOnUse')
          .attr('id', nomID) 
          .attr('x',0)
          .attr('y',0)
          .attr('width', 22,5)
          .attr('height', 22,5)
          .append("svg:image")
            .attr("xlink:href", file)
            .attr('x',0)
            .attr('y',0)
            .attr('width', 21)
            .attr('height', 21);
  }

  function nomEnergie(dataset){
    
    var hauteur_legende = haut/10;
    
    //Creation élément SVG
    var svg = d3.select(".nomEnergie")
      .append("svg")
      .attr("id","legende_loupe")
      .attr("width", larg)
      .attr("height", hauteur_legende);
          
  
    // ajout texte nom energie
    svg.selectAll("text.energie")
      .data(dataset)
      .enter()
      .append("text")
      .attr("class", "energie")
      .text(function(d){
          return '  '+d.energie;
      })
      .attr("x", function(d, i){
        switch (i) {
          case 0:
          case 1:
            return((i * lb)+5);
          case 2: 
            return((i * lb)+10);
          case 3: 
          case 4:
             return((i * lb)+24);
          case 5:
             return((i * (lb+decalage))+24);
        }
       })
      .attr("y", function(d){
             return hauteur_legende-20 ;
      })
      .attr("font-family", "HelveticaNeue-Thin")
      .attr("font-size", "15px")
      .attr("fill","black");
  }
  