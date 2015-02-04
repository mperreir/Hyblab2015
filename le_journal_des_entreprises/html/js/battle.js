/**
 * Sidebar
 */
(function sidebar(){
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
})();

/**
 * Slider functions
 */
(function sliderF(){
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
})();

/**
 * Tooltip functions
 */
$('.criteria label').tooltip({
    placement: 'top'
});

/**
 * Trims spaces and line breaks from a string
 * @param string : the string to be stripped
 * @return the word seeked
 */
function makeId(string) {
    return $.trim(string.replace(/(\r\n|\n|\r)/gm,""));
}

/**
 * Town Selection
 */
(function townSelection(){
    var clicks = ['Marseille','Nantes'];

    $('.towns').on('click', function(e){
        if(clicks.length < 2) {
            clicks.push(makeId($(e.target).text()));
            console.log(clicks);
        } else {
            $('#'+clicks[0]).toggleClass('active',false);
            clicks.shift();
            clicks.push(makeId($(e.target).text()));
        }
        
       $('#city1').html(clicks[0]);
       $('#city2').html(clicks[1]);
    });
})();

(function fillTab(){
    var nafCodes = ["26.20Z","26.30Z","46.18Z","46.51Z"];
    //Build naf codes tab on each click
    $('.criteria').on('click', function(e){
        var id = makeId($(e.target).text());
        if( !($('#'+id).hasClass('active')) && (nafCodes.indexOf(id) === -1) ) {
            nafCodes.push(id);
        } else {
            nafCodes.splice(nafCodes.indexOf(id), 1);
        }
        
        var getRequest = nafCodes.join('-');
        console.log(getRequest);
    });
})();