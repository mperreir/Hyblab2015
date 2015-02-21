jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');
	
	// Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
        $(window).trigger('scroll');
    }, 500); //3000);
    
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
			$this = $(this);
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
	
	// Test de la carte
	jQuery.fn.extend({
	    appendSvg:function (nom,attributs){
	    	var svg = document.createElementNS("http://www.w3.org/2000/svg",nom);
	    	for (var cle in attributs){
				var valeur = attributs[cle];
				svg.setAttribute(cle,valeur);
	      	}
	      	var appendices = this.length;
	      	for (var i = 0; i < appendices; i++){
				this[i].appendChild(svg);
	      	}
	      	return svg;
	    }
	}); 
});

// Code de test liste pays
var pays = ["Allemagne", "Autriche", "Belgique", "Bulgarie", "Chypre", "Croatie", "Danemark", "Espagne", "Estonie", "Finlande", "France", "Grèce", "Hongrie", "Irlande", "Italie", "Lettonie", "Lituanie", "Luxembourg", "Malte", "Pays-Bas", "Pologne", "Portugal", "République-Tchèque", "Roumanie", "Royaume-Uni", "Slovaquie", "Slovénie", "Suède"];
$.each(pays, function(){
	if (this == "Allemagne"){
		$("#country-choice").append('<li><a class="country-selected" data="' + this + '" href="#voyage_temporel">' + this + '</a></li>');
	} else {
		$("#country-choice").append('<li><a data="' + this + '" href="#voyage_temporel">' + this + '</a></li>');
	}
});

$("#little-country-choice").append('<li><a class="country-selected" data="data_al" href="#a_la_loupe"> Allemagne </a></li>');
$("#little-country-choice").append('<li><a data="data_fr" href="#a_la_loupe"> France </a></li>');
$("#little-country-choice").append('<li><a data="data_ru" href="#a_la_loupe"> Royaume-Uni </a></li>');


// Clic sur un nom de pays
$("#country-choice li a").each( function() {

	$(this).on('mouseover', function(){
		var pays = $(this).attr("data");
		$("#"+pays+" polygon").css({
			"stroke": "red",
			"stroke-width": 3
		});
		$("#"+pays+" path").css({
			"stroke": "red",
			"stroke-width": 3
		});
	});
	
	$(this).on('mouseout', function(){
		var pays = $(this).attr("data");
		$("#"+pays+" polygon").css({
			"stroke": "#002330",
			"stroke-width": 0.2
		});
		$("#"+pays+" path").css({
			"stroke": "#002330",
			"stroke-width": 0.2
		});
	});
});

// Clic sur un pays de la carte
$("#carte .pays_carte").each(function(){
	$(this).on('mouseover', function(){
		$(this).children("polygon").css({
			'cursor': 'pointer',
			"stroke": "red",
			"stroke-width": 3
		});
		$(this).children("path").css({
			'cursor': 'pointer',
			"stroke": "red",
			"stroke-width": 3
		});
	});
	
	$(this).on('mouseout', function(){
		$(this).children("polygon").css({
			"stroke": "#002330",
			"stroke-width": 0.2
		});
		$(this).children("path").css({
			"stroke": "#002330",
			"stroke-width": 0.2
		});
	});
	
	$(this).on('click', function(){
		var id = $(this).attr("id");
		$("#country-choice a[data='" + id + "']").trigger('click');	
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

// Contrôle au scrolling
$(window).scroll(function(event){
    var progression = ((($(window).scrollTop()+$(window).height())/$(document).height()))*100;
    if (progression > 60){
    	$("#country-choice").hide();
    } else {
    	$("#country-choice").show();
    }
    
    // Controle pour le lien des pays
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
