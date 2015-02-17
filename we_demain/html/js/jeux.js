//Fonction pour changer l'imge lié à la date
		function calculSomme() 
		{ 
			//on déclare la variable servant pour le resultat final
			var resultat;
			//Tableau utile pour la sommation de chaque appareil


			
			var multiCO2 = 0.083;
			var multiEuro = 0.1;
			
			var imgJeux = document.querySelectorAll('.jeux');//On récupère les images du jeux
			var imgBJeux = document.querySelectorAll('.bjeux');//On récupère les boutons du jeux  
			resultat = 0;
			for (var i = 0 ; i < imgJeux.length ; i++) 
			{
				if(imgJeux[i].value==="off")
				{
				
						for (var j = 0 ; j < imgBJeux.length ; j++) 
						{
							if(imgBJeux[j].value=="off")
							{
								if(imgBJeux[j].id=="midi")
								{
									resultat= resultat + donneValue(imgJeux[i].id,ConsoM);	
								}
								else if(imgBJeux[j].id=="nuit")
								{
									resultat= resultat + donneValue(imgJeux[i].id,ConsoN);		
								}
								else if(imgBJeux[j].id=="week_end")
								{
									resultat= resultat + donneValue(imgJeux[i].id,ConsoW);	
								}
							}
						}
				}
			}
			var resultatW, resultatC, resultatE;
			var reg=new RegExp("(,)", "g");
			
			resultatW = numeral(resultat).format('0,0');
			resultatW = resultatW.replace(reg," ");

			resultatC = numeral(resultat*multiCO2).format('0,0');
			resultatC = resultatC.replace(reg," ")
			
			resultatE = numeral(resultat*multiEuro).format('0,0');
			resultatE = resultatE.replace(reg," ")
			

		    $('#resultatW').text(resultatW+"  kWh");
			//$('#resultatW').text(resultat);
			$('#resultatC').text(resultatC+"  kg CO2");
			$('#resultatE').text(resultatE+"  euros");
			//On affiche le résultat
		}
		function donneValue(id,Conso)
		{
			if(id=="imprimante")
				return (document.getElementById("nbimprimante").value*Conso["imprimante"] + document.getElementById("nbcopieur").value * Conso["copieur"]);
			else
				return document.getElementById("nb"+id).value*Conso[id];
		}
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
		function initialiseJeux()
		{
			//alert("initialisation");
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