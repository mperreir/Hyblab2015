"use strict";
function Databrutis(){
    this.init();
}

Databrutis.prototype = {
    init: function() {
        this.initStructure();
        this.initPageAccueil();
        this.initPageIntro();
        this.initPagePage1();
        this.initPagePage2();
        this.initPagePage3();
        this.initPagePage4();
        this.initPageQuizz();
        this.initPageCredit();

        this.voiture.dispachNewPage();
    },
    initStructure: function() {
        var listePage = new Array();
        listePage[0] = new Page("home",5, false, true);
        listePage[1] = new Page("introduction",5, true, true);
        listePage[2] = new Page("page1",5,true, true);
        listePage[3] = new Page("page2",6,true, true);
        listePage[4] = new Page("page3",6,true, true);
        listePage[5] = new Page("page4",7,true, true);
        listePage[6] = new Page("quizz",5,true, true);
        listePage[7] = new Page("credit",6,true, true);
        
        var numberOfPage = listePage.length;
        var listeDirection = new Array(numberOfPage);
        var listeNomPage = new Array(numberOfPage);
        for (var i = 0; i < numberOfPage; i++) {
            listeDirection[i] = new Array(2);
            listeDirection[i][0]=0;
            listeDirection[i][1]=i;
            listeNomPage[i]=listePage[i].getNom();
        }
        
        var containerSection= $("#sections");
        containerSection.pofloor({pofloorFloorName:listeNomPage, time:1000,childType:"section",easing: "easeInOutElastic" , direction: listeDirection});

        this.voiture = new Voiture(listePage, containerSection.data("pofloor"));
    },
    initPageAccueil: function() {
          
    },
    initPageIntro: function() {
        
    },
    initPagePage1: function() {
		new Page1();
    },
    initPagePage2: function() {
		new Page2();
    },
    initPagePage3: function() {
		new Page3();
    },
    initPagePage4: function() {
		new Page4();
    },
    initPageQuizz: function() {
		new Quizz();
    },
    initPageCredit: function() {
        new ImageResponsive ($('.creditPhoto'));
    }
}