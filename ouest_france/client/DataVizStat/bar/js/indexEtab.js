"use strict";

function lancerBarreEtab(donneesTab,maxTab){
	/**** chargement des divs pour les barres *********/
	  		
	document.getElementById('etab3').innerHTML=
	    '<div class="swiper-container">'+
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
                                            "<div id='dataVizbarEtablissement1'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarNameEtab1' class='dataVizbarTextEtablissementSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement2' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement2'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab2' class='dataVizbarTextEtablissementSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement3' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement3'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab3' class='dataVizbarTextEtablissementSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement4' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9 barre'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement4'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab4' class='dataVizbarTextEtablissementSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement5' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9 barre'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement5'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab5' class='dataVizbarTextEtablissementSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement6' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement6'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab6' class='dataVizbarTextEtablissementSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement7' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarEtablissement7'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab7' class='dataVizbarTextEtablissementSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement8' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement8'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab8' class='dataVizbarTextEtablissementSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement9' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement9'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab9' class='dataVizbarTextEtablissementSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement10' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                       "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement10'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab10' class='dataVizbarTextEtablissementSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-2 col-lg-2'>"+
                                        "<div id='dataVizbarTextEtablissement11' class='dataVizbarTextEtablissement'></div>"+
                                    "</div>"+
                                    "<div class='col-xs-9 col-lg-9'>"+
                                        "<div class='row'>"+
                                            "<div id='dataVizbarEtablissement11'></div>"+
                                        "</div>"+
                                        "<div class='row'>"+
                                           "<div id='dataVizbarNameEtab11' class='dataVizbarTextEtablissementSpe'></div>"+
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
                                           "<div id='dataVizbarNameEtab12' class='dataVizbarTextEtablissementSpe'></div>"+
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
                                          "<div id='dataVizbarNameEtab13' class='dataVizbarTextEtablissementSpe'></div>"+
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
                                           "<div id='dataVizbarNameEtab14' class='dataVizbarTextEtablissementSpe'></div>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
				"</div>"+
		"</div>"+
		"<div class='swiper-scrollbar'></div>";

	
	var $sContain = $('.swiper-container');
    $sContain.each(function(){
        var $this = $(this);
        $this.swiper();
    })
	
    var longuermaxTab = 300;
    var valeur = (donneesTab[0][1]*longuermaxTab)/maxTab;
    //if(valeur!=0){
    $('#dataVizbarEtablissement1').animate({width:valeur},2000);
    //$('#dataVizbarTextEtablissement1').innerHTML = valeur;
    document.getElementById('dataVizbarTextEtablissement1').innerHTML=donneesTab[0][1];
    document.getElementById('dataVizbarNameEtab1').innerHTML = getNameFromKeyEtab(donneesTab[0][0]);
    //} 
    
    valeur = (donneesTab[1][1]*longuermaxTab)/maxTab;
    //if(valeur!=0){
    $('#dataVizbarEtablissement2').animate({width:valeur},2000);
   document.getElementById('dataVizbarTextEtablissement2').innerHTML=donneesTab[1][1];
    document.getElementById('dataVizbarNameEtab2').innerHTML = getNameFromKeyEtab(donneesTab[1][0]);
    //}
    
    valeur = (donneesTab[2][1]*longuermaxTab)/maxTab;
    //if(valeur!=0){
    $('#dataVizbarEtablissement3').animate({width:valeur},2000);
   document.getElementById('dataVizbarTextEtablissement3').innerHTML=donneesTab[2][1];
    document.getElementById('dataVizbarNameEtab3').innerHTML = getNameFromKeyEtab(donneesTab[2][0]);
    //}
    valeur = (donneesTab[3][1]*longuermaxTab)/maxTab;
    //if(valeur!=0){
    $('#dataVizbarEtablissement4').animate({width:valeur},2000);
    document.getElementById('dataVizbarTextEtablissement4').innerHTML=donneesTab[3][1];
     document.getElementById('dataVizbarNameEtab4').innerHTML = getNameFromKeyEtab(donneesTab[3][0]);
    //}
    valeur = (donneesTab[4][1]*longuermaxTab)/maxTab;
    //if(valeur!=0){
    $('#dataVizbarEtablissement5').animate({width:valeur},2000);
    document.getElementById('dataVizbarTextEtablissement5').innerHTML=donneesTab[4][1];
     document.getElementById('dataVizbarNameEtab5').innerHTML = getNameFromKeyEtab(donneesTab[4][0]);
    //}
    valeur = (donneesTab[5][1]*longuermaxTab)/maxTab;
    //if(valeur!=0){
    $('#dataVizbarEtablissement6').animate({width:valeur},2000);
    document.getElementById('dataVizbarTextEtablissement6').innerHTML=donneesTab[5][1];
     document.getElementById('dataVizbarNameEtab6').innerHTML = getNameFromKeyEtab(donneesTab[5][0]);
    //}
    valeur = (donneesTab[6][1]*longuermaxTab)/maxTab;
    //if(valeur!=0){
    $('#dataVizbarEtablissement7').animate({width:valeur},2000);
    document.getElementById('dataVizbarTextEtablissement7').innerHTML=donneesTab[6][1];
     document.getElementById('dataVizbarNameEtab7').innerHTML = getNameFromKeyEtab(donneesTab[6][0]);
    //}
    valeur = (donneesTab[7][1]*longuermaxTab)/maxTab;
    //if(valeur!=0){
    $('#dataVizbarEtablissement8').animate({width:valeur},2000);
    document.getElementById('dataVizbarTextEtablissement8').innerHTML=donneesTab[7][1];
     document.getElementById('dataVizbarNameEtab8').innerHTML = getNameFromKeyEtab(donneesTab[7][0]);
    //}
    valeur = (donneesTab[8][1]*longuermaxTab)/maxTab;
    //if(valeur!=0){
    $('#dataVizbarEtablissement9').animate({width:valeur},2000);
    document.getElementById('dataVizbarTextEtablissement9').innerHTML=donneesTab[8][1];
     document.getElementById('dataVizbarNameEtab9').innerHTML = getNameFromKeyEtab(donneesTab[8][0]);
    //}
    valeur = (donneesTab[9][1]*longuermaxTab)/maxTab;
    //if(valeur!=0){
    $('#dataVizbarEtablissement10').animate({width:valeur},2000);
    document.getElementById('dataVizbarTextEtablissement10').innerHTML=donneesTab[9][1];
     document.getElementById('dataVizbarNameEtab10').innerHTML = getNameFromKeyEtab(donneesTab[9][0]);
    //}
    valeur = (donneesTab[10][1]*longuermaxTab)/maxTab;
    //if(valeur!=0){
    $('#dataVizbarEtablissement11').animate({width:valeur},2000);
    document.getElementById('dataVizbarTextEtablissement11').innerHTML=donneesTab[10][1];
     document.getElementById('dataVizbarNameEtab11').innerHTML = getNameFromKeyEtab(donneesTab[10][0]);
    //}
     genererSlider2();
    
}

function getNameFromKeyEtab(code_eta){
    if(code_eta=='NB_D105'){
        return 'CENTRE LUTTE CONTRE LE CANCER'
    }
    if(code_eta=='NB_D106'){
        return 'URGENCES'
    }
    if(code_eta=='NB_D107'){
        return 'MATERNITE'
    }
     if(code_eta=='NB_D108'){
        return 'CENTRE DE SANTE'
    }
     if(code_eta=='PSYCHO'){
        return 'ETABLISSEMENTS PSYCHIATRIQUES'
    }
     if(code_eta=='NB_D110'){
        return 'CENTRE MEDECINE PREVENTIVE'
    }
     if(code_eta=='NB_D111'){
        return 'DIALYSE'
    }
     if(code_eta=='NB_D112'){
        return 'HOSPITALISATION A DOMICILE'
    }
     if(code_eta=='NB_D301'){
        return 'PHARMACIE'
    }
     if(code_eta=='NB_D302'){
        return "LABORATOIRE D'ANALYSE MEDICALE"
    }
     if(code_eta=='NB_D306'){
        return "LUTTE CONTRE L'ALCOOLISME"
    }
    else{
    	return 'Etablissement Inconnu'
    }
    /*P_Omnipraticiens = data.NB_D201;
                                    P_Cardio = data.NB_D202;
                                    P_Gyneco = data.GYNECO;
                                    P_Gastro = data.NB_D206;
                                    P_Psychiatrie = data.NB_D207;
                                    P_Ophtalmo = data.NB_D208;
                                    P_Rhino = data.NB_D209;
                                    P_Pediatrie = data.NB_D210;
                                    P_Pneumo = data.NB_D211;
                                    P_Imagerie = data.NB_2012;
                                    P_Dentiste = data.NB_221;
                                    P_Kine = data.NB_D233;
                                    P_Podologue = data.NB_D237;
                                    P_AudioProthesiste = data.NB_D238;*/
}