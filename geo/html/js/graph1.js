"use strict";
// Options pour le graphique 
var options = {
    chart: {
        renderTo: 'container_graph1',
        plotShadow: true,
        animation: {
            duration: 500,
            easing: 'easeOutBounce'
    	},
    	type: 'spline',
    },
    credits: {
        enabled: false
    },
    xAxis: {
        title: {
            enabled: false
        },
    	tickmarkPlacement: 'on',
    	tickInterval: 1,
        tickWidth: 0,
        gridLineWidth: 1,
        lineColor: "black",
        lineWidth: 0,
        labels: {
            style: {
                "font-family" : "HelveticaLTStd-Bold",
                "color" : "#1D1D1B",
                "opacity" : 0.6
            }
        }
    },
    yAxis: {
        title: {
            enabled: false
        },
        labels: {
            // Ajout du signe % à la fin des labels sur l'axe des y
            formatter: function () {
                return this.value + '%';
            },
            style: {
                "font-family" : "HelveticaLTStd-Bold",
                "color" : "#1D1D1B",
                "opacity" : 0.6
            }
        },
        min : 0,
        max : 100,
        tickWidth: 0,
        gridLineWidth: 0,
        lineColor: "black",
        lineWidth: 0,
    },
    tooltip: {
        // Modification de l'affichage de la tooltip
        formatter: function() {
        	return this.y.toFixed(2) +'</b>%<br />';
    	},
    	style: {
            "font-family" : "HelveticaLTStd-Bold",
            "color" : "#1D1D1B",
            "opacity" : 0.6
        }
    },
    legend: {
        enabled: false
    }
};

// On convertit la chaîne en tableau compréhensible pour Highchart
// A series of regexes to split a string path in to array in preparation for Highchart's
// rescale, animations and transforms. Copied from map-parser.src.js
function splitStringPathToArray(path){
    return path
    // Scientific notation
    .replace(/[0-9]+e-?[0-9]+/g, function (a) {
        return +a; // cast to number
    })
    // Move letters apart
    .replace(/([A-Za-z])/g, ' $1 ')
    // Add space before minus
    .replace(/-/g, ' -')
    // Trim
    .replace(/^\s*/, "").replace(/\s*$/, "")
    // Remove newlines, tabs etc
    .replace(/\s+/g, " ")
    
    // Split on spaces, minus and commas
    .split(/[ ,]+/);
}

// Initialiation des paths des flèches des axes du graphe ainsi que des axes eux-même
var fleche_haut = "M42.5,20 27.7,20 27.7,20 43.1,1.5 58.3,20 49.9,20";
var fleche_droite = "M933,363.5 933,348.7 933,348.7 951.5,364.1 933,379.3 933,370.9";
var axe_abscisses = "M 44 19 L 44 363";
var axe_ordonnees = "M 44 363 L 933 363";

// On change les chaînes pour les rendre compréhensibles par highcharts
fleche_haut = splitStringPathToArray(fleche_haut);
fleche_droite = splitStringPathToArray(fleche_droite);
axe_abscisses = splitStringPathToArray(axe_abscisses);
axe_ordonnees = splitStringPathToArray(axe_ordonnees);

// Obtention des données de l'allemagne pour débuter
$.getJSON('data/graph1/allemagne.json', function(list) {
    options.title = { text : ''};
    options.series = list;
    var chart = new Highcharts.Chart(options, function(chart){
        // On dessine tout ça
        chart.renderer.path(fleche_haut)
            .attr({
                'fill': 'none',
                'stroke': '#b11b4a',
                'stroke-width': 2,
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-miterlimit': 10,
                'zIndex': 8
            })
            .add();
        
        chart.renderer.path(fleche_droite)
            .attr({
                'fill': 'none',
                'stroke': '#b11b4a',
                'stroke-width': 2,
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-miterlimit': 10,
                'zIndex': 8
            })
            .add();
        
        chart.renderer.path(axe_abscisses)
            .attr({
                'stroke': "#fac768",
                'stroke-width': 2,
                'zIndex': 7
            })
            .add();
            
        chart.renderer.path(axe_ordonnees)
            .attr({
                'stroke': "#fac768",
                'stroke-width': 2,
                'zIndex': 7
            })
            .add();
    });
});

function loadGraph1(pays){
    $.getJSON('data/graph1/' + pays + '.json', function(list) {
        options.title = { text : ''};
        options.series = list;
        var chart = new Highcharts.Chart(options, function(chart){
    	// On dessine tout ça
            chart.renderer.path(fleche_haut)
                .attr({
                    'fill': 'none',
                    'stroke': '#b11b4a',
                    'stroke-width': 2,
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                    'stroke-miterlimit': 10,
                    'zIndex': 8,
                })
                .add();
            
            chart.renderer.path(fleche_droite)
                .attr({
                    'fill': 'none',
                    'stroke': '#b11b4a',
                    'stroke-width': 2,
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                    'stroke-miterlimit': 10,
                    'zIndex': 8,
                })
                .add();
            
            chart.renderer.path(axe_abscisses)
                .attr({
                    'stroke': "#fac768",
                    'stroke-width': 2,
                    'zIndex': 7
                })
                .add();
                
            chart.renderer.path(axe_ordonnees)
                .attr({
                    'stroke': "#fac768",
                    'stroke-width': 2,
                    'zIndex': 7
                })
                .add();
        });
    });
}