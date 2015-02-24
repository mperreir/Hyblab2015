/**
 * @author Claire REMY
 * 
 * js file for the interactive tab
 */

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

    $(function(){
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
var clicks = ['Aix-Marseille','Nantes'];

$('.towns > label').on('click', function(e){
    if(clicks.indexOf(makeId($(e.target).text())) === -1) {
        if(clicks.length < 2) {
            clicks.push(makeId($(e.target).text()));
        } else {
            $('#'+clicks[0]).toggleClass('active',false);
            clicks.shift();
            clicks.push(makeId($(e.target).text()));
            
        }
        $('#city1').html(clicks[0]);
        $('#city2').html(clicks[1]);
    }else{
        $('#'+makeId($(e.target).text())).toggleClass('active');
    }
   
   
});


/**
 * fills a tab with the arguments selected by the user
 * then sends a get request which returns a json object filled with the data to be displayed
 * ajax request in the form of : https://hyblab2015bis-anhaflint.c9.io/tableau?nom=Lille&annee=2008&codeNAF=26.20Z-26.30Z-46.51Z-46.18Z
 */
var nafCodes = ["26_20Z","26_30Z"];
var requestedNAF, id, yearSliderValue;
//Build naf codes tab on each click
$('.criteria > label').on('click', function(e){
    //e.preventDefault();
    id = makeId($(e.target).text()).replace(/\./, '_');
  
    if( (nafCodes.indexOf(id) >= 0)) {
        nafCodes.splice(nafCodes.indexOf(id), 1);
    } else if( (nafCodes.indexOf(id) === -1) && (nafCodes.length >= 6)) {
        $('#' + id).toggleClass('active');
    } else if( (nafCodes.indexOf(id) === -1) && (nafCodes.length < 6)) {
        nafCodes.push(id);
    }
});


/**
 * loads requested data and edits the DOM according to the returned value
 * @param town index of the town to query
 */
function loadData(indexOfTown) {
    requestedNAF = nafCodes.join('-');
    //yearSliderValue = $('#sl1').data('slider').getValue();
    if(clicks.length === 0) {
        $('#city1, #city2').text('Choisissez deux villes pour commencer l\'expérience !');
    }else{
        $.getJSON('tableau?nom=' + clicks[indexOfTown] + '&annee=' + yearSliderValue + '&codeNAF=' + requestedNAF, function(data) {
            var tabCell = "";
            var tabNoRow;
            
            
            tabCell = "<div class=\"row\">";
            for(var i in data) {
                if(i==0) {
                    tabNoRow = "<div class=\" col-xs-6 col-md-6 col-lg-6\"><div class=\"number bebas col-xs-12 col-md-offset-4 col-md-3 col-lg-offset-4 col-lg-3\">"+data[i].nb+"</div><div class=\"libelle\">"+data[i].libelleNAF+"</div></div>";
                }else{
                    tabNoRow = "<div class=\" col-xs-6 col-md-6 col-lg-6\"><div class=\"number col-xs-12 col-md-offset-4 col-md-3 col-lg-offset-4 col-lg-3\">"+data[i].nb+"</div><div class=\"libelle\">"+data[i].libelleNAF+"</div></div>";   
                }
                if(  ((i+1)%2 === 0 ) && ( i !== 0 ) ) {
                    tabCell += tabNoRow;
                    tabCell += "</div><div class=\"row\">";
                }else{
                    tabCell += tabNoRow;
                }
            }
            tabCell += "</div>";
            $('.city .tab' + indexOfTown).html(
                tabCell
                );
            
        });
    }
}

/**
 * loads data on each triggering event
 * @event on new town selection
 * @event on new year selection
 * @event on add or removing search criterias
 */
$('document').ready(function(){
    yearSliderValue = $('#sl1').data('slider').getValue();
    loadData(0);
    loadData(1);
});

$('.criteria, .towns').on('click', function(e){
    yearSliderValue = $('#sl1').data('slider').getValue();
    loadData(0);
    loadData(1);
});

$('#sl1').on('slideStop', function(e){
    yearSliderValue = $('#sl1').data('slider').getValue();
    loadData(0);
    loadData(1);
    $('#yearHeader').text($('#sl1').data('slider').getValue());
});

$(document).on('mousewheel DOMMouseScroll',function(event){
     $('html, body').animate({
	        scrollTop: $('#coucou').offset().top
	    }, 1000);
});