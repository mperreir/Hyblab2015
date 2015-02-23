/*
    Gestionnaire de Counter
*/
"use strict";


function Counter(application, div, options){
    
    this.application = application;
    this.div = div;
    
    //Options
    this.options = $.extend({
        digits:7,
        animation: Math.easeOutCubic
        
    }, options);
    
    this.value=0;
    
    this.values = [];
    
    this.animation = false;
    
    this.main_div = document.createElement("div");
    this.main_div.className = "counter_bloc";
    this.div.appendChild(this.main_div);
    //On crée les digits
    this.digits = [];
    
    this.rebuild();
}

Counter.prototype = {
	rebuild: function(){
		//On supprime tous les éléments
		while(this.main_div.firstChild){
			this.main_div.removeChild(this.main_div.firstChild);
		}
		//On crée nos éléments
		this.digits = [];
		var i;
		for(i=0;i<this.options.digits;i++){
			var element = document.createElement("div");
			element.className = "counter_digit";
			element.innerHTML = "0";
			this.main_div.appendChild(element);
			this.digits[i] = element;
		}
		this.values = this.getValues(this.value);
		this.update();
	},
	setValue: function(value){
	    this.start_value = this.values.slice();
	    this.end_value = this.getValues(value);
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
		this.animation.pc++;
		
		if(this.animation.pc >= 100){
            this.values = this.end_value.slice();
            this.update();
            this.animation = false;
		}
		else{
	        var a = Math.floor(this.options.animation(this.animation.pc, 0, 10, 100));
	        this.values = []
	        for(var i=0;i<this.start_value.length;i++){
	            if(this.start_value[i] == this.end_value[i]) this.values[i] = this.end_value[i];
	            else if(this.start_value[i]>this.end_value[i]){
	                if(this.start_value[i]+a > this.end_value[i]+10) this.values[i] = this.end_value[i];
	                else this.values[i] = (this.start_value[i]+a)%10;
	            }
	            else{
	                if(this.start_value[i]+a > this.end_value[i]) this.values[i] = this.end_value[i];
	                else this.values[i] = (this.start_value[i]+a)%10;
	            }
	        }
			this.update();
			var self = this;
			this.animation.timeout = setTimeout(function(){self.animate();},20);
		}
	},
	getValues: function(value){
		value = Math.floor(value);
	  //Convertie un nombre en tableau de digits
	  var retour = [];
	  var digits = this.options.digits;
	  var str = value.toString().substr(-digits);
	  if(str.length<digits){
	      for(var i=0;i<digits-str.length;i++) retour[i] = 0;
	      for(var i=0;i<str.length;i++){
	          retour[i+(digits-str.length)] = parseInt(str[i]);
	      }
	  }
	  else{
	      for(var i=0;i<str.length;i++){
	          retour[i] = parseInt(str[i]);
	      }
	  }
	  return retour;
	},
	update: function(){
	    for(var i=0;i<this.options.digits;i++){
	        this.digits[i].innerHTML = this.values[i];
	    }
	}
}