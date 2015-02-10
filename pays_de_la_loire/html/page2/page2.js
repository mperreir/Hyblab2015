/*jslint browser: true*/
/*global $, alert */

/** 
 * Change l'année de la carte
 */
function changerAnnee(annee) {
    'use strict';
    
    var i;
    
    $('.imgsMonde img').attr("src", "img/page2/" + annee + ".png");
}

$(document).ready(function(){
  $(".cartesMonde").hide();
  $(".cartesMonde").children('#carte2013').parent().show();
  $(".titreAnnee").click(function () {
    if (!$(this).hasClass("titreAnneeActive"))
    {
      $('.titreAnnee').removeClass("titreAnneeActive");
      $('.titreAnnee').removeClass("titreAnneeActiveBorder");
      $(this).addClass("titreAnneeActive");
      
      $('.cartesMonde').fadeOut();
      $(this).parent().children(".cartesMonde").delay(400).fadeIn();
      
      $(this).delay(400).queue(function(next){
        $(this).parent().next().children(".titreAnnee").addClass("titreAnneeActiveBorder");
        
      if (!$(".titreAnnee2013").hasClass("titreAnneeActive"))
        $(".titreAnnee2013").css("border-bottom", "none");
      else
        $(".titreAnnee2013").css("border-bottom", "dotted white 3px");
        
        next();
      });
    }
  });
});
