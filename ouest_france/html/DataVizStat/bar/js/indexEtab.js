"use strict";

var donneesTab = [];
var maxTab = 0;

function setDonneesEtablissementVille(tableau,valeurMax){
donneesTab = tableau;
maxTab = valeurMax;
}

function lancerBarreEtab(){
	/**** chargement des divs pour les barres *********/
	document.getElementById('etab3').style.marginTop = "20px";
	document.getElementById('etab3').innerHTML=
	    '<div class="swiper-container2">'+
                "<div class='swiper-wrapper'>"+
                    "<div class='swiper-slide'>"+
                        "<div class='slide-inner2'>"+
                            "<div class='col-xs-6 col-lg-6'>"+
								"<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        " <div id='dataVizbarTextEtablissement1' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement1' class='dataVizBarEtablissementSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarNameEtab1' class='dataVizbarTextNomEtablissement'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement2' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement2' class='dataVizBarEtablissementSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab2' class='dataVizbarTextNomEtablissement'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement3' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement3' class='dataVizBarEtablissementSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab3' class='dataVizbarTextNomEtablissement'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement4' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9 barre'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement4' class='dataVizBarEtablissementSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab4' class='dataVizbarTextNomEtablissement'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement5' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9 barre'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement5' class='dataVizBarEtablissementSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab5' class='dataVizbarTextNomEtablissement'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement6' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement6' class='dataVizBarEtablissementSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab6' class='dataVizbarTextNomEtablissement'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement7' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarEtablissement7' class='dataVizBarEtablissementSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab7' class='dataVizbarTextNomEtablissement'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement8' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement8' class='dataVizBarEtablissementSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab8' class='dataVizbarTextNomEtablissement'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement9' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement9' class='dataVizBarEtablissementSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab9' class='dataVizbarTextNomEtablissement'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement10' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                       "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement10' class='dataVizBarEtablissementSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab10' class='dataVizbarTextNomEtablissement'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement11' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement11' class='dataVizBarEtablissementSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab11' class='dataVizbarTextNomEtablissement'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement12' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement12'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab12' class='dataVizbarTextNomEtablissement'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement13' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement13'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                          "<div id='dataVizbarNameEtab13' class='dataVizbarTextNomEtablissement'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement14' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement14'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab14' class='dataVizbarTextNomEtablissement'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
				"</div>"+
		"</div>"+
		"<div class='swiper-scrollbar2'></div>";

	
    
    var longuerMax = 300;
    var j;
    for (j = 1; j < 12; j++) { 
    var index = j-1;
    var valeur = (donneesTab[index][1]*longuerMax)/maxTab;
    $('#dataVizbarEtablissement'+j).animate({width:valeur},2000);
    //$('#dataVizbarTextEtablissement1').innerHTML = valeur;
    document.getElementById('dataVizbarTextEtablissement'+j).innerHTML=donneesTab[index][1];
    document.getElementById('dataVizbarNameEtab'+j).innerHTML = getNameFromKey(donneesTab[index][0]);
    }


     genererSlider2();
    
}

