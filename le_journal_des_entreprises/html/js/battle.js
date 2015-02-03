 $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
 });

 $(".townLabel1").click(function(e) {
 		$('#city1').html($(e.target).text());
 		console.log($(e.target).text());
 });

 $(".townLabel2").click(function() {
 		$('#city2').html($(e.target).text());
 });

/**
 * Slider functions
 */
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
    
/**
 * Trims spaces and line breaks from a string
 * @param string : the string to be stripped
 * @return the word seeked
 */
function makeId(string) {
    return $.trim(string.replace(/(\r\n|\n|\r)/gm,""));
}


var clicks = ['Marseille','Nantes'];
console.log(clicks.length);
$('.towns').on('click', function(e){
    //console.log($('.townLabel:checked'));
    if(clicks.length < 2) {
        //console.log($.trim(($(e.target).text()).replace(/(\r\n|\n|\r)/gm,"")));
        console.log(makeId($(e.target).text()));
        clicks.push(makeId($(e.target).text()));
        console.log(clicks);
    } else {
        $('#'+clicks[0]).toggleClass('active',false);
        clicks.shift();
        clicks.push(makeId($(e.target).text()));
        console.log(clicks);
    }
   console.log(clicks);
   $('#city1').html(clicks[0]);
   $('#city2').html(clicks[1]);
});

