"use strict";
function Page2(){
    this.maxVolume = 200;
    this.animationDuration = 300;
    this.filePath = "data/page2.csv";
    this.containerPage = $("#page2");
    this.boutonPage = $(".boutonPage2");
    this.containerNumberConsommation = $('#numberConsomationPage2');
    this.containerConversion = $('#conversionPage2Chiffre');
    
    this.dispatch = d3.dispatch("load", "statechange");
    this.init();
}

Page2.prototype = {
    init: function() {
        this.compteurConsommation = new Compteur(this.containerNumberConsommation, {onlyInteger:true});
        this.compteurConversion = new Compteur(this.containerConversion);
        this.initValue();
        this.initListener();
    },
    initValue: function() {
        var self = this;
        d3.csv(this.filePath, function(data) {
            self.dataPartie2 = data.map(function(d) {return [d["TypeTransport"], +d["NombreEssence"], +d["Consommation"]];});
            self.dispatch.load();
        });
    },
    initListener: function() {
        var self = this;
        this.containerPage.on("inViewport", function(event, transportChoisi) { 
           self.transportChoisi = transportChoisi;
        });
        this.containerPage.on("newPosition", function(event,newPosition) {
            self.showDataOf(newPosition);
        });  
        this.boutonPage.click(function() {
            self.showDataOf($(this).attr('data-index')-1);
            $(window).trigger("newPositionVoiture", [$(this).attr('data-index')]-1);
        });
        this.dispatch.on("load", function() {
            return self.showDataOf(0);
        });
        $(window).on("load resize", function() {
            $('#fondEssence').css({
                width: $("#essence").width(),
            });
        });
    },
    getIndexTransportChoisi: function() {
        var self= this;
        var resultat = 1; //Si le transport n'a pas été trouvé on renvoie par default 1 
        this.boutonPage.each(function( currentIndex ) {
            if($(this).attr('data-value')===self.transportChoisi) {
                resultat = currentIndex;
            }
        });
        return resultat;
    },
    showDataOf : function(index) {
        if (index == 0) {
            return this.showDataOf(this.getIndexTransportChoisi()+1);
        }
        this.boutonPage.attr("class", "boutonPage2 col-sm-2 col-xs-4");
        this.boutonPage.each(function(currentIndex) {
            if(currentIndex+1 == index){
                $(this).attr("class", "boutonPage2 col-sm-2 col-xs-4 selected");
            }
        });
        $('#dataPage2Transport').text(this.dataPartie2[index-1][0] + " consomme ");
        this.compteurConsommation.setValue(this.dataPartie2[index-1][1]);
        this.compteurConversion.setValue(this.dataPartie2[index-1][2]);

        var newPercentage = 100*(this.dataPartie2[index-1][1]/this.maxVolume);
        this.changerNiveauEssence(newPercentage+10);
    },
    changerNiveauEssence: function (pourcentage) {
        var pourcentageInverse = 100-pourcentage;
    
    	$('#fondEssence').animate({
            height: pourcentageInverse+"%"
        }, this.animationDuration);
    }
}