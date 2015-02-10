/**
	Préchargement des ressoruces
*/
"use strict";

function ResourceLoader(){
	this.objects = {};
	this.total = 0;
	this.loaded = 0;
}

ResourceLoader.prototype = {
	load: function(name, url, options){
		this.total++;
		var img = new Image();
		var self = this;
		img.onload = function(){
			if(options){
				if(options.width) img.width = options.width;
				if(options.height) img.height = options.height;
			}
			self.loaded++;
			if(self.loaded >= self.total && self.onLoad){
				self.onLoad.call(self);
			}
		}
		img.src = url;
		this.objects[name] = img;	
	},
	get: function(name){
		return this.objects[name];
	}
};