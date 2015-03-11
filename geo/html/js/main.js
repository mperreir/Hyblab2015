"use strict";

// Fonction appelée au chargement de la page
jQuery(document).ready(function($){
	// Mise en place de la structure de la page
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');
	
	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			var $this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});

// Code de rajout des pays dans la nav à gauche
var pays = ["Allemagne", "Autriche", "Belgique", "Bulgarie", "Chypre", "Croatie", "Danemark", "Espagne", "Estonie", "Finlande", "France", "Grèce", "Hongrie", "Irlande", "Italie", "Lettonie", "Lituanie", "Luxembourg", "Malte", "Pays-Bas", "Pologne", "Portugal", "République-Tchèque", "Roumanie", "Royaume-Uni", "Slovaquie", "Slovénie", "Suède"];
$.each(pays, function(){
	if (this == "Allemagne"){
		$("#country-choice").append('<li><a class="country-selected" data="' + this + '" href="#voyage_temporel">' + this + '</a></li>');
	} else if (this =="République-Tchèque") {
		$("#country-choice").append('<li><a data="' + this + '" href="#voyage_temporel">RP-Tchèque</a></li>');
	} else {
		$("#country-choice").append('<li><a data="' + this + '" href="#voyage_temporel">' + this + '</a></li>');
	}
});

// On rajoute également les pays dans la petite navigation
$("#little-country-choice").append('<li><a class="country-selected" data="data_al" href="#a_la_loupe">Allemagne</a> &nbsp  &nbsp   <img id="point1_graph3" src="img/point.png" alt="point"/></li>');
$("#little-country-choice").append('<li><a data="data_fr" href="#a_la_loupe">France</a>&nbsp  &nbsp   <img id="point2_graph3" src="img/point.png" alt="point"/></li>');
$("#little-country-choice").append('<li><a data="data_ru" href="#a_la_loupe">Royaume-Uni</a></li>');

/*** FONCTIONS UTILISEES POUR LA NAVIGATION DES PAYS ***/

// Fonction preg_replace (regexp en PHP) codée en JS
function preg_replace (array_pattern, array_pattern_replace, my_string)  {
    var new_string = String (my_string);
	for (var i=0; i<array_pattern.length; i++) {
		var reg_exp= RegExp(array_pattern[i], "gi");
		var val_to_replace = array_pattern_replace[i];
		new_string = new_string.replace (reg_exp, val_to_replace);
	}
	return new_string;
}
	
// Fonction de nettoyage des accents
function no_accent (my_string) {
	var new_string = "";
	var pattern_accent = new Array("é", "è", "ê", "ë", "ç", "à", "â", "ä", "î", "ï", "ù", "ô", "ó", "ö");
	var pattern_replace_accent = new Array("e", "e", "e", "e", "c", "a", "a", "a", "i", "i", "u", "o", "o", "o");
	if (my_string && my_string!= "") {
		new_string = preg_replace (pattern_accent, pattern_replace_accent, my_string);
	}
	return new_string;
}

// Fonction d'activation des dots de la navigation des villes
function setActiveDot(country){
	if (!$("#dots-"+country).hasClass("dot-selected")){
		$(".dot-link").removeClass("dot-selected");
		$("#dots-"+country).addClass("dot-selected");
	}
}

// Coordonnées des centres de chaque pays
// Nous avons essayé de faire avec la bounding box, mais cela marchait
// très mal sur certains pays... Du coup on a pris manuellement les coordonnées de chaque pays
var countryCenter = { 
	"AllemagneX": 975, "AllemagneY": 520, 
	"AutricheX": 1025, "AutricheY": 575,
	"BelgiqueX": 905, "BelgiqueY": 520,
	"BulgarieX": 1150, "BulgarieY": 658,
	"ChypreX": 1244, "ChypreY": 772,
	"CroatieX": 1049, "CroatieY": 610,
	"DanemarkX": 964, "DanemarkY": 414,
	"EspagneX": 817, "EspagneY": 695,
	"EstonieX": 1157, "EstonieY": 355,
	"FinlandeX": 1168, "FinlandeY": 220,
	"FranceX": 884, "FranceY": 590,
	"GrèceX": 1110, "GrèceY": 702,
	"HongrieX": 1082, "HongrieY": 585,
	"IrlandeX": 762, "IrlandeY": 475,
	"ItalieX": 1000, "ItalieY": 652,
	"LettonieX": 1150, "LettonieY": 398,
	"LituanieX": 1137, "LituanieY": 431,
	"LuxembourgX": 927, "LuxembourgY": 534,
	"MalteX": 1024, "MalteY": 761,
	"Pays-BasX": 920, "Pays-BasY": 491,
	"PologneX": 1083, "PologneY": 486,
	"PortugalX": 761, "PortugalY": 697,
	"République-TchèqueX": 1035, "République-TchèqueY": 538,
	"RoumanieX": 1148, "RoumanieY": 603,
	"Royaume-UniX": 838, "Royaume-UniY": 484,
	"SlovaquieX": 1082, "SlovaquieY": 555,
	"SlovénieX": 1029, "SlovénieY": 601,
	"SuèdeX": 1030, "SuèdeY": 317	  
};

// Mouse over et mouseout sur un nom de pays
$("#country-choice li a").each( function() {

	$(this).on('mouseover', function(){
		// On récupère le pays et le marqueur
		var pays = $(this).attr("data");
	    var marker = $("#marker");
    	
    	// On récupère les données correspondantes
    	var centerX = countryCenter[pays+"X"] - marker.attr("width")/2;
    	var centerY = countryCenter[pays+"Y"] - marker.attr("height")/2;
	
		// On affiche marqueur et on lui affecte les bonnes coordonnées
    	marker.attr({"x": Math.round(centerX) + "px" , "y": Math.round(centerY) + "px", "style": "display: inline;"});
	});
	
	$(this).on('mouseout', function(){
		// On n'affiche plus le marqueur quand on sort de la navigation
		$("#marker").attr({"style": "display: none;"});
	});
	
	// Au clic sur un pays de la liste
    $(this).on('click', function(){
        
        // On highlight le bon pays
        $("#country-choice li a").each( function(index) {
            $(this).removeClass("country-selected");
        });
        $(this).addClass("country-selected");
        
        // On prend l'attribut data qui permet de charger le bon graphique
		var pays = $(this).attr("data");
        pays = pays.toLowerCase();
        pays = no_accent(pays);
        
        // On optient le pays sélectionné pour le graph1 (les courbes)
        loadGraph1(pays);
        
        // La variable "pays" contient le nom du pays en minuscule sans accent
        // $(this).attr("data"); contient le nom du pays avec majuscules et accents
        loadGraph21(no_accent($(this).attr("data")));
        
        // Changement du graph22
        
        // On cache tous les textes sauf celui sur lequel on a cliqué
        $(".text_graph22").attr("class","text_graph22");
        $(".text_graph22").hide();
        
        // On rajoute la classe sur celui sélectionné et on l'affiche
        $("#text_graph22_" + $(this).attr("data")).attr("class","text_graph22 rect-selected");
        $("#text_graph22_" + $(this).attr("data")).show();
        
    });
});

// Au scroll des villes, on met à jour les dots
$("#country-choice").scroll(function(){
	// (Progression du scroll + hauteur de la div/2) / hauteur totale de la div (overflow)
	var progression = ( ($(this).scrollTop()+($(this).height()/2)) / $(this).get(0).scrollHeight )*100;
	
	// On met le dot correspondant en actif
	if (progression < 20){
		setActiveDot("Allemagne");
	} else if (progression < 40){
		setActiveDot("Danemark");
	} else if (progression < 60){
		setActiveDot("Hongrie");
	} else if (progression < 80){
		setActiveDot("Malte");
	} else {
		setActiveDot("Suède");
	}
});

// Dots horizontaux du choix des villes
$("#vertical-country-dots li a").each( function() {
	
	// On récupère le nom du pays
	var pays = $(this).attr("id").split("-")[1];
	
	// Au clic, on va dans le scrollView
	$(this).on('click', function(){
		var scrollToEl = $("#country-choice a[data='" + pays + "']");
		scrollToEl.scrollintoview();
    	
    	// On met à jour les classes de sélection
		$(".dot-link").removeClass("dot-selected");
		$(this).addClass("dot-selected");
	});
	
});

// Scroll smooth au clic d'un lien
$('#country-choice a[href^="#"]').click(function(e){
	e.preventDefault();
	
	var the_id = $(this).attr("href");
	
	if (the_id != "#"){
			$('html, body').animate({
				scrollTop:$(the_id).offset().top
			}, 'slow');
	}
	
	return false;
});

// Contrôle au scrolling pour affiche des navbar des pays à gauche
$(window).scroll(function(event){
	
	// Gestion de l'opacité de la navbar des pays. Si on est après la slide "au-delà des frontières",
	// on n'a plus de raison de l'afficher
    var progression = ((($(window).scrollTop()+$(window).height())/$(document).height()))*100;
    if (progression > 60){
    	$("#country-choice").hide();
    	$("#vertical-country-dots").hide();
    } else {
    	$("#country-choice").show();
    	$("#country-choice").css("opacity", (60-progression)*0.1);
    	$("#vertical-country-dots").show();;
    	$("#vertical-country-dots").css("opacity", (60-progression)*0.1);
    }
    
    // Controle pour le lien des pays. Si on est en dessous de la section voyage temporel,
    // cliquer sur un nom de pays ne nous ramène pas à la section voyage temporel.
    if ($(window).scrollTop() > $("#voyage_temporel").position().top){
    	$("#country-choice li a").each(function(){
    		$(this).attr("href","#");
    	})
    } else {
    	$("#country-choice li a").each(function(){
    		$(this).attr("href","#voyage_temporel");
    	})
    }
}); 
