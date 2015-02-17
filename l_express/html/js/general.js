"use strict";
loadDataInfo();

$(document).ready(function() {

	var Ville = "Nantes"
	var Ville2 = "Paris"
	var changement = true;

	$('#fullpage').fullpage({
	    afterLoad: function(anchorLink, index) {
	      	
	      	//Fonction liée a la slide 1 
	        if(index == 1){
	           changement = false;
	           window.setTimeout(repositionAnimation,3000);
	        }
	        //Fonction liée a la slide 2
	        else if(index == 2){
	            animeClassement()
	            changement = true;
	            punchline();
	            animate_decor();
	            window.setTimeout(changementAuto,5000)
	        }
	        //Fonction liée a la slide 3
	        else if(index == 3){
	            window.setTimeout(repositionAnimation,3000);
	            remplirTabCroissant()
	           changement = false;
	           chargementVilles();
	        }
	        //Fonction liée a la slide 4
	        else if(index == 4){
	           positionVille(Ville);
	           $("#villeTitre").empty();
	           $("#villeTitre").text(nomAffichage(Ville));
	           $("#villeCompare").empty();
	           $("#villeCompare").text(nomAffichage(Ville));
	            adapt_s4();
	            getTrspCommun(Ville)
	            graphe(getMois(Ville));
	            PostitionIcone();
	
	        }
	        //Fonction liée a la slide 5
	        else if(index == 5){
	            $("#vville-g-s5").empty();
	            $("#ville-g-s5").text(nomAffichage(Ville));
	            $("#vville-d-s5").empty();
	            $("#ville-d-s5").text(nomAffichage(Ville2));
	            getBattleGauche(Ville)
	            getBattleDroite(Ville2)
	        }
	    },
	});
	
	$("#radio01").click(function() {remplirTabCroissant()});
	$("#radio02").click(function() {remplirTabDecroissant()});
	
	//Permet de redimensionner toute les slides avec une hauteur de 600px maximum
 	var chaineNonTraite = $('.section.fp-section.fp-table').css('height');
    var chaineTraite = chaineNonTraite.substring(0,chaineNonTraite.length-2);
    if(Number(chaineTraite) > 600){
        $('.section.fp-section.fp-table').css('height','600px');
    }
    chaineNonTraite = $('.fp-tableCell').css('height');
    chaineTraite = chaineNonTraite.substring(0,chaineNonTraite.length-2);
    if(Number(chaineTraite) > 600){
        $('.fp-tableCell').css('height','600px');
    }
    
    
    //Fonction appelée lors du changement de la deuxième ville du battle
	var func2 = function() {
	    var villeCorrect = correspondanceVille($("#textField-s5").val());
	    var retour = checkVille(villeCorrect)
	    if(retour == -1){
	        alert("Nom de ville, non valide")
	    }
	    else{
	       Ville2 =  villeCorrect;
	       $("#ville-d-s5").empty();
	      $("#ville-d-s5").text(nomAffichage(villeCorrect));
	       getBattleGauche(Ville);
	       getBattleDroite(villeCorrect);
	    }
	};
	$("#tfbutton1s5").click(func2);
    $("#textField-s5").submit(func2);
    


	//Fonction appelée lors de la recherche de la ville à analyser
	var func = function(){
	    var villeCorrect = correspondanceVille($("#textField-s3").val());
	    var retour = checkVille(villeCorrect)
	    if(retour == -1){
	        alert("Nom de ville, non valide")
	    }
	    else{
	       Ville =  villeCorrect;
	       $.fn.fullpage.moveSectionDown();
	    }
	};
	$("#tfbutton1s3").click(func);
	$("#textField-s3").submit(func);
	
	//Réaction liée au clique du bouton compare
	$('#compare').click(function() {
	    $.fn.fullpage.moveSectionDown();
	});
	
	//Réaction liée au clique sur la flèche du bas
	$('.flecheBas').click(function() {
	    $.fn.fullpage.moveSectionDown();
	});

	//Fonction qui est appeler au bout d'un certain temps pour quitter l'animation de la slide 2
	function changementAuto() {
		 if(changement){
		      $.fn.fullpage.moveSectionDown();
		 }
	}

	function chargementVilles() {
		var positionsVilles = [
			{nom:'AixEnProvence', top:'60%', left:'60%'},
			{nom:'Amiens', top:'11%', left:'43%'},
			{nom:'Angers', top:'29%', left:'26%'},
			{nom:'Annecy', top:'42%', left:'64%'},
			{nom:'Avignon', top:'57%', left:'55%'},
			{nom:'Bayonne', top:'60%', left:'23%'},
			{nom:'Besancon', top:'32%', left:'63%'},
			{nom:'Bordeaux', top:'50%', left:'27%'},
			{nom:'Brest', top:'23%', left:'6%'},
			{nom:'Caen', top:'16%', left:'26%'},
			{nom:'Chambery', top:'45%', left:'63%'},
			{nom:'ClermontFerrand', top:'42%', left:'46%'},
			{nom:'Dijon', top:'31%', left:'56%'},
			{nom:'Douai', top:'6%', left:'46%'},
			{nom:'Dunkerque', top:'1%', left:'42%'},
			{nom:'Grenoble', top:'49%', left:'59%'},
			{nom:'Havre', top:'13%', left:'31%'},
			{nom:'Lille', top:'3%', left:'47%'},
			{nom:'Limoges', top:'45%', left:'35%'},
			{nom:'Lorient', top:'28%', left:'12%'},
			{nom:'Lyon', top:'43%', left:'55%'},
			{nom:'Mans', top:'25%', left:'28%'},
			{nom:'Marseille', top:'62%', left:'59%'},
			{nom:'Metz', top:'16%', left:'64%'},
			{nom:'Montpellier', top:'61%', left:'49%'},
			{nom:'Mulhouse', top:'28%', left:'71%'},
			{nom:'Nancy', top:'21%', left:'64%'},
			{nom:'Nantes', top:'32%', left:'20%'},
			{nom:'Nice', top:'58%', left:'71%'},
			{nom:'Nimes', top:'59%', left:'52%'},
			{nom:'Orleans', top:'23%', left:'39%'},
			{nom:'Paris', top:'18%', left:'43%'},
			{nom:'Pau', top:'63%', left:'27%'},
			{nom:'Perpignan', top:'67%', left:'46%'},
			{nom:'Poitiers', top:'37%', left:'30%'},
			{nom:'Reims', top:'14%', left:'52%'},
			{nom:'Rennes', top:'25%', left:'21%'},
			{nom:'Rochelle', top:'40%', left:'24%'},
			{nom:'Rouen', top:'13%', left:'35%'},
			{nom:'SaintEtienne', top:'46%', left:'52%'},
			{nom:'Strasbourg', top:'20%', left:'73%'},
			{nom:'Toulon', top:'63%', left:'63%'},
			{nom:'Toulouse', top:'60%', left:'37%'},
			{nom:'Tours', top:'29%', left:'31%'},
			{nom:'Troyes', top:'22%', left:'52%'},
			{nom:'Valence', top:'51%', left:'55%'},
			{nom:'Valenciennes', top:'6%', left:'49%'},
			{nom:'Vannes', top:'29%', left:'16%'},
			
		];
	
		positionsVilles.forEach(function (posVille) {
			
			var nbrJours = getJoursInf6 (posVille.nom);
			if (nbrJours<271){
				var ptVille = $('<img style="position:absolute" src="ressource/svg/slide3/point3.svg"></img>')
					.css('left', posVille.left)
					.css('top', posVille.top)
					.css('cursor','pointer');
			}
			else if (nbrJours<301){
				var ptVille = $('<img style="position:absolute" src="ressource/svg/slide3/point2.svg"></img>')
					.css('left', posVille.left)
					.css('top', posVille.top)
					.css('cursor','pointer');
			}
			else {
				var ptVille = $('<img style="position:absolute" src="ressource/svg/slide3/point1.svg"></img>')
					.css('left', posVille.left)
					.css('top', posVille.top)
					.css('cursor','pointer');
			}
			$("#listeVilles")
				.append(ptVille);
				
		    
			//Lors du passage de la souris sur un point de la carte
			ptVille.mouseover(function () {
			    
				$('#infoBulle')
					.css('left', posVille.left)
					.css('top', posVille.top)
					.css('visibility', 'visible')
					.css('z-index', '100');
					
				ptVille.css('z-index', '200');
								
				if (nbrJours<271){
				    $('#cercleInfoBulle')
				        .css('fill', '#00616b')
				}
				else if (nbrJours<301){
				     $('#cercleInfoBulle')
				        .css('fill', '#13b5d0')
				}
				else {
				    $('#cercleInfoBulle')
				        .css('fill', '#a2f8fc')
				}
	
				$("#nbJours").text(nbrJours+' j/an');
				
				if (posVille.nom == "AixEnProvence"){
				    $("#nomVille").text("Aix-en-Provence");
				}
				else if (posVille.nom == "Besancon"){
				    $("#nomVille").text("Besançon");
				}
				else if (posVille.nom == "Chambery"){
				    $("#nomVille").text("Chambéry");
				}
				else if (posVille.nom == "ClermontFerrand"){
				    $("#nomVille").text("Clermont Ferrand");
				}
				else if (posVille.nom == "Rochelle"){
				    $("#nomVille").text("La Rochelle");
				}
				else if (posVille.nom == "Havre"){
				    $("#nomVille").text("Le Havre");
				}
				else if (posVille.nom == "Mans"){
				    $("#nomVille").text("Le Mans");
				}
				else if (posVille.nom == "Nimes"){
				    $("#nomVille").text("Nîmes");
				}
				else if (posVille.nom == "Orleans"){
				    $("#nomVille").text("Orléans");
				}
				else if (posVille.nom == "SaintEtienne"){
				    $("#nomVille").text("Saint-Etienne");
				}
	            else{
	                $("#nomVille").text(posVille.nom);
	            }
			});
			
			//Réaction lors d'un clique sur un point de la carte
			ptVille.click(function () {
	            Ville = posVille.nom;
	            $.fn.fullpage.moveSectionDown();
	        });
	        
	        //Réaction lorsque la souris quitte un point de la carte
			ptVille.mouseout(function () {
				$('#infoBulle')
					.css('visibility', 'hidden');
				ptVille.css('z-index', '50');
			});
		});
	}
});