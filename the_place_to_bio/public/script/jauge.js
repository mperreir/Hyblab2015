/*
    Gestionnaire de Jauge
*/
"use strict";


function Jauge(application, div, options){
    
    this.application = application;
    this.div = div;
    
    this.options = $.extend({
        counter: null,
        back: null,
        animation: Math.easeOutCubic,
		image: null,
		min:0.02,
		max:0.981,
		pc_max:100
	}, options);
	
	this.canvas = document.createElement("canvas");
	this.ctx = this.canvas.getContext("2d");
	this.div.appendChild(this.canvas);
	this.resize();
    
    this.value = 0;
    this.start_value = 0;
    this.end_value = 0;
    this.animation = false;
    
    //On crée la structure
    if(this.options.counter){
        this.div_counter = this.options.counter;
    }
    this.resize();
	
	var self = this;
	$(window).resize(function(){self.resize()});
}

Jauge.prototype = {
    setValue: function(value){
        if(value > this.options.pc_max) value = this.options.pc_max;
        if(value < 0) value = 0;
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
        $(this.div_value).css({'margin-top': (-this.end_value)+"px"});
    },
    animate:function(){
        this.animation.pc++;
        
        //Avancement avec la formule
        var a = this.options.animation(this.animation.pc, 0, 1, 100);
        this.value = this.start_value + (this.end_value-this.start_value)*a;
        
        if(this.animation.pc >= 100){
            this.value = this.end_value;
			this.update();
              if(this.options.counter) $(this.div_counter).html(Math.round(this.value)+"%");
             this.animation = false;
        }
        else{
              if(this.options.counter) $(this.div_counter).html(Math.round(this.value)+"%");
            var self = this;
			this.update();
            this.animation.timeout = setTimeout(function(){self.animate();},20);
        } 
    },
	resize: function(){
		var taille =  Math.min($(this.div).width(),this.application.height()*0.5);
		
		if(taille > 500) taille = 500;
		this.margin = ($(this.div).width()-taille)/2;
		this.taille = taille;
		this.height = this.options.image.height/this.options.image.width*taille;
		this.canvas.width = $(this.div).width();
		this.canvas.height = this.height;
		this.update();
	},
	update: function(){
		this.ctx.clearRect(this.margin,0,this.taille, this.canvas.height);
		if(this.options.back){
		    //Oui c'est dégueu mais si vous êtes pas content c'est pareil ! ><
		    
	    	this.ctx.fillStyle="#2739E0";
		    this.ctx.fillRect(this.margin+4, this.height*0.01, this.taille*0.35, this.height*0.98);
	    	this.ctx.fillStyle="white";
		    this.ctx.fillRect(this.margin+this.taille*0.35, this.height*0.01, this.taille*0.3, this.height*0.98);
	    	this.ctx.fillStyle="#D62B47";
		    this.ctx.fillRect(this.margin+this.taille*0.65, this.height*0.01, this.taille*0.35-5, this.height*0.98);
		}
		this.ctx.fillStyle="#C5581E";
		this.ctx.fillRect(this.margin+5,this.height*(this.options.min + (this.options.max-this.options.min)*(1 - (this.value/ this.options.pc_max))), this.taille-10, this.height*(this.options.min + (this.options.max-this.options.min)*(this.value/ this.options.pc_max)));
		this.ctx.drawImage(this.options.image, this.margin, 0, this.taille, this.height);
	}
};