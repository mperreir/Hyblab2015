function modifierCourbe(region) {
    'use strict';

    if ($.inArray(region, ["Réunion", "Mayotte", "Guyane française", "Martinique", "Guadeloupe"]) > -1)
        region = "DOM-TOM";

        updateChart(donnees[region], region);
}

var donnees = [[]];

function loadData() {
    var moduleC = moduleCSV();

    moduleC.readTextFile('data/classement_national.csv', function(csvString) {

        var i, c;

        // Récupération des données (globales, cad somme pour tous les sports)
        var lines = csvString.split('\n');

        lines.forEach(function(line) {
            c = line.split(';');
            
            if (donnees[c[1]] === undefined)
                donnees[c[1]] = [0, 0, 0, 0];

            if (c[0] == "2007")
                donnees[c[1]][0] = parseInt(c[2]);
            else if (c[0] == "2009")
                donnees[c[1]][1] = parseInt(c[2]);
            else if (c[0] == "2011")
                donnees[c[1]][2] = parseInt(c[2]);
            else if (c[0] == "2013")
                donnees[c[1]][3] = parseInt(c[2]);
                
            
        });
    });
}

var maxPos = [];
maxPos["2007"]=16;
maxPos["2009"]=17;
maxPos["2011"]=19;
maxPos["2013"]=17;


function updateChart(donnees, region) {
    // Mise à jour de la courbe
    $('.courbeRegion').highcharts({
        chart: {
            type: 'spline',
            backgroundColor: 'transparent',
            borderColor: '#FFFFFF',
            style: {
                fontFamily: 'Helvetica'
            }
        },
        title: {
            text: region,
            style: {
                color: '#FFFFFF'
            },
            align: 'center',
            x: 25
        },
        xAxis: {
            categories: ['2007', '2009', '2011', '2013'],
            title: {
                text: 'Année',
                style: {
                    "color": "#FFFFFF",
                    "fontWeight": "bold"
                }
            },
            gridLineColor: "#FFFFFF",
            lineColor: "#FFFFFF",
            labels: {
                style: {
                    "font-weight": "bold",
                    "color": "white"
                }
            }
        },
        yAxis: {
            title: {
                text: 'Classement',
                style: {
                    "color": "#FFFFFF",
                    "fontWeight": "bold"
                }
            },
            tickPositions: [1, 3, 5,10, 15, 20],
            startOnTick:false,
            endOnTick: false,
            maxPadding: 0,
            minPadding:0,
            reversed: true,
            min: 1,
            max: 20,
            gridLineColor: "#FFFFFF",
            lineColor: "#FFFFFF",
            labels: {
                style: {
                    "font-weight": "bold",
                    "color": "white"
                }
            },
            plotLines: [{
                /*zIndex: 3*/
            }]
        },
        tooltip: {
            formatter: function() {
                return 'Position : <b>' + this.y +' sur '+ maxPos[this.x] +'</b>';}
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            spline: {
                dataLabels: {
                    enabled: true
                },
                marker: {
                    enabled: true,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                },
                color: "#2A7B77",
                lineWidth: 3
            }
        },
        series: [{
            name: 'Position',
            data: donnees
        }],
        labels: {
            style: {
            	color: '#FFFFFF'
            }
        }
    });
}

$(document).ready(function() {
    'use strict';

    //loadData();

    $('.carteFrance').vectorMap({
        map: 'france',
        hoverOpacity: null,
        hoverColor: "#bc4572",
        selectedColor: "#bc4572",
        backgroundColor: "#82AEAC",
        color: "#2A7B77",
        borderColor: null,
        plotBorderColor: null,
        marginTop: "2px",
        spacingTop: "2px",
        enableZoom: false,
        showTooltip: true,
        onRegionClick: function(element, code, region) {
            modifierCourbe(code);
        }
    });
    
    updateChart([16,3,6,6], "Alsace");
    
    $('.clicRegion').hover(function () {
        $(this).fadeOut();
    });
    
    $('.carteFrance svg path').click(function () {
        $('.clicRegion').fadeOut();
    });
    
    $(".imgFrance").hide();
    
    $('.infoP6_2').click(function () {
        $(".imgFrance").fadeToggle();
        $(".infoP6_2").toggleClass("infoP6_2Active");
    });
    
    $("#jqvmap1_Alsace").attr("fill", "#bc4572");
});