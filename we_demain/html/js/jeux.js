
		//Fonction utile pour calculer le resultat du jeux et pour l'afficher
		function calculSomme() 
		{ 
			//on déclare la variable servant pour le resultat final
			var resultat;
			//Multiplicateur pour le C02
			var multiCO2 = 0.083;
			//Multiplicateur pour les euros
			var multiEuro = 0.1;
			
			var imgJeux = document.querySelectorAll('.jeux');//On récupère les images du jeux
			var imgBJeux = document.querySelectorAll('.bjeux');//On récupère les boutons du jeux  
			resultat = 0;
			//On Calcul le résultat 
			for (var i = 0 ; i < imgJeux.length ; i++) 
			{
				if(imgJeux[i].value==="off")
				{
				
					for (var j = 0 ; j < imgBJeux.length ; j++) 
					{
						if(imgBJeux[j].value=="off")
						{
							if(imgBJeux[j].id=="midi")
								resultat= resultat + donneValue(imgJeux[i].id,ConsoM);	
							else if(imgBJeux[j].id=="nuit")
								resultat= resultat + donneValue(imgJeux[i].id,ConsoN);		
							else if(imgBJeux[j].id=="week_end")
								resultat= resultat + donneValue(imgJeux[i].id,ConsoW);	
						}
					}
				}
			}
			//On transforme le résultat
			var reg=new RegExp("(,)", "g");
			
			resultatW = numeral(resultat).format('0,0');
			resultatW = resultatW.replace(reg," ");

			resultatC = numeral(resultat*multiCO2).format('0,0');
			resultatC = resultatC.replace(reg," ")
			
			resultatE = numeral(resultat*multiEuro).format('0,0');
			resultatE = resultatE.replace(reg," ")

			//On affiche le résultat
		    $('#resultatW').text(resultatW+"  kWh");
			$('#resultatC').text(resultatC+"  kg CO2");
			$('#resultatE').text(resultatE+"  euros");
		}
	
		//Fonction utilisé pour donner la consomation d'un élément donné à une période donné, exemple pc fixe la nuit
		function donneValue(id,Conso)
		{
			if(id=="imprimante")
				return (document.getElementById("nbimprimante").value*Conso["imprimante"] + document.getElementById("nbcopieur").value * Conso["copieur"]);
			else
				return document.getElementById("nb"+id).value*Conso[id];
		}
		
		//Fonction pour changer l'état des période "midi,nuit,eek-end"
		function changePeriode(elem_source)
		{
			if(elem_source.value==="on")
			{
				elem_source.value="off";
				elem_source.src="img/"+elem_source.id+"_off.svg";
			}
			else
			{
				elem_source.value="on";
				elem_source.src="img/"+elem_source.id+"_on.svg";
			}
			calculSomme();
		}
		
		//Fonction utile pour l'initialisation du jeux les images
		function initialiseJeux()
		{
			//Initialisation des images
			var imgJeux = document.querySelectorAll('.jeux');//On récupère les images du jeux 
			for (var i = 0 ; i < imgJeux.length ; i++) 
			{
				imgJeux[i].value="on";
			}
			//Initialisation des boutons
			var imgBJeux = document.querySelectorAll('.bjeux');//On récupère les boutons du jeux 
			for (var j = 0 ; j < imgBJeux.length ; j++) 
			{
				if(imgBJeux[j].id=="jour" || imgBJeux[j].id=="midi" )
					imgBJeux[j].value="on";
				else
					imgBJeux[j].value="off";
			}
		}
		
		//Fonction pour changer l'état des images, les faire passer de on à off et lancer le calcul du resultat
		function changeEtat(elem_source) 
		{ 
		    //alert("id : "+elem_source.id+" value : "+elem_source.value+" src : "+elem_source.src);
			if(elem_source.value==="on")
			{
				elem_source.value="off";
				elem_source.src="img/"+elem_source.id+"_off.svg";
			}
			else
			{
				elem_source.value="on";
				elem_source.src="img/"+elem_source.id+"_on.svg";
			}
			calculSomme();
		}
		
		