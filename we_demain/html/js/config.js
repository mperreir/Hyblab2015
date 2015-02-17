
	var larg,haut ;
	
	function taille()
	{
		// JavaScript pris sur le site: "http://www.java.scripts-fr.com"
		if (document.body)
		{
			larg = (document.body.clientWidth);
			haut = (document.body.clientHeight);
		}
	
		/*
		Ici une version DOM (le script est entre les balises <body> et </body>) qui devrait fonctionner sur tous les navigateurs.
		On commence donc par détecter la présence de l'objet body dans le DOM.
		Si il est présent, on va mettre dans 2 variables larg et haut la largeur et la hauteur de la fenêtre pris avec les propriétés clientWidth et clientHeight de l'objet body.
		*/
	
		else
		{
			larg = (window.innerWidth);
			haut = (window.innerHeight);
		}
	}
	/*
	Cette version est purement javascript et ne fonctionne pas sous IE (les propriétés innerWidth et innerHeight de l'objet window n'ayant pas été intégrée dans ce navigateur).
	Si l'objet n'existe pas, on met dans nos variables la hauteur et la largeur de la page. Seulement on utilisera ici les propriété innerWidth et innerHeight de l'objet window.
	*/
		
	//On met à jour la taille 
	taille();
	
	//window.onresize = window.location.reload();

	//document.write("Cette fenêtre fait " + larg + " de large et "+haut+" de haut");
	
	var dwidth, dheight;
	function text_taille(ratio)
	{
		var taille;
		if(larg/ratio < haut)
		{
			taille = "width*0.4:"+larg+"px; height:"+larg/ratio+"px;";
			dwidth=larg;
		 	dheight= larg/ratio;
		}
		else
		{
			taille = "width:"+haut*ratio+"px; height:"+haut+"px;";
			dwidth=haut*ratio;
			dheight= haut;
		}
		return taille;
	}
	
	function change_taille(ratio)
	{
		var queryAll = document.querySelectorAll('.ratio');
			for (var i = 0 ; i < queryAll.length ; i++) 
			{
				queryAll[i].style=text_taille(ratio);
				alert(text_taille(ratio));
			}
	}
	//document.write("Cette fenêtre fait " + larg + " de large et "+haut+" de haut");
	
	// masque l'image
	function afficheText(id) 
	{
		document.getElementById(id).style.visibility = "hidden";
	}
	function cacheText(id) 
	{
		document.getElementById(id).style.visibility = "visible";
	}
	