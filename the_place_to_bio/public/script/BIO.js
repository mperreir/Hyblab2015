/*
    Gestionnaire de BIO
*/
"use strict";


function BIO(application, div, options){
    
    this.application = application;
    this.div = div;
    
    this.main_div = document.createElement("div");
    this.div.appendChild(this.main_div);
    
    
    this.options = $.extend({
        image: application.res("jauge"),
        animation: Math.easeOutCubic
    }, options);
   
    this.mask = application.res("bio_mask");
    this.mask2 = application.res("bio_masque");
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.mask.width;
    this.canvas.height = this.mask.height;
    this.ctx = this.canvas.getContext("2d");
    
    this.ctx.drawImage(this.mask,0,0);
    
    this.e = this.ctx.getImageData(0,0,this.mask.width, this.mask.height);
    this.color1 = "#6BB43A";
    this.color2 = "#528631";
    
    this.ratio= 0;
    
    this.letters = [];
    for(var i=0;i<3;i++){
        this.letters[i] = {i:i, sy:0, ey:0, values:[]};
        
       // this.letters[i].f = [draw.polygon().fill(color1),draw.polygon().fill(color1),draw.polygon().fill(color1),draw.polygon().fill(color2)];
    
    }
    
    this.letters[0].x = 0;
    this.letters[0].w = 110;
    this.letters[1].x = 110;
    this.letters[1].w = 160;
    this.letters[2].x = 160;
    this.letters[2].w = 350;
    
    var l, j;
    for(var i=0;i<this.mask.height;i++){
        l = this.getLine(i);
        j = 0;
        while(j < l.length){
            var index = 2;
            var lim = 300;
            if(l[j].start < 102){
                index = 0;
                lim = 102;
            }
            else if(l[j].start < 150){
                index = 1;
                lim = 150;
            }
            if(this.letters[index].values.length == 0) this.letters[index].sy = i;
            this.letters[index].ey = i;
            if(j+1 < l.length && l[j+1].start < lim){
                this.letters[index].values.push([l[j].start, l[j+1].start]);
                j+=2;
            }
            else{
                this.letters[index].values.push([l[j].start, l[j].start+l[j].length]);
                j++;
            }
        }
    }
    
    this.canvas.width = this.mask2.width;
    this.canvas.height = this.mask2.height;
    
    this.main_div.appendChild(this.canvas);
    
    
	
    this.yy =0;
    this.d = 1;
    
    this.x1 = 2;
    this.y1 = 1;
    this.value = 0;
    this.animation = false;
    
    var self = this;
    this.resize();
}

BIO.prototype = {
    resize: function(){
        var w = $(this.main_div).width();
        var h = $(this.main_div).height();
        var r = Math.min(w/this.mask2.width, h/this.mask2.height);
        this.canvas.width = this.mask2.width*r;
        this.canvas.height = this.mask2.height*r;
        this.r2 = r;
        this.r = 546/this.mask.width;
        this.r1 = 257/this.mask.height;
        this.draw(this.value);
    },
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
        
        //Avancement avec la formule
        var a = this.options.animation(this.animation.pc, 0, 1, 100);
        this.value = this.start_value + (this.end_value-this.start_value)*a;
        
        if(this.animation.pc >= 100){
            this.value = this.end_value;
            this.draw(this.value);
             this.animation = false;
        }
        else{
            this.draw(this.value);
            var self = this;
            this.animation.timeout = setTimeout(function(){self.animate();},20);
        } 
    },
    draw:function(y){
        this.ctx.clearRect(0,0,this.mask2.width* this.r2, this.mask2.height* this.r2);
        this.updateLine(y, this.letters[0]);
        this.updateLine(y, this.letters[1]);
        this.updateLine(y, this.letters[2]);
        this.ctx.drawImage(this.mask2,0,0,this.mask2.width*this.r2, this.mask2.height*this.r2);
    },
    getLine: function(line){
        var start = this.mask.width*line*4;
        var gi = 0;
        var gs = 0;
        var groups = [];
        for(var i=0;i<this.mask.width;i++){
            if(this.e.data[start+i*4+3] > 10){
                if(gs == 0) gi = i;
                gs++;
            }
            else if(gs > 0){
                groups.push({start:gi, length:gs});
                gs = 0;
                gi = 0;
            }
        }
        if(gs > 0){
            groups.push({start:gi, length:gs});
            gs = 0;
            gi = 0;
          }
        return groups
    },
    updateLine: function(pc, letter){
        var ind = Math.floor((letter.values.length-1)*(100-pc)/100);
        var y = ind;
        var data = letter.values[y];
        
        y += letter.sy;
       /*letter.f[3].plot([
            [this.x1+data[0]*this.ratio,40+y*this.r], 
            [this.x1+data[1]*this.ratio,40+y*this.r], 
            [27+data[1]*this.r,21+y*this.ratio], 
            [27+data[0]*this.r,21+y*this.ratio]
        ]);*/
        
        var dl = 40;
        if(pc > 89) dl = 0;
        
        var dl2 = 0;
        if(pc < 9 && letter.i==2) dl2 = 40;
        
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color1;
        this.moveTo(this.x1+ letter.x*this.r,this.y1+y*this.r1+dl2);
        this.lineTo(this.x1+data[0]*this.r,this.y1+y*this.r1+dl2);
        this.lineTo(this.x1+39+data[1]*this.r,this.y1+dl+y*this.r1);
        this.lineTo(this.x1+ letter.w*this.r,this.y1+dl+y*this.r1);
        this.lineTo(this.x1+ letter.w*this.r,this.mask2.height-1);
        this.lineTo(this.x1+ letter.x*this.r,this.mask2.height-1);
        this.ctx.closePath();
        this.ctx.fill();
        
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color2;
        this.moveTo(this.x1+39+data[0]*this.r,this.y1+40+y*this.r1);
        this.lineTo(this.x1+39+data[1]*this.r,this.y1+40+y*this.r1);
        this.lineTo(this.x1+data[1]*this.r,this.y1+y*this.r1);
        this.lineTo(this.x1+data[0]*this.r,this.y1+y*this.r1);
        this.ctx.closePath();
        this.ctx.fill();
        
    },
    moveTo: function(x, y){
        this.ctx.moveTo(x * this.r2, y * this.r2);
    },
    lineTo: function(x, y){
        this.ctx.lineTo(x * this.r2, y * this.r2);
    }
};