"use strict";

//Fonction qui adapte l'ensemble des éléments de la slide 4 pour pas qu'il fasse plus de 600px de hauteur
function adapt_s4() {
    if(Number($("#contenu_slide4").height()) > 590) {
      $("#4-titre").height((Number($("#4-titre").height()) * 590)/Number($("#contenu_slide4").height()));
      $("#4-ville").height((Number($("#4-ville").height()) * 590)/Number($("#contenu_slide4").height()));
      $("#4-compare").height((Number($("#4-compare").height()) * 590)/Number($("#contenu_slide4").height()));
      $("#4-graphe").height((Number($("#4-graphe").height()) * 590)/Number($("#contenu_slide4").height()));
      $("#graphe").height((Number($("#graphe").height()) * 590)/Number($("#contenu_slide4").height()));
    }
}

//Fonction qui affiche la position de la ville
function positionVille(Ville) {
    var tab = croissantTab();
    var pos = 48-(tab.indexOf(Ville));
    $("#posvilles4").text(pos+"e");
}

//Fonction qui anime le remplissage des icones voiture et bus selon le pourcentage correspondant
function animate_s4(Pourcent2, Pourcent1){
   $("#rempl_voiture").height(($("#icone_voiture").height()-5));
    $("#rempl_voiture").animate({width:$("#icone_voiture").width()*(Pourcent1/100)}, 1000, function() {});
    $("#rempl_bus").height(($("#icone_bus").height()-5));
    $("#rempl_bus").animate({width:$("#icone_bus").width()*(Pourcent2/100)}, 1000, function() {});
}



function graphe(Ville) {

    var chart = new Chartist.Line('.ct-chart', {
      labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      series: [ Ville]
    }, {
      low: 0,
      high: 30,
      width: (Number($("#4-graphe").width()) * 940)/Number($("#contenu_slide4").width())-(Number($("#4-graphe").width()) * 940)/Number($("#contenu_slide4").width())*0.15,
      height: (Number($("#4-graphe").height()) * 590)/Number($("#contenu_slide4").height())-(Number($("#4-graphe").height()) * 590)/Number($("#contenu_slide4").height())*0.20
    });
    
   
    
    // Let's put a sequence number aside so we can use it in the event callbacks
    var seq = 0,
      delays = 30,
      durations = 500;
    
    // Once the chart is fully created we reset the sequence
    chart.on('created', function() {
      seq = 0;
    });
    
    // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
    chart.on('draw', function(data) {
      seq++;
    
      if(data.type === 'line') {
        // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
        data.element.animate({
          opacity: {
            // The delay when we like to start the animation
            begin: seq * delays + 1000,
            // Duration of the animation
            dur: durations,
            // The value where the animation should start
            from: 0,
            // The value where it should end
            to: 1
          }
        });
      } else if(data.type === 'label' && data.axis === 'x') {
        data.element.animate({
          y: {
            begin: seq * delays,
            dur: durations,
            from: data.y + 100,
            to: data.y,
            // We can specify an easing function from Chartist.Svg.Easing
            easing: 'easeOutQuart'
          }
        });
      } else if(data.type === 'label' && data.axis === 'y') {
        data.element.animate({
          x: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 100,
            to: data.x,
            easing: 'easeOutQuart'
          }
        });
      } else if(data.type === 'point') {
        data.element.animate({
          x1: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart'
          },
          x2: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart'
          },
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'easeOutQuart'
          }
        });
      } else if(data.type === 'grid') {
        // Using data.axis we get x or y which we can use to construct our animation definition objects
        var pos1Animation = {
          begin: seq * delays,
          dur: durations,
          from: data[data.axis + '1'] - 30,
          to: data[data.axis + '1'],
          easing: 'easeOutQuart'
        };
    
        var pos2Animation = {
          begin: seq * delays,
          dur: durations,
          from: data[data.axis + '2'] - 100,
          to: data[data.axis + '2'],
          easing: 'easeOutQuart'
        };
    
        var animations = {};
        animations[data.axis + '1'] = pos1Animation;
        animations[data.axis + '2'] = pos2Animation;
        animations['opacity'] = {
          begin: seq * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: 'easeOutQuart'
        };
    
        data.element.animate(animations);
      }
    });
    
    // For the sake of the example we update the chart every time it's created with a delay of 10 seconds
    chart.on('created', function() {
      if(window.__exampleAnimateTimeout) {
        clearTimeout(window.__exampleAnimateTimeout);
        window.__exampleAnimateTimeout = null;
      }
    });
}


                