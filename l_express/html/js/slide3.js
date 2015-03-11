"use strict";
var nbrJours = new Array();

//Fonction qui réalise l'animation dees bar de progression du classement des viles
function animeClassement(nbrJour, idVille) {
	var widthMax = $("#classementVille").width() - ($(".villeClassement").width() + $(".numClassement").width())-10;
	var widthCorriger = (nbrJour * widthMax)/365;
	$(idVille).animate({
		width: widthCorriger
	}, 1000);

}

//Fonction qui remplit le tableau de manière croissante soit de la ville la moins polluée à la plus polluée
function remplirTabCroissant() {
	var i;
	var ligne;
	var cell1;
	var cell2;
	var cell3;
	var table = document.getElementById("tabVilles");
	
	var listeVille = croissantTab();
		$('#classementVille').slimscroll({
		width: '90%',
		height: '150px',
		color: '#ffffff',
		alwaysVisible: true,
		allowPageScroll: false
	});

	$('#tabVilles').empty();
	for (i = listeVille.length; i > 0; i--) { 
		$('#tabVilles').append('<tr><td class="numClassement">'+((listeVille.length+1)-i)+'</td><td class="villeClassement">'+nomAffichage(listeVille[i-1])+'</td></tr>');
		//$('#tabVilles').append('<tr><td class="numClassement">'+((listeVille.length+1)-i)+'</td><td class="villeClassement">'+nomAffichage(listeVille[i-1])+'</td><td><img src="/ressource/svg/slide5/barre3.png" class="barreClassement" id="barre'+listeVille[i-1]+'" style="width: 0px;height:15px;"></td></tr>');
	}
	for (i = 0; i < listeVille.length; i++) { 
		var id = "#barre"+listeVille[i];
		animeClassement(nbrJours[i], id);
		
	}
}

//Fonction qui remplit le tableau de manière décroissante soit de la ville la plus polluée à la moins polluée
function remplirTabDecroissant() {
	var i;
	var listeVille = croissantTab();
	var ligne;
	var cell1;
	var cell2;
	var cell3;
	var table = document.getElementById("tabVilles");
	
	$('#classementVille').slimscroll({
		width: '90%',
		height: '150px',
		color: '#ffffff',
		alwaysVisible: true,
		allowPageScroll: false
	});
	
	$('#tabVilles').empty();
	for (i = 0; i < listeVille.length; i++) { 
		
		//$('#tabVilles').append('<tr><td class="numClassement">'+((listeVille.length-i))+'</td><td class="villeClassement">'+listeVille[i]+'</td><td class="barresClassement"><img src="/ressource/svg/slide5/barre3.png" id="barre'+listeVille[i]+'" style="width: 0px;height:15px;"></td></tr>');
		$('#tabVilles').append('<tr><td class="numClassement">'+((listeVille.length-i))+'</td><td class="villeClassement">'+nomAffichage(listeVille[i])+'</td></tr>');

		
	}
	for (i = 0; i < listeVille.length; i++) { 
		var id = "#barre"+listeVille[i];
		animeClassement(nbrJours[i], id);
		
	}
}


//Fonction qui classe dans un tableau les villes de la moins polluée à la plus polluée
function croissantTab() {
	var i, j;
	var listeVille = ["AixEnProvence","Amiens","Angers","Annecy","Avignon","Bayonne","Besancon","Bordeaux","Brest","Caen","Chambery","ClermontFerrand","Dijon","Douai","Dunkerque","Grenoble","Rochelle","Havre","Mans","Lille","Limoges","Lorient","Lyon","Marseille","Metz","Montpellier","Mulhouse","Nancy","Nantes","Nice","Nimes","Orleans","Paris","Pau","Perpignan","Poitiers","Reims","Rennes","Rouen","SaintEtienne","Strasbourg","Toulon","Toulouse","Tours","Troyes","Valence","Valenciennes","Vannes"]
	var nbr = 1;
	var listeCroissant = new Array();
	var nbrA;
	var nbrB;
	
	for (i = 0; i < listeVille.length; i++) { 
		nbrA = getJoursSup6(listeVille[i]);
		if(listeCroissant.length == 0){
			listeCroissant[0] = listeVille[i];
			nbrJours[0] = getJoursSup6(listeVille[i]);
		}
		else{
			for (j = listeCroissant.length; j > 0; j--) { 
				nbrB = getJoursSup6(listeCroissant[(j-1)]);
				if(nbrB < nbrA){
					listeCroissant[j] = listeCroissant[(j-1)];
					nbrJours[j] = nbrJours[(j-1)];
				}
				else{
					listeCroissant[j] = listeVille[i];
					nbrJours[j] = getJoursSup6(listeVille[i]);
					break;
				}
			}
		}
	}
	return listeCroissant;
}