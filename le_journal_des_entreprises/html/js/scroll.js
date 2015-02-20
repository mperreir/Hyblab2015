function parallax() {
	    setpos("#inside2");
        setpos("#inside1");
}



function setpos(element, factor) {
    factor = factor || 2;
    
    var offset = $(element).offset();
    var w = $(window);
    
    var posy = (offset.top - w.scrollTop()) / factor;
    
    $(element).css('background-position', '50% '+posy+'px');
}

$(document).ready(function () {
    	$('a[rel="relativeanchor"]').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 1000);
	    return false;
	}); 
    parallax();
}).scroll(function () {
    parallax();
});

(function () {
  

function handle(delta) {
	if (delta < 0)
		 $('html, body').animate({
	        scrollTop: $( "#slide2").offset().top
	    }, 1000);
	else
    	$('html, body').animate({
	        scrollTop: $( "#slide1").offset().top
	    }, 1000);
}

function wheel(event){
	var delta = 0;
	if (!event) event = window.event;
	if (event.wheelDelta) {
		delta = event.wheelDelta/120; 
	} else if (event.detail) {
		delta = -event.detail/3;
	}
	if (delta)
		handle(delta);
        if (event.preventDefault)
                event.preventDefault();
        event.returnValue = false;
}

/* Initialization code. */
if (window.addEventListener)
	window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;
}());
