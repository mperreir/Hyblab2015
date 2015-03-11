"use strict";

function lancerBarreBubble(n1, t1, p1, d1, n2, t2, p2, d2, n3, t3, p3, d3){
	/**** chargement des divs pour les barres *********/
	  		
	document.getElementById('barBubble').innerHTML=

									"<div class='row'>"+
                                        "<div class='col-xs-2 col-lg-2'>"+
                                           " <div id='dataVizbarTextB1' class='dataVizbarText'></div>"+
                                        "</div>"+
                                        "<div class='col-xs-7 col-lg-7'>"+
                                            "<div class='row'>"+
                                                "<div id='dataVizbarEtabB1'></div>"+
                                           "</div>"+
                                            "<div class='row'>"+
                                              "<div id='dataVizbarNameB1' class='dataVizbarTextSpeB'></div>"+
                                            "</div>"+
                                        "</div>"+
                                        "<div class='col-xs-3 col-lg-3'>"+
                                           " <div id='dataVizbarTextR1' class='dataVizbarText'></div>"+
                                        "</div>"+
                                    "</div>"+
                                    "<div class='row'>"+
                                        "<div class='col-xs-2 col-lg-2'>"+
                                            "<div id='dataVizbarTextB2' class='dataVizbarText'></div>"+
                                        "</div>"+
                                        "<div class='col-xs-7 col-lg-7'>"+
                                            "<div class='row'>"+
                                                "<div id='dataVizbarEtabB2'></div>"+
                                            "</div>"+
                                            "<div class='row'>"+
                                               "<div id='dataVizbarNameB2' class='dataVizbarTextSpeB'></div>"+
                                            "</div>"+
                                        "</div>"+
                                        "<div class='col-xs-3 col-lg-3'>"+
                                           " <div id='dataVizbarTextR2' class='dataVizbarText'></div>"+
                                        "</div>"+
                                    "</div>"+
                                    "<div class='row'>"+
                                        "<div class='col-xs-2 col-lg-2'>"+
                                            "<div id='dataVizbarTextB3' class='dataVizbarText'></div>"+
                                        "</div>"+
                                        "<div class='col-xs-7 col-lg-7'>"+
                                            "<div class='row'>"+
                                                "<div id='dataVizbarEtabB3'></div>"+
                                            "</div>"+
                                            "<div class='row'>"+
                                               "<div id='dataVizbarNameB3' class='dataVizbarTextSpeB'></div>"+
                                            "</div>"+
                                        "</div>"+
                                        "<div class='col-xs-3 col-lg-3'>"+
                                           " <div id='dataVizbarTextR3' class='dataVizbarText'></div>"+
                                        "</div>"+
                                    "</div>";
	
	var longuerMax = 300;
	
    var max;
    if(d1>d2 && d1>d3) max = d1;
    else if(d2>d1 && d2>d3) max = d2;
    else max = d3;
    
    var valeur = (d1*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtabB1').animate({width:valeur},2000);
    //$('#dataVizbarText1').innerHTML = valeur;
    document.getElementById('dataVizbarTextB1').innerHTML = "Ratio : "+ d1;
    document.getElementById('dataVizbarTextR1').innerHTML = t1 +" pour "+ p1;
    document.getElementById('dataVizbarNameB1').innerHTML = n1;
    //}
    
    valeur = (d2*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtabB2').animate({width:valeur},2000);
    document.getElementById('dataVizbarTextB2').innerHTML = "Ratio : "+ d2;
    document.getElementById('dataVizbarTextR2').innerHTML = t2 +" pour "+ p2;
    document.getElementById('dataVizbarNameB2').innerHTML = n2;
    //}
    
    valeur = (d3*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtabB3').animate({width:valeur},2000);
    document.getElementById('dataVizbarTextB3').innerHTML = "Ratio : "+ d3;
    document.getElementById('dataVizbarTextR3').innerHTML = t3 +" pour "+ p3;
    document.getElementById('dataVizbarNameB3').innerHTML = n3;
    //}}
}


function lancerBarreGen(n1, d1, n2, d2, n3, d3){
	/**** chargement des divs pour les barres *********/
	  		
	document.getElementById('barBubble').innerHTML=

									"<div class='row'>"+
                                        "<div class='col-xs-2 col-lg-2'>"+
                                           " <div id='dataVizbarTextB1' class='dataVizbarText'></div>"+
                                        "</div>"+
                                        "<div class='col-xs-9 col-lg-9'>"+
                                            "<div class='row'>"+
                                                "<div id='dataVizbarEtabB1'></div>"+
                                           "</div>"+
                                            "<div class='row'>"+
                                              "<div id='dataVizbarNameB1' class='dataVizbarTextSpeB'></div>"+
                                            "</div>"+
                                        "</div>"+
                                    "</div>"+
                                    "<div class='row'>"+
                                        "<div class='col-xs-2 col-lg-2'>"+
                                            "<div id='dataVizbarTextB2' class='dataVizbarText'></div>"+
                                        "</div>"+
                                        "<div class='col-xs-9 col-lg-9'>"+
                                            "<div class='row'>"+
                                                "<div id='dataVizbarEtabB2'></div>"+
                                            "</div>"+
                                            "<div class='row'>"+
                                               "<div id='dataVizbarNameB2' class='dataVizbarTextSpeB'></div>"+
                                            "</div>"+
                                        "</div>"+
                                    "</div>"+
                                    "<div class='row'>"+
                                        "<div class='col-xs-2 col-lg-2'>"+
                                            "<div id='dataVizbarTextB3' class='dataVizbarText'></div>"+
                                        "</div>"+
                                        "<div class='col-xs-9 col-lg-9'>"+
                                            "<div class='row'>"+
                                                "<div id='dataVizbarEtabB3'></div>"+
                                            "</div>"+
                                            "<div class='row'>"+
                                               "<div id='dataVizbarNameB3' class='dataVizbarTextSpeB'></div>"+
                                            "</div>"+
                                        "</div>"+
                                    "</div>";
	
	var longuerMax = 300;
	
    var max;
    if(d1>d2 && d1>d3) max = d1;
    else if(d2>d1 && d2>d3) max = d2;
    else max = d3;
    
    var valeur = (d1*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtabB1').animate({width:valeur},2000);
    //$('#dataVizbarText1').innerHTML = valeur;
    document.getElementById('dataVizbarTextB1').innerHTML = d1;
    document.getElementById('dataVizbarNameB1').innerHTML = n1;
    //}
    
    valeur = (d2*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtabB2').animate({width:valeur},2000);
    document.getElementById('dataVizbarTextB2').innerHTML = d2;
    document.getElementById('dataVizbarNameB2').innerHTML = n2;
    //}
    
    valeur = (d3*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtabB3').animate({width:valeur},2000);
    document.getElementById('dataVizbarTextB3').innerHTML = d3;
    document.getElementById('dataVizbarNameB3').innerHTML = n3;
    //}}
}