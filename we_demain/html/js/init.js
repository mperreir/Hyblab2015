var interval;
var a=0;
var r;
var title;
var largeurDataviz1;
var hauteurDataviz1;
var largeurDiv;
var hauteurDiv;



var o = {
	init: function(tlarg,thaut){
		this.diagram(tlarg,thaut);
		interval = setInterval(clignote, 500);
	},
	diagram: function(tlarg,thaut){
		largeurDiv=tlarg;
		hauteurDiv=thaut;
		largeurDataviz1 = tlarg*0.1;
		hauteurDataviz1 = thaut*0.258;
		r = Raphael('diagram', tlarg, thaut),
			//Rayon de l'arc inférieur
			rad = largeurDiv*0.017;
			defaultText = 'Consommation',
			speed = 250;
		
		r.customAttributes.arc = function(value, color, rad){
			var v = 3.6*value,
				alpha = v == 360 ? 359.99 : v,
				/*Angle de début des arcs*/
				position = 180,
				a = (position-alpha) * Math.PI/180,
				b = position * Math.PI/180,
				sx = largeurDataviz1 + rad * Math.cos(b),
				sy = hauteurDataviz1 - rad * Math.sin(b),
				x = largeurDataviz1 + rad * Math.cos(a),
				y = hauteurDataviz1 - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
			return { path: path, stroke: color }
		}
		
		$('.get').find('.arc').each(function(i){
			var t = $(this), 
				color = t.find('.color').val(),
				value = t.find('.percent').val(),
				text = t.find('.text').text();
			
			/*Distance entre les différents arc*/
			rad += largeurDiv*0.011;
			/*Epaisseur des arcs*/
			var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': largeurDiv*0.009});
			
			z.mouseover(function(){
				window.clearInterval(interval);
				r.circle(largeurDataviz1, hauteurDataviz1, largeurDiv*0.019).attr({ stroke: 'none', fill: '#193340' });
		
				title = r.text(largeurDataviz1, hauteurDataviz1, "").attr({
					font: '6px Arial',
					fill: '#fff'
				}).toFront();
				
				switch(t.find('.text').text())
				{
						case "Copieur":
							couleur = '#B75149';
							conso = '422';
						break;
						case "Ordinateur portable":
							couleur = '#F0B85F';
							conso = '47';
						break;
						case "Ordinateur fixe":
							couleur = '#A8D164';
							conso = '167';
						break;
						case "Imprimante":
							couleur = '#80BFCE';
							conso = '72';
						break;
						break;
						case "Vidéoprojecteur":
							couleur = '#A3866D';
							conso = '93';
						break;
						case "Ecran TV":
							couleur = '#265A75';
							conso = '274';
						break;

				}
				
				
                this.animate({ 'stroke-width': largeurDiv*0.013, opacity: .75, stroke: couleur}, 1000, 'elastic');
                if(Raphael.type != 'VML') //solves IE problem
				this.toFront();
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					this.attr({ text: text + '\n' + conso + ' kWh/an'}).animate({ opacity: 1}, speed, '<');
				});
				
            }).mouseout(function(){
            	r.circle(largeurDataviz1, hauteurDataviz1, largeurDiv*0.019).attr({ stroke: 'none', fill: '#193340' });
		
				title = r.text(largeurDataviz1, hauteurDataviz1, defaultText).attr({
					font: '6px Arial',
					fill: '#fff'
				}).toFront(); 
				this.stop().animate({ 'stroke-width': largeurDiv*0.009, opacity: 1, stroke: color }, speed*4, 'elastic');	
				
				title.stop().animate({ opacity: 0}, speed, '>', function(){
					title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
				});	
				
            });
		});
		
	},
	
	clignote: function()
	{
		var couleur;
		var mod = a % 2;
		switch(mod)
		{
			case 0:
				couleur='#F36C59';
				break;
			case 1:
			case 9:
				couleur='#FFFFFF';
				break;
						
		}
		a++;
			//cicrle(x,y,rayon du cercle central)
			r.circle(largeurDataviz1, hauteurDataviz1, largeurDiv*0.019).attr({ stroke: 'none', fill: couleur });
			//Emplacement du texte central ainsi que le defaultText
			title = r.text(largeurDataviz1, hauteurDataviz1, defaultText).attr({
				font: '6 px Arial',
				fill: '#fff'
			}).toFront(); 
			
	}
	
}