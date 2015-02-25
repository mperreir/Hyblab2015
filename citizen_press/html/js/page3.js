"use strict";
function Page3(){
    this.maxOpacity = 1;
    this.minOpacity = 0.75;
    
    this.dispatch = d3.dispatch("load", "statechange");
    this.stateById;
    this.groups = [
        "voiture",
        "transportsPublic",
        "velo",
        "apied",
        "autres",
    ];
    this.filePath = "data/page3.csv";
    this.widthViewBox = 260;
    this.heightViewBox = 260;
    this.lastOver;
    this.lastD;
    this.tableauImage = ["media/picto/Voiture02_BD.png","media/picto/Bus02_BD.png","media/picto/Velo02_BD.png","media/picto/Pieton02_BD.png","media/picto/TransportsAutres02_BD.png"];
    this.tableauExplication = ["en voiture", "en transports en commun", "à vélo", "à pied", "autrement"]
    this.scale;
    this.percentages = [];
    this.percentage;
    //this.explication = $('#explication');
    this.arcIsClicked = false;
    this.init();
}

Page3.prototype = {
    init: function () {
        this.initData();
        this.initStructure();
        this.initListener();
    },
    initData: function() {
        var self = this;
        d3.csv(this.filePath, 
            function (d) {
                d.total = d3.sum(self.groups, function(k) { return d[k] = +d[k]; });
                return d;
            }, function(error, states) {
                if (error) throw error;
                self.stateById = d3.map();
                states.forEach(function(d) { 
                    self.stateById.set(d.name, d); 
                });
            self.dispatch.load(self.stateById);
            self.dispatch.statechange(self.stateById.get("Paris"));
        });
    },
    initListener: function () {
        var self = this;
        $('.bouttonPartie3').click(function() {
            return self.clickOnItem($(this));
        });
        $('#page3').on("inViewport", function(event, transportChoisi) { 
           self.transportChoisi = transportChoisi;
        });
        this.path.on("mouseover",function(d,i){
            return self.hoverData($(this), d);
        });
        this.dispatch.on("statechange.pie", function(d) {
            return self.changementDonnee(d);
        });
        this.dispatch.on("load.bar", function(stateById) {
            return self.loadBar(stateById);
        });
    },
    initStructure: function () {
        new ImageResponsive($('#imageDataPage3'));
        var self = this;
        var radius = 230;
        
        this.arc = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(radius - 100);
        
        var pi = Math.PI;
        
        this.pie = d3.layout.pie()
                .value(function(d) { return d.value; })
                .startAngle(-90 * (pi/180))
                .endAngle(90 * (pi/180))
                .sort(null);
        
        this.svg = d3.select("#chartPage3").append("svg")
                .attr("width", '100%')
                .attr("height", '100%')
                .attr('viewBox','0 0 520 300')
                .attr('preserveAspectRatio','xMidYMin')
        
        this.g = this.svg.append("g")
                .attr("transform", "translate(" + Math.min(this.widthViewBox,this.heightViewBox)+ "," + Math.min(this.widthViewBox,this.heightViewBox) + ")");

        this.path = this.g.selectAll("path")
                .data(this.groups)
                .enter().append("path")
                .attr("id", function(d){return d+"Page3";})
                .attr("data-index", function(d, e) {return e;})
                .attr("data-value", function(d, e) {return d;})
                .attr("class", "arcPage3")
                .each(function() { this._current = {startAngle: 0, endAngle: 0}; });
        
        var percentage = this.g.append("text")
                .attr("x",-50)
                .attr("y",-10)
                .attr("class","section1-percentage");
        
        this.compteurPercentage = new Compteur(percentage, {suffixe:"%", durationAnimation: 100, onlyInteger: true});
        
        this.explication = this.g.append("text")
                .attr("x",-120)
                .attr("y",25)
                .attr("font-size","24")
                .attr("id","explication");
    },
    loadBar: function(stateById) {
        var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 80 - margin.left - margin.right,
        height = 460 - margin.top - margin.bottom;
        
        this.scale = d3.scale.linear()
                .domain([0, d3.max(stateById.values(), function(d) { return d.total; })])
                .range([0, 100]);
    },
    changementDonnee: function(d) {
        var self = this;
        this.path.data(this.pie.value(function(g,i) {self.percentages[i] = self.scale(d[g]); return d[g]; })(self.groups)).transition()
                .attrTween("d", function(d) {
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                return self.arc(interpolate(t));
            };
        });
    },
    hoverData: function(element, d) {
        element.addClass("selected");
        this.compteurPercentage.setValue(Math.round(this.percentages[element.attr('data-index')]));
        $("#imageDataPage3").css('background-image','url("'+this.tableauImage[element.attr('data-index')]+'")');
        this.explication.text('de la population se déplace ' + this.tableauExplication[element.attr('data-index')]);
        $('.arcPage3').removeAttr("transform");
        this.explodeElement(element,d);
    },
    explodeElement: function(element,d) {
        var offset = 10;
        var angle = (d.startAngle + d.endAngle) / 2;
        var xOff = Math.sin(angle)*offset;
        var yOff = -Math.cos(angle)*offset;
        element.attr("transform", "translate("+xOff+","+yOff+")");
        this.lastOver = element;
        this.lastD = d;
    },
    clickOnItem: function(element) {
        $('.arcPage3').removeAttr("transform");
        $('.bouttonPartie3').removeClass("selected");
        
        element.addClass("selected");
        this.dispatch.statechange(this.stateById.get(element.attr('id')));
        
        if (this.lastOver) {
            this.hoverData(this.lastOver, this.lastD);
        }
    }
};