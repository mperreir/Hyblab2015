 $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
 });

 $(".townLabel1").click(function(e) {
 		$('#city1').html($(this).text());
 });

 $(".townLabel2").click(function() {
 		$('#city2').html($(this).text());
 });

 if (top.location != location) {
    top.location.href = document.location.href ;
  }
		$(function(){
			window.prettyPrint && prettyPrint();

        $('#sl1').slider({
          	formater: function(value) {
            return value;
          }
        });


        $('#eg input').slider();
    });