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
/*
(function() {
  var delay = false;

  $(document).on('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if(delay) return;

    delay = true;
    setTimeout(function(){delay = false},200)

    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    var a= $('.page');
    if(wd < 0) {
      for(var i = 0 ; i < a.length ; i++) {
        var t = a[i].getClientRects()[0].top;
        if(t >= 40) break;
      }
    }
    else {
      for(var i = a.length-1 ; i >= 0 ; i--) {
        var t = a[i].getClientRects()[0].top;
        if(t < -20) break;
      }
    }
    $('html,body').animate({
      scrollTop: a[i].offsetTop
    },1000);
  });
})();*/