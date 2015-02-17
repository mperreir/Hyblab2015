    (function ($) {
    //variables d'opacité des bars
    var maxOpacity = 1;
    var minOpacity = 0.75;
    
    //variable pour ne lancer la transition du chart1 que une fois
    var chartHasBeenShowed = false;
    var dispatch = d3.dispatch("load", "statechange");
    var stateById;
    var groups = [
        "voiture",
        "transportsPublic",
        "velo",
        "apied",
        "autres",
    ];
    var tableauImage = ["../media/picto/Voiture02_BD.png","../media/picto/Bus02_BD.png","../media/picto/Velo02_BD.png","../media/picto/Pieton02_BD.png","../media/picto/TransportsAutres02_BD.png"];
    var tableauExplication = ["en voiture", "en bus", "à vélo", "à pied", "autrement"]
    var scale;
    var percentages = [];
    var percentage;
    var explication = $('#explication');
    
    d3.csv("data/page3.csv", 
        function (d) {
            d.total = d3.sum(groups, function(k) { return d[k] = +d[k]; });
            return d;
        }, function(error, states) {
            if (error) throw error;
            
            stateById = d3.map();
            states.forEach(function(d) { 
                stateById.set(d.name, d); 
            });
        dispatch.load(stateById);
        dispatch.statechange(stateById.get("Paris"));
    });
    
    dispatch.on("load.bar", function(stateById) {
        var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 80 - margin.left - margin.right,
        height = 460 - margin.top - margin.bottom;
        
        scale = d3.scale.linear()
                .domain([0, d3.max(stateById.values(), function(d) { return d.total; })])
                .range([0, 100]);
    });
    
    dispatch.on("load.pie", function(stateById) {
        var width = 500,
        height = 460,
        radius = Math.min(width, height) / 2;
        
        var arc = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(radius - 100);
        
        var pi = Math.PI;
        
        var pie = d3.layout.pie()
                .value(function(d) { return d.value; })
                .startAngle(-90 * (pi/180))
                .endAngle(90 * (pi/180))
                .sort(null);
        
        var svg = d3.select("#section1-chartConsommation").append("svg")
                .attr("width", width)
                .attr("height", height/2)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        
        var arcIsClicked = false;
        
        var path = svg.selectAll("path")
                .data(groups)
                .enter().append("path")
                .attr("id", function(d){return d+"Page3";})
                .attr("data-index", function(d, e) {return e;})
                .attr("class", "arcPage3")
                .on("mouseover",function(d,i){
                    hoverData($(this), d);
                })
                .on("mouseout",function(d){
                    if (!arcIsClicked) {
                        $(this).removeClass("selected");
                    }
                })
                .on("click",function(x) {
                    arcIsClicked = true;
                })
                .each(function() { this._current = {startAngle: 0, endAngle: 0}; });
        
        percentage = svg.append("text")
                .attr("x",-50)
                .attr("y",-10)
                .attr("class","section1-percentage");
        
        dispatch.on("statechange.pie", function(d) {
            path.data(pie.value(function(g,i) { percentages[i] = scale(d[g]); return d[g]; })(groups)).transition()
                    .attrTween("d", function(d) {
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function(t) {
                    return arc(interpolate(t));
                };
            });
        });
    });
    var lastOver;
    var lastD;
    function hoverData(element, d) {
        element.addClass("selected");
        percentage.text(Math.round(percentages[element.attr('data-index')])+" %");
        $("#imageDataPage3").css('background-image','url("'+tableauImage[element.attr('data-index')]+'")');
        explication.text('de la population se déplace ' + tableauExplication[element.attr('data-index')]);
        $('.arcPage3').removeAttr("transform");
        explodeElement(element,d);
    }
    
    function explodeElement(element,d) {
        var offset = 10;
        var angle = (d.startAngle + d.endAngle) / 2;
        var xOff = Math.sin(angle)*offset;
        var yOff = -Math.cos(angle)*offset;
        element.attr("transform", "translate("+xOff+","+yOff+")");
        arcIsClicked = false;
        lastOver = element;
        lastD = d;
    }
    
    $('.bouttonPartie3').click(function() {
        $('.arcPage3').removeAttr("transform");
        $('.bouttonPartie3').removeClass("selected");
        
        $(this).addClass("selected");
        dispatch.statechange(stateById.get($(this).attr('id')));
        if (lastOver) {
            hoverData(lastOver, lastD);
        }
    });
}(jQuery));