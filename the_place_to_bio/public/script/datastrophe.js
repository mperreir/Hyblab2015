/**
	Module principale de gestion de la DataVisualisation pour ThePlaceToBio

*/
"use strict";
function DataStrophe(div){
	
	this.options = {
		arrowBg:"#D8C5B2",
		arrowBgHover:"#101010"
	};
	
	this.slide1 = {};
	this.tooltips = [];
	this.current_slide = 1;
	
	this.dataset = null;
	
	this.selected = 10;
	
	
	this.fonts = [
		{selector:".visualisations #pc_prix", pc:120},
		{selector:".vente_bio_non_bio .pc", pc:300}
	];
	
	//Div principal de la visualisation
	this.main_div = div;
	var self = this;
	//Ressources
	this.resources = new ResourceLoader();
	this.resources.onLoad = function(){ 
		$.ajax({
			url:"/data.json",
			dataType:"text",
			success: function(e){
				eval("self.dataset = "+e);
				self.init();
				if(self.onLoad) self.onLoad.call();
			}
		})
	};
	
	this.resources.load("test","images/tapis.png",{width:300,height:150});
	this.resources.load("bouteille1","images/bouteille1.png",{width:36,height:130});
	this.resources.load("bouteille2","images/bouteille2.png",{width:36,height:130});
	this.resources.load("bouteille3","images/bouteille3.png",{width:36,height:130});
	this.resources.load("sceptre","images/sceptre.png",{width:41,height:135});
	this.resources.load("miel","images/miel.png",{width:107,height:108});
	this.resources.load("pomme1","images/pomme1.png",{width:107,height:100});
	this.resources.load("pomme2","images/pomme2.png",{width:95,height:100});
	this.resources.load("pomme3","images/pomme3.png",{width:81,height:100});
	this.resources.load("eddy","images/malou.png");
	this.resources.load("wheel","images/wheel.png",{width:49,height:49});
	
	
	
	var r = 0.5;
	this.resources.load("biscuit1","images/tapis/biscuit1.png",{width:271*r,height:90*r});
	this.resources.load("biscuit2","images/tapis/biscuit2.png",{width:240*r,height:134*r});
	this.resources.load("biscuit3","images/tapis/biscuit3.png",{width:127*0.6,height:176*0.6});
	
	this.resources.load("oeuf1","images/tapis/oeuf1.png",{width:124*0.8,height:80*0.8});
	this.resources.load("oeuf2","images/tapis/oeuf2.png",{width:80*0.8,height:124*0.8});
	
	this.resources.load("orange","images/tapis/orange.png",{width:42,height:120});
	
	
	this.resources.load("lait","images/tapis/lait.png",{width:48,height:120});
	
	
	this.resources.load("viande","images/tapis/viande.png",{width:154,height:100});
	
	
	this.resources.load("surgele1","images/tapis/surgele1.png",{width:93,height:120});
	this.resources.load("surgele2","images/tapis/surgele2.png",{width:100,height:73});
	
	this.resources.load("france","images/tapis/france.png",{width:120,height:120});
	
	this.resources.load("legumes","images/tapis/legumes.png",{width:127,height:120});
	
	
	this.resources.load("r_arrow", "images/r_arrow.svg");
	this.resources.load("l_arrow", "images/l_arrow.svg");
	this.resources.load("jauge_france", "images/jauge_france.svg");
	this.resources.load("jauge_bio", "images/jauge_bio.svg");
	this.resources.load("jauge_patriote", "images/cartepatriote.svg");
	
	
	//Listeners
	var self = this;
	
	$(window).resize(function(){self.resize();});
	this.resize();
}

DataStrophe.prototype = {
	init: function(){
		//Initialisation des différents éléments de chaque slide
		var self = this;
		this.cs3 = true;
		this.cs2 = true;
		//Flèches tapis
		this.slide1.r_arrow_svg = Snap("#r_arrow");
		Snap.load(this.res("r_arrow").src, function(f){
			self.slide1.r_arrow_svg.append(f);
		});
		$("#r_arrow").hover(function(){
			self.slide1.r_arrow_svg.select("path").animate({fill:self.options.arrowBgHover},200);
		}, function(){
			self.slide1.r_arrow_svg.select("path").animate({fill:self.options.arrowBg},200);
		});
		$("#r_arrow").click(function(){ self.rightConveyor()});
		this.slide1.l_arrow_svg = Snap("#l_arrow");
		Snap.load(this.res("l_arrow").src, function(f){
			self.slide1.l_arrow_svg.append(f);
		});
		$("#l_arrow").hover(function(){
			self.slide1.l_arrow_svg.select("path").animate({fill:self.options.arrowBgHover},200);
		}, function(){
			self.slide1.l_arrow_svg.select("path").animate({fill:self.options.arrowBg},200);
		})
		$("#l_arrow").click(function(){ self.leftConveyor()});
		
		
		//On lance le tapis
		this.slide1.conveyorbelt = new ConveyorBelt(this, $("#coveyorbelt")[0]);
		
		this.map_data = {};
		this.first = true;
		//On lance fullpage
		this.fullpage = $('#fullpage').fullpage({
		 anchors: ['homepage','visualisations','production'],
		 	slideTo: function(e){ self.slideDirection(e)},
			onSlideLeft: function(){ self.leftConveyor()},
			onSlideRight: function(){ self.rightConveyor()},
			afterLoad: function(anchorLink, index){
				//self.slideChanged(index);
			},
			afterRender: function(){ self.slide1.conveyorbelt.resize();
				
				if(self.first){
					self.first = false;
					$("#main_page").fadeIn(function(){$(".loader").hide();});
				}
			},
			onLeave: function(index, nextIndex, direction){
				self.changeIcon(nextIndex)
				self.slideChanged(nextIndex);
			}
		});
		
		
		this.initIcons();
		
		this.slide1.slider_distrib = new Slider(this, $("#slider1")[0], {onChange: function(id){ self.updateDistrib(id) }});
		this.slide1.slider_import = new Slider(this, $("#slider2")[0], {onChange: function(id){ self.updateImport(id)}});
		this.slide1.slider_bio = new Slider(this, $("#slider3")[0], {onChange: function(id){ self.updateBIO(id)}});
		this.slide1.distrib = [
			new Counter2(this, $("#pc_supermarche")[0], {suffix:"%"}),
			new Counter2(this, $("#pc_artisan")[0], {suffix:"%"}),
			new Counter2(this, $("#pc_magasin")[0], {suffix:"%"}),
			new Counter2(this, $("#pc_vente")[0], {suffix:"%"})
		]
		this.slide1.france = new Jauge(this, $("#jauge_france")[0], {image:this.res("jauge_france"), back:this.res("jauge_patriote"), min:0.1, max:0.9});
		this.slide1.france_counter = new Counter2(this, $("#counter_france")[0], {suffix:"%"});
		
		this.slide1.bio = new Jauge(this, $("#jauge_bio")[0], {image:this.res("jauge_bio"), min:0.1, max:0.85, pc_max:35});
		this.slide1.bio_counter = new Counter2(this, $("#counter_bio")[0], {suffix:"%"});
		
		
		
		this.slide1.conveyorbelt.onStartMovement = function(id){
			self.selected = id;
			self.updateDataSet();
		}
		
		this.slide1.prix = new Counter2(this, $("#pc_prix")[0],{suffix:"%", decimal: false});
		this.slide1.prix_ok = true;
		
		this.slidemap = {};
		
		this.slidemap.map = new SlideMap(this);
		
		this.resize();
		$.fn.fullpage.reBuild();
		this.updateDataSet();
	},
	slideDirection: function(d){
		var id = this.current_slide;
		if(d == 'top') id--;
		else id++;
		
		if(id == 0) return false;
		if(id > 3) return false;
		if(id == 2 && this.current_slide == 3 && this.cs2 == false) id = 1;
		if(id == 3 && (this.cs3 == false || this.cs2 == false)) return false;
		if(id == 2 && this.cs2 == false) id = 3;
		this.changeSlide(id);
	},
	resize: function(){
		var i;
		for(i in this.fonts){
			var font = this.fonts[i];
			if(font) $(font.selector).css("font-size", Math.round(font.pc*this.width()/1080)+"%");
		}
	},
	toggleSections:function(s2, s3){
		var changed = true;
		if(s2){
			if(!this.cs2){
				this.cs2 = true;
				$("#section2").show();
				$("#section2").addClass("fp-section");
				$("#bouton_top_distribution").fadeIn();
				$("#menu2").fadeIn();
				changed = true;
			}
		}
		else{
			if(this.cs2){
				this.cs2 = false;
				$("#section2").hide();
				$("#section2").removeClass("fp-section");
				$("#section2").removeClass("active");
				$("#bouton_top_distribution").fadeOut();
				if(this.current_slide == 2){
					this.changeSlide(1);
					this.tooltips.hide();
				}
				$("#menu2").fadeOut();
				changed = true;
			}
		}
		if(s3){
			if(!this.cs3){
				this.cs3 = true;
				$("#section3").show();
				$("#section3").addClass("fp-section");
				$("#bouton_top_production").fadeIn();
				$("#menu3").fadeIn();
				changed = true;
			}
		}
		else{
			if(this.cs3){
				this.cs3 = false;
				$("#section3").hide();
				$("#section3").removeClass("fp-section");
				$("#section3").removeClass("active");
				if(this.current_slide == 3){
					this.tooltips.hide();
					this.changeSlide(1);
				}
				$("#bouton_top_production").fadeOut();
				$("#menu3").fadeOut();
				changed = true;
			}
		}
		if(changed){
			$.fn.fullpage.reBuild();
		}
		
	},
	changeSlide: function(id){
		if(this.cs2 == false && id == 3) id = 2;
		$.fn.fullpage.moveTo(id);
	},
	changeIcon: function(id){
		if(!this.cs2 && id==2) id = 3;
		$("#menu div").removeClass("active");
		$("#menu"+id).addClass("active");
	},
	width: function(){
		return $(window).width();
	},
	height: function(){
		return $(window).height();
	},
	res: function(res_id){
		return this.resources.get(res_id);
	},
	slideChanged: function(id){
		if(this.cs2 == false && id == 2) id = 3;
		this.current_slide = id;
		if(this.current_slide == 1){
			this.tooltips.hide();
		}
		else{
			this.tooltips.show();
		}
	},
	leftConveyor: function(){
		if(this.current_slide==1) this.slide1.conveyorbelt.moveLeft();
	},
	rightConveyor: function(){
		if(this.current_slide==1) this.slide1.conveyorbelt.moveRight();
	},
	changeProduct: function(id){
		if(this.current_slide != 1){
			this.slide1.conveyorbelt.changeTo(id);
			this.selected = this.slide1.conveyorbelt.getId(id);
			this.updateDataSet();
		}
		else this.slide1.conveyorbelt.moveTo(id);
	},
	
	
	updateDataSet: function(){
		var data = this.dataset[this.selected];
		var self = this;
		
		$("#title").fadeOut(500,function(){ $(this).html(data.name); $(this).fadeIn(); });
		$("#le_saviez_vous").fadeOut(500,function(){ $(this).html(data.le_saviez_vous); $(this).fadeIn(); });
	
			
		if(data.prix){
			this.slide1.prix.setValue(data.prix);
			if(!this.slide1.prix_ok){
				this.slide1.prix_ok = true;
				$("#prix").fadeIn();
			}
		}
		else{
			if(this.slide1.prix_ok){
				$("#prix").fadeOut();
				this.slide1.prix_ok = false;
			}
		}
		
		var s2 = false;
		if(data.distribution){
			s2 = true;
			this.slide1.slider_distrib.setValues(data.distribution.annees);
			this.slide1.slider_distrib.setValue(data.distribution.annees.length-1);
			this.setDistrib(data.distribution.annees.length-1);
			$("#text_distrib").fadeOut(function(){$(this).html(data.distribution.texte_distri); $(this).fadeIn()});
			
			this.slide1.slider_import.setValues(data.importation.annees);
			this.slide1.slider_import.setValue(data.importation.annees.length-1);
			this.setImport(data.importation.annees.length-1);
			$("#text_import").fadeOut(function(){$(this).html(data.importation.texte_import); $(this).fadeIn()});
			
			this.slide1.slider_bio.setValues(data.bio.annees);
			this.slide1.slider_bio.setValue(data.bio.annees.length-1);
			this.setBIO(data.bio.annees.length-1);
			$("#text_marche").fadeOut(function(){$(this).html(data.bio.texte_partM); $(this).fadeIn()});
		}
		
		var s3 = false;
		if(data.production){
			s3 = true;
			$("#texte_region_selectionnee").fadeOut(function(){$(this).html(data.texte_prod); $(this).fadeIn()});
			if(this.map_data[this.selected]) this.slidemap.map.setData({values:this.map_data[this.selected], data:data.production} );
			else{
				var s = this.selected;
				$.ajax({
					url:"/json/"+data.production.fichier,
					dataType:'text',
					success:function(e){
						var f;
						try{
							eval("f="+e);
							self.map_data[s] = f;
							self.slidemap.map.setData({values:f, data:data.production});
						}
						catch(e){}
					}
				});
			}
			//
		}
		this.toggleSections(s2, s3);
		this.tooltips.change($("#icon"+this.selected)[0], this.dataset[this.selected].name);
		
	},
	updateDistrib: function(id){
		if(!this.updateYear(this.dataset[this.selected].distribution.annees[id])) this.setDistrib(id);
	},
	updateImport: function(id){
		if(!this.updateYear(this.dataset[this.selected].importation.annees[id])) this.setImport(id);
	},
	updateBIO: function(id){
		if(!this.updateYear(this.dataset[this.selected].bio.annees[id])) this.setBIO(id);
	},
	updateYear: function(year){
		//On cherche la meme année partout
		var k = ['distribution','importation','bio'];
		var ids = [];
		for(var i in k){
			var annees = this.dataset[this.selected][k[i]].annees;
			var index = -1;
			for(var j in annees){
				if(annees[j] == year){
					index = j;
					break;
				}
			}
			if(index == -1) return false;
			ids.push(index);
		}
		//Si on a trouvé l'année partout on met à jour
		this.setDistrib(ids[0]);
		this.slide1.slider_distrib.setValue(ids[0]);
		this.setImport(ids[1]);
		this.slide1.slider_import.setValue(ids[1]);
		this.setBIO(ids[2]);
		this.slide1.slider_bio.setValue(ids[2]);
		return true;
	},
	setDistrib:function(id){
		var data = this.dataset[this.selected];
		for(var i=0;i<4;i++) this.slide1.distrib[i].setValue(data.distribution.values[i][id]);
		
	},
	setImport: function(id){
		var data = this.dataset[this.selected];
		this.slide1.france.setValue(data.importation.values[id]);
		this.slide1.france_counter.setValue(data.importation.values[id]);
	},
	setBIO: function(id){
		var data = this.dataset[this.selected];
		this.slide1.bio.setValue(data.bio.values[id]);
		this.slide1.bio_counter.setValue(data.bio.values[id]);
	},
	initIcons: function(){
		this.tooltips = new Tooltip(this, $("#tooltips")[0]);
	}
};