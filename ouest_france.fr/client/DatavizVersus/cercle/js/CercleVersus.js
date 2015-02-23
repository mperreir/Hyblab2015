"use strict";
function generercercleVersus(id, entite){
    document.getElementById(id).innerHTML=
                            "<div class='row' align='center'>"+
                                "<div class='col-xs-4 col-lg-4'>"+
                                    " <div id='cercle1'></div>"+
                                "</div>"+
                                "<div class='col-xs-4 col-lg-4'>"+"</div>"+
                                "<div class='col-xs-4 col-lg-4'>"+
                                    "<div id='cercle2'></div>"+
                                "</div>"+
                            "</div>";
                            
     cercleVersus('cercle1','chartVersus1', entite, '#127eb6',donneesVille1[getKey(entite)], getSomme(donneesVille1)[0]);
     cercleVersus('cercle2','chartVersus2', entite, '#f9a21c',donneesVille2[getKey(entite)], getSomme(donneesVille1)[0]);

}
function cercleVersus(id,location, entite, coloR,donneesVersus, donneesVersusMax) {
    document.getElementById(id).innerHTML="<div id="+ location+" style='width: 500px; height: 300px; float: left'></div>";
    Highcharts.wrap(Highcharts.seriesTypes.pie.prototype, 'animate', function (proceed, init) {
    this.startAngleRad = - Math.PI/2 ;    
    proceed.call(this, init);    
});

    $('#'+location).highcharts({
        chart: {
            backgroundColor: '#121f32',
            plotBorderWidth: null,
         margin: 15

        },
        exporting: { enabled: false },
        credits: {
        enabled: false
        },
        title: {
            text: '<div style="font-size:28px;color:' +
                ('#f9a21c') + '">'+donneesVersus+'<br>'+getNameFromKey(getKey(entite)).replace(/ /gi, "<br>")+'</div>',
            useHTML: true ,
            x:80,
            y:30
        },
        tooltip: {
             enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                  
                       },
                startAngle: -240,
                endAngle: 0,
                slicedOffset: 0,
                size: '100%',
                center: ['35%', '50%']
                
            },
            series: {
                allowPointSelect: false,
                states: {
                    hover: {
                        halo: {
                            size: 0
                            
                        }

                    }
                }
            }
        },
        series: [{
            shadow: {
                     color: 'black',
                     width: 10,
                      offsetX: 2,
                      offsetY: 5
                    },
            type: 'pie',
            innerSize: '80%',
            name: 'etablissement',
            data: [{y:donneesVersusMax.valueOf()-donneesVersus.valueOf(),color: '#121f32'},{y:donneesVersus.valueOf(),color: coloR}]
        }]
    });
}