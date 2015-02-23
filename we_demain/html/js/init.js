var r;
var title;
var defaultText;



var o = {

	/*tlarg et thaut indiquent la taille en largeur et en hauteur de l'image (et non de la fenêtre).*/
	 
	init: function(tlarg,thaut){
		this.diagram(tlarg,thaut);
		
		/*On dessine le pictogramme au centre de la dataviz avec le texte "Consommation". Ici l'image ne sera qu'un cercle blanc.*/
		o.dessine("img/picto_blanc.svg", defaultText, tlarg, thaut);
	},
	
	diagram: function(tlarg,thaut){
		var rad, speed;
		
		/*Définition de la largeur et de la hauteur de la dataviz*/
		var largeurDataviz1 = tlarg*0.1;
		var hauteurDataviz1 = thaut*0.258;
		
		/*Création d'un élément de la librairie Raphael*/
		r = Raphael('diagram', tlarg, thaut),
			/*Rayon du plus petit arc*/
			rad = tlarg*0.027;
			/*Texte par défaut, celui qui s'affichera dans le rond central lorsque l'on ne passera pas la souris sur un arc.*/
			defaultText = 'Consommation',
			/* Vitesse d'affichage du texte*/
			speed = 250;
		
		/*Définition des arcs, positionnement et courbure*/
		r.customAttributes.arc = function(value, color, rad){
			var alpha,a,b,sx,sy,x,y,v = 3.6*value,
			alpha = v == 360 ? 359.99 : v,
			/*Angle de début des arcs*/
			position = 180,
			a = (position-alpha) * Math.PI/180,
			b = position * Math.PI/180,
			sx = largeurDataviz1 + rad * Math.cos(b),
			sy = hauteurDataviz1 - rad * Math.sin(b),
			x = largeurDataviz1 + rad * Math.cos(a),
			y = hauteurDataviz1 - rad * Math.sin(a),
			//Trace les courbes entre les différents points.
			path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
			return { path: path, stroke: color }
		}
		
		/*Pour chaque arc, on récupère la couleur, le pourcentage et le texte définis dans le fichier HTML*/
		$('.get').find('.arc').each(function(i){
			var t = $(this), 
				color = t.find('.color').val(),
				value = t.find('.percent').val(),
				text = t.find('.text').text();
			
			/*Distance entre les différents arcs*/
			rad += tlarg*0.010;
			
			/*stroke-width indique l'epaisseur des arcs*/
			var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': tlarg*0.007});
			
			/*Evènement lorsque la souris passe au dessus d'un arc*/
			z.mouseover(
				function(){
					var couleur, conso, image;

					/*Définition des couleurs, des pictogrammes et des textes associés à chaque arc, selon l'attribut text du fichier HTML*/
					switch(t.find('.text').text())
					{
							case "Copieur":
								couleur = '#B75149';
								conso = '422';
								image = "img/picto_imprimante.svg"
								break;
							
							case "Ordinateur portable":
								couleur = '#F0B85F';
								conso = '47';
								image = "img/picto_ordinateurportable.svg"
								break;
							
							case "Ordinateur fixe":
								couleur = '#A8D164';
								conso = '167';
								image = "img/picto_ordinateur.svg"
								break;
							
							case "Imprimante":
								couleur = '#80BFCE';
								conso = '72';
								image = "img/picto_imprimante.svg"
								break;
							
							case "Vidéoprojecteur":
								couleur = '#A3866D';
								conso = '93';
								image = "img/picto_retroprojecteur.svg"
								break;
							
							case "Ecran TV":
								couleur = '#265A75';
								conso = '274';
								image = "img/picto_ecran.svg"
								break;
	
					}
					
					/*On affiche le pictogramme voulu*/
					o.dessine(image,"", tlarg, thaut);
					
					/*Lorsque l'on passe sur un arc, celui-ci s'anime, change de couleur et grossit.*/
	                this.animate({ 'stroke-width': tlarg*0.010, opacity: .75, stroke: couleur}, 1000, 'elastic');
	                
	               /*Permet de résoudre des problèmes d'IE*/
	                if(Raphael.type != 'VML')
					this.toFront();

					/*Affichage du texte lié à l'arc survolé*/
					title.stop().animate({ opacity: 0 }, speed, '>', function(){
						this.attr({ text: text + '\n' + conso + ' kWh/an'}).animate({ opacity: 1}, speed, '<');
				});
				
				/*Evènement lorsque la souris ne passe plus au dessus d'un arc*/
            }).mouseout(
            	function(){
            		
            		// On redessine à nouveau le cercle central et on redéfinit les caractéristiques du texte qui y sera affiché.
            		o.dessine("img/picto_blanc.svg", "", tlarg, thaut);

					//On arrête l'animation des arcs
					this.stop().animate({ 'stroke-width': tlarg*0.007, opacity: 1, stroke: color }, speed*4, 'elastic');	
					
					//On réaffiche le texte par défault
					title.stop().animate({ opacity: 0}, speed, '>', function(){
						title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
					});	
            });
		});
		
	},
	
	
	dessine: function(image, texte, tlarg, thaut)
	{
		r.rect(tlarg*0.07, thaut*0.32, tlarg*0.06, thaut*0.045).attr({stroke:"none", fill:"#FFF5EB"});
		// on crée un rectangle qui sera positionné dans le <svg> avec un point de départ de coordonnées x=tlarg*0.07 et y=thaut*0.32 ainsi qu'une largeur de tlarg*0.06 et une hauteur de thaut*0.045
	
		//Emplacement du texte central
		title = r.text(tlarg*0.104, thaut*0.335, texte).attr({
			font: '8px Arial',
			fill: '#000000'
		}).toFront(); 
		
		r.image(image, tlarg*0.071, thaut*0.19, tlarg*0.068, thaut*0.134);
		// on insère une image ayant pour url image à partir du point de coordonnées x = tlarg*0.071 et y = thaut*0.19 et ayant pour largeur tlarg*0.068 et pour hauteur thaut*0.134
	
	}
	
}