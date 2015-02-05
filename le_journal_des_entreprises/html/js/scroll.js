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