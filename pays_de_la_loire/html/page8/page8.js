$(document).ready(function() {
    'use strict';
    
    $(".video").hide();
    $(".page8micro").click(function () {
        if ($(".video").is(":visible"))
        {
			document.getElementById("iframeYT").contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
			document.getElementById("iframeYT").contentWindow.postMessage('{"event":"command","func":"seekTo","args":[0, true]}', '*');
        }
        else
        {
            $(this).delay(400).queue(function(next) {
    		    document.getElementById("iframeYT").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    		    next();
    		});
        }
        
        $(".video").fadeToggle();
    });
});