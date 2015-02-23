"use strict";

$(document).ready(function() {
	//Chargement du menu
	$(".headerP4").click(function() {
		$(this).css("margin-top", "-330px");
		$(".categories").css("margin-top", "40px");
		$(".boutonMetiers").fadeOut();

		$(this).delay(1300).queue(function(next) {
			$(".imgPointilles").css("visibility", "hidden");
			next();
		});

		$(".podium").delay(1300).fadeIn();
		$(".categories li ul li").delay(1300).fadeIn(400);

		$(this).delay(400).queue(function(next) {
			$(".categories ul").css("border-left", "dotted 3px white");
			$(".categories ul").css("border-bottom", "dotted 3px white");
			next();
		});
	});
});

$(document).ready(function() {
	$(".categories li").click(function() {
		$(".categories li").removeClass("menuActif");
		$(this).addClass("menuActif");

		var items = $('.categories > li').get();

		items.sort(function(a, b) {

			if ($(a).hasClass("menuActif")) return -1;
			if ($(b).hasClass("menuActif")) return 1;

			var keyA = $(a).text();
			var keyB = $(b).text();
			if (keyA < keyB) return 0;
			if (keyA > keyB) return 1;
			return 0;
		});

		var ul = $('.categories');
		$.each(items, function(i, li) {
			ul.append(li);
		});
	});
});

// Exemple : dataPodium[annee][metier][medaille] = [listePays]
var dataPodium = [
	[
		[
			[]
		]
	]
];

function loadDataPodium() {
	var moduleC = moduleCSV();

	moduleC.readTextFile('data/classement_world_by_job.csv', function(csvString) {

		var i, c;

		// Récupération des données (globales, cad somme pour tous les sports)
		var lines = csvString.split('\n');

		lines.forEach(function(line) {
			c = line.split(';');

			if (dataPodium[c[0]] === undefined)
				dataPodium[c[0]] = [];
			if (dataPodium[c[0]][c[1]] === undefined)
				dataPodium[c[0]][c[1]] = [];
			if (dataPodium[c[0]][c[1]][c[3]] === undefined)
				dataPodium[c[0]][c[1]][c[3]] = [];

			dataPodium[c[0]][c[1]][c[3]].push(c[2]);
		});
	});
}

var metier;
var annee = "2013";

$(document).ready(function() {
	$(".categories li ul li a").click(function() {
		$(".categories li ul li a").show();
		$(this).hide();
		metier = $(this).text();
		desactiverAnneesInutiles();
		selectAnneeCourante();
		changerPodium();
	});
});

$(document).ready(function() {
	$(".zonesNomsDrapeaux").hover(function() {
		$(this).parent().children('.nom').show();
	},
	function() {
		$(this).parent().children('.nom').hide();
	}
	);
});

$(document).ready(function() {
	$(".boutonCategorie").click(function() {
		//metier = $(this).;
		metier = $(this).parent().parent().children("ul").children("li").eq(1).children("a").text();
		
		$(".categories li ul li a").show();
		$(".categories li ul li a").filter(function(){ return $(this).text() === metier;}).hide();
		
		desactiverAnneesInutiles();
		
		if ($(".podium").is(":visible"))
			selectAnneeCourante();
		else {
			$(this).delay(1500).queue(function(next) {
				selectAnneeCourante();
				next();
			});
		}

		changerPodium();
	});
});

function desactiverAnneesInutiles() {
	var anneeCourante = annee;
	var changerAnnee = true;
	annee = "2005";
	
	$('.menuSelectionne').html("<p class='menuSelectionnet'>"+metier+"</p>");

	// Désactiver les années inutiles
	$(".selectionAnnee").each(function() {

		$(this).hide();
		
		var texteAnnee = $(this).children(".texteSelectionAnnee").text();
		var numAnnee = parseInt(texteAnnee);
		if (dataPodium[texteAnnee][metier] !== undefined) {
			if (changerAnnee) {
				annee = numAnnee > annee ? numAnnee : annee;
				if (anneeCourante == numAnnee) {
					changerAnnee = false;
					annee = numAnnee;
				}
			}
			$(this).show();
		}
	});
}

function selectAnneeCourante() {
	$(".selectionAnneeBouton").removeClass("selectionAnneeBoutonActive");
	$(".texteSelectionAnnee").removeClass("texteSelectionAnneeActive");

	$(".selectionAnnee").each(function() {

		if ($(this).is(":visible")) {

			var texteAnnee = $(this).children(".texteSelectionAnnee").text();
			var numAnnee = parseInt(texteAnnee);
			
			if (numAnnee == annee) {
				$(this).children(".selectionAnneeBouton").addClass("selectionAnneeBoutonActive");
				$(this).children(".texteSelectionAnnee").addClass("texteSelectionAnneeActive");
			}
		}
	});
}


$(document).ready(function() {
	$(".categories li ul li").hide();
	$(".nomCategorie").show();
});

$(document).ready(function() {
	$(".selectionAnnee").click(function() {
		annee = $(this).children(".texteSelectionAnnee").text();

		$(".selectionAnneeBouton").removeClass("selectionAnneeBoutonActive");
		$(this).children(".selectionAnneeBouton").addClass("selectionAnneeBoutonActive");

		$(".texteSelectionAnnee").removeClass("texteSelectionAnneeActive");
		$(this).children(".texteSelectionAnnee").addClass("texteSelectionAnneeActive");

		changerPodium();
	});
});

function changerPodium() {
	$(".drapeau0").removeClass("droit0");
	$(".drapeau0").removeClass("plie0");
	$(".drapeau1").removeClass("plie1");
	$(".drapeau2").removeClass("droit2");
	var imgPodium = "";
	["GOLD", "SILVER", "BRONZE"].forEach(
		function(element, index, array) {
			var pays = dataPodium[annee][metier][element];
			var nomPays = "";
			$(".nom"+index).html("");
			if (pays !== undefined) {
				imgPodium+=index+1;
				$(".bonhomme" + index).css('background-image', 'url("img/page4/bonhommes/' + pays.length + '.png")');
				if (pays.length == 1)
					$(".bonhomme" + index + " .drapeau0").addClass("droit0");
				else if (pays.length == 2) {
					$(".bonhomme" + index + " .drapeau0").addClass("plie0");
					$(".bonhomme" + index + " .drapeau1").addClass("plie1");
				}
				else if (pays.length == 3)
					$(".bonhomme" + index + " .drapeau2").addClass("droit2");

				pays.forEach(
					function(e, j, a) {
						nomPays += "<img src='img/page4/drapeaux/" + e + ".png' height='15px' align='top'> "+e+"<br>"; 
						$(".bonhomme" + index + " .drapeau" + j).css('visibility', 'visible');
						$(".bonhomme" + index + " .drapeau" + j).attr("src", "img/page4/drapeaux/" + e + ".png");
					});
				for (var j = pays.length; j < 5; j++) {
					$(".bonhomme" + index + " .drapeau" + j).css('visibility', 'hidden');
				}
				$(".nom"+index).html("<div class='margeNom'>"+nomPays+"</div>");
			}
			else {
				$(".bonhomme" + index).css('background-image', '');
				for (var j = 0; j < 5; j++)
					$(".bonhomme" + index + " .drapeau" + j).css('visibility', 'hidden');
			}
		});
		$(".lePodium").attr("src", "img/page4/Podium-"+ imgPodium + ".png");
};