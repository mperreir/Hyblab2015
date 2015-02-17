"use strict";

function choixBubble(id){
    var r = chargeBubble(id);

    var i;
    if(id!=0){
        for(i=0; i<15; i++){
            document.getElementById('b'+i).style.opacity = "0.3";
        }
        document.getElementById('b'+id).style.opacity = "1";
    }
    else{
        for(i=0; i<15; i++){
            document.getElementById('b'+i).style.opacity = "1";
        }
    }
    
    if(id==1){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Généralistes</div>'+
                    '<div class="mainText">Plus de 26.500 communes Françaises ne sont pas couvertes par des médecins généraliste (ou omnipraticiens). Prenons comme exemple, la région Auvergne où il apparaît que dans plus de 990 communes, aucun médecin généraliste n’exerce. On remarque également qu’en Ile-de-France près de 644 villes connaissent le même problème. </div>'+
                    '<div id="barBubble"></div>';
        document.getElementById('btext').innerHTML=newdiv;
        lancerBarreBubble("Aiguilles", 4314, "St-Denis-d'Aclon", 2614, "Germ", 2325);
    }
    else if(id==12){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Masseur-kinésithérapeutes</div>'+
                    '<div class="mainText">Malgré leur nombre conséquent, environ 28.000 villes n’ont pas accès à un masseur kinésithérapeute dans leur territoire. La variation du taux de praticiens pour 100.000 habitants est assez remarquable pour cette spécialité : passant de 7 à plus de 3000 pour les trois premières villes. Ces taux s’expliquent notamment par le regroupement de ces praticiens en un seul lieu, comme pour d’autres spécialistes.</div>'+
                    '<div id="barBubble"></div>';
        document.getElementById('btext').innerHTML=newdiv;
        lancerBarreBubble("Puiseux-Pontoise", 3554, "Santa-Maria-Siché", 3478, "Villère-Tournelle", 3144);
    }
    else if(id==11){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Dentistes</div>'+
                    '<div class="mainText">Plus de 37.000 chirurgiens-dentistes sont recensés dans toute la France.  En Auvergne, la répartition de ces spécialistes sur le territoire n’est pas égale car nous remarquons 1.081 communes où aucun chirurgien-dentiste ne pratique.</div>'+
                    '<div id="barBubble"></div>';
        document.getElementById('btext').innerHTML=newdiv;
        lancerBarreBubble("Auribeau", 5333, "Franconville", 4081, "St-Pierre-de-Lamps", 2222);
    }
    else if(id==13){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Pédicure-podologues</div>'+
                    '<div class="mainText">Cette spécialité est celle qui atteint les rapports les plus hauts en moyenne sur toute la France. La région Bretagne est la seconde région la plus desservie par ces spécialistes par rapport à sa population, avec une moyenne de 11,35 pédicures/podologues pour 100.000 habitants. Si l’Ile-de-France est en tête, la ville de Clichy-sous-Bois (93) possède la plus petite moyenne parmi les villes possédant ce service.</div>'+
                    '<div id="barBubble"></div>';
        document.getElementById('btext').innerHTML=newdiv;
        lancerBarreBubble("Montsegur", 806, "Aumont", 724, "Vicherey", 628);
    }
    else if(id==10){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Radiodiagnostic et imagerie médicale</div>'+
                    '<div class="mainText">Environ 1150 villes accueillent un spécialiste dans cette discipline. La première place de la ville d’Aressy, dans les Pyrénées-Atlantiques, vient conforter la seconde place de l’Aquitaine sur le podium des régions avec 3,51 praticiens pour 100.000 habitants, en moyenne. A l’inverse, la Champagne-Ardennes abrite 0,43 praticiens pour 100.000 habitants. </div>'+
                    '<div id="barBubble"></div>';
        document.getElementById('btext').innerHTML=newdiv;
        lancerBarreBubble("Aressy", 1261, "St-Benoît-la-Forêt", 885, "Bois-Bernard", 722);
    }
    else if(id==5){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Psychiatres</div>'+
                    '<div class="mainText">Bien que Paris, et plus largement les plus grandes villes de France, concentrent le plus grand nombre de psychiatres pour une seule et même commune, ce ne sont pas ces villes qui occupent le haut du classement lorsque l’on calcule le nombre de praticiens pour 100.000 habitants. Pour autant, la capitale fait partie du millier de villes françaises accueillant au moins un psychiatre./div>'+
                    '<div id="barBubble"></div>';
        document.getElementById('btext').innerHTML=newdiv;
        lancerBarreBubble("Viersat", 974, "Pin-Balma", 663, "Guyencourt-Sur-Noye", 617);
    }
    else if(id==6){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Ophtalmologues</div>'+
                    '<div class="mainText">La région Ile-de-France obtient une moyenne la plus haute, proche d’un ophtalmologue pour 100.000 habitants. En dehors de cette région, le département des Bouches-du-Rhône (13) est le seul à dépasser ce seuil, avec 2,1 praticiens pour 100.000 habitants. La Picardie, la Franche-Comté et la Champagne-Ardennes sont les régions où la densité est la plus basse ne dépassant pas 0,1 spécialiste pour 100.000 habitants. </div>'+
                    '<div id="barBubble"></div>';
        document.getElementById('btext').innerHTML=newdiv;
        lancerBarreBubble("Cricqueboeuf", 1020, "Ispoure", 660, "St-Nicolas-de-Redon", 482);
    }
    else if(id==3){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Gynecologues</div>'+
                    '<div class="mainText">Plus de 36.500 communes Françaises subissent les déserts médicaux au niveau des médecins gynécologues. Nous remarquons qu’en région Picardie, plus de 806 communes ne sont pas couvertes par les soins de gynécologie.  Nous pouvons également voir, en région Rhône-Alpes, que dans 409 communes aucun médecin gynécologues n’est répertorié.</div>'+
                    '<div id="barBubble"></div>';
        document.getElementById('btext').innerHTML=newdiv;
        lancerBarreBubble("St-Aubin-Sur-Scie", 440, "Suzi", 324, "Ste-Colombe", 264);
    }
    else if(id==2){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Cardiologues</div>'+
                    '<div class="mainText">Seul un millier de villes bénéficie des services d’un cardiologue sur le territoire. Si l’Ile-de-France occupe la première place sur cette spécialité, nous observons des inégalités de répartition entre les communes de cette région : Evecquemont (78) obtient le plus grand nombre de cardiologues par rapport à sa population (1396 pour 100.000 habitants) alors que Puteaux (92) obtient le plus petit nombre (2,2 pour 100.000).</div>'+
                    '<div id="barBubble"></div>';
        document.getElementById('btext').innerHTML=newdiv;
        lancerBarreBubble("Evecquemont", 1395, "Bois-Bernard", 843, "Bondigout", 842);
    }
    else if(id==8){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Pédiatres</div>'+
                    '<div class="mainText">Un peu plus de 800 communes en France accueillent un ou plusieurs pédiatres. Ici encore, les régions d’Ile-de-France et Provence-Alpes-Côte-D’azur se distinguent des autres régions avec respectivement 1,77 et 1,14 praticiens pour 100.000 habitants en moyenne. Les départements du Limousin sont les moins bien desservis par ces spécialistes.</div>'+
                    '<div id="barBubble"></div>';
        document.getElementById('btext').innerHTML=newdiv;
        lancerBarreBubble("Warlus", 269, "Montfort-en-Chalos", 259, "Allonne", 127);
    }
    else if(id==4){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Gastro-entérologues</div>'+
                    '<div class="mainText">Plus de 99% des communes françaises ne sont pas desservies par des médecins spécialistes en gastro-entérologie hépatologie. Prenons comme exemple la région Provence-Alpes-Côte-D’azur et la Corse. En région PACA, nous constatons que 592 villes ne sont pas couvertes par les soins de ces spécialistes. La Corse recense plus de 300 villes sans spécialiste en gastro-entérologie.</div>'+
                    '<div id="barBubble"></div>';
        document.getElementById('btext').innerHTML=newdiv;
        lancerBarreBubble("Cricqueboeuf", 1530, "Marconne", 358, "St-Bris", 300);
    }
    else if(id==7){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Rhino-laryngologues</div>'+
                    '<div class="mainText">Nous observons que dans plus de 35.000 communes en France, aucun médecin spécialiste en rhino-laryngologie n’est répertorié. Comparons la Basse-Normandie et la Haute-Normandie où pour la Basse-Normandie, nous avons plus de 1.750 communes qui  n’ont pas accès au soins ORL et du coté de la Haute-Normandie, le chiffre est un peu moins haut car il est de 1 385 communes.</div>'+
                    '<div id="barBubble"></div>';
        document.getElementById('btext').innerHTML=newdiv;
        lancerBarreBubble("Cricqueboeuf", 510, "Colombiers", 474, "St-Denis-Lès-Sens", 438);
    }
    else if(id==9){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Pneumologues</div>'+
                    '<div class="mainText">Nous remarquons que les médecins spécialistes en pneumologie sont plus de 1.200 en France métropolitaine. Certaines régions comme la Bourgogne sont touchées par le manque de praticiens dans cette spécialité : en effet, la récence plus de 2.000 villes qui n’ont pas accès au service d’un pneumologue.</div>'+
                    '<div id="barBubble"></div>';
        document.getElementById('btext').innerHTML=newdiv;
        lancerBarreBubble("Cricqueboeuf", 510, "Valderoure", 244, "St-Aubin-sur-Scie", 176);
    }
    else if(id==14){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Audio-prothésistes</div>'+
                    '<div class="mainText">1192 médecins audioprothésistes sont présents en France.  1990 villes de Bourgogne n’ont pas de spécialiste audioprothésiste sur leur territoire. 6 des 25 praticiens exercent dans la ville de Dijon. Au niveau régional, la région PACA accueillent presqu’autant d’audioprothésistes que l’Ile-de-France.</div>'+
                    '<div id="barBubble"></div>';
        document.getElementById('btext').innerHTML=newdiv;
        lancerBarreBubble("Ecromagny", 613, "Breton-Villeurs", 429, "Altenach", 263);
    }
    else{
        var newdiv = '<div class="subTitle" style="text-align:center">214974 Praticiens en France</div>'+
                    '<div class="mainText">Les masseurs-kinésithérapeutes sont aussi nombreux que les médecins omnipraticiens (les généralistes) : presque 62.000 praticiens pour chaque catégorie. Associés aux chirurgiens-dentistes, ces 3 spécialités représentent près de trois quarts des praticiens sur le territoire français.</div>'+
                    '<div id="barBubble"></div>';
        document.getElementById('btext').innerHTML=newdiv;
        lancerBarreBubble("Medecins généralistes", 61937, "Masseur-Kiné", 61801, "Dentistes", 37105);
    }
}