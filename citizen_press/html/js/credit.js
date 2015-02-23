(function ($) {
   $("#credit").on("inViewport", function() {
        $('body').addClass('creditPage');
   });
   
    $("#credit").on("outOfViewport", function() {
        $('body').removeClass('creditPage');
     });
     
    $("#introduction").on("inViewport", function() {
        $('body').addClass('introductionPage');
    });
   
    $("#introduction").on("outOfViewport", function() {
        $('body').removeClass('introductionPage');
    });
}(jQuery));