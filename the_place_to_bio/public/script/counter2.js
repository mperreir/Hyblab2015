/*
    Gestionnaire de Counter2
*/
"use strict";


function Counter2(application, div, options){
    
    this.application = application;
    this.div = div;
    
    //Options
    this.options = $.extend({
        digits:4,
		suffix:"",
		decimal:true,
        animation: Math.easeOutCubic
        
    }, options);
    
    this.value=0;
    
    
    this.animation = false;
}

Counter2.prototype = {
	setValue: function(value){
	    this.start_value = this.value;
	    this.end_value = value;
	    this.startAnimation();
	},
	startAnimation: function(){
		if(this.animation != false && this.animation.timeout){
			clearTimeout(this.animation.timeout);
		}
		this.animation = {pc:0};
		this.animate();
	},
	animate:function(){
		this.animation.pc+=2;
		
		if(this.animation.pc >= 100){
            this.value = this.end_value;
            this.update();
            this.animation = false;
		}
		else{
	        var a = this.options.animation(this.animation.pc, 0, 1, 100);
			this.value = this.start_value + (this.end_value-this.start_value)*a;
            this.update();
			var self = this;
			this.animation.timeout = setTimeout(function(){self.animate();},20);
		}
	},
	update: function(){
		var text= "";
		if(this.options.decimal){
			var i = Math.round(this.value)*10;
			var i2 = Math.round(this.value*10);
			if(i != i2){
				text = i2/10;
			}
			else{
				 text= Math.round(this.value)+".0";
			}
		}
		else{
			text = Math.round(this.value);
		}
		$(this.div).html(text+this.options.suffix);
	}
}