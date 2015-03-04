/**
 * @author Benjamin MOUDEN (main)
 * @author Claire REMY 
 */

var chart1 = '';

function whichYear(year) {
    if (year === 2008) {
        $('.ca3').html('0');
        $('.ca4').html('8');
    }
    else if (year === 2009) {
        $('.ca3').html('0');
        $('.ca4').html('9');   }
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
                max: 5200,
                labels: {
                    formatter: function() {
                        return this.value;
                    },
                    style: {
                        color: 'white',
                        fontSize: '17px'
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
                            var townName = "'" + this.point.name + "'";
                            console.log(townName);
                            return "&nbsp;"+this.y+'<br/><img class="graphLabel" id="' + this.point.name 
                            + '" src="images/ballonTop.png" onclick="loadDataviz(' + townName + ')" '
                            + 'onmouseover="this.style.width = \'49.152px\'; this.style.height = \'73.92px\'; this.style.marginLeft = \'-5px\'" '
                            + 'onmouseout="this.style.width = \'40.96px\'; this.style.height = \'61.6px\'; this.style.marginLeft = \'-0.5px\'" '
                            + ' width="40.96" style="margin-bottom: -5px; padding-left: 3px;" height="61.6"; />&nbsp;'  
                        },
                        style: {
                            color: '#E9AE28',
                            fontSize: '15px',
                            fontWeight: 'bold'
                        }
                    },
                    cursor: 'pointer',
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
        $('#xlabelS p').on('click', function(e) {
            loadDataviz(this.textContent ||this.innerText);
        });

        $('#sac1, #sac2, #sac3, #sac4, #sac5, #sac6, #sac7, #sac8, #sac9').on('click', function(e) {
            var id = $(this).attr('id').split('');
            var number = id[id.length-1];
            loadDataviz($('#ville' + number).html());
        });
        
        $('.villeS').on('click', function(e) {
            loadDataviz($(this).html());
        });
          
        $('.highcharts-axis > path').attr('opacity','0');
    });
}

function loadDataviz(id) {
    $('#myModal').modal({
        backdrop: true,
        keyboard: true
    }).css({
        width: 'auto',
    });
    $('#hiddenName').html(id);
    
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

var year = 2013;
(function yearD1() {
    var currentlyAnimating = false;
    whichYear(year);
    datasD1(year);
    datasD2(year);
    
    $('.yearplus').hide();  

    $('.yearplus').on('click', function(e) {
        animateYear('plus', currentlyAnimating);        
    });

    $('.yearless').on('click', function(e) {
        animateYear('less', currentlyAnimating);
        $('.indicAnnee').hide();
    });
})();


function animateYear(mode, currentlyAnimating) {
    var varMarginTop, firstYearTest, secondYearTest;
    //Set parameters according to mode
    if(mode === 'plus') {
        varMarginTop    = "35";
        firstYearTest   = 2009;
        secondYearTest  = 2010;
    } else if(mode === 'less') {
        varMarginTop    = "-35";
        firstYearTest   = 2010;
        secondYearTest  = 2009;
    }
    
    //contre les clicks intempestifs
    if (currentlyAnimating){
        return;
    }
    currentlyAnimating = true;
    
    //animation
    $('.ca4').animate({
        marginTop: varMarginTop
    },{ 
        duration : 800,
        queue: false 
    });  
    
    if(year === firstYearTest){
        $('.ca3').animate({
            marginTop: varMarginTop
        },{ 
            duration : 800,
            queue: false 
        });
    }
    
    year = year + ((mode == 'plus') ? 1 : -1);
    
    //changement de données
    datasD1(year);
    datasD2(year);
    changeNumbers(year, $('#hiddenName').text());
    
    if(mode === 'plus'){
        if(year > 2012){
            $('.yearplus').hide();
        }
    } else if (mode === 'less'){
        if(year < 2009) {
            $('.yearless').hide();
        }
    }
    
    //changement après animation
    setTimeout(function(){
        var otherMode = (mode === 'plus') ? "less" : "plus" ;
        $('.year' + otherMode).show();
        whichYear(year);
        
        varMarginTop = (mode === 'plus') ? "-35" : "35";
        
        //animation pour le nouveau chiffre
        $('.ca4').animate({
            marginTop: varMarginTop
        },0).animate({
            marginTop: "0"
        },{ 
            duration : 800,
            queue: false
        });
        
        if(year == secondYearTest){
            $('.ca3').animate({
                marginTop: varMarginTop
            },0).animate({
                marginTop: "0"
            },{ 
                duration : 800,
                queue: false
            });
        }
    }, 800);
    
    // contre les clicks intempestifs
    setTimeout(function(){
      currentlyAnimating = false;
    }, 1800);
}

var villesPr=['Nantes', 'Lyon', 'Lille', 'Toulouse', 'Rennes', 'Montpellier', 'Grenoble', 'Bordeaux', 'Aix-Marseille'];
function datasD2(year) {
    $.getJSON('dataviz2?annee=' + year, function(data) {
        var sac=['#sac1', '#sac2', '#sac3', '#sac4', '#sac5', '#sac6', '#sac7', '#sac8', '#sac9'];
        var sacV = '';
        var sacP = '';
         
        for(var i = 0; i < villesPr.length; i++){       
            if( (villesPr[i] != data[i].nom)){ 
                
                $(sac[i]).animate({
                    opacity : 0,
                    top : 20
                }).animate({
                    opacity : 1, 
                    top : 0
                },500);
                villesPr[i] = data[i].nom;
            }          
        }
        
        $('.valS').animate({
            opacity : 0
        }).animate({
            opacity : 1    
        });
        
        setTimeout(function(){
            for (var i = 0; i < sac.length; i++) {
                sacV = ' #ville'+(i+1);
                sacP = sac[i] + ' .valS';
                $(sacP).html(data[i].nb+"<span>%</span>");
                $(sacV).html(data[i].nom);
                
                var j = parseFloat(data[i].nb.replace(",", "."));
    
                /*les chiffres ont changés et on a 6 sacs: différences max : 8,39 - 5,84 = 2,55
                2,55/6 = 0.425: on change de sac tout les 0.42%*/
                if(j<6.26)
                    $(sac[i]).css('background-image', "url(images/Sac-de-frappe-1.png)");
                else if(j<6.68)
                    $(sac[i]).css('background-image', "url(images/Sac-de-frappe-2.png)");
                else if(j<7.10)
                    $(sac[i]).css('background-image', "url(images/Sac-de-frappe-3.png)");
                else if(j<7.52)
                    $(sac[i]).css('background-image', "url(images/Sac-de-frappe-4.png)");
                else if(j<7.94)
                    $(sac[i]).css('background-image', "url(images/Sac-de-frappe-5.png)");
                else
                    $(sac[i]).css('background-image', "url(images/Sac-de-frappe-6.png)");
            }
        }, 500);
    });
}