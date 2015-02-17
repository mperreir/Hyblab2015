"use strict";
function Voiture(){
	var self = this;
	
	window.addEventListener("keydown", function(e) {return self.checkKeyPressed(e);});
  $(document).bind('mousewheel DOMMouseScroll', function(e) {return self.mousewheel(e);});
  $('.direction').click(function(e){return self.goToDirection($(this));});
  $('.voitureAccueil').click(function(e){return self.chooseCar($(this));});

  this.numberOfWheelToSetPage = 6;
	this.positionInFrame = 0;
  this.carMoving = false;
  this.marcheAvant = true;
  this.largueurVoiture = 180;
  this.hauteurVoiture = 100;
  this.animationDuration = 300;
  this.voiture = $('#canvasVoiture');
  this.containerVoiture = $('footer');
  this.pofloorFloorName = ["home", "introduction","page1","page2", "page3", "page4", "page5", "credit"];
  this.numberOfPage = this.pofloorFloorName.length;
  this.listeDirection = new Array(this.numberOfPage);
  for (var i = 0; i < this.numberOfPage; i++) {
    this.listeDirection[i] = new Array(2);
    this.listeDirection[i][0]=0;
    this.listeDirection[i][1]=i;
  }
  
  this.pofloor = $("#sections").pofloor({pofloorFloorName:this.pofloorFloorName, time:1000,childType:"section",easing: "easeInOutExpo" , direction: this.listeDirection});
  this.pofloorInstance = $("#sections").data("pofloor");
  self.hideCarInFirstOrLastPage();
  self.changeCar("media/voiture.accueil.png");
}

Voiture.prototype = {
  changeCar: function(url) {
    this.voiture.attr('src', url);
  },
	getPositionInFrame: function(type){
		return this.positionInFrame;
	},
	goToDirection: function(e) {
    if (e.attr("data-direction") == 'right') {
      this.nextPage();
    }
    else {
      this.previousPage();
    }
	},
	goToPosition: function(index) {
	  self = this;
	  this.carIsMoving = true;
	  var carWidth = this.voiture.width();
    var footerWidth = this.containerVoiture.width();
    var pourcentageVoiture = (carWidth/footerWidth) * 100;

    var temp=((index/this.numberOfWheelToSetPage)*100) - (pourcentageVoiture/2) +'%';
    this.voiture.animate({
      left: temp
    }, this.animationDuration, 'linear', function() {
      self.carIsMoving = false;
      self.positionInFrame = index;
      self.dispachNewPosition();
    });
	},
	isLastPage: function(){
		return this.pofloorInstance.floorActive == this.numberOfPage-1;
	},
	isFirstPage: function(){
		return this.pofloorInstance.floorActive == 0;
	},
	nextPage: function(){
	  self = this;
	  this.carIsMoving = true;
    this.orientationVoitureGoForward(true);
	  this.voiture.animate({
      left: "120%"
    }, this.animationDuration, 'linear', function() {
      self.dispachOldPage();
      self.carIsMoving = false;
      self.pofloorInstance.scrollToDirection("right");
      self.hideCarInFirstOrLastPage();
	    self.initialiserPlacementVoiture();
	    self.dispachNewPage();
    });
    this.positionInFrame = 0;
	},
	previousPage: function() {
	  self=this;
    this.carIsMoving = true;
    this.orientationVoitureGoForward(false);
  	this.voiture.animate({
        left: "-20%"
      }, this.animationDuration, 'linear', function() {
        self.carIsMoving = false;
        if (!(self.isFirstPage())) {
          self.dispachOldPage();
          self.pofloorInstance.scrollToDirection("left");
          self.hideCarInFirstOrLastPage();
  		    self.voiture.css({left: '90%'});
    	    self.dispachNewPage();
        }
    }); 
    this.positionInFrame = this.numberOfWheelToSetPage-1;
	},
	getCurrentIdPage: function() {
	  return $('#'+this.pofloorFloorName[this.pofloorInstance.floorActive]); 
	},
	dispachNewPage: function() {
    this.getCurrentIdPage().trigger("inViewport");
	},
	dispachOldPage: function() {
    this.getCurrentIdPage().trigger("outOfViewport");
	},
	dispachNewPosition: function() {
    this.getCurrentIdPage().trigger("newPosition",[this.getPositionInFrame()]);
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
    
    if(!this.carIsMoving) {
      if(delta < 0) {
        this.orientationVoitureGoForward(false);
        if(this.positionInFrame - 1 < 0) {
          if (!this.isFirstPage()) {
            this.positionInFrame=0;
            this.previousPage();
          }
        } else {
          this.goToPosition(this.positionInFrame-1);
        }
      } else { 
        this.orientationVoitureGoForward(true);
        if (this.positionInFrame + 1 >= this.numberOfWheelToSetPage) {
          if(!this.isLastPage()) {
            this.nextPage();
          }
        } else {
          this.goToPosition(this.positionInFrame+1);
        }
      }
    }  
  },
  chooseCar: function(e) {
    this.changeCar("media/voiture.accueil.png");
  	this.nextPage();
  },
  initialiserPlacementVoiture: function() {
   this.voiture.css({left: '0%'});
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
}