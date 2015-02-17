"use strict"

var infoVille;

//Fonction qui récupère les donnée du mois
var getMois = (function loadDataAtmoMois() {
    
    var moisAtmo;
    $.ajax({
        dataType: "json",
        url: "ressource/excel/atmotab.json",
        //async:false,
        success: function(data){
           moisAtmo = data;
        }
    });
    return function getMois(nomVille) {
        return moisAtmo[nomVille];
    }
    
})();

//Fonction qui récupère les données infos
function loadDataInfo() {

    $.ajax({
        dataType: "json",
        url: "ressource/excel/info.json",
        //async:false,
        success: function(data){
           infoVille = data;
        }
    });
}

//Fonction qui récupère les données infos
function animate_s4(Pourcent1, Pourcent2) {

    $("#rempl_voiture").height($("#icone_voiture").height());
    $("#rempl_voiture").animate({width:$("#icone_voiture").width()*(Pourcent1/100)}, 1000, function() {});
    $("#rempl_bus").height($("#icone_bus").height());
    $("#rempl_bus").animate({width:$("#icone_bus").width()*(Pourcent2/100)}, 1000, function() {});
}

//Fonction qui récupère les jours inférieur a 6
function getJoursInf6(nomVille) {
    
    return infoVille[nomVille].atmoInf6;
    
}

//Fonction qui récupère le nombre de jours potable
function getNbrPotable(nomVille) {
    
    return infoVille[nomVille].atmoInf6;
    
}

//Fonction qui récupère les transports commun
function getTrspCommun(NomVille) {
    
        var chaineNonTraite = infoVille[NomVille].transportCommun;
        $("#tc_chiffre_s4").text(chaineNonTraite);
        var chaineTraite  = chaineNonTraite.substring(0,chaineNonTraite.length-1);
        
        var chaineNonTraite1 = infoVille[NomVille].voiture;
        $("#voiture_chiffre_s4").text(chaineNonTraite1);
        var chaineTraite1 = chaineNonTraite1.substring(0,chaineNonTraite1.length-1);
        animate_s4(Number(chaineTraite), Number(chaineTraite1));
        
        var chiffreSoleil = infoVille[NomVille].soleil;
        var chiffrePluie = infoVille[NomVille].pluie;
        $("#soleil_chiffre_s4").text(chiffreSoleil);
        $("#pluie_chiffre_s4").text(chiffrePluie);
        
}

//Fonction qui récupère le battle gauche
function getBattleGauche(NomVille) {
    
        var VoitureNontraiter = infoVille[NomVille].voiture;
        var Voiture  = VoitureNontraiter.substring(0,VoitureNontraiter.length-1);
        
        var BusNontraiter = infoVille[NomVille].transportCommun;
        var Bus = BusNontraiter.substring(0,BusNontraiter.length-1);
        
        var Soleil = infoVille[NomVille].soleil;
        var Pluie = infoVille[NomVille].pluie;
        
        var Atmo = infoVille[NomVille].atmoSup6;

        animeBarresGauche(Atmo,Bus,Voiture,Soleil,Pluie);
        
}

//Fonction qui récupère le battle droit
function getBattleDroite(NomVille) {
    
        var VoitureNontraiter = infoVille[NomVille].voiture;
        var Voiture  = VoitureNontraiter.substring(0,VoitureNontraiter.length-1);
        
        var BusNontraiter = infoVille[NomVille].transportCommun;
        var Bus = BusNontraiter.substring(0,BusNontraiter.length-1);
        
        var Soleil = infoVille[NomVille].soleil;
        var Pluie = infoVille[NomVille].pluie;
        
        var Atmo = infoVille[NomVille].atmoSup6;

        animeBarresDroite(Atmo,Bus,Voiture,Soleil,Pluie);
        
}

//Fonction qui vérifie que la ville sélectionnez contienne des données
function checkVille(ville) {
    
    var listeVilles = 
    ["AixEnProvence","Amiens","Angers","Annecy",
    "Avignon","Bayonne","Besancon","Bordeaux","Brest","Caen","Chambery",
    "ClermontFerrand","Dijon","Douai","Dunkerque","Grenoble","Rochelle",
    "Havre","Mans","Lille","Limoges","Lorient","Lyon","Marseille","Metz",
    "Montpellier","Mulhouse","Nancy","Nantes","Nice","Nimes","Orleans","Paris",
    "Pau","Perpignan","Poitiers","Reims","Rennes","Rouen","SaintEtienne","Strasbourg",
    "Toulon","Toulouse","Tours","Troyes","Valence","Valenciennes","Vannes"];
    return listeVilles.indexOf(ville);
}


//Fonction qui vérifie la correspondance de la ville
function correspondanceVille(ville) {
    
    ville = ville.toLowerCase();
    
    if(ville=="aix" || ville=="aix en provence" || ville=="aix-en-provence"){
       return "AixEnProvence";
    }
    else if(ville=="amiens"){
        return "Amiens";
    }
    else if(ville=="angers"){
        return "Angers";
    }
    else if(ville=="annecy"){
        return "Annecy";
    }
    else if(ville=="avignon"){
        return "Avignon";
    }
    else if(ville=="bayonne"){
        return "Bayonne";
    }
    else if(ville=="besançon" || ville=="besancon"){
        return "Besancon";
    }
    else if(ville=="bordeaux"){
        return "Bordeaux";
    }
    else if(ville=="brest"){
        return "Brest";
    }
    else if(ville=="caen"){
        return "Caen";
    }
    else if(ville=="chambéry"){
        return "Chambery";
    }
    else if(ville=="clermont ferrand"  || ville=="clermont" || ville=="clermont-ferrand"){
        return "ClermontFerrand";
    }
    else if(ville=="dijon"){
        return "Dijon";
    }
    else if(ville=="douai"){
        return "Douai";
    }
    else if(ville=="dunkerque"){
        return "Dunkerque";
    }
    else if(ville=="grenoble"){
        return "Grenoble";
    }
    else if(ville=="rochelle" || ville=="la rochelle"){
        return "Rochelle";
    }
    else if(ville=="havre" || ville=="le havre"){
        return "Havre";
    }
    else if(ville=="mans" || ville=="le mans"){
        return "Mans";
    }
    else if(ville=="lille"){
        return "Lille";
    }
    else if(ville=="limoges"){
        return "Limoges";
    }
    else if(ville=="lorient"){
        return "Lorient";
    }
    else if(ville=="lyon"){
        return "Lyon";
    }
    else if(ville=="marseille"){
        return "Marseille";
    }
    else if(ville=="metz"){
        return "Metz";
    }
    else if(ville=="montpellier"){
        return "Montpellier";
    }
    else if(ville=="mulhouse"){
        return "Mulhouse";
    }
    else if(ville=="nancy"){
        return "Nancy";
    }
    else if(ville=="nantes" || ville=="fcn"){
        return "Nantes";
    }
    else if(ville=="nice"){
        return "Nice";
    }
    else if(ville=="nîmes"){
        return "Nimes";
    }
    else if(ville=="orléans" || ville=="orleans"){
        return "Orleans";
    }
    else if(ville=="saint etienne" || ville=="saint étienne" || ville=="sainté"){
        return "SaintEtienne";
    }
    else if(ville=="paris"){
        return "Paris";
    }
    else if(ville=="pau"){
        return "Pau";
    }
    else if(ville=="perpignan"){
        return "Perpignan";
    }
    else if(ville=="poitiers"){
        return "Poitiers";
    }
    else if(ville=="reims"){
        return "Reims";
    }
    else if(ville=="rennes"){
        return "Rennes";
    }
    else if(ville=="rouen"){
        return "Rouen";
    }
    else if(ville=="strasbourg"){
        return "Strasbourg";
    }
    else if(ville=="toulon"){
        return "Toulon";
    }
    else if(ville=="toulouse"){
        return "Toulouse";
    }
    else if(ville=="tours"){
        return "Tours";
    }
    else if(ville=="troyes"){
        return "Troyes";
    }
    else if(ville=="valence"){
        return "Valence";
    }
    else if(ville=="valenciennes"){
        return "Valenciennes";
    }
    else if(ville=="vannes"){
        return "Vannes";
    }
    else{
        return ville;
    }
}

//Fonction qui renvoie le bon nom de la ville
function nomAffichage(ville) {
    
    if(ville=="AixEnProvence"){
       return "Aix-en-Provence";
    }
    else if(ville=="Besancon"){
       return "Besançon";
    }
    else if(ville=="Chambery"){
       return "Chambéry";
    }
    else if(ville=="ClermontFerrand"){
       return "Clermont-Ferrand";
    }
    else if(ville=="Rochelle"){
       return "La Rochelle";
    }
    else if(ville=="Havre"){
       return "Le Havre";
    }
    else if(ville=="Mans"){
        return "Le Mans";
    }
    else if(ville=="Nimes"){
       return "Nîmes";
    }
    else if(ville=="Orleans"){
       return "Orléans";
    }
    else if(ville=="SaintEtienne"){
       return "Saint-Etienne";
    }
    else{
        return ville;
    }
}