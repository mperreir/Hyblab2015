var hostays = "https://hyblab2015-ayssti-3.c9.io";
var chart1 = "";

function whichYear(year) {
    console.log(year);
    if (year === 2008) {
        $('.ca3').html('0')
        $('.ca4').html('8');
    }
    else if (year === 2009) {
        $('.ca3').html('0');
        $('.ca4').html('9');
    }
    else if (year === 2010) {
        $('.ca3').html('1');
        $('.ca4').html('0');
    }
    else if (year === 2011) {
        $('.ca3').html('1');
        $('.ca4').html('1');
    }
    else if (year === 2012) {
        $('.ca3').html('1');
        $('.ca4').html('2');
    }
    if (year === 2013) {
        $('.ca3').html('1');
        $('.ca4').html('3');
    }
}

function datasD1(year) {

    $.getJSON(hostays + '/dataviz1?annee=' + year, function(data) {
        var villesD1 = [];  
        var valeursD1 = [];    

        for (var i in data) {         
                villesD1.push(data[i].nom);  
                valeursD1.push(data[i].nb); 
        }

        console.log(villesD1);

        chart1 = new Highcharts.Chart({

            chart: {
                renderTo: 'affichD1',
                type: 'column',
                backgroundColor: '#223247',
                plotBorderWidth:2,
                plotBorderColor: '#EBAC44',
                    style: {
                        color: 'white'
                    },
                events: {
                load: function() {
                    this.renderer.image('/images/ring.png', -28, -5, 345, 301).add();  // add image(url, x, y, w, h)
                }
            }
            },

            xAxis: {
                tickWidth: 0,
                categories: villesD1
            },
            yAxis: {
                gridLineWidth: 0,
                labels: {
                    formatter: function() {
                        return this.value;
                    }
                },
                title: {
                    enabled: false
                }
                
            },    
            legend: {
                enabled: false
            },
            plotOptions: {
                column: {
                    groupPadding: 0,
                    pointPadding: 0,
                    borderWidth: 0
                }
            },
            title:{
                text:''
            },
            subTitle:{
                text:''
            },
            credits: {
              enabled: false
            },

            series: [{
                data: valeursD1
            }]      
            
        });
        
      
        $('.highcharts-axis > path').attr('opacity','0');
    });
}

(function yearD1() {
    var year = 2013;
    whichYear(year);
    datasD1(year);
    
    $('.yearplus').css("opacity", "0");

    $('.yearplus').on('click', function(e) {
        year++;
        $('.yearless').css("opacity", "1");
        whichYear(year);

        if (year > 2013) {
            year--;
            $('.yearplus').css("opacity", "0");
        }
        datasD1(year);
    });

    $('.yearless').on('click', function(e) {
        year--;
        $('.yearplus').css("opacity", "1");
        whichYear(year);
        if (year < 2008) {
            year++;
            $('.yearless').css("opacity", "0");
        }
        datasD1(year);
    });
})();