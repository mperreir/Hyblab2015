"use strict";

$(document).ready(function($){
    
    // Evènement pour suivi du scroll
    $(window).scroll(function(event){
        var progression = ((($(window).scrollTop()+$(window).height())/$(document).height()))*100;
        $(".pace-progress").attr("style","transform: translate3d(" + progression + "%, 0px, 0px);")
    });
});