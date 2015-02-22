/**
 * @author Benjamin MOUDEN (main)
 * @author Claire REMY 
 */

var chart1 = '';

function whichYear(year) {
    console.log(year);
    if (year === 2008) {
        $('.ca3').html('0');
        $('.ca4').html('8');
        $('#ville4').html('Toulouse');
        $('#ville5').html('Montpellier');
        $('#ville8').html('Lille');
        $('#ville9').html('Lyon');
        $('#sac9').css('background-image', 'url(images/Sac-de-frappe-2.png)');
        $('#sac8').css('background-image', "url(images/Sac-de-frappe-2.png)");
        $('#sac7').css('background-image', "url(images/Sac-de-frappe-2.png)");
        $('#sac6').css('background-image', "url(images/Sac-de-frappe-3.png)");
        $('#sac5').css('background-image', "url(images/Sac-de-frappe-3.png)");
        $('#sac4').css('background-image', "url(images/Sac-de-frappe-3.png)");
        $('#sac3').css('background-image', "url(images/Sac-de-frappe-4.png)");
        $('#sac2').css('background-image', "url(images/Sac-de-frappe-5.png)");
        $('#sac1').css('background-image', "url(images/Sac-de-frappe-5.png)");
    }
    else if (year === 2009) {
        $('.ca3').html('0');
        $('.ca4').html('9');
        $('#ville4').html('Montpellier');
        $('#ville5').html('Toulouse');
        $('#ville7').html('Marseille');
        $('#ville8').html('Lyon');
        $('#ville9').html('Lille');
        $('#sac9').css('background-image', 'url(images/Sac-de-frappe-1.png)');
        $('#sac8').css('background-image', "url(images/Sac-de-frappe-2.png)");
        $('#sac7').css('background-image', "url(images/Sac-de-frappe-2.png)");
        $('#sac6').css('background-image', "url(images/Sac-de-frappe-3.png)");
        $('#sac5').css('background-image', "url(images/Sac-de-frappe-3.png)");
        $('#sac4').css('background-image', "url(images/Sac-de-frappe-3.png)");
        $('#sac3').css('background-image', "url(images/Sac-de-frappe-3.png)");
        $('#sac2').css('background-image', "url(images/Sac-de-frappe-5.png)");
        $('#sac1').css('background-image', "url(images/Sac-de-frappe-6.png)");
    }
    else if (year === 2010) {
        $('.ca3').html('1');
        $('.ca4').html('0');
        $('#ville5').html('Montpellier');
        $('#ville4').html('Toulouse');
        $('#ville9').html('Marseille');
        $('#ville7').html('Lyon');
        $('#ville8').html('Lille');
        $('#sac9').css('background-image', 'url(images/Sac-de-frappe-2.png)');
        $('#sac8').css('background-image', "url(images/Sac-de-frappe-2.png)");
        $('#sac7').css('background-image', "url(images/Sac-de-frappe-2.png)");
        $('#sac6').css('background-image', "url(images/Sac-de-frappe-2.png)");
        $('#sac5').css('background-image', "url(images/Sac-de-frappe-3.png)");
        $('#sac4').css('background-image', "url(images/Sac-de-frappe-3.png)");
        $('#sac3').css('background-image', "url(images/Sac-de-frappe-4.png)");
        $('#sac2').css('background-image', "url(images/Sac-de-frappe-5.png)");
        $('#sac1').css('background-image', "url(images/Sac-de-frappe-6.png)");
    }
    else if (year === 2011) {
        $('.ca3').html('1');
        $('.ca4').html('1');
        $('#ville7').html('Lille');
        $('#ville8').html('Lyon');
        $('#sac9').css('background-image', 'url(images/Sac-de-frappe-2.png)');
        $('#sac8').css('background-image', "url(images/Sac-de-frappe-2.png)");
        $('#sac7').css('background-image', "url(images/Sac-de-frappe-2.png)");
        $('#sac6').css('background-image', "url(images/Sac-de-frappe-2.png)");
        $('#sac5').css('background-image', "url(images/Sac-de-frappe-3.png)");
        $('#sac4').css('background-image', "url(images/Sac-de-frappe-3.png)");
        $('#sac3').css('background-image', "url(images/Sac-de-frappe-4.png)");
        $('#sac2').css('background-image', "url(images/Sac-de-frappe-5.png)");
        $('#sac1').css('background-image', "url(images/Sac-de-frappe-6.png)");
    }
    else if (year === 2012) {
        $('.ca3').html('1');
        $('.ca4').html('2');
        $('#sac9').css('background-image', 'url(images/Sac-de-frappe-2.png)');
        $('#sac8').css('background-image', "url(images/Sac-de-frappe-2.png)");
        $('#sac7').css('background-image', "url(images/Sac-de-frappe-2.png)");
        $('#sac6').css('background-image', "url(images/Sac-de-frappe-3.png)");
        $('#sac5').css('background-image', "url(images/Sac-de-frappe-3.png)");
        $('#sac4').css('background-image', "url(images/Sac-de-frappe-3.png)");
        $('#sac3').css('background-image', "url(images/Sac-de-frappe-5.png)");
        $('#sac2').css('background-image', "url(images/Sac-de-frappe-6.png)");
        $('#sac1').css('background-image', "url(images/Sac-de-frappe-6.png)");
    }
    if (year === 2013) {
        $('.ca3').html('1');
        $('.ca4').html('3');
        $('#sac9').css('background-image', 'url(images/Sac-de-frappe-1.png)');
        $('#sac8').css('background-image', "url(images/Sac-de-frappe-2.png)");
        $('#sac7').css('background-image', "url(images/Sac-de-frappe-2.png)");
        $('#sac6').css('background-image', "url(images/Sac-de-frappe-2.png)");
        $('#sac5').css('background-image', "url(images/Sac-de-frappe-3.png)");
        $('#sac4').css('background-image', "url(images/Sac-de-frappe-3.png)");
        $('#sac3').css('background-image', "url(images/Sac-de-frappe-5.png)");
        $('#sac2').css('background-image', "url(images/Sac-de-frappe-6.png)");
        $('#sac1').css('background-image', "url(images/Sac-de-frappe-6.png)");
        
    }
}

function datasD1(year) {

    $.getJSON('dataviz1?annee=' + year, function(data) {
        var villesD1 = [];   
        var dataArray = [];
        for (var i in data) {
            var point = {};
                villesD1.push(data[i].nom); 
                point.name = data[i].nom;
                point.y = data[i].nb;
                dataArray.push(point);
        }

        //console.log(villesD1);

        chart1 = new Highcharts.Chart({

            chart: {
                renderTo: 'affichD1',
                type: 'column',
                backgroundColor: '#213146',
                plotBorderWidth:2,
                plotBorderColor: '#EBAC44'  
            },

            xAxis: {
                tickWidth: 0,
                categories: villesD1,
                labels: {
                     style: {
                        color: '#E9AE28'
                    }
                }
            },
            yAxis: {
                gridLineWidth: 0,
                max: 4200,
                labels: {
                    formatter: function() {
                        return this.value;
                    },
                    style: {
                        color: 'white'
                    }
                },
                title: {
                    enabled: false
                }
                
            },    
            legend: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                        useHTML: true,
                        formatter: function() {
                            return "&nbsp;"+this.y+'<br/><img class="graphLabel" id="' + this.point.name + '" src="images/ballonTop.png" width="40.96" style="margin-bottom: -5px; padding-left: 3px;" height="61.6"/>&nbsp;'  
                        },
                        style: {
                            color: '#E9AE28',
                            fontSize: '15px',
                            fontWeight: 'bold'
                        }
                    },
                    color: '#EBAC44',
                    pointPadding: 0.45,
                    pointWidth: 5,
                    borderWidth: 0,
                    point: {
                        events: {
                            click: function() {
                                loadData(this.category);
                            }
                        }
                    }
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
                id: 'series-1',
                data: dataArray
            }]
            
            
        });
        
        $('.highcharts-axis-labels text ').on('click', function(e) {
            loadData(this.textContent ||this.innerText);
        });

    
        $('.highcharts-axis > path').attr('opacity','0');
        
       
    });
}

function loadData(id) {
            //var id = this.textContent || this.innerText;
            $('#myModal').modal();
            $('#hiddenName').html(id);
            var year = "20" + $('#ca3').text() + $('#ca4').text();
            $.getJSON('townInfo?nom=' + id, function(data) {
                if(data) {
                    $('#DV2Description').html(data.desc);
                    $('#DV2TownName').html(id);
                    $('#DV2pic').html("<img src=\"/images/"+data.image+"\">");
                    
                    if(data.medaille1) {
                        $('#med1').html("<img src=\"/images/"+data.medaille1+"\">");
                    }
                    if(data.medaille2) {
                         $('#med2').html("<img src=\"/images/"+data.medaille2+"\">");
                    }
                }
           });
          changeNumbers(year, id);
    }

function changeNumbers(year, id) {
    $.getJSON('townNumbers?nom=' + id + '&annee=' + year, function(data) {
             if(data)  {
                 $('#ch1').html(data.ch1);
                 $('#ch2').html(data.ch2);
                 $('#ch3').html(data.ch3);
                 $('#ch4').html(data.ch4);
             }
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
        console.log($('#hiddenName').text());
        changeNumbers(year, $('#hiddenName').text());
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
        changeNumbers(year, $('#hiddenName').text());
    });
})();
