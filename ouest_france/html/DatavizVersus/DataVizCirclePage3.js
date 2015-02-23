"use strict";
var donneesVille = [];
var sum = 0;

function setdonneesVille(tab){
    donneesVille = JSON.parse(JSON.stringify(tab));
}


function getKey(name){
    var key;
    switch (name) {
        case 'generalistes':
            key = 'NB_D201';
            sum = getSomme(donneesVille)[0];
            break;
        case 'audio':
            key = 'NB_D238';
            sum = getSomme(donneesVille)[0];
            break;    
        case 'cardiologue':
            key = 'NB_D202';
           sum = getSomme(donneesVille)[0];
            break;
        case 'dentiste':
            key = 'NB_D221';
            sum = getSomme(donneesVille)[0];
            break;
        case 'gastro':
            key = 'NB_D206';
            sum = getSomme(donneesVille)[0];
            break;
        case 'psychiatrie':
            key = 'NB_D207';
            sum = getSomme(donneesVille)[0];
            break;
        case 'gynecologue':
            key = 'GYNECO';
            sum = getSomme(donneesVille)[0];
            break;
        case 'kine':
            key = 'NB_D233';
            sum = getSomme(donneesVille)[0];
            break;
        case 'radio':
            key = 'NB_D212';
            sum = getSomme(donneesVille)[0];
            break;
        case 'ophtalmologie':
            key = 'NB_D208';
            sum = getSomme(donneesVille)[0];
            break;
        case 'pediatrie':
            key = 'NB_D210';
            sum = getSomme(donneesVille)[0];
            break;
        case 'pneumologue':
            key = 'NB_D211';
            sum = getSomme(donneesVille)[0];
            break;
        case 'podologue':
            key = 'NB_D237';
            sum = getSomme(donneesVille)[0];
            break;
        case 'rhino':
            key = 'NB_D209';
            sum = getSomme(donneesVille)[0];
            break;
        //Etablissement
        case 'cancerologie':
            key = 'NB_D105';
            sum = getSomme(donneesVille)[1];
            break;
        case 'centrealcoolisme':
            key = 'NB_D306';
            sum = getSomme(donneesVille)[1];
            break;
        case 'centresante':
            key = 'NB_D108';
            sum = getSomme(donneesVille)[1];
            break;
        case 'dialyse':
            key = 'NB_D111';
            sum = getSomme(donneesVille)[1];
            break;
        case 'hospitalisation':
            key = 'NB_D112';
            sum = getSomme(donneesVille)[1];
            break;
        case 'laboratoire':
            key = 'NB_D302';
            sum = getSomme(donneesVille)[1];
            break;
        case 'maternite':
            key = 'NB_D107';
            sum = getSomme(donneesVille)[1];
            break;
        case 'medecinepreventive':
            key = 'NB_D110';
            sum = getSomme(donneesVille)[1];
            break;
        case 'pharmacie':
            key = 'NB_D301';
            sum = getSomme(donneesVille)[1];
            break;
        case 'psychiatrieE':
            key = 'PSYCHO';
            sum = getSomme(donneesVille)[1];
            break;
        case 'urgence':
            key = 'NB_D106';
            sum = getSomme(donneesVille)[1];
            break;
        default:
            // code
    }
    return key;
}

function fchart(id,location, entite, coloR) {
    document.getElementById(id).innerHTML="<div id="+ location+" style='width: 550px; height: 300px;float: left'></div>";
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
            text: '<div style="font-size:28px;margin-left:5vw;color:' +
                ('#f9a21c') + '">'+donneesVille[getKey(entite)]+'<br>'+getNameFromKey(getKey(entite)).replace(" ", "<br>")+'</div>',
            useHTML: true ,
            x:60,
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
                shadow: {
                     color: 'black',
                     width: 10,
                      offsetX: 2,
                      offsetY: 5
                    },
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
            type: 'pie',
            innerSize: '80%',
            name: 'etablissement',
            data: [{y:sum.valueOf()-donneesVille[getKey(entite)].valueOf(),color: '#121f32'},{y:donneesVille[getKey(entite)].valueOf(),color: coloR}]
        }]
    });
}
