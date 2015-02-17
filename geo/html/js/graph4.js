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
                            // On get le chart pour get les données
                            var annee = this.x;
                            var chart = $("#container_graph41").highcharts();
                            data = [];

                            for (var i=0; i < 6; i++){
                                data[i] = chart.series[i].data;
                            }

                            donnees = [];

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
                            data = [];

                            for (var i=0; i < 6; i++){
                                data[i] = chart.series[i].data;
                            }

                            donnees = [];

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
                            data = [];

                            for (var i=0; i < 6; i++){
                                data[i] = chart.series[i].data;
                            }

                            donnees = [];

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

$.getJSON('data/graph4/allemagne.json', function(list) {
    optionsA.series = list;
    var chart = new Highcharts.Chart(optionsA);
});

$.getJSON('data/graph4/france.json', function(list) {
    optionsF.series = list;
    var chart = new Highcharts.Chart(optionsF);
});


$.getJSON('data/graph4/royaume-uni.json', function(list) {
    optionsR.series = list;
    var chart = new Highcharts.Chart(optionsR);
});

$(".button_legende").on("click", function(){
    var id = $(this).attr("data");

    var chart1 = $('#container_graph41').highcharts(),
        series1 = chart1.get(id); //get corresponding series
    
    var chart2 = $('#container_graph42').highcharts(),
        series2 = chart2.get(id); //get corresponding series

    var chart3 = $('#container_graph43').highcharts(),
        series3 = chart3.get(id); //get corresponding series

    if (series1) {
        if (series3.visible) {
            series1.hide();
            series2.hide();
            series3.hide();
        } else {
            series1.show();
            series2.show();
            series3.show();
        }
    }
});


