// fichier par defaut
var	file = "data/graph3/data_al.json";
d3.json(file, draw);
d3.json(file, nomEnergie);


$("#little-country-choice li a").each( function(index) {

    $(this).on('click', function(){
        
        $("#little-country-choice li a").each( function(index) {
            $(this).removeClass("country-selected");
        });
        
        file = "data/graph3/"+$(this).attr("data")+".json";
		d3.json(file, redraw);
        $(this).addClass("country-selected");
        
		var pays = $(this).attr("data");
        pays = pays.toLowerCase();
        pays = no_accent(pays);
    
        $.getJSON('data/graph1/' + pays + '.json', function(list) {
            options.title = { text : ''};
            options.series = list;
            var chart = new Highcharts.Chart(options);
        });
    });
});