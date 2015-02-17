/**
	Gestion du tapis roulant
	
	On utilise un canvas
	/!\ bien notifier des redimensionnements /!\
*/
"use strict";
function ImageItem(res, options){
	this.res = res;
	this.options = $.extend({
		centerX:res.width/2,
		centerY:res.height/2,
		width:res.width,
		height: res.height
	}, options);
}
ImageItem.prototype = {
	setWidth: function(w){
		this.width = w;
		this.height = w;
		this.options.centerX = w/2;
		this.options.centerY = w/2;
	},
	draw: function(ctx, x, y, rotation,scale){
		if(rotation != 0){
			ctx.save();
			ctx.translate(x+this.options.centerX*scale,y+this.options.centerY*scale);
			ctx.rotate(rotation/180*Math.PI);
			ctx.drawImage(this.res, -this.options.centerX*scale, -this.options.centerY*scale,this.options.width*scale,this.options.height*scale);
			ctx.restore();
		}
		else{
			ctx.drawImage(this.res, x, y, this.options.width*scale,this.options.height*scale);
		}
	},
	setDatas: function(w,h,cx,cy){
		this.options.width = w;
		this.options.height = h;
		this.options.centerX = cx;
		this.options.centerY = cy;
	},
	width: function(){
		return this.options.width;
	},
	height: function(){
		return this.options.height;
	}
}


function BeltGroup(){
	this.items = [];
	this.rect = {x0:0,y0:0,x1:0,y1:0};
	this.height=0;
	this.width=0;
}
BeltGroup.prototype = {
	add: function(x,y,item){
		this.items.push({x:x, y:y, item:item});
		if(this.rect.x0 > x) this.rect.x0 = x;
		if(this.rect.y0 > y) this.rect.y0 = y;
		var x1 = x + item.width;
		var y1 = y + item.height;
		if(this.rect.x1 < x1) this.rect.x1 = x1;
		if(this.rect.y1 < y1) this.rect.y1 = y1;
		this.width = this.rect.x1-this.rect.x0;
		this.height = this.rect.y1-this.rect.y0;
	},
	setMovement:function(type){
		if(this.items.length == 0) return;
		this.items[0].item.setMovement(type);
	},
	inMovement: function(){
		if(this.items.length == 0) return false;
		return this.items[0].item.inMovement();
	},
	update: function(){
		if(this.items.length == 0) return;
		this.items[0].item.update();
		if(this.items[0].type == 0) return;
		for(var i=1;i<this.items.length;i++){
			this.items[i].item.rotation = this.items[0].item.rotation;
		}
	},
	draw: function(ctx, x,y, scale){
		for(var i=0;i<this.items.length;i++){
			this.items[i].item.draw(ctx, x+this.items[i].x*scale, y+this.items[i].y*scale, scale);
		}
	}
}

function BeltItem(res, options){
	this.res = res;
	this.x = 0;
	//Points de rotation
	this.rotation = 0;
	this.pr1 = (options && options.pr1)?options.pr1:{x:res.width/2,y:res.height};
	this.pr2 = (options && options.pr2)?options.pr2:{x:res.width/2,y:res.height};
	this.att = (options && options.att)?options.att:1;
	this.width = (options && options.width)?options.width:this.res.width;
	this.height = (options && options.height)?options.height:this.res.height;
	/*this.pr1 = {x:34,y:120};
	this.pr2 = {x:34,y:120};*/
	this.movement = 0;
	this.pc =0;
}

BeltItem.prototype = {
	ressource:function(){
		return this.res;
	},
	draw: function(ctx, x,y, scale){
		if(this.rotation != 0){
			ctx.save();
			ctx.translate(x+((this.rotation<0?this.pr1.x:this.pr2.x)-this.width/2)*scale,y+((this.rotation<0?this.pr1.y:this.pr2.y)-this.height)*scale);
			ctx.rotate(this.rotation/180*Math.PI);
			ctx.drawImage(this.res, -(this.rotation<0?this.pr1.x:this.pr2.x)*scale, -(this.rotation<0?this.pr1.y:this.pr2.y)*scale,this.width*scale,this.height*scale);
			ctx.restore();
		}
		else ctx.drawImage(this.res, x-(this.width/2*scale),y-this.height*scale,this.width*scale,this.height*scale);
	},
	setMovement:function(type){
		this.pc = 0;
		this.type = type;
	},
	inMovement: function(){
		return this.type != 0;
	},
	update: function(){
		if(this.type == 0) return;
		this.pc+=3;
		if(this.pc >= 100){
			this.pc = 0;
			this.type = 0;
			this.rotation=0;
		}
		if(this.type == 1){
			var c = Math.easeOutQuad(this.pc, 0, 6, 100);
			this.rotation = Math.sin(c*2)*(6-c)*this.att;
		}
		else if(this.type == -1){
			var c = Math.easeOutCubic(this.pc, 0, 6, 100);
			this.rotation = -Math.sin(c*2)*(6-c)*this.att;
		}
	}
};

function ConveyorBelt(application, div){
	//On place le div principal
	this.div = div;
	this.application = application;
	
	this.speed_rate = 1;
	
	//On crée le canvas
	this.canvas = document.createElement("canvas");
	this.div.appendChild(this.canvas);
	this.ctx = this.canvas.getContext("2d");
	
	//On définit les effets de scale
	this.sacle_transition = {type: Math.easeInCubic, duration: 30};
	
	//On met en place les valeurs de fonctionnement
	this.selected_item = 10;//Item sélectionné
	this.movement = false;//Aucun mouvement actuellement
	
	//On crée l'élément bouteilles
	var bouteilles = new BeltGroup();
	bouteilles.add(-40,0,new BeltItem(this.application.res("bouteille1"), {pr1:{x:2,y:127}, pr2:{x:34,y:127}}));
	bouteilles.add(0,0,new BeltItem(this.application.res("bouteille2"), {pr1:{x:2,y:127}, pr2:{x:34,y:127}}));
	bouteilles.add(40,0,new BeltItem(this.application.res("bouteille3"), {pr1:{x:2,y:127}, pr2:{x:34,y:127}}));
	
	var pommes = new BeltGroup();
	pommes.add(30,-25,new BeltItem(this.application.res("pomme3")));
	pommes.add(-50,-20,new BeltItem(this.application.res("pomme1")));
	pommes.add(0,0,new BeltItem(this.application.res("pomme2")));
	
	var miel = new BeltGroup();
	miel.add(-50,10, new BeltItem(this.application.res("miel"), {pr1:{x:2,y:106},pr2:{x:105,y:106}}));
	miel.add(30,0, new BeltItem(this.application.res("sceptre")));
	
	var biscuit =  new BeltGroup();
	biscuit.add(40,0,new BeltItem(this.application.res("biscuit3"), {pr1:{x:2,y:45},pr2:{x:133,y:45},att:0.5}))
	biscuit.add(0,5,new BeltItem(this.application.res("biscuit2")))
	biscuit.add(-50,5,new BeltItem(this.application.res("biscuit1"), {pr1:{x:2,y:40},pr2:{x:105,y:106}}))
	
	var orange = new BeltItem(this.application.res("orange"), {pr1:{x:2,y:119},pr2:{x:40,y:119}});
	
	var lait = new BeltItem(this.application.res("lait"), {pr1:{x:2,y:119},pr2:{x:45,y:119}});
	
	var viande = new BeltItem(this.application.res("viande"), {pr1:{x:2,y:100},pr2:{x:100,y:100}});
	
	
	var oeufs = new BeltGroup();
	oeufs.add(20,0,new BeltItem(this.application.res("oeuf2")));
	oeufs.add(-30,0,new BeltItem(this.application.res("oeuf1")));
	
	
	var surgele = new BeltGroup();
	surgele.add(20,0,new BeltItem(this.application.res("surgele1"), {pr1:{x:3,y:115},pr2:{x:90,y:119}}));
	surgele.add(-30,10,new BeltItem(this.application.res("surgele2"), {pr1:{x:2,y:100},pr2:{x:100,y:100}}));
	
	var france = new BeltItem(this.application.res("france"));
	
	var legumes = new BeltItem(this.application.res("legumes"), {pr1:{x:2,y:110},pr2:{x:126,y:110},att:0.5});
	
	this.items = [
	bouteilles,
	miel,
	pommes,
	biscuit,
	orange,
	lait,
	viande,
	oeufs,
	surgele,
	legumes,
	france];
	this.positions = [-0.3,0.1,0.5,0.9,1.3];
	this.moving = false;
	this.target = null;
	this.start = null;
	
	this.width = 0;
	this.height = 0;
	this.dx = 0;
	this.scale = 1.5;
	
	
	//Listeners
	var self = this;
	$(window).resize(function(){self.resize();});
	
	
	this.back = this.application.res("test");
	this.b = {w:this.back.width*0.75, h:this.back.height*0.9, h2:this.back.height*0.6};
	this.wheel = new ImageItem(this.application.res("wheel"),{width:this.back.height*0.49, height:this.back.height*0.49, centerX:this.back.height*0.49/2, centerY:this.back.height*0.49/2});
	this.canusecache = this.testCache();
	this.resize();
}

ConveyorBelt.prototype = {
	animation: function(){
		var start = new Date().getTime();
		var moving = false;
		if(this.movement != false){
			this.movement.pc+=this.movement.speed;
			if(this.movement.pc >= 100){
				//On garde le dx du tapis
				this.selected_item = (this.selected_item-this.movement.direction)%this.items.length;
				if(this.selected_item < 0) this.selected_item += this.items.length;
				
				//On vérifie si on a bien fini le mouvement ou s'il faut continuer
				if(this.target == null || this.selected_item == this.target){
					//On met un petit mouvment
					for(var i=0;i<5;i++)this.getItem(this.selected_item-2+i).setMovement(this.movement.direction);
					this.movement = false;
					this.target = null;
					this.changeIcon(this.selected_item);
					if(this.onStopMovement) this.onStopMovement.call(this, this.selected_item);
				}
				else{
					this.movement.pc = 0;
				}
			}
			moving = true;
		}
		for(var i=0;i<5;i++){
			this.getItem(this.selected_item-2+i).update();
			if(this.getItem(this.selected_item-2+i).inMovement()) moving = true;
		}
		this.draw();
		if(moving){
			var time = (new Date().getTime()-start);
			if(time >= 40) time = 39;
			var self = this;
			setTimeout(function(){ self.animation(); },40-time);
		}
		else this.moving = false;
	},
	resize: function(){
		this.width = this.application.width();
		this.height = Math.floor(this.application.height()*0.5);
		//if(this.height > 500) this.height = 500;
		this.speed_rate = Math.max(3,this.width/400);
		this.scale = this.height/380
		this.canvas.width = this.width;
		this.dx = 0;
		this.canvas.height = this.height;
		
		var s = this.scale*0.6;
		this.b = {w:this.back.width*0.75*s, h:this.back.height*0.9*s, h2:this.back.height*0.65*s};
		this.wheel.setDatas(this.back.height*0.49*s, this.back.height*0.49*s, this.back.height*0.49/2*s, this.back.height*0.49/2*s);
		this.back_cache1 = undefined;
		
		this.draw();
	},
	getItem: function(index){
		if(this.items.length == 0) return null;
		while(index < 0){
			index += this.items.length;
		}
		return this.items[index%this.items.length];
	},
	getId: function(index){
		if(this.items.length == 0) return null;
		while(index < 0){
			index += this.items.length;
		}
		return index%this.items.length;
	},
	moveLeft: function(){
		this.move(1);
	},
	moveRight: function(){
		this.move(-1);
	},
	move: function(d){
		if(this.movement != false) return;
		this.movement = {direction:d, pc: 0, speed:this.speed_rate};
		this.start = this.selected_item;
		for(var i=0;i<5;i++)this.getItem(this.selected_item-2+i).setMovement(-d);
		if(!this.moving){
			this.moving = true;
			this.animation();
		}
		//On lance l'événement ?
		if(this.onStartMovement) this.onStartMovement.call(this, this.target==null?((this.selected_item-d)<0?(this.selected_item+this.items.length-d):((this.selected_item-d)%this.items.length)):this.target);
	},
	changeIcon: function(id){
		$(".timeline img").removeClass('active');
		$("#icon"+id).addClass('active');
	},
	changeTo: function(id){
		if(id < 0 || id >= this.items.length || this.selected_item == id) return;
		this.selected_item = id;
		this.changeIcon(id);
		this.draw();
	},
	moveTo: function(id){
		if(id < 0 || id >= this.items.length || this.selected_item == id) return;
		var d1 = id-this.selected_item;
		var d2 = this.selected_item-id;
		if(d1 < 0) d1 += this.items.length;
		if(d2 < 0) d2 += this.items.length;
		this.target = id;
		if(d1 > d2) this.move(1);
		else this.move(-1);
		this.movement.speed = this.speed_rate*Math.min(d1,d2);
	},
	testCache: function(){
		try{
			this.ctx.drawImage(this.back, 0,0, this.b.w, this.b.h);
			this.ctx.getImageData(0,this.height-this.b.h,150,this.b.h);
			return true;
		}
		catch(e){
			return false;
		}
	},
	draw: function(){
		var dx = 0;
		if(this.movement != false){
			dx = this.movement.pc*this.width/100*0.4*this.movement.direction;
			//dx = Math.easeInQuad(this.movement.pc, 0, 0.4*this.width, 100)*this.movement.direction;
		}
		this.ctx.clearRect(0,0,this.width, this.canvas.height);
		if(!this.canusecache){
			var cx = -this.b.w*0.1;
			this.ctx.fillStyle = "#D8C5B2";
			this.ctx.fillRect(0, this.height-this.b.h*0.8, this.width, this.b.h*0.8);
			while(cx < this.width){
				this.ctx.drawImage(this.back, Math.round(cx), this.height-this.b.h, this.b.w, this.b.h);
				this.wheel.draw(this.ctx, Math.round(cx+this.wheel.width()*0.26), this.height-this.wheel.height(),this.movement.pc*3.6*this.movement.direction,1);
				cx += this.b.w*0.8;
			}
		}
		else{
			var cx = 0;//-this.b.w*0.1
			if(!this.back_cache1){
			this.ctx.fillStyle = "#D8C5B2";
				this.ctx.fillRect(0, this.height-this.b.h*0.8, this.b.w, this.b.h*0.8);
				this.ctx.drawImage(this.back, Math.round(cx), this.height-this.b.h, this.b.w, this.b.h);
				this.back_cache1 = this.ctx.getImageData(0,this.height-this.b.h,this.b.w,this.b.h);
			}
			else{
				this.ctx.putImageData(this.back_cache1,0,this.height-this.b.h)
			}
			this.wheel.draw(this.ctx, Math.round(cx+this.wheel.width()*0.26), this.height-this.wheel.height(),this.movement.pc*3.6*this.movement.direction,1);
			var b = this.ctx.getImageData(0,this.height-this.b.h,this.b.w*0.8,this.b.h);
			cx += Math.floor(this.b.w*0.8);
			while(cx < this.width){
				this.ctx.putImageData(b,cx,this.height-this.b.h);
			cx += Math.floor(this.b.w*0.8);
			}
		}
		
		var scale = 1;
		for(var i=0;i<5;i++){
			scale = 1
			//Transition de taille ?
			if(this.sacle_transition){
				if(this.movement == false){
					if(i == 2) scale = 1.5
				}
				else{
					if(i==2){
						if((this.target == null || this.getId(this.selected_item) == this.start) && this.movement.pc < this.sacle_transition.duration){
							scale =  1.5-this.sacle_transition.type(this.movement.pc, 0, 0.5, this.sacle_transition.duration);
						}
					}
					if((this.target == null || this.getId(this.selected_item-this.movement.direction) == this.target) && i==2-this.movement.direction){
						if(this.movement.pc > 100-this.sacle_transition.duration){
							scale =  1+this.sacle_transition.type(this.movement.pc-(100-this.sacle_transition.duration), 0, 0.5, this.sacle_transition.duration);
						}
					}
				}
			}
			this.getItem(this.selected_item-2+i).draw(this.ctx, this.width*this.positions[i]+dx,this.height-this.b.h2, scale*this.scale);
		}
	},
	
	
};