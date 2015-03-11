"use strict";
function Compteur(div, options){
    this.div = div;
    
    this.options = $.extend({
		suffixe:"",
        durationAnimation: 100,
        onlyInteger: false,
    }, options);
    
    this.value=0;
    this.isFirstInit = true; 
}

Compteur.prototype = {
	setValue: function(value) {
		if(this.isFirstInit) {
			this.value = value;
			this.update(value);
			this.isFirstInit = true;
		} else {
			var delta = this;
			var padding = (value-this.value)/this.options.durationAnimation;
			if(padding>0) {
				padding = Math.ceil(padding); 
			} else {
				padding = Math.floor(padding); 
			}
			this.animate(this.value, value, this.options.durationAnimation, padding, this.value<value);
		}
	},
	animate:function(currentValue, endValue, durationUnity, padding, isCroissant){
		var self = this;
		if((currentValue >= endValue && isCroissant) || (currentValue <= endValue && !isCroissant)){ //on est arrivé au bout
            this.value = endValue;
            this.update(endValue);
		} else {
			var newValue = parseFloat(currentValue) + parseFloat(padding);
			this.update(newValue);
			setTimeout(function(){
					self.animate(newValue, endValue, durationUnity, padding);
				},durationUnity
			);
		}
	},
	update: function(currentValue){
		this.div.text(currentValue+this.options.suffixe);
	}
}