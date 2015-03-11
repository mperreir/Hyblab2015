"use strict";
function Voiture(listePage, pofloorInstance){
  //Options
  this.largueurVoiture = 110;
  this.hauteurVoiture = 56;
  this.animationDuration = 600;
  this.voiture = $('#canvasVoiture');
  this.containerVoiture = $('footer');
  
  //Initialisation
  this.listePage = listePage;
  this.pofloorInstance = pofloorInstance;
  
  this.init();
}

Voiture.prototype = {
  init: function (){
    this.initListener();
    this.carMoving = false;
    this.marcheAvant = true;
    this.transportChoisi = 'voiture';
    this.hideCarInFirstOrLastPage();
    this.goToPosition(0, false);
  },
  initListener: function() {
    var self = this;
  	window.addEventListener("keydown", function(e) {return self.checkKeyPressed(e);});
    $(document).bind('mousewheel DOMMouseScroll', function(e) {return self.mousewheel(e);});
    $('.direction').click(function(e){return self.goToDirection($(this));});
    $('.transportAccueil').click(function(e){return self.chooseCar($(this));});
    $(window).on("retryExperience", function() { return self.retryExperience()});
    $(window).on("newPositionVoiture", function(event, index) {return self.goToPosition(parseInt(index), false)});
    $("#retryExperience").on("click", function() {
        $(window).trigger('retryExperience');
    })
  },
  changeCar: function(url) {
    this.voiture.attr('src', url);
  },
  retryExperience: function() {
    this.positionInFrame = 0;
    this.pofloorInstance.scrollToFloor(0);
    this.hideCarInFirstOrLastPage();
	  this.dispachNewPage();
	},
	goToDirection: function(e) {
    if (e.attr("data-direction") == 'right') {
      this.nextPage();
    }
    else {
      this.previousPage();
    }
	},
	goToPosition: function(index, dispach) {
	  var self = this;
	  this.carIsMoving = true;
	  var carWidth = this.voiture.width();
    this.orientationVoitureGoForward(index >= this.getPositionInFrame());
    
    var footerWidth = this.containerVoiture.width();
    var pourcentageVoiture = (carWidth/footerWidth) * 100;
    
    var temp=(((index+1)/this.getPageActive().getNumberOfMaxWheel())*100)-(((1/this.getPageActive().getNumberOfMaxWheel())*100)/2) - (pourcentageVoiture/2) +'%';
    this.voiture.animate({
      left: temp
    }, this.animationDuration, 'linear', function() {
      self.carIsMoving = false;
      self.positionInFrame = index;
      if(dispach) {
        self.dispachNewPosition();
      }
    });
	},
	isLastPage: function(){
		return this.pofloorInstance.floorActive == this.numberOfPage-1;
	},
	isFirstPage: function(){
		return this.pofloorInstance.floorActive == 0;
	},
	nextPage: function(){
	  var self = this;
    this.orientationVoitureGoForward(true);
	  this.carIsMoving = true;
    this.voiture.animate({
      left: "120%"
    }, this.animationDuration, 'linear', function() {
      self.pofloorInstance.scrollToDirection("right");
      self.hideCarInFirstOrLastPage();
	    self.initialiserPlacementVoiture();
	    self.goToPosition(0, true);
	    self.carIsMoving = false;
      self.dispachNewPage();
    });
    this.positionInFrame = 0;
	},
	previousPage: function() {
	  var self = this;
    this.carIsMoving = true;
    this.orientationVoitureGoForward(false);

    this.voiture.animate({
        left: "-20%"
      }, this.animationDuration, 'linear', function() {
        if (!(self.isFirstPage())) {
          self.pofloorInstance.scrollToDirection("left");
          self.carIsMoving = false;
          self.hideCarInFirstOrLastPage();
  		    self.voiture.css({left: '120%'});
  		    self.goToPosition(self.listePage[self.getIndexCurrentPage()].getNumberOfMaxWheel()-1, true);
    	    self.dispachNewPage();
        }
    }); 
    this.positionInFrame = this.getPageActive().getNumberOfMaxWheel();
	},
	getCurrentPage: function() {
	  return $('#'+this.getPageActive().getNom()); 
	},
	getPageActive: function() {
	  return this.listePage[this.getIndexCurrentPage()];
	},
	getIndexCurrentPage: function() {
	  return this.pofloorInstance.floorActive;
	},
	dispachNewPage: function() {
    this.getCurrentPage().trigger("inViewport", this.transportChoisi);
	},
	dispachNewPosition: function() {
    this.getCurrentPage().trigger("newPosition",[this.getPositionInFrame()]);
	},
  orientationVoitureGoForward: function(transportGoForward) {
    if (!transportGoForward) {
      if (!this.voiture.hasClass("forward")) {
        this.voiture.addClass("forward");
      }
    } else  {
      this.voiture.removeClass("forward");
    }
  },
  checkKeyPressed:function(e) {
    if (e.keyCode == "39") {
      this.nextPage();
    } else if (e.keyCode == "37") {
      this.previousPage();
    }
  },
  mousewheel: function(e)  {
    var e0 = e.originalEvent,
    delta = -e0.wheelDelta || e0.detail;
    if(!this.carIsMoving && this.getPageActive().scrollIsPossible()) {
      if(delta < 0) {
        if(this.positionInFrame <= 0) {
          if (!this.isFirstPage()) {
            this.previousPage();
          }
        } else {
          this.goToPosition(this.positionInFrame-1, true);
        }
      } else {
        if (this.positionInFrame >= this.getPageActive().getNumberOfMaxWheel()-1) {
          if(!this.isLastPage()) {
            console.log("nextPage");
            this.nextPage();
          }
        } else {
          this.goToPosition(this.positionInFrame+1, true);
        }
      }
    }  
  },
  chooseCar: function(e) {
    this.changeCar(e.attr('src'));
    this.transportChoisi = e.attr('data-value');
  	this.nextPage();
  },
  initialiserPlacementVoiture: function() {
   this.voiture.css({left: '0%'});
  },
	getPositionInFrame: function(type){
		return this.positionInFrame;
	},
  hideCarInFirstOrLastPage: function() {
    if (this.isFirstPage()) {
      if (!this.containerVoiture.hasClass("hidden")) {
        this.containerVoiture.addClass("hidden");
      } 
    } else{
        this.containerVoiture.removeClass("hidden");
    }
  }
};

function Page(nom, numberOfMaxWheel, carIsVisible, srollPossible) {
  this.nom = nom;
  this.numberOfMaxWheel = numberOfMaxWheel;
  this.carIsVisible = carIsVisible;
  this.srollPossible = srollPossible;
}
Page.prototype= {
  getNom: function() {
    return this.nom;
  },
  getNumberOfMaxWheel: function() {
    return this.numberOfMaxWheel;
  },
  carIsVisible: function() {
    return this.carIsVisible;
  },
  scrollIsPossible:function() {
    return this.srollPossible;
  }
};