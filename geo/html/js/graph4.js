// Détermination des options pour chaque graphique
// A ==> Allemagne
// F ==> France
// R ==> Royaume-Uni
"use strict";

var optionsA={
            chart: {
            renderTo: 'container_graph41',
            polar: true,
            backgroundColor: 'transparent'
        },
        
               
        credits: {
            enabled: false
        },
        
        title: {
            text: 'Allemagne'
        },

        pane: {
            startAngle: 0,
            endAngle: 360
        },

        xAxis: {
            tickInterval: 1,
            min: 2012,
            max: 2021,
            labels : {
                enabled: false
            }
        },

        yAxis: {
            min: 0
        },

        plotOptions: {
            series: {
                pointStart: 0,
                pointInterval: 45,
                marker: {
                    enabled: false
                },
                point: {
                    events: {
                        mouseOver: function () {
                            // Cette fonction sert à afficher les données de toutes les énergies
                            // Pour l'année sélectionnée
                            
                            // On get le chart pour get les données
                            var annee = this.x;
                            var chart = $("#container_graph41").highcharts();
                            var data = [];
                            
                            // On get les données du chart, pour toutes les énergies, toutes les années
                            for (var i=0; i < 6; i++){
                                data[i] = chart.series[i].data;
                            }

                            var donnees = [];

                            // On explore les données, et on filtre selon l'année, et on stocke
                            for (var i=0; i < 9; i++){
                                for (var j=0; j < 6; j++){
                                    if (data[j][i].x == annee){
                                        donnees[data[j][i].series.options.id] = data[j][i].y;
                                    }
                                }                                
                            }
                            
                            // Pour chaque élement légende, on remplit avec le pourcentage donné
                            $(".graph4_value").each(function(){
                                $(this).html( donnees[($(this).attr("id").split('_')[0])] + "%");
                            });
                            hidePaths();
                        }
                    }
                },
                events: {
                    mouseOut: function () {
                        // Quand la souris sort du graph, on vide les légendes
                        $(".graph4_value").each(function(){
                            $(this).empty();
                        });
                    }
                }
            }
        },

        tooltip: {
            enabled: false,
            shared: true
        },

        legend: {
            enabled : false,  
        }
};

var optionsF={
            chart: {
            renderTo: 'container_graph42',
            polar: true,
            backgroundColor: 'transparent'
        },
        
        credits: {
            enabled: false
        },
        
        title: {
            text: 'France'
        },

        pane: {
            startAngle: 0,
            endAngle: 360
        },

        xAxis: {
            tickInterval: 1,
            min: 2012,
            max: 2021,
            labels : {
                enabled: false
            }
        },

        yAxis: {
            min: 0
        },

        plotOptions: {
            series: {
                pointStart: 0,
                pointInterval: 45,
                marker: {
                    enabled: false
                },
                point: {
                    events: {
                        mouseOver: function () {
                            // On get le chart pour get les données
                            var annee = this.x;
                            var chart = $("#container_graph42").highcharts();
                            var data = [];

                            for (var i=0; i < 6; i++){
                                data[i] = chart.series[i].data;
                            }

                            var donnees = [];

                            // On explore les données, et on filtre selon l'année, eto n stocke
                            for (var i=0; i < 9; i++){
                                for (var j=0; j < 6; j++){
                                    if (data[j][i].x == annee){
                                        donnees[data[j][i].series.options.id] = data[j][i].y;
                                    }
                                }                                
                            }

                            $(".graph4_value").each(function(){
                                $(this).html( donnees[($(this).attr("id").split('_')[0])] + "%");
                            });
                            hidePaths();
                        }
                    }
                },
                events: {
                    mouseOut: function () {
                        $(".graph4_value").each(function(){
                            $(this).empty();
                        });
                    }
                }
            }
        },

        tooltip: {
            enabled: false,
            shared: true
        },
        
        legend: {
            enabled : false,  
        }
};

var optionsR={
            chart: {
            renderTo: 'container_graph43',
            polar: true,
            backgroundColor: 'transparent'
        },
        
               
        credits: {
            enabled: false
        },
        
        title: {
            text: 'Royaume-Uni'
        },

        pane: {
            startAngle: 0,
            endAngle: 360
        },

        xAxis: {
            tickInterval: 1,
            min: 2012,
            max: 2021,
            labels : {
                enabled: false
            }
        },

        yAxis: {
            min: 0
        },

        plotOptions: {
            series: {
                pointStart: 0,
                pointInterval: 45,
                marker: {
                    enabled: false
                },
                point: {
                     events: {
                        mouseOver: function () {
                            // On get le chart pour get les données
                            var annee = this.x;
                            var chart = $("#container_graph43").highcharts();
                            var data = [];

                            for (var i=0; i < 6; i++){
                                data[i] = chart.series[i].data;
                            }

                            var donnees = [];

                            // On explore les données, et on filtre selon l'année, eto n stocke
                            for (var i=0; i < 9; i++){
                                for (var j=0; j < 6; j++){
                                    if (data[j][i].x == annee){
                                        donnees[data[j][i].series.options.id] = data[j][i].y;
                                    }
                                }                                
                            }

                            $(".graph4_value").each(function(){
                                $(this).html( donnees[($(this).attr("id").split('_')[0])] + "%");
                            });
                            hidePaths();
                        }
                    }
                },
                events: {
                    mouseOut: function () {
                        $(".graph4_value").each(function(){
                            $(this).empty();
                        });
                    }
                }
            }
        },

        tooltip: {
            enabled: false
        },

        legend: {
            enabled : false,  
        }
};

// Fonction permettant de cacher le path entre 2020 et 2012
function hidePaths(){
    $('#graph4 path').each(function (path) {
        var d = $(this).attr('d');
        var lp = /^M( \d+\.?\d* \d+\.?\d*) /.exec(d);
            if (lp) {
            lp = 'L' + lp[1];
            if (d.substring(d.length - lp.length) == lp)
                $(this).attr('d', d.substring(0, d.length - lp.length));
            } 
   }),0
}

// Chargement des highcharts depuis les fichiers json
$.getJSON('data/graph4/allemagne.json', function(list) {
    optionsA.series = list;
    optionsA.title = { text : ''};
    var chart = new Highcharts.Chart(optionsA);
    setTimeout(hidePaths, 1000)
});

$.getJSON('data/graph4/france.json', function(list) {
    optionsF.series = list;
    optionsF.title = { text : ''};
    var chart = new Highcharts.Chart(optionsF);
    setTimeout(hidePaths, 1000)
});


$.getJSON('data/graph4/royaume-uni.json', function(list) {
    optionsR.series = list;
    optionsR.title = { text : ''};
    var chart = new Highcharts.Chart(optionsR);
    setTimeout(hidePaths, 1000)
});

// Au clic d'un bouton sur la légende
$(".button_legende").on("click", function(){
    var id = $(this).attr("title");
    
    // Changement d'opacité du bouton
    if ($(this).css('opacity') == '1'){
        $(this).css('opacity','.2');
    } else {
        $(this).css('opacity','1');
    }

    var chart1 = $('#container_graph41').highcharts(),
        series1 = chart1.get(id); //get corresponding series
    
    var chart2 = $('#container_graph42').highcharts(),
        series2 = chart2.get(id); //get corresponding series

    var chart3 = $('#container_graph43').highcharts(),
        series3 = chart3.get(id); //get corresponding series
    
    // On cache ou on montre les series en question
    // Sur les 3 graphiques
    if (series1) {
        if (series3.visible) {
            series1.hide(setTimeout(hidePaths, 400));
            series2.hide(setTimeout(hidePaths, 400));
            series3.hide(setTimeout(hidePaths, 400));
        } else {
            series1.show(setTimeout(hidePaths, 400));
            series2.show(setTimeout(hidePaths, 400));
            series3.show(setTimeout(hidePaths, 400));
        }
    }
    
    // Pas réussi à faire en sorte que ça le fasse proprement (après avoir chargé par exemple, avec une fonction de callback)
    // Du coup, on a mis un timer pour l'effacement des path
});


