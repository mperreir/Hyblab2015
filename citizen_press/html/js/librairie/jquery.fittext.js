/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function($){
  $.fn.fitText = function(kompressor, options) {
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){
      var $this = $(this);
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      resizer();
      $(window).on('resize.fittext orientationchange.fittext', resizer);
    });
  };
  //Accueil
  $('#problematiqueAccueil').fitText(3.5);
  $('#titreChoixTransport').fitText(4.5);
  
  //Intro
  $('#textIntro').fitText(5, {minFontSize : 15});
  $('#textExplicatif').fitText(7, {minFontSize : 12});
  
  //Page1
  $('#dataPage1').fitText(2, {minFontSize : 12});
  $('#numberDataPage1').fitText(4, {minFontSize : 12});
  $('#sourceEmission').fitText(4, {minFontSize : 12});
  
  //Page2
  $('#dataPage2Un').fitText(6, {minFontSize : 30});
  $('#dataPage2Transport').fitText(4, {minFontSize : 30});
  $('#numberConsomationPage2').fitText(4, {minFontSize : 30});
  $('#contentConversionPage2').fitText(4, {minFontSize : 30});
  
  //Page3
  $('.bouttonPartie3').fitText(1, {minFontSize : 12});
  $('#titreExplicationMap').fitText(1.5, {minFontSize : 12});
  $('#explicationMap').fitText(1.5, {minFontSize : 12});
    
  //Quizz
  $('.bouttonPartie3').fitText(1, {minFontSize : 12});
  $('#titreExplicationMap').fitText(1.5, {minFontSize : 12});
  $('#explicationMap').fitText(1.5, {minFontSize : 12});
})(jQuery);