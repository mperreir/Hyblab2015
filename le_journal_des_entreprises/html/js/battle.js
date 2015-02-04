var host="https://hyblab2015bis-anhaflint.c9.io";

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

$('.towns').on('click', function(e){
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
 * the sends a get request which returns a json object filled with the data to be displayed
 * ajax request in the form of : https://hyblab2015bis-anhaflint.c9.io/tableau?nom=Lille&annee=2008&codeNAF=26.20Z-26.30Z-46.51Z-46.18Z
 */
var nafCodes = ["26_20Z","26_30Z","46_18Z"];
var requestedNAF, id, yearSliderValue;
//Build naf codes tab on each click
$('.criteria > label').on('click', function(e){
//    e.preventDefault();
    id = makeId($(e.target).text()).replace(/\./, '_');
    console.log(id);
    if(nafCodes.length >= 9) {
        $('#' + id).toggleClass('active');
    } else {
        if( !($('#'+id).hasClass('active')) && (nafCodes.indexOf(id) === -1) ) {
            nafCodes.push(id);
            console.log(nafCodes.length);
        } else {
            if( $('#'+id).hasClass('active') || nafCodes.indexOf(id) >= 0 ) {
                nafCodes.splice(nafCodes.indexOf(id), 1);
            } 
            
        }
    }
    
});


/**
 * loads requested data and edits the DOM according to the returned value
 * @param town index of the town to query
 */
function loadData(indexOfTown) {
    requestedNAF = nafCodes.join('-');
    yearSliderValue = $('#sl1').data('slider').getValue();
    if(clicks.length === 0) {
        $('#city1, #city2').text('Choisissez deux villes pour commencer l\'expérience !');
    }else{
        $.getJSON(host + '/tableau?nom=' + clicks[indexOfTown] + '&annee=' + yearSliderValue + '&codeNAF=' + requestedNAF, function(data) {
            var tabCell = "";
            for(var i in data) {
                tabCell += "<div class=\"well col-md-4\"><ul class=\"list-unstyled\"><li>"+data[i].libelleNAF+"</li><li>"+data[i].nb+"</li></ul></div>";
            }
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
    loadData(0);
    loadData(1);
});

$('.criteria, .towns').on('click', function(e){
    loadData(0);
    loadData(1);
});

$('#sl1').on('slideStop', function(e){
    loadData(0);
    loadData(1);
});

