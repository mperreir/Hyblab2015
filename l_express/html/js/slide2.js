function animate_decor(){
    $( "#moyen_nuage1" ).animate({
         right: "+=900",
    }, 9000, function() {
    })
    
    $( "#moyen_nuage2" ).animate({
         right: "+=900",
    }, 9000, function() {
    });
     
    
     $( "#gros_nuage1" ).animate({
       right: "+=800",
    }, 5000, function() {
    });
    
     $( "#petit_nuage1" ).animate({
        right: "+=300",
    }, 7000, function() {
    });
    
     $( "#petit_nuage2" ).animate({
        right: "+=300",
    }, 7000, function() {
    });
    
    $( "#bus" ).animate({
    right: "+=2000",
    }, 7000, function() {
    });
    
    $( "#voiture" ).animate({
    
        left: "+=5000",
    }, 5000, function() {
    });
    
     window.setTimeout(deuxiemeVoiture,1800)
}

"use strict"

//Fonction qui affiche les punchlines
function punchline() {
    window.setTimeout(function(){
        $("#punchline1").hide(1000);
    },1500)
    
    window.setTimeout(function(){
       $("#punchline2").css('visibility', 'visible');
    },2700)
}


//Fonction qui réalise la deuxième vague d'animation
function deuxiemeVoiture() {
   $( "#voiture1" ).animate({
        right: "+=8000",
        }, 6000, function() {
    });
    
    $( "#voiture2" ).animate({
        right: "+=8000",
        }, 6000, function() {
    });
}

//Fonction qui réalise la première vague d'animation
function repositionAnimation() {
    $( "#voiture1" ).css("right","-16%");
    $( "#voiture2" ).css("right","-37%");
    $( "#voiture" ).css("left","-16%");
    $( "#bus" ).css("right","-40%");
    $( "#petit_nuage1" ).css("right","53%");
    $( "#petit_nuage2" ).css("right","98%");
    $( "#moyen_nuage1" ).css("right","75%");
    $( "#moyen_nuage2" ).css("right","1%");
    $( "#gros_nuage1" ).css("right","18%");
}