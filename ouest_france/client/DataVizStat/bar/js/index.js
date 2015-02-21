"use strict";

function lancerBarre(donnees,max){
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
                                            "<div id='dataVizbarEtab1'></div>"+
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
                                            "<div id='dataVizbarEtab2'></div>"+
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
                                            "<div id='dataVizbarEtab3'></div>"+
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
                                            "<div id='dataVizbarEtab4'></div>"+
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
                                            "<div id='dataVizbarEtab5'></div>"+
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
                                            "<div id='dataVizbarEtab6'></div>"+
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
                                           "<div id='dataVizbarEtab7'></div>"+
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
                                            "<div id='dataVizbarEtab8'></div>"+
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
                                            "<div id='dataVizbarEtab9'></div>"+
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
                                            "<div id='dataVizbarEtab10'></div>"+
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
                                            "<div id='dataVizbarEtab11'></div>"+
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
                                            "<div id='dataVizbarEtab12'></div>"+
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
                                            "<div id='dataVizbarEtab13'></div>"+
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
                                            "<div id='dataVizbarEtab14'></div>"+
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
    var valeur = (donnees[0][1]*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtab1').animate({width:valeur},2000);
    //$('#dataVizbarText1').innerHTML = valeur;
    document.getElementById('dataVizbarText1').innerHTML=donnees[0][1];
    document.getElementById('dataVizbarName1').innerHTML = getNameFromKey(donnees[0][0]);
    //}
    
    valeur = (donnees[1][1]*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtab2').animate({width:valeur},2000);
   document.getElementById('dataVizbarText2').innerHTML=donnees[1][1];
    document.getElementById('dataVizbarName2').innerHTML = getNameFromKey(donnees[1][0]);
    //}
    
    valeur = (donnees[2][1]*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtab3').animate({width:valeur},2000);
   document.getElementById('dataVizbarText3').innerHTML=donnees[2][1];
    document.getElementById('dataVizbarName3').innerHTML = getNameFromKey(donnees[2][0]);
    //}
    valeur = (donnees[3][1]*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtab4').animate({width:valeur},2000);
    document.getElementById('dataVizbarText4').innerHTML=donnees[3][1];
     document.getElementById('dataVizbarName4').innerHTML = getNameFromKey(donnees[3][0]);
    //}
    valeur = (donnees[4][1]*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtab5').animate({width:valeur},2000);
    document.getElementById('dataVizbarText5').innerHTML=donnees[4][1];
     document.getElementById('dataVizbarName5').innerHTML = getNameFromKey(donnees[4][0]);
    //}
    valeur = (donnees[5][1]*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtab6').animate({width:valeur},2000);
    document.getElementById('dataVizbarText6').innerHTML=donnees[5][1];
     document.getElementById('dataVizbarName6').innerHTML = getNameFromKey(donnees[5][0]);
    //}
    valeur = (donnees[6][1]*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtab7').animate({width:valeur},2000);
    document.getElementById('dataVizbarText7').innerHTML=donnees[6][1];
     document.getElementById('dataVizbarName7').innerHTML = getNameFromKey(donnees[6][0]);
    //}
    valeur = (donnees[7][1]*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtab8').animate({width:valeur},2000);
    document.getElementById('dataVizbarText8').innerHTML=donnees[7][1];
     document.getElementById('dataVizbarName8').innerHTML = getNameFromKey(donnees[7][0]);
    //}
    valeur = (donnees[8][1]*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtab9').animate({width:valeur},2000);
    document.getElementById('dataVizbarText9').innerHTML=donnees[8][1];
     document.getElementById('dataVizbarName9').innerHTML = getNameFromKey(donnees[8][0]);
    //}
    valeur = (donnees[9][1]*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtab10').animate({width:valeur},2000);
    document.getElementById('dataVizbarText10').innerHTML=donnees[9][1];
     document.getElementById('dataVizbarName10').innerHTML = getNameFromKey(donnees[9][0]);
    //}
    valeur = (donnees[10][1]*longuerMax)/max;
    //if(valeur!=0){
    $('#dataVizbarEtab11').animate({width:valeur},2000);
    document.getElementById('dataVizbarText11').innerHTML=donnees[10][1];
     document.getElementById('dataVizbarName11').innerHTML = getNameFromKey(donnees[10][0]);
    //}
         valeur = (donnees[11][1]*longuerMax)/max;
         //if(valeur!=0){
    $('#dataVizbarEtab12').animate({width:valeur},2000);
    document.getElementById('dataVizbarText12').innerHTML=donnees[11][1];
     document.getElementById('dataVizbarName12').innerHTML = getNameFromKey(donnees[11][0]);
        // }
         valeur = (donnees[12][1]*longuerMax)/max;
      //   if(valeur!=0){
    $('#dataVizbarEtab13').animate({width:valeur},2000);
    document.getElementById('dataVizbarText13').innerHTML=donnees[12][1];
     document.getElementById('dataVizbarName13').innerHTML = getNameFromKey(donnees[12][0]);
    //     }
         valeur = (donnees[13][1]*longuerMax)/max;
  //       if(valeur!=0){
    $('#dataVizbarEtab14').animate({width:valeur},2000);
    document.getElementById('dataVizbarText14').innerHTML=donnees[13][1];
     document.getElementById('dataVizbarName14').innerHTML = getNameFromKey(donnees[13][0]);
//         }
     genererSlider();
     
}

function getNameFromKey(code_spe){
    if(code_spe=='NB_D201'){
        return 'GENERALISTES'
    }
     if(code_spe=='NB_D202'){
        return 'CARDIOLOGUES'
    }
     if(code_spe=='GYNECO'){
        return 'GYNECOLOGUES'
    }
     if(code_spe=='NB_D206'){
        return 'GASTRO-ENTEROLOGUES'
    }
     if(code_spe=='NB_D207'){
        return 'PSYCHIATRES'
    }
     if(code_spe=='NB_D208'){
        return 'OPHTALMOLOGUES'
    }
     if(code_spe=='NB_D209'){
        return 'OTO-RHINO-LARYNGOLOGUES'
    }
     if(code_spe=='NB_D210'){
        return 'PEDIATRES'
    }
     if(code_spe=='NB_D211'){
        return 'PNEUMOLOGUES'
    }
     if(code_spe=='NB_D212'){
        return 'RADIOLOGUES IMAGERIE MEDICALE'
    }
     if(code_spe=='NB_D221'){
        return 'DENTISTES'
    }
     if(code_spe=='NB_D233'){
        return 'KINESITHERAPEUTES'
    }
     if(code_spe=='NB_D237'){
        return 'PODOLOGUES'
    }
     if(code_spe=='NB_D238'){
        return 'AUDIO PROTHESISTES'
    }
    else{
    	return 'SPE INCONNUE'
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