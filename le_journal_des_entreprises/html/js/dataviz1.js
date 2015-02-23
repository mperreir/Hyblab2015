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
        $('#sac9').css('background-image', 'url(images/Sac-de-frappe-2.png)').html('<p>7,03<span>%</span></p>');
        $('#sac8').css('background-image', "url(images/Sac-de-frappe-2.png)").html('<p>7,05<span>%</span></p>');
        $('#sac7').css('background-image', "url(images/Sac-de-frappe-2.png)").html('<p>7,52<span>%</span></p>');
        $('#sac6').css('background-image', "url(images/Sac-de-frappe-3.png)").html('<p>8,05<span>%</span></p>');
        $('#sac5').css('background-image', "url(images/Sac-de-frappe-3.png)").html('<p>8,36<span>%</span></p>');
        $('#sac4').css('background-image', "url(images/Sac-de-frappe-3.png)").html('<p>8,51<span>%</span></p>');
        $('#sac3').css('background-image', "url(images/Sac-de-frappe-4.png)").html('<p>9,30<span>%</span></p>');
        $('#sac2').css('background-image', "url(images/Sac-de-frappe-5.png)").html('<p>10,46<span>%</span></p>');
        $('#sac1').css('background-image', "url(images/Sac-de-frappe-5.png)").html('<p>10,59<span>%</span></p>');
    }
    else if (year === 2009) {
        $('.ca3').html('0');
        $('.ca4').html('9');
        $('#ville4').html('Montpellier');
        $('#ville5').html('Toulouse');
        $('#ville7').html('Marseille');
        $('#ville8').html('Lyon');
        $('#ville9').html('Lille');
        $('#sac9').css('background-image', 'url(images/Sac-de-frappe-1.png)').html('<p>6,97<span>%</span></p>');
        $('#sac8').css('background-image', "url(images/Sac-de-frappe-2.png)").html('<p>7,04<span>%</span></p>');
        $('#sac7').css('background-image', "url(images/Sac-de-frappe-2.png)").html('<p>7,09<span>%</span></p>');
        $('#sac6').css('background-image', "url(images/Sac-de-frappe-3.png)").html('<p>8<span>%</span></p>');
        $('#sac5').css('background-image', "url(images/Sac-de-frappe-3.png)").html('<p>8,17<span>%</span></p>');
        $('#sac4').css('background-image', "url(images/Sac-de-frappe-3.png)").html('<p>8,18<span>%</span></p>');
        $('#sac3').css('background-image', "url(images/Sac-de-frappe-3.png)").html('<p>8,96<span>%</span></p>');
        $('#sac2').css('background-image', "url(images/Sac-de-frappe-5.png)").html('<p>10,62<span>%</span></p>');
        $('#sac1').css('background-image', "url(images/Sac-de-frappe-6.png)").html('<p>11,25<span>%</span></p>');
    }
    else if (year === 2010) {
        $('.ca3').html('1');
        $('.ca4').html('0');
        $('#ville5').html('Montpellier');
        $('#ville4').html('Toulouse');
        $('#ville9').html('Marseille');
        $('#ville7').html('Lyon');
        $('#ville8').html('Lille');
        $('#sac9').css('background-image', 'url(images/Sac-de-frappe-2.png)').html('<p>6,87<span>%</span></p>');
        $('#sac8').css('background-image', "url(images/Sac-de-frappe-2.png)").html('<p>7,04<span>%</span></p>');
        $('#sac7').css('background-image', "url(images/Sac-de-frappe-2.png)").html('<p>7,09<span>%</span></p>');
        $('#sac6').css('background-image', "url(images/Sac-de-frappe-2.png)").html('<p>7,85<span>%</span></p>');
        $('#sac5').css('background-image', "url(images/Sac-de-frappe-3.png)").html('<p>8,23<span>%</span></p>');
        $('#sac4').css('background-image', "url(images/Sac-de-frappe-3.png)").html('<p>8,27<span>%</span></p>');
        $('#sac3').css('background-image', "url(images/Sac-de-frappe-4.png)").html('<p>9,14<span>%</span></p>');
        $('#sac2').css('background-image', "url(images/Sac-de-frappe-5.png)").html('<p>10,69<span>%</span></p>');
        $('#sac1').css('background-image', "url(images/Sac-de-frappe-6.png)").html('<p>11,51<span>%</span></p>');
    }
    else if (year === 2011) {
        $('.ca3').html('1');
        $('.ca4').html('1');
        $('#ville7').html('Lille');
        $('#ville8').html('Lyon');
        $('#sac9').css('background-image', 'url(images/Sac-de-frappe-2.png)').html('<p>7,09<span>%</span></p>');
        $('#sac8').css('background-image', "url(images/Sac-de-frappe-2.png)").html('<p>7,24<span>%</span></p>');
        $('#sac7').css('background-image', "url(images/Sac-de-frappe-2.png)").html('<p>7,35<span>%</span></p>');
        $('#sac6').css('background-image', "url(images/Sac-de-frappe-2.png)").html('<p>7,87<span>%</span></p>');
        $('#sac5').css('background-image', "url(images/Sac-de-frappe-3.png)").html('<p>8,37<span>%</span></p>');
        $('#sac4').css('background-image', "url(images/Sac-de-frappe-3.png)").html('<p>8,51<span>%</span></p>');
        $('#sac3').css('background-image', "url(images/Sac-de-frappe-4.png)").html('<p>9,34<span>%</span></p>');
        $('#sac2').css('background-image', "url(images/Sac-de-frappe-5.png)").html('<p>10,89<span>%</span></p>');
        $('#sac1').css('background-image', "url(images/Sac-de-frappe-6.png)").html('<p>11,63<span>%</span></p>');
    }
    else if (year === 2012) {
        $('.ca3').html('1');
        $('.ca4').html('2');
        $('#sac9').css('background-image', 'url(images/Sac-de-frappe-2.png)').html('<p>7,18<span>%</span></p>');
        $('#sac8').css('background-image', "url(images/Sac-de-frappe-2.png)").html('<p>7,40<span>%</span></p>');
        $('#sac7').css('background-image', "url(images/Sac-de-frappe-2.png)").html('<p>7,51<span>%</span></p>');
        $('#sac6').css('background-image', "url(images/Sac-de-frappe-3.png)").html('<p>8,03<span>%</span></p>');
        $('#sac5').css('background-image', "url(images/Sac-de-frappe-3.png)").html('<p>8,44<span>%</span></p>');
        $('#sac4').css('background-image', "url(images/Sac-de-frappe-3.png)").html('<p>8,69<span>%</span></p>');
        $('#sac3').css('background-image', "url(images/Sac-de-frappe-5.png)").html('<p>10,07<span>%</span></p>');
        $('#sac2').css('background-image', "url(images/Sac-de-frappe-6.png)").html('<p>11,15<span>%</span></p>');
        $('#sac1').css('background-image', "url(images/Sac-de-frappe-6.png)").html('<p>11,62<span>%</span></p>');
    }
    if (year === 2013) {
        $('.ca3').html('1');
        $('.ca4').html('3');
        $('#sac9').css('background-image', 'url(images/Sac-de-frappe-1.png)').html('<p>6,75<span>%</span></p>');
        $('#sac8').css('background-image', "url(images/Sac-de-frappe-2.png)").html('<p>7,46<span>%</span></p>');
        $('#sac7').css('background-image', "url(images/Sac-de-frappe-2.png)").html('<p>7,54<span>%</span></p>');
        $('#sac6').css('background-image', "url(images/Sac-de-frappe-2.png)").html('<p>7,79<span>%</span></p>');
        $('#sac5').css('background-image', "url(images/Sac-de-frappe-3.png)").html('<p>8,65<span>%</span></p>');
        $('#sac4').css('background-image', "url(images/Sac-de-frappe-3.png)").html('<p>8,69<span>%</span></p>');
        $('#sac3').css('background-image', "url(images/Sac-de-frappe-5.png)").html('<p>10,33<span>%</span></p>');
        $('#sac2').css('background-image', "url(images/Sac-de-frappe-6.png)").html('<p>11,19<span>%</span></p>');
        $('#sac1').css('background-image', "url(images/Sac-de-frappe-6.png)").html('<p>11,51<span>%</span></p>');    
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
                        fontSize: '14px',
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
                                loadDataviz(this.category);
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
            loadDataviz(this.textContent ||this.innerText);
        });

    
        $('.highcharts-axis > path').attr('opacity','0');
        
       
    });
}

function loadDataviz(id) {
            //var id = this.textContent || this.innerText;
            $('#myModal').modal({
                backdrop: true,
                keyboard: true
            }).css({
                width: 'auto',
                height: 'auto',
                'margin-left': function() {
                    return -(($(this).width() / 2) + 50);
                }
            });
            $('#hiddenName').html(id);
            //var year = "20" + $('.ca3').text() + $('.ca4').text();
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
    var currentlyAnimating = false;
    var year = 2013;
    whichYear(year);
    datasD1(year);
    
    $('.yearplus').hide();  

    $('.yearplus').on('click', function(e) {
        //contre les clicks intempestifs
        if (currentlyAnimating) {
            return;
        }
        currentlyAnimating = true;
        
        
        //animation
        $('.ca4').animate({
            marginTop: "35"
        },{ duration : 800 , queue: false });  
        if(year==2009)
        {
            $('.ca3').animate({
                marginTop: "35"
            },{ duration : 800 , queue: false });
        }
        
        year++;
        
        //changement de données
        datasD1(year);
        console.log($('#hiddenName').text());
        changeNumbers(year, $('#hiddenName').text());
        
        if (year > 2012) {
            $('.yearplus').hide();
        }
        
        //changement après animation
        setTimeout(function(){
           
            $('.yearless').show();
            whichYear(year);
            
            
            //animation pour le nouveau chiffre
            $('.ca4').animate({
                marginTop: "-35"
            },0).animate({
                marginTop: "0"
            },{ duration : 800 , queue: false });
            if(year==2010)
            {
                $('.ca3').animate({
                    marginTop: "-35"
                },0).animate({
                    marginTop: "0"
                },{ duration : 800 , queue: false });
            }
        
        }, 800);
        
        // contre les clicks intempestifs
        setTimeout(function(){
          currentlyAnimating = false;
        }, 1800);
    });

    $('.yearless').on('click', function(e) {
        //contre les clicks intempestifs
        if (currentlyAnimating) {
            return;
        }
        currentlyAnimating = true;
        
        //animation
        $('.ca4').animate({
            marginTop: "-35"
        },{ duration : 800 , queue: false });
        if(year==2010)
        {
            $('.ca3').animate({
                marginTop: "-35"
            },{ duration : 800 , queue: false });
        }
        
        year--;
        
        //changement de données
        datasD1(year);
        changeNumbers(year, $('#hiddenName').text());
       
        if (year < 2009) {
            $('.yearless').hide();
        }
         
         //changement après animation
        setTimeout(function(){
            $('.yearplus').show();
            whichYear(year);
           
            
            //animation pour le nouveau chiffre
            $('.ca4').animate({
                marginTop: "35"
            },0).animate({
                marginTop: "0"
            },{ duration : 800 , queue: false });
            if(year==2009)
            {
                $('.ca3').animate({
                    marginTop: "35"
                },0).animate({
                    marginTop: "0"
                },{ duration : 800 , queue: false });
            }
            
        }, 800);
        
        // contre les clicks intempestifs
        setTimeout(function(){
          currentlyAnimating = false;
        }, 1800);
    });
})();
