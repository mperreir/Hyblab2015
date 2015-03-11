"use strict";
// On charge la carte dynamiquement à l'aide de snapsvg
var carte = Snap("#container_carte");
Snap.load("svg/map/carte.svg", function (f) {
    // Chargement de la carte
    carte.append(f);
    
    // Clic sur un pays de la carte
    $("#carte .pays_carte").each(function(){
        // Changements esthétiques au passage de la souris
    	$(this).on('mouseover', function(){
    	    
    	    // Au survol du pays, mise en avant
    		$(this).children("polygon").css({
    			'cursor': 'pointer',
    			"stroke": "#d40000",
    			"stroke-width": 3
    		});
    		$(this).children("path").css({
    			'cursor': 'pointer',
    			"stroke": "#d40000",
    			"stroke-width": 3
    		});
    	});
    	
    	$(this).on('mouseout', function(){
    	    
    	    // Quand on sort, on remet comme avant
    		$(this).children("polygon").css({
    			"stroke": "#f8fffe",
    			"stroke-width": 0.1
    		});
    		$(this).children("path").css({
    			"stroke": "#f8fffe",
    			"stroke-width": 0.1
    		});
    	});
    	
    	// Au clic sur un pays, on simule le clic sur le nom correspondant dans la liste des pays
    	$(this).on('click', function(){
    		var id = $(this).attr("id");
    		$("#country-choice a[data='" + id + "']").trigger('click');
    		// On fait le scroll automatique dans la vue de la liste
    		var scrollToEl = $("#country-choice a[data='" + id + "']");
    		scrollToEl.scrollintoview();
    	});
    
    });
    
    // Quand la carte est chargée, on enlève l'animation de chargement (loader) de la page
    // Une seconde après le chargement de la carte
    $('body').addClass('loaded');
    $(window).trigger('scroll');
});