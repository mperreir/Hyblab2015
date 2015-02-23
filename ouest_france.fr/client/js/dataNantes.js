"use strict";

/********************** Fonctions qui chargent les données par défaut, Nantes et Rennes ********************/
function donneesNantes(){
	var donneesNantes=
	{ CODGEO: '44109',
	  LIBGEO: 'Nantes',
	  REG: 52,
	  LIBREG: 'Pays-De-La-Loire',
	  DEP: '44',
	  P11_POP: 287845,
	  SUPERF: '65,19',
	  NB_D201: 385,
	  NB_D202: 41,
	  GYNECO: 40,
	  NB_D206: 30,
	  NB_D207: 79,
	  NB_D208: 92,
	  NB_D209: 23,
	  NB_D210: 17,
	  NB_D211: 12,
	  NB_D212: 112,
	  NB_D221: 209,
	  NB_D233: 360,
	  NB_D237: 75,
	  NB_D238: 8,
	  NB_D105: 0,
	  NB_D106: 2,
	  NB_D107: 3,
	  NB_D108: 10,
	  PSYCHO: 31,
	  NB_D110: 3,
	  NB_D111: 3,
	  NB_D112: 2,
	  NB_D301: 111,
	  NB_D302: 28,
	  NB_D306: 0 };
	
	var donneesRennes = 
	{ CODGEO: '35238',
	  LIBGEO: 'Rennes',
	  REG: 53,
	  LIBREG: 'Bretagne',
	  DEP: '35',
	  P11_POP: 208033,
	  SUPERF: '50,39',
	  NB_D201: 274,
	  NB_D202: 28,
	  GYNECO: 35,
	  NB_D206: 5,
	  NB_D207: 73,
	  NB_D208: 18,
	  NB_D209: 4,
	  NB_D210: 18,
	  NB_D211: 7,
	  NB_D212: 43,
	  NB_D221: 162,
	  NB_D233: 259,
	  NB_D237: 42,
	  NB_D238: 4};

	
	   var tempPraticienNantes = [];
	    
	    //clone data array
	    tempPraticienNantes=JSON.parse(JSON.stringify(donneesNantes));
		delete tempPraticienNantes["CODGEO"];
		delete tempPraticienNantes["LIBGEO"];
		delete tempPraticienNantes["REG"];
		delete tempPraticienNantes["LIBREG"];
		delete tempPraticienNantes["DEP"];
		delete tempPraticienNantes["P11_POP"];
		delete tempPraticienNantes["SUPERF"];
	  
	  	setdonneesVille(tempPraticienNantes);
	  	
	    delete tempPraticienNantes["NB_D105"];
	    delete tempPraticienNantes["NB_D106"];
	    delete tempPraticienNantes["NB_D107"];
	    delete tempPraticienNantes["NB_D108"];
	    delete tempPraticienNantes["PSYCHO"];
	    delete tempPraticienNantes["NB_D110"];
	    delete tempPraticienNantes["NB_D111"];
	    delete tempPraticienNantes["NB_D112"];
	    delete tempPraticienNantes["NB_D301"];
	    delete tempPraticienNantes["NB_D302"];
	    delete tempPraticienNantes["NB_D306"];
	   
	   
	    
	    var tuplesPraticienNantes = [];
	    
	    
	    /****** TRI ASSOCIATIF PRATICIENS*****/
	    for (var key in tempPraticienNantes) tuplesPraticienNantes.push([key, tempPraticienNantes[key]]);
	    
	    tuplesPraticienNantes.sort(function(a, b) {
	        a = a[1];
	        b = b[1];
	    
	        return a > b ? -1 : (a < b ? 1 : 0);
	    });
	    
	     setDonneesSpecialiteVille(tuplesPraticienNantes,tuplesPraticienNantes[0][1]);
	     lancerBarre();
	     
	     
	var tempEtablissementNantes = [];   
        tempEtablissementNantes= JSON.parse(JSON.stringify(donneesNantes));
        delete tempEtablissementNantes["CODGEO"];
	delete tempEtablissementNantes["LIBGEO"];
	delete tempEtablissementNantes["REG"];
	delete tempEtablissementNantes["LIBREG"];
	delete tempEtablissementNantes["DEP"];
	delete tempEtablissementNantes["P11_POP"];
	delete tempEtablissementNantes["SUPERF"];
		
        delete tempEtablissementNantes["NB_D201"];
        delete tempEtablissementNantes["NB_D202"];
        delete tempEtablissementNantes["GYNECO"];
        delete tempEtablissementNantes["NB_D206"];
        delete tempEtablissementNantes["NB_D207"];
        delete tempEtablissementNantes["NB_D208"];
        delete tempEtablissementNantes["NB_D209"];
        delete tempEtablissementNantes["NB_D210"];
        delete tempEtablissementNantes["NB_D211"];
        delete tempEtablissementNantes["NB_D221"];
        delete tempEtablissementNantes["NB_D212"];
        delete tempEtablissementNantes["NB_D233"];
        delete tempEtablissementNantes["NB_D237"];
        delete tempEtablissementNantes["NB_D238"];
        
        
        var tuplesEtablissementNantes = [];
        for (var cle in tempEtablissementNantes) tuplesEtablissementNantes.push([cle, tempEtablissementNantes[cle]]);
            
        tuplesEtablissementNantes.sort(function(c, d) {
            return d[1] - c[1];
        });
	
		//setmaxEtablissement(tuplesEtablissementNantes[0][1]);
        setDonneesEtablissementVille(tuplesEtablissementNantes,tuplesEtablissementNantes[0][1]);
        lancerBarreEtab();
        
       
                                   
        var tempPraticienRennes = [];
        tempPraticienRennes=JSON.parse(JSON.stringify(donneesRennes));
        delete tempPraticienRennes["CODGEO"];
	delete tempPraticienRennes["LIBGEO"];
	delete tempPraticienRennes["REG"];
	delete tempPraticienRennes["LIBREG"];
	delete tempPraticienRennes["DEP"];
	delete tempPraticienRennes["P11_POP"];
	delete tempPraticienRennes["SUPERF"];

        setDonneesVille1(tempPraticienNantes);
        setDonneesVille2(tempPraticienRennes);
        genererBarVersus();
        
        document.getElementById('nombreHabitants2').innerHTML=donneesRennes["P11_POP"];
        document.getElementById('superficieCity2').innerHTML= donneesRennes["SUPERF"]+' km2';
        document.getElementById('VilleNomChx1Pop').innerHTML=donneesNantes["P11_POP"];
        document.getElementById('VilleNomChx1Sup').innerHTML= donneesNantes["SUPERF"]+' km2';
        
         document.getElementById('VilleNomChx1').innerHTML="Nantes";
         document.getElementById('VilleNomChx2').innerHTML="Rennes";

}