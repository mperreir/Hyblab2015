/*
    Gestionnaire de Slider
*/
"use strict";


function Slider(application, div, options){
    
    this.application = application;
    this.div = div;
    
    this.options = {};
    
    
	this.canvas = document.createElement("canvas");
	this.div.appendChild(this.canvas);
	this.ctx = this.canvas.getContext("2d");
    
    //Options
    this.options = $.extend({
        values: [2011,2012,2013],
        linecolor:"#BD9A5A",
        labelcolor:"#BD9A5A",
        labelhovercolor:"#C5581E",
        labelselectedcolor:"#C5581E",
        font:"14pt sans-serif",
        
        
        //Events
        onChange:null
        
    }, options);
    
    this.current_hover = -1;

    
    var self = this;
    $(this.canvas).mousemove(function(e){return self.mousemove(e)});
    $(this.canvas).mouseleave(function(e){return self.mouseleave();})
    $(this.canvas).click(function(e){return self.mouseclick(e);})
	$(window).resize(function(){self.resize();});
    
    //$(div).html(html);
    
    this.resize();
}
Slider.prototype = {
    resize:function(){
        this.width = $(this.div).width();
        this.height = $(this.div).height();
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.selected = 0;
	
	    this.draw();
    },
    setValues: function(values){
        if($.isArray(values)){
            this.options.values = values;
            this.selected = 0;
            this.draw();
        }
    },
    setValue: function(value){
        if(value >= 0 && value < this.options.values.length){
            this.selected = value;
            this.draw();
        }
    },
    draw: function(){
        var margin = this.width*0.15;
        var baseline = this.height*0.2;
        var w = 10;
        //On efface
        this.ctx.clearRect(0,0,this.width,this.height);
        //On trace le slider
        
        //Trait de fond
        this.ctx.fillStyle = this.options.linecolor;
        this.ctx.fillRect(margin, baseline-2, this.width-2*margin, 4);
        
        //Labels
        if(this.options.values.length > 1){
            var i;
            var dw = (this.width-2*margin)/(this.options.values.length-1);
            for(i=0;i<this.options.values.length;i++){
                this.drawLabel(margin+dw*i,baseline+1,w, this.options.values[i], i == this.selected, i == this.current_hover);
            }
        }
    },
    drawLabel: function(x, y, width, value, selected, hover){
        
        if(selected) this.ctx.fillStyle = this.options.labelselectedcolor 
        else this.ctx.fillStyle = hover?this.options.labelhovercolor :this.options.labelcolor;
        this.ctx.beginPath();
        /*this.ctx.moveTo(x-width/2, y);
        this.ctx.lineTo(x, y-width/2);
        this.ctx.lineTo(x+width/2, y);
        this.ctx.lineTo(x, y+width/2);
        this.ctx.lineTo(x-width/2, y);*/
        
        this.ctx.arc(x,y-1,width*0.6,0,2*Math.PI);
        this.ctx.closePath();
        this.ctx.fill();
       //this.ctx.fill
        
        
        this.ctx.textAlign = 'center';
        if(selected )this.ctx.font = "17pt sans-serif";
		else this.ctx.font = "12pt sans-serif"
        this.ctx.fillText(value, x, y+width*2.5);
        
      
    },
    getIndexByPosition : function(x, y){
        if(this.options.values.length > 1){
            var margin = this.width*0.15;
            var baseline = this.height*0.2;
            var dw = (this.width-2*margin)/(this.options.values.length-1);
            var w = 0.3*dw;
            
            x = x-(margin-w/2);
            if(x%dw <= w){
                var index = Math.floor(x/dw);
                if(index < this.options.values.length) return index;
            }
        }
        return -1;
    },
    mouseclick: function(e){
        var x = e.offsetX!=undefined?e.offsetX:(e.clientX-$(e.target).offset().left);
        var y = e.offsetY!=undefined?e.offsetY:(e.clientY-$(e.target).offset().top);
        
        var item = this.getIndexByPosition(x, y);
        if(item != -1 && item != this.selected){
            this.selected = item;
            this.draw();
            if($.isFunction(this.options.onChange)){
                this.options.onChange.call(this, this.selected);
            }
        }
        return false;
    },
    mouseleave: function(e){
        if(this.current_hover != -1){
            this.current_hover = -1;
            this.draw();
            this.canvas.style.cursor="default";
        }
        return false;
    },
    mousemove: function(e){
        var x = e.offsetX!=undefined?e.offsetX:(e.clientX-$(e.target).offset().left);
        var y = e.offsetY!=undefined?e.offsetY:(e.clientY-$(e.target).offset().top);
        
        var item = this.getIndexByPosition(x, y);
        if(this.current_hover != item){
            this.current_hover = item;
            if(item != -1) this.canvas.style.cursor="pointer";
            else this.canvas.style.cursor="default";
            this.draw();
        }
        return false;
    }
}