"use strict";

//Fonction qui anime les barres de chargement de gauche
function animeBarresGauche(A,B,C,S,P) {
    
    //Animation de chargement des barres ATMO
    var maxA = $( "#div-barreAtmo-g-s5" ).width()*0.9;
    var widthA = (maxA*(365-A))/365;
     $( "#barreAtmo-g" ).animate({width:widthA}, 1000, function() {
        $("#atmo-g-chiffre").text(365-parseInt(A)+"J");
    });
    
    //Animation de chargement des barres BUS
    var maxB = $( "#div-barreBus-g-s5" ).width()*0.9;
    var widthB = (maxB*B)/100;
    $( "#barreBus-g" ).animate({width:widthB}, 1000, function() {
        $("#bus-g-chiffre").text(B+"%");
    });
    
    //Animation de chargement des barres VOITURE
    var maxC = $( "#div-barreVoiture-g-s5" ).width()*0.9;
    var widthC = (maxC*C)/100;
    $( "#barreVoiture-g" ).animate({width:widthC}, 1000, function() {
        $("#voiture-g-chiffre").text(C+"%");
    });
    
    //Animation de chargement des  barres SOLEIL
    var maxS = $( "#div-barreSoleil-g-s5" ).width()*0.9;
    var widthS = (maxS*S)/365;
    $( "#barreSoleil-g" ).animate({width:widthS}, 1000, function() {
        $("#soleil-g-chiffre").text(S+"J");
    });
    
    //Animation de chargement des  barres PLUIE
    var maxP = $( "#div-barrePluie-g-s5" ).width()*0.9
    var widthP = (maxP*P)/365;
    $( "#barrePluie-g" ).animate({width:widthP}, 1000, function() {
        $("#pluie-g-chiffre").text(P+"J");
    });
}

//Fonction qui anime les barres de chargement de gauche
function animeBarresDroite(A,B,C,S,P){
    
    //Animation de chargement des barres ATMO
    var maxA = $( "#div-barreAtmo-d-s5" ).width()*0.9;
    var widthA = (maxA*(365-A))/365;
     $( "#barreAtmo-d" ).animate({width:widthA}, 1000, function() {
        $("#atmo-d-chiffre").text(365-parseInt(A)+"J");
    });
    
    //Animation de chargement des barres BUS
    var maxB = $( "#div-barreBus-d-s5" ).width()*0.9;
    var widthB = (maxB*B)/100;
    $( "#barreBus-d" ).animate({width:widthB}, 1000, function() {
        $("#bus-d-chiffre").text(B+"%");
    });
    
    //Animation de chargement des barres VOITURE
    var maxC = $( "#div-barreVoiture-d-s5" ).width()*0.9;
    var widthC = (maxC*C)/100;
    $( "#barreVoiture-d" ).animate({width:widthC}, 1000, function() {
        $("#voiture-d-chiffre").text(C+"%");
    });
    
    //Animation de chargement des barres SOLEIL
    var maxS = $( "#div-barreSoleil-d-s5" ).width()*0.9;
    var widthS = (maxS*S)/365;
    $( "#barreSoleil-d" ).animate({width:widthS}, 1000, function() {
        $("#soleil-d-chiffre").text(S+"J");
    });
    
    //Animation de chargement des barres PLUIE
    var maxP = $( "#div-barrePluie-d-s5" ).width()*0.9;
    var widthP = (maxP*P)/365;
    $( "#barrePluie-d" ).animate({width:widthP}, 1000, function() {
        $("#pluie-d-chiffre").text(P+"J")
    });
}

//Fonction qui positionne les icones au centre de la slide
function PostitionIcone() {
    
    //Position centrer des icones
    //ATMO
    $("#indiceATMO-s5").height(Number($("#div-pictoAtmo-s5").height()));
    var widthAtmo = (Number($("#indiceATMO-s5").width()))-(Number($("#div-pictoAtmo-s5").width()))-20;
    $("#div-barreAtmo-g-s5").width(widthAtmo/2);
    $("#div-barreAtmo-d-s5").width(widthAtmo/2);
    $("#div-barreAtmo-g-s5").height(Number($("#div-pictoAtmo-s5").height()));
    $("#div-barreAtmo-d-s5").height(Number($("#div-pictoAtmo-s5").height()));
    var heightAtmo = (Number($("#indiceATMO-s5").height()))-(Number(15));
    $("#barreAtmo-g").css("margin-top",heightAtmo/2);
    $("#barreAtmo-d").css("margin-top",heightAtmo/2);
    $("#atmo-g-chiffre").css("margin-top","0.5%");
    $("#atmo-d-chiffre").css("margin-top","0.5%");
   
    //Bus
    $("#bus-s5").height(Number($("#div-pictoBus-s5").height()));
    var widthBus = (Number($("#bus-s5").width()))-(Number($("#div-pictoBus-s5").width()))-20;
    $("#div-barreBus-g-s5").width(widthBus/2);
    $("#div-barreBus-d-s5").width(widthBus/2);
    $("#div-barreBus-g-s5").height(Number($("#div-pictoBus-s5").height()));
    $("#div-barreBus-d-s5").height(Number($("#div-pictoBus-s5").height()));
    var heightBus = (Number($("#bus-s5").height()))-(Number(15));
    $("#barreBus-g").css("margin-top",heightBus/2);
    $("#barreBus-d").css("margin-top",heightBus/2);
    $("#bus-g-chiffre").css("margin-top","2.5%");
    $("#bus-d-chiffre").css("margin-top","2.5%");
    
    //Voiture
    $("#voiture-s5").height(Number($("#div-pictoVoiture-s5").height()));
    var widthVoiture = (Number($("#voiture-s5").width()))-(Number($("#div-pictoVoiture-s5").width()))-20;
    $("#div-barreVoiture-g-s5").width(widthVoiture/2);
    $("#div-barreVoiture-d-s5").width(widthVoiture/2);
    $("#div-barreVoiture-g-s5").height(Number($("#div-pictoVoiture-s5").height()));
    $("#div-barreVoiture-d-s5").height(Number($("#div-pictoVoiture-s5").height()));
    var heightVoiture = (Number($("#voiture-s5").height()))-(Number(15));
    $("#barreVoiture-g").css("margin-top",heightVoiture/2);
    $("#barreVoiture-d").css("margin-top",heightVoiture/2);
    $("#voiture-g-chiffre").css("margin-top","0.5%");
    $("#voiture-d-chiffre").css("margin-top","0.4%");
    
    //Soleil
    $("#soleil-s5").height(Number($("#div-pictoSoleil-s5").height()));
    var widthSoleil = (Number($("#soleil-s5").width()))-(Number($("#div-pictoSoleil-s5").width()))-20;
    $("#div-barreSoleil-g-s5").width(widthSoleil/2);
    $("#div-barreSoleil-d-s5").width(widthSoleil/2);
    $("#div-barreSoleil-g-s5").height(Number($("#div-pictoSoleil-s5").height()));
    $("#div-barreSoleil-d-s5").height(Number($("#div-pictoSoleil-s5").height()));
    var heightSoleil = (Number($("#soleil-s5").height()))-(Number(15));
    $("#barreSoleil-g").css("margin-top",heightSoleil/2);
    $("#barreSoleil-d").css("margin-top",heightSoleil/2);
    $("#soleil-g-chiffre").css("margin-top","4.2%");
    $("#soleil-d-chiffre").css("margin-top","4.2%");
    
    //Pluie
    $("#pluie-s5").height(Number($("#div-pictoPluie-s5").height()));
    var widthPluie = (Number($("#pluie-s5").width()))-(Number($("#div-pictoPluie-s5").width()))-20;
    $("#div-barrePluie-g-s5").width(widthSoleil/2);
    $("#div-barrePluie-d-s5").width(widthSoleil/2);
    $("#div-barrePluie-g-s5").height(Number($("#div-pictoPluie-s5").height()));
    $("#div-barrePluie-d-s5").height(Number($("#div-pictoPluie-s5").height()));
    var heightPluie = (Number($("#pluie-s5").height()))-(Number(15));
    $("#barrePluie-g").css("margin-top",heightPluie/2);
    $("#barrePluie-d").css("margin-top",heightPluie/2);
    $("#pluie-g-chiffre").css("margin-top","4.8%");
    $("#pluie-d-chiffre").css("margin-top","4.8%");
}

function resetTextField() {
    $("textField-s3").value = "";
}
