"use strict";
var donnees = [];
var max = 0;
function lancerBarre(){
	/**** chargement des divs pour les barres *********/
	 
	document.getElementById('prac3').innerHTML=
	   '<div class="swiper-container">'+
                "<div class='swiper-wrapper'>"+
                    "<div class='swiper-slide'>"+
                        "<div class='slide-inner'>"+
                            "<div class='col-xs-6 col-lg-6'>"+
								"<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        " <div id='dataVizbarText1' class='dataVizbarText'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbar1' class='dataVizBarSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                          "<div id='dataVizbarName1' class='dataVizbarTextSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarText2' class='dataVizbarText'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbar2' class='dataVizBarSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarName2' class='dataVizbarTextSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarText3' class='dataVizbarText'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbar3' class='dataVizBarSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarName3' class='dataVizbarTextSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarText4' class='dataVizbarText'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9 barre'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbar4' class='dataVizBarSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarName4' class='dataVizbarTextSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarText5' class='dataVizbarText'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9 barre'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbar5' class='dataVizBarSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarName5' class='dataVizbarTextSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarText6' class='dataVizbarText'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbar6' class='dataVizBarSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarName6' class='dataVizbarTextSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarText7' class='dataVizbarText'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbar7' class='dataVizBarSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarName7' class='dataVizbarTextSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarText8' class='dataVizbarText'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbar8' class='dataVizBarSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarName8' class='dataVizbarTextSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarText9' class='dataVizbarText'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbar9' class='dataVizBarSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarName9' class='dataVizbarTextSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarText10' class='dataVizbarText'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                       "<div class='row'>"+
                                            "<div id='dataVizbar10' class='dataVizBarSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarName10' class='dataVizbarTextSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarText11' class='dataVizbarText'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbar11' class='dataVizBarSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarName11' class='dataVizbarTextSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarText12' class='dataVizbarText'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbar12' class='dataVizBarSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarName12' class='dataVizbarTextSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarText13' class='dataVizbarText'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbar13' class='dataVizBarSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                          "<div id='dataVizbarName13' class='dataVizbarTextSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarText14' class='dataVizbarText'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbar14' class='dataVizBarSyle'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarName14' class='dataVizbarTextSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
				"</div>"+
		"</div>"+
		"<div class='swiper-scrollbar'></div>";


    var longuerMax = 300;
    var i;
    for (i = 1; i < 15; i++) { 
    var index = i-1;
    var valeur = (donnees[index][1]*longuerMax)/max;
    $('#dataVizbar'+i).animate({width:valeur},2000);
    //$('#dataVizbarText1').innerHTML = valeur;
    document.getElementById('dataVizbarText'+i).innerHTML=donnees[index][1];
    document.getElementById('dataVizbarName'+i).innerHTML = getNameFromKey(donnees[index][0]);
    }
   
     genererSlider();
     
}

function setDonneesSpecialiteVille(tableau,valeurMax){
donnees = tableau;
max = valeurMax;
}

function getNameFromKey(code){
    if(code=='NB_D201'){
        return 'GENERALISTES'
    }
     if(code=='NB_D202'){
        return 'CARDIOLOGUES'
    }
     if(code=='GYNECO'){
        return 'GYNECOLOGUES'
    }
     if(code=='NB_D206'){
        return 'GASTRO ENTEROLOGUES'
    }
     if(code=='NB_D207'){
        return 'PSYCHIATRES'
    }
     if(code=='NB_D208'){
        return 'OPHTALMOLOGUES'
    }
     if(code=='NB_D209'){
        return 'OTO-RHINO LARYNGOLOGUES'
    }
     if(code=='NB_D210'){
        return 'PEDIATRES'
    }
     if(code=='NB_D211'){
        return 'PNEUMOLOGUES'
    }
     if(code=='NB_D212'){
        return 'RADIOLOGUES IMAGERIE MEDICALE'
    }
     if(code=='NB_D221'){
        return 'DENTISTES'
    }
     if(code=='NB_D233'){
        return 'KINESITHERAPEUTES'
    }
     if(code=='NB_D237'){
        return 'PODOLOGUES'
    }
     if(code=='NB_D238'){
        return 'AUDIO PROTHESISTES'
    }
        if(code=='NB_D105'){
        return 'LUTTE CONTRE LE CANCER'
    }
    if(code=='NB_D106'){
        return 'URGENCES'
    }
    if(code=='NB_D107'){
        return 'MATERNITES'
    }
     if(code=='NB_D108'){
        return 'CENTRES DE SANTE'
    }
     if(code=='PSYCHO'){
        return 'ETABLISSEMENTS PSYCHIATRIQUES'
    }
     if(code=='NB_D110'){
        return 'CENTRES MEDECINE PREVENTIVE'
    }
     if(code=='NB_D111'){
        return 'DIALYSE'
    }
     if(code=='NB_D112'){
        return 'HOSPITALISATION A DOMICILE'
    }
     if(code=='NB_D301'){
        return 'PHARMACIES'
    }
     if(code=='NB_D302'){
        return "LABORATOIRES D'ANALYSES MEDICALES"
    }
     if(code=='NB_D306'){
        return "LUTTE CONTRE L'ALCOOLISME"
    }
    else{
    	return 'Inconnu'
    }
}