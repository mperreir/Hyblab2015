var backGroundC = '#EAE9E5';

function creerDiagramme(donnees,specialite) {
    //alert('test');
    //alert("columndonnees: "+donnees);
    //alert("columnspe: "+specialite);
   // donnees = [285,525];
    //specialite = ["Generalistes","Psycho"];
  
    
   var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'stock',
            type: 'bar',
            backgroundColor: null, // transparent, permet de mettre une image derrière, par exemple
            borderColor: backGroundC,
            style: {
                fontFamily: 'Abel'
            }
        },
        xAxis: {
            //gridLineColor: 'transparent',
            categories: specialite,
            tickmarkPlacement: 'on',
            
            min: 0
        },
        scrollbar: {
            enabled: true,
           barBackgroundColor: 'red',
            barBorderRadius: 7,
            barBorderWidth: 0,
            buttonBackgroundColor: 'red',
            buttonBorderWidth: 0,
            buttonArrowColor: backGroundC,
            buttonBorderRadius: 7,
            rifleColor: backGroundC,
            trackBackgroundColor: backGroundC,
            trackBorderWidth: 1,
            trackBorderColor: backGroundC,
            trackBorderRadius: 7 
        },
        navigator: {enabled: true},
        yAxis: {
           // gridLineColor: 'transparent',
            title: {
                text: 'Nombre de licenciés (pour 10 000 habitants)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            },
            gridLineWidth: 0,
            //max:5,
            min:0
            
        },
        series: [{
            name: '2012',
            data: donnees,
            dataLabels: {
                enabled: false
            },
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        chart.setTitle(null, {text: " licenciés pour "});
                    }
                }
            }
        }],
        exporting: {
            enabled : false
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            enabled: true
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false
        }
    });
}
