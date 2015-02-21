var options = {
    chart: {
        renderTo: 'container_graph1',
        plotShadow: true,
        animation: {
            duration: 500,
            easing: 'easeOutBounce'
    	},
    	type: 'spline',
    },
    credits: {
        enabled: false
    },
    xAxis: {
        title: {
            enabled: false
        },
    	categories: ['1990', '1992', '1994', '1996', '1998', '2000', '2002', '2004', '2006', '2008', '2010', '2012'],
    	tickmarkPlacement: 'on',
    	tickInterval: 1,
        tickWidth: 0,
        gridLineWidth: 1,
        lineColor: "white",
        lineWidth: 2,
    },
    yAxis: {
        title: {
            enabled: false
        },
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        },
        min : 0,
        tickWidth: 0,
        gridLineWidth: 0,
        lineColor: "white",
        lineWidth: 2,
    },
    tooltip: {
        formatter: function() {
        	return this.y.toFixed(2) +'</b>%<br />';
    	}
    },
    legend: {
        enabled: false
    }
};

$.getJSON('data/graph1/allemagne.json', function(list) {
    options.title = { text : ''};
    options.series = list;
    var chart = new Highcharts.Chart(options);
});

// Fonction preg_replace (regexp en PHP) codée en JS
function preg_replace (array_pattern, array_pattern_replace, my_string)  {
    var new_string = String (my_string);
	for (i=0; i<array_pattern.length; i++) {
		var reg_exp= RegExp(array_pattern[i], "gi");
		var val_to_replace = array_pattern_replace[i];
		new_string = new_string.replace (reg_exp, val_to_replace);
	}
	return new_string;
}
	
// Fonction de nettoyage des accents
function no_accent (my_string) {
	var new_string = "";
	var pattern_accent = new Array("é", "è", "ê", "ë", "ç", "à", "â", "ä", "î", "ï", "ù", "ô", "ó", "ö");
	var pattern_replace_accent = new Array("e", "e", "e", "e", "c", "a", "a", "a", "i", "i", "u", "o", "o", "o");
	if (my_string && my_string!= "") {
		new_string = preg_replace (pattern_accent, pattern_replace_accent, my_string);
	}
	return new_string;
}
	
$("#country-choice li a").each( function(index) {

    $(this).on('click', function(){
        
        $("#country-choice li a").each( function(index) {
            $(this).removeClass("country-selected");
        });
        
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