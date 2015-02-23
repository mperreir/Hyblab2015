"use strict";
var donneesVille1;
var donneesVille2;
function genererBarVersus(){
    var mergeDonnes = [];
   mergeDonnes=jointure(donneesVille1,donneesVille2);
    var maxValue = [];
    maxValue = getMax(mergeDonnes);
    mergeDonnes.sort(function(a, b) {
                                        a = a[maxValue[1]];
                                        b = b[maxValue[1]];
                                    
                                        return a > b ? -1 : (a < b ? 1 : 0);
                                    });
  // prompt("",mergeDonnes);

	document.getElementById('prac5').innerHTML=
	   "<div class='swiper-container3'>"+
            "<div class='swiper-wrapper'>"+
                "<div class='swiper-slide'>"+
                    "<div class='slide-inner'>"+
						"<div class='row'>"+
                           "<div class='col-xs-1 col-lg-1'>"+
                                " <div id='dataVizVersusBarTextG1' class='dataVizbarTextG'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarG1' class='dataVizBarSyleG'></div>"+
                            "</div>"+
                            "<div class='col-xs-2 col-lg-2' align='center'>"+
                                "<div id='dataVizVersusbarName1' class='dataVizVersusbarTextSpe'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarD1' class='dataVizBarSyleD'></div>"+
                            "</div>"+
                            "<div class='col-xs-1 col-lg-1'>"+
                                "<div id='dataVizVersusBarTextD1' class='dataVizbarTextD'></div>"+
                            "</div>"+
                        "</div>"+
                        
                        						"<div class='row'>"+
                           "<div class='col-xs-1 col-lg-1'>"+
                                " <div id='dataVizVersusBarTextG2' class='dataVizbarTextG'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarG2' class='dataVizBarSyleG'></div>"+
                            "</div>"+
                            "<div class='col-xs-2 col-lg-2' align='center'>"+
                                "<div id='dataVizVersusbarName2' class='dataVizVersusbarTextSpe'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarD2' class='dataVizBarSyleD'></div>"+
                            "</div>"+
                            "<div class='col-xs-1 col-lg-1'>"+
                                "<div id='dataVizVersusBarTextD2' class='dataVizbarTextD'></div>"+
                            "</div>"+
                        "</div>"+
                        
                        						"<div class='row'>"+
                           "<div class='col-xs-1 col-lg-1'>"+
                                " <div id='dataVizVersusBarTextG3' class='dataVizbarTextG'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarG3' class='dataVizBarSyleG'></div>"+
                            "</div>"+
                            "<div class='col-xs-2 col-lg-2' align='center'>"+
                                "<div id='dataVizVersusbarName3' class='dataVizVersusbarTextSpe'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarD3' class='dataVizBarSyleD'></div>"+
                            "</div>"+
                            "<div class='col-xs-1 col-lg-1'>"+
                                "<div id='dataVizVersusBarTextD3' class='dataVizbarTextD'></div>"+
                            "</div>"+
                        "</div>"+
                        
                        						"<div class='row'>"+
                           "<div class='col-xs-1 col-lg-1'>"+
                                " <div id='dataVizVersusBarTextG4' class='dataVizbarTextG'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarG4' class='dataVizBarSyleG'></div>"+
                            "</div>"+
                            "<div class='col-xs-2 col-lg-2' align='center'>"+
                                "<div id='dataVizVersusbarName4' class='dataVizVersusbarTextSpe'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarD4' class='dataVizBarSyleD'></div>"+
                            "</div>"+
                            "<div class='col-xs-1 col-lg-1'>"+
                                "<div id='dataVizVersusBarTextD4' class='dataVizbarTextD'></div>"+
                            "</div>"+
                        "</div>"+
                        
                        						"<div class='row'>"+
                           "<div class='col-xs-1 col-lg-1'>"+
                                " <div id='dataVizVersusBarTextG5' class='dataVizbarTextG'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarG5' class='dataVizBarSyleG'></div>"+
                            "</div>"+
                            "<div class='col-xs-2 col-lg-2' align='center'>"+
                                "<div id='dataVizVersusbarName5' class='dataVizVersusbarTextSpe'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarD5' class='dataVizBarSyleD'></div>"+
                            "</div>"+
                            "<div class='col-xs-1 col-lg-1'>"+
                                "<div id='dataVizVersusBarTextD5' class='dataVizbarTextD'></div>"+
                            "</div>"+
                        "</div>"+
                        
                        						"<div class='row'>"+
                           "<div class='col-xs-1 col-lg-1'>"+
                                " <div id='dataVizVersusBarTextG6' class='dataVizbarTextG'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarG6' class='dataVizBarSyleG'></div>"+
                            "</div>"+
                            "<div class='col-xs-2 col-lg-2' align='center'>"+
                                "<div id='dataVizVersusbarName6' class='dataVizVersusbarTextSpe'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarD6' class='dataVizBarSyleD'></div>"+
                            "</div>"+
                            "<div class='col-xs-1 col-lg-1'>"+
                                "<div id='dataVizVersusBarTextD6' class='dataVizbarTextD'></div>"+
                            "</div>"+
                        "</div>"+
                        
                        						"<div class='row'>"+
                           "<div class='col-xs-1 col-lg-1'>"+
                                " <div id='dataVizVersusBarTextG7' class='dataVizbarTextG'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarG7' class='dataVizBarSyleG'></div>"+
                            "</div>"+
                            "<div class='col-xs-2 col-lg-2' align='center'>"+
                                "<div id='dataVizVersusbarName7' class='dataVizVersusbarTextSpe'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarD7' class='dataVizBarSyleD'></div>"+
                            "</div>"+
                            "<div class='col-xs-1 col-lg-1'>"+
                                "<div id='dataVizVersusBarTextD7' class='dataVizbarTextD'></div>"+
                            "</div>"+
                        "</div>"+
                        
                        						"<div class='row'>"+
                           "<div class='col-xs-1 col-lg-1'>"+
                                " <div id='dataVizVersusBarTextG8' class='dataVizbarTextG'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarG8' class='dataVizBarSyleG'></div>"+
                            "</div>"+
                            "<div class='col-xs-2 col-lg-2' align='center'>"+
                                "<div id='dataVizVersusbarName8' class='dataVizVersusbarTextSpe'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarD8' class='dataVizBarSyleD'></div>"+
                            "</div>"+
                            "<div class='col-xs-1 col-lg-1'>"+
                                "<div id='dataVizVersusBarTextD8' class='dataVizbarTextD'></div>"+
                            "</div>"+
                        "</div>"+
                        
                        						"<div class='row'>"+
                           "<div class='col-xs-1 col-lg-1'>"+
                                " <div id='dataVizVersusBarTextG9' class='dataVizbarTextG'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarG9' class='dataVizBarSyleG'></div>"+
                            "</div>"+
                            "<div class='col-xs-2 col-lg-2' align='center'>"+
                                "<div id='dataVizVersusbarName9' class='dataVizVersusbarTextSpe'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarD9' class='dataVizBarSyleD'></div>"+
                            "</div>"+
                            "<div class='col-xs-1 col-lg-1'>"+
                                "<div id='dataVizVersusBarTextD9' class='dataVizbarTextD'></div>"+
                            "</div>"+
                        "</div>"+
                        
                        						"<div class='row'>"+
                           "<div class='col-xs-1 col-lg-1'>"+
                                " <div id='dataVizVersusBarTextG10' class='dataVizbarTextG'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarG10' class='dataVizBarSyleG'></div>"+
                            "</div>"+
                            "<div class='col-xs-2 col-lg-2' align='center'>"+
                                "<div id='dataVizVersusbarName10' class='dataVizVersusbarTextSpe'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarD10' class='dataVizBarSyleD'></div>"+
                            "</div>"+
                            "<div class='col-xs-1 col-lg-1'>"+
                                "<div id='dataVizVersusBarTextD10' class='dataVizbarTextD'></div>"+
                            "</div>"+
                        "</div>"+
                        
                        						"<div class='row'>"+
                           "<div class='col-xs-1 col-lg-1'>"+
                                " <div id='dataVizVersusBarTextG11' class='dataVizbarTextG'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarG11' class='dataVizBarSyleG'></div>"+
                            "</div>"+
                            "<div class='col-xs-2 col-lg-2' align='center'>"+
                                "<div id='dataVizVersusbarName11' class='dataVizVersusbarTextSpe'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarD11' class='dataVizBarSyleD'></div>"+
                            "</div>"+
                            "<div class='col-xs-1 col-lg-1'>"+
                                "<div id='dataVizVersusBarTextD11' class='dataVizbarTextD'></div>"+
                            "</div>"+
                        "</div>"+
                        
                        						"<div class='row'>"+
                           "<div class='col-xs-1 col-lg-1'>"+
                                " <div id='dataVizVersusBarTextG12' class='dataVizbarTextG'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarG12' class='dataVizBarSyleG'></div>"+
                            "</div>"+
                            "<div class='col-xs-2 col-lg-2' align='center'>"+
                                "<div id='dataVizVersusbarName12' class='dataVizVersusbarTextSpe'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarD12' class='dataVizBarSyleD'></div>"+
                            "</div>"+
                            "<div class='col-xs-1 col-lg-1'>"+
                                "<div id='dataVizVersusBarTextD12' class='dataVizbarTextD'></div>"+
                            "</div>"+
                        "</div>"+
                        
                        						"<div class='row'>"+
                           "<div class='col-xs-1 col-lg-1'>"+
                                " <div id='dataVizVersusBarTextG13' class='dataVizbarTextG'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarG13' class='dataVizBarSyleG'></div>"+
                            "</div>"+
                            "<div class='col-xs-2 col-lg-2' align='center'>"+
                                "<div id='dataVizVersusbarName13' class='dataVizVersusbarTextSpe'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarD13' class='dataVizBarSyleD'></div>"+
                            "</div>"+
                            "<div class='col-xs-1 col-lg-1'>"+
                                "<div id='dataVizVersusBarTextD13' class='dataVizbarTextD'></div>"+
                            "</div>"+
                        "</div>"+
                        
                        						"<div class='row'>"+
                           "<div class='col-xs-1 col-lg-1'>"+
                                " <div id='dataVizVersusBarTextG14' class='dataVizbarTextG'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarG14' class='dataVizBarSyleG'></div>"+
                            "</div>"+
                            "<div class='col-xs-2 col-lg-2' align='center'>"+
                                "<div id='dataVizVersusbarName14' class='dataVizVersusbarTextSpe'></div>"+
                            "</div>"+
                            "<div class='col-xs-4 col-lg-4'>"+
                                "<div id='dataVizVersusBarD14' class='dataVizBarSyleD'></div>"+
                            "</div>"+
                            "<div class='col-xs-1 col-lg-1'>"+
                                "<div id='dataVizVersusBarTextD14' class='dataVizbarTextD'></div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+    
                "</div>"+
			"</div>"+
		"</div>"+
		"<div class='swiper-scrollbar3'></div>";

var longuerMax = 200;
    var i;
    for (i = 1; i < 15; i++) { 
    var index = i-1;
    var valeur1 = (mergeDonnes[index][1]*longuerMax)/maxValue[0];
    var valeur2 = (mergeDonnes[index][2]*longuerMax)/maxValue[0];
    $('#dataVizVersusBarG'+i).animate({width:valeur1},2000);
    $('#dataVizVersusBarD'+i).animate({width:valeur2},2000);
    //$('#dataVizbarText1').innerHTML = valeur;
    //document.getElementById('dataVizVersusBarTextD'+i).style.marginLeft = "20px";
    document.getElementById('dataVizVersusBarTextG'+i).innerHTML=mergeDonnes[index][1];
    document.getElementById('dataVizVersusBarTextD'+i).innerHTML=mergeDonnes[index][2];
    document.getElementById('dataVizVersusbarName'+i).innerHTML = getNameFromKey(mergeDonnes[index][0]);
    }
 genererSlider3(); 
    
}
function setDonneesVille1(valeursVille1){
   donneesVille1 = JSON.parse(JSON.stringify(valeursVille1));
    
}
function setDonneesVille2(valeursVille2){
    
   donneesVille2 = JSON.parse(JSON.stringify(valeursVille2));
   
}
function jointure(tab1,tab2){
    var tmp = [];
  for (var key in tab1) tmp.push([key, tab1[key], tab2[key]]);

    return tmp;
    
 }
 
function getMax(tab){
    var maxVarByVille = [];
    var ville = 1;
    var maxVal=0;
    for(var i=0; i<tab.length;i++){
        if(tab[i][1] >= maxVal ){
            maxVal = tab[i][1];
            ville = 1;
        }
        if(tab[i][2] >= maxVal){
             maxVal = tab[i][2];
             ville = 2;
        }
    }
    maxVarByVille.push(maxVal);
    maxVarByVille.push(ville);
    return maxVarByVille;
}

function tri(tab){
    var tmp;
    for(var i=0; i<tab.length-1;i++){
         if(tab[i+1][1]>tab[i][1]){
             tmp = tab[i];
             tab[i] = tab[i+1];
             tab[i+1] = tmp;
         }
    }
}

function getSomme(tab){
    var somme=0;
    var sommeEtab=0;
    var retour=[];
    for(var key in tab){
        if(key=="NB_D105" || key=="NB_D106" || key=="NB_D107" || key=="NB_D108" || key=="PSYCHO" || key=="NB_D110" || key=="NB_D111" || key=="NB_D112" || key=="NB_D301" || key=="NB_D302" || key=="NB_D306"){
            sommeEtab+=tab[key];
        }
        else{
            somme+=tab[key];
        }
    }

   
    retour.push(somme);
    retour.push(sommeEtab);
     //alert("somme "+retour[0]);
     //alert("somme Etab "+retour[1]);
    return retour;
}

/*
function getSommeEtab(tab){
    var somme=0;
    for(var i=14;i<24;i++){
        somme+=tab[i];
    }
    alert("somme etab "+somme);
    return somme;
}
*/