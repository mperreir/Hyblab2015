"use strict";
function Page4(){
	this.dispatch = d3.dispatch("load");
	this.initStructure();
    this.initData();
    this.initListener();
}

Page4.prototype = {
    initData: function() {
        var self = this;
        d3.csv("data/page4.csv", 
            function (d) {
                return d;
            }, function(error, states) {
                if (error) throw error;
				self.stateById = new Array();
				self.cityByCountryCode = new Array();
                
				states.forEach(function(d,i) { 
					if(!self.stateById[d.typeTransport]) {
						self.stateById[d.typeTransport] = new  Object();
					} 
					self.cityByCountryCode[d.ZIPCCOUNTRY] = d.CITY;
					self.stateById[d.typeTransport][d.ZIPCCOUNTRY] = parseFloat(d.donnee);
				});
				self.dispatch.load();
			}
		);
		this.tableauTexteCarte = new Object();
		this.tableauTexteCarte["deux roues"] = "Les deux roues motorisés sont le moyen de transport le moins utilisé par les Européens (1,7%). Malgré tout, à Barcelone, les deux roues motorisés restent assez prisés (13%). Mais pour des villes comme Lisbonne, Riga ou Bucarest, ce moyen de transport n’est pas du tout adopté.";
		this.tableauTexteCarte["marche"] = "En moyenne, 9,7% des Européens se rendent au travail à pied. Véritable modèle, Stockholm se démarque des autres villes (16,3%). Au contraire, à Amsterdam, peu d’habitants effectuent le trajet domicile-travail à pied (2,7%).";
		this.tableauTexteCarte["transports publics"] = "Près d’un Européen sur deux (46,9%) utilise les transports publics. Les Parisiens sont les citoyens qui empruntent le plus ce moyen de transport (67%). A l’inverse, Copenhague est la ville qui les fréquente le moins (15,4%).";
		this.tableauTexteCarte["voiture"] = "Pour se rendre au travail, 31,5% des Européens se servent de leur voiture. C'est à Dublin qu’elle y est la plus empruntée (51,4%). Les Parisiens, quant à eux, sont ceux qui délaissent le plus la voiture pour aller au travail (10,7%).";
		this.tableauTexteCarte["velo"] = "Sur 100 Européens, 8 prennent le vélo pour aller travailler. A Copenhague, ce sont même 59,5% des habitants qui se rendent au travail par ce moyen ! Cependant, le vélo n’est pas du tout utilisé à Sofia.";
        this.tableauTexteCarte["autre"] = " ";      
    },
    initStructure: function() {
        var self = this;
        this.mamap = new jvm.Map({
			map: 'europe_mill_en',
            container: $('#europe-map'),
				zoomAnimate: false,
                 zoomOnScroll: false,
                  zoomMin: 1,
                  zoomMax: 1,
                  backgroundColor: '',
                  regionStyle: { initial: { fill: '#f0f0dd' } },
              series: {
                regions: [{
                    scale: ['#fabbbf','#fa9ba1','#fa7883','#fa5762', '#ba4147','#7a2b30'],
					min: 0,
                    max: 100,
                    normalizeFunction: 'polynomial',
                }]
              },
              onRegionTipShow: function(e, el, code){
                if (self.stateById[self.transport][code] !== undefined) {
                    el.html(self.cityByCountryCode[code]+' ('+self.stateById[self.transport][code]+' %)');
                } else {
                    el.html(el.html()+'(Proportion inconnue)');
                }
            },
        });
    }, 
    getTransportByIndex: function(index) {
        console.log(index);
        var self= this;
        var resultat = "velo"; //Si le transport n'a pas été trouvé on renvoie par default vélo 
        $(".boutonPage5").each(function( currentIndex ) {
            if(currentIndex+1===index) {
                resultat = $(this).attr('data-value');
            }
        });
        return resultat; 
    },
    initListener: function () {
        var self = this;
		this.dispatch.on("load", function() {
            return self.showDataOf("voiture");
        });
        $("#page4").on("newPosition", function(event,newPosition) {
            if(newPosition != 0) {
                return self.showDataOf(self.getTransportByIndex(newPosition));
            } else {
               return self.showDataOf(self.transportChoisi);
            }
        });
        $('.boutonPage5').click(function() {
            self.showDataOf($(this).attr('data-value'));
            $(window).trigger("newPositionVoiture", [$(this).attr('data-index')]);
        });
        $("#page4").on("inViewport", function(event, transportChoisi) { 
           self.transportChoisi = transportChoisi;
           return self.showDataOf(transportChoisi);
        });
    },
    showDataOf: function(transport) {
        console.log(transport);
        if(transport == "train") {
            return this.showDataOf("autre");
        } else if (transport == "bus") {
            return this.showDataOf("transports publics");
        }
        this.mamap.series.regions[0].clear();
		this.mamap.series.regions[0].setValues(this.stateById[transport]);
		this.mamap.series.regions[0].scale.setMin(this.getMinValue(this.stateById[transport]));
		this.mamap.series.regions[0].scale.setMax(this.getMaxValue(this.stateById[transport]));
		$("#explicationMap").text(this.tableauTexteCarte[transport]);
		this.transport = transport;
    },
    getMaxValue: function(arr){
        var max = 0;                
        jQuery.map(arr, function (obj) {
          if (obj > max)
            max = obj;
        });
        return max;
    },
    getMinValue: function(arr){
        var min = 100;                
        jQuery.map(arr, function (obj) {
          if (obj < min)
            min = obj;
        });
        return min;
    }  
};