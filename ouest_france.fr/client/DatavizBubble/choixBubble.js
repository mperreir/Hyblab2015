"use strict";

function choixBubble(id, idClassement){
    var r = chargeBubble(id);
    var newdiv, donnees;
    var row =   '<div class="row">'+
                    '<div class="col-xs-4 col-lg-3 mainText">Tailles des villes : </div>'+
                    '<div class="col-xs-4 col-lg-3"><img id="petites" src="/imgs/petites.svg" onclick="javascript:choixBubble('+id+',2)" title="Villes de moins de 999 habitants"></img></div>'+
                    '<div class="col-xs-4 col-lg-3"><img id="moyennes" src="/imgs/moyennes.svg" onclick="javascript:choixBubble('+id+',1)" title="Villes de 1000 à 49999 habitants"></img></div>'+
                    '<div class="col-xs-4 col-lg-3"><img id="grandes" src="/imgs/grandes.svg" onclick="javascript:choixBubble('+id+',0)" title="Villes de plus de 50000 habitants"></img></div>'+
                '</div>';

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
        newdiv = '<div class="subTitle" style="text-align:center">'+r+' Généralistes</div>'+
                    '<div class="mainText" style="margin-top:3vh">Plus de 26500 communes Françaises ne sont pas couvertes par des médecins généraliste (ou omnipraticiens). Prenons comme exemple, la région Auvergne où il apparaît que dans plus de 990 communes, aucun médecin généraliste n’exerce. On remarque également qu’en Ile-de-France près de 644 villes connaissent le même problème. </div>'+
                    '<div id="barBubble" style="margin-top:3vh"></div>'+
                    row;
        document.getElementById('btext').innerHTML=newdiv;
    
        if(idClassement==0) lancerBarreBubble("Annecy (74)", 117, 51012 , 229, "Cannes (06)", 135, 72607, 185, "Vannes (56)", 93, 52784, 176);
        else if(idClassement==1) lancerBarreBubble("Chevannes (91)", 27, 1686 , 1601, "Neufchâtel-en-Bray (76)", 44, 4836, 909, "Bletterans (39)", 12, 1415, 848);
        else lancerBarreBubble("Aiguilles (05)", 17, 394 , 4314, "Saint-Denis-d’Aclon (76)", 4, 153, 2614, "Germ (65)", 1, 43, 2325);
    }
    else if(id==12){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Masseur-kinésithérapeutes</div>'+
                    '<div class="mainText" style="margin-top:3vh">Malgré leur nombre conséquent, environ 28000 villes n’ont pas accès à un masseur kinésithérapeute dans leur territoire. La variation du taux de praticiens pour 100000 habitants est assez remarquable pour cette spécialité : passant de 7 à plus de 3000 pour les trois premières villes. Ces taux s’expliquent notamment par le regroupement de ces praticiens en un seul lieu, comme pour d’autres spécialistes.</div>'+
                    '<div id="barBubble" style="margin-top:3vh"></div>'+
                    row;
        document.getElementById('btext').innerHTML=newdiv;
        
        if(idClassement==0) lancerBarreBubble("Annecy (74)", 127, 51012, 249, "Narbonne (11)", 118, 51546, 228, "Hyères (83)", 124, 54527, 227);
        else if(idClassement==1) lancerBarreBubble("Saint-Bon-Tarentaise (73)", 26, 1981, 1312, "Val-d’Isère (73)", 20, 1602, 1248, "Saint-Jean-de-Losne (21)", 9, 1148, 784);
        else lancerBarreBubble("Puiseux-Pontoise (95)", 15, 422, 3554, "Sainta-Maria-Siché (2A)", 16, 460, 3478, "Saint-Pierre-de-Lamps (36)", 1, 45, 2222);

    }
    else if(id==11){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Dentistes</div>'+
                    '<div class="mainText" style="margin-top:3vh">Plus de 37000 chirurgiens-dentistes sont recensés dans toute la France.  En Auvergne, la répartition de ces spécialistes sur le territoire n’est pas égale car nous remarquons 1081 communes où aucun chirurgien-dentiste ne pratique.</div>'+
                    '<div id="barBubble" style="margin-top:3vh"></div>'+
                    row;
        document.getElementById('btext').innerHTML=newdiv;
        
        if(idClassement==0) lancerBarreBubble("Annecy (74)", 88, 51012, 172, "Cannes (06)", 97, 72607, 133, "Nice (06)", 436, 344064, 126);
        else if(idClassement==1) lancerBarreBubble("Saint-Contest (14)", 13, 2497, 520, "Betz (60)", 5, 1071, 466, "La Walck (67)", 5, 1142, 427);
        else lancerBarreBubble("Auribeau (84)", 4, 75, 5333, "Franconville (54)", 2, 49, 4081, "Saint-Pierre-de-Lamps (36)", 1, 45, 2222);

    }
    else if(id==13){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Pédicure-podologues</div>'+
                    '<div class="mainText" style="margin-top:3vh">Cette spécialité est celle qui atteint les rapports les plus hauts en moyenne sur toute la France. La région Bretagne est la seconde région la plus desservie par ces spécialistes par rapport à sa population, avec une moyenne de 11,35 pédicures/podologues pour 100000 habitants. Si l’Ile-de-France est en tête, la ville de Clichy-sous-Bois (93) possède la plus petite moyenne parmi les villes possédant ce service.</div>'+
                    '<div id="barBubble" style="margin-top:3vh"></div>'+
                    row;
        document.getElementById('btext').innerHTML=newdiv;
        
        if(idClassement==0) lancerBarreBubble("Cannes (06", 34, 72607, 46, "Troyes (10)", 28, 60013, 46, "Saut-Maur-des-Fossés (94)", 32, 74818, 42);
        else if(idClassement==1) lancerBarreBubble("La-Queue-les-Yvelines (78)", 8, 2164, 369, "Blacé (69)", 4, 1417, 282, "Châtillon-Saint-jean (26)", 3, 1221, 245);
        else lancerBarreBubble("Montségur (09)", 1, 124, 806, "Aumont (80)", 1, 138, 724, "Vicherey (88)", 1, 159, 628);

    }
    else if(id==10){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Radiodiagnostic et imagerie médicale</div>'+
                    '<div class="mainText" style="margin-top:3vh">Environ 1150 villes accueillent un spécialiste dans cette discipline. La première place de la ville d’Aressy, dans les Pyrénées-Atlantiques, vient conforter la seconde place de l’Aquitaine sur le podium des régions avec 3,51 praticiens pour 100000 habitants, en moyenne. A l’inverse, la Champagne-Ardennes abrite 0,43 praticiens pour 100000 habitants. </div>'+
                    '<div id="barBubble" style="margin-top:3vh"></div>'+
                    row;
        document.getElementById('btext').innerHTML=newdiv;
        
        if(idClassement==0) lancerBarreBubble("Vannes (56)", 46, 52784, 87, "Neuilly-sur-Seine (92)", 47, 61797, 76, "Metz (57)", 91, 119962, 75);
        else if(idClassement==1) lancerBarreBubble("Boujan-sur-Libron (34)", 22, 3136, 701, "Sainte-Colombe (69)", 11, 1888, 582, "La Rochefoucauld (16)", 15, 2923, 513);
        else lancerBarreBubble("Aressy (64)", 8, 634, 1261, "Saint-Benoît-la-Forêt (37)", 8, 903, 885, "Bois-Bernard (62)", 6, 830, 722);

    }
    else if(id==5){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Psychiatres</div>'+
                    '<div class="mainText" style="margin-top:3vh">Bien que Paris, et plus largement les plus grandes villes de France, concentrent le plus grand nombre de psychiatres pour une seule et même commune, ce ne sont pas ces villes qui occupent le haut du classement lorsque l’on calcule le nombre de praticiens pour 100000 habitants. Pour autant, la capitale fait partie du millier de villes françaises accueillant au moins un psychiatre./div>'+
                    '<div id="barBubble" style="margin-top:3vh"></div>'+
                    row;
        document.getElementById('btext').innerHTML=newdiv;
        
        if(idClassement==0) lancerBarreBubble("Bordeaux (33)", 182, 239399, 76, "Paris (75)", 1440, 2249975, 64, "Annecy (74)", 29, 51012, 56);
        else if(idClassement==1) lancerBarreBubble("Labastide-Beauvoir (31)", 6, 1116, 537, "Chaulgnes (58)", 6, 1414, 424, "Chailles (41)", 8, 2549, 313);
        else lancerBarreBubble("Viersat (23)", 3, 308, 974, "Pin-Balma (31)", 6, 904, 663, "Guyencourt-sur-Noye (80)", 1, 162, 617);
        
    }
    else if(id==6){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Ophtalmologues</div>'+
                    '<div class="mainText" style="margin-top:3vh">La région Ile-de-France obtient une moyenne la plus haute, proche d’un ophtalmologue pour 100000 habitants. En dehors de cette région, le département des Bouches-du-Rhône (13) est le seul à dépasser ce seuil, avec 2,1 praticiens pour 100000 habitants. La Picardie, la Franche-Comté et la Champagne-Ardennes sont les régions où la densité est la plus basse ne dépassant pas 0,1 spécialiste pour 100000 habitants. </div>'+
                    '<div id="barBubble" style="margin-top:3vh"></div>'+
                    row;
        document.getElementById('btext').innerHTML=newdiv;
        
        if(idClassement==0) lancerBarreBubble("Grenoble (38)", 56, 157424, 35, "Vannes (56)", 17, 52784, 32, "Nantes (44)", 92, 287845, 32);
        else if(idClassement==1) lancerBarreBubble("Saint-Nicolas-de-Redon (44)", 15, 3109, 482, "Marconne (62)", 4, 1117, 358, "Montferrier-sur-Lez (41)", 7, 3428, 204);
        else lancerBarreBubble("Criqueboeuf (14)", 2, 196, 1020, "Ispoure (64)", 4, 606, 660, "Le Vieil-Evreux (27)", 3, 721, 416);

    }
    else if(id==3){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Gynecologues</div>'+
                    '<div class="mainText" style="margin-top:3vh">Plus de 36500 communes Françaises subissent les déserts médicaux au niveau des médecins gynécologues. Nous remarquons qu’en région Picardie, plus de 806 communes ne sont pas couvertes par les soins de gynécologie. Nous pouvons également voir, en région Rhône-Alpes, que dans 409 communes aucun médecin gynécologues n’est répertorié.</div>'+
                    '<div id="barBubble" style="margin-top:3vh"></div>'+
                    row;
        document.getElementById('btext').innerHTML=newdiv;
        
        if(idClassement==0) lancerBarreBubble("Neuilly-sur-Seine (92)", 29, 61797, 46, "La Rochelle (17)", 25, 74880, 33, "Rouen (76)", 36, 111553, 32);
        else if(idClassement==1) lancerBarreBubble("Saint-Aubin-sur-Scie (76)", 5, 1134, 440, "Sainte-Colombe (69)", 5, 1888, 264, "Lambres-lez-Douai (59)", 8, 5065, 157);
        else lancerBarreBubble("Suzy (02)", 1, 308, 324, "Saint-Benoît-la-Forêt (37)", 2, 903, 221, "Brin-sur-Seille (54)", 1, 684, 146);

    }
    else if(id==2){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Cardiologues</div>'+
                    '<div class="mainText" style="margin-top:3vh">Seul un millier de villes bénéficie des services d’un cardiologue sur le territoire. Si l’Ile-de-France occupe la première place sur cette spécialité, nous observons des inégalités de répartition entre les communes de cette région : Evecquemont (78) obtient le plus grand nombre de cardiologues par rapport à sa population (1396 pour 100000 habitants) alors que Puteaux (92) obtient le plus petit nombre (2,2 pour 100000).</div>'+
                    '<div id="barBubble" style="margin-top:3vh"></div>'+
                    row;
        document.getElementById('btext').innerHTML=newdiv;
        
        if(idClassement==0) lancerBarreBubble("Neuilly-sur-Seine (92)", 49, 61797, 79, "Saint-Denis (93)", 42, 107762, 39, "Montauban (82)", 22, 56536, 38);
        else if(idClassement==1) lancerBarreBubble("Gasville-Oisème (28)", 3, 1286, 233, "Saint-Nauphary (82)", 4, 1737, 230, "Langoiran (33)", 5, 2287, 218);
        else lancerBarreBubble("Evecquemont (78)", 11, 788, 1395, "Bois-Bernard (62)", 7, 830, 843, "Bondigoux (31)", 4, 475, 842);

    }
    else if(id==8){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Pédiatres</div>'+
                    '<div class="mainText" style="margin-top:3vh">Un peu plus de 800 communes en France accueillent un ou plusieurs pédiatres. Ici encore, les régions d’Ile-de-France et Provence-Alpes-Côte-D’azur se distinguent des autres régions avec respectivement 1,77 et 1,14 praticiens pour 100000 habitants en moyenne. Les départements du Limousin sont les moins bien desservis par ces spécialistes.</div>'+
                    '<div id="barBubble" style="margin-top:3vh"></div>'+
                    row;
        document.getElementById('btext').innerHTML=newdiv;
        
        if(idClassement==0) lancerBarreBubble("Antony (92)", 16, 62012, 25, "Strasbourg (67)", 65, 272222, 23, "Boulogne-Billancourt (92)", 27, 116220, 23);
        else if(idClassement==1) lancerBarreBubble("Montfort-en-Chalosse (40)", 3, 1158, 259, "Allonne (60)", 2, 1569, 127, "Saint-Palais (64)", 2, 1856, 107);
        else lancerBarreBubble("Warlus (62)", 1, 371, 269, "Gourdon (71)", 1, 883, 113, "Paucourt (45)", 1, 893, 112);
        
    }
    else if(id==4){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Gastro-entérologues</div>'+
                    '<div class="mainText" style="margin-top:3vh">Plus de 99% des communes françaises ne sont pas desservies par des médecins spécialistes en gastro-entérologie hépatologie. Prenons comme exemple la région Provence-Alpes-Côte-D’azur et la Corse. En région PACA, nous constatons que 592 villes ne sont pas couvertes par les soins de ces spécialistes. La Corse recense plus de 300 villes sans spécialiste en gastro-entérologie.</div>'+
                    '<div id="barBubble" style="margin-top:3vh"></div>'+
                    row;
        document.getElementById('btext').innerHTML=newdiv;
        
        if(idClassement==0) lancerBarreBubble("La-Roche-sur-Yon (85)", 12, 52773, 22, "Neuilly-sur-Seine (92)", 14, 61797, 22, "Vannes (56)", 11, 52784, 20);
        else if(idClassement==1) lancerBarreBubble("Marconne (62)", 4, 1117, 358, "Saint-Aubin-sur-Scie (76)", 3, 1134, 264, "Pringy (74)", 6, 4031, 148);
        else lancerBarreBubble("Criqueboeuf (14)", 3, 196, 1530, "Saint-Brice (77)", 2, 665, 300, "Saint-Paul-le-Jeune (07)", 1, 904, 110);

    }
    else if(id==7){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Rhino-laryngologues</div>'+
                    '<div class="mainText" style="margin-top:3vh">Nous observons que dans plus de 35000 communes en France, aucun médecin spécialiste en rhino-laryngologie n’est répertorié. Comparons la Basse-Normandie et la Haute-Normandie où pour la Basse-Normandie, nous avons plus de 1750 communes qui  n’ont pas accès au soins ORL et du coté de la Haute-Normandie, le chiffre est un peu moins haut car il est de 1385 communes.</div>'+
                    '<div id="barBubble" style="margin-top:3vh"></div>'+
                    row;
        document.getElementById('btext').innerHTML=newdiv;
        
        if(idClassement==0) lancerBarreBubble("Rouen (76)", 17, 111553, 15, "Vannes (56)", 8, 52784, 15, "Neuilly-sur-Seine (92)", 9, 61797, 14);
        else if(idClassement==1) lancerBarreBubble("Colombiers (34)", 11, 2319, 474, "Bagnères-de-Luchon (31)", 8, 2585, 309, "La Faou (29)", 5, 1716, 291);
        else lancerBarreBubble("Criqueboeuf (14)", 1, 196, 510, "Saint-Denis-lès-Sens (89)", 3, 685, 438, "Err (66)", 2, 625, 320);

    }
    else if(id==9){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Pneumologues</div>'+
                    '<div class="mainText" style="margin-top:3vh">Nous remarquons que les médecins spécialistes en pneumologie sont plus de 1200 en France métropolitaine. Certaines régions comme la Bourgogne sont touchées par le manque de praticiens dans cette spécialité : en effet, la récence plus de 2000 villes qui n’ont pas accès au service d’un pneumologue.</div>'+
                    '<div id="barBubble" style="margin-top:3vh"></div>'+
                    row;
        document.getElementById('btext').innerHTML=newdiv;
        
        if(idClassement==0) lancerBarreBubble("Valance (26)", 6, 63148, 9, "Grenoble (38)", 14, 157424, 8, "Montauban (82)", 5, 56536, 8);
        else if(idClassement==1) lancerBarreBubble("Saint-Aubin-sur-Scie (76)", 2, 1134, 176, "Boujan-sur-Libron (34)", 4, 3136, 127, "Cornebarrieu (31)", 6, 5761, 104);
        else lancerBarreBubble("Criqueboeuf (14)", 1, 196, 510, "Valderoure (06)", 1, 409, 244, "Saint-Benoît-la-Forêt (37)", 1, 903, 110);

    }
    else if(id==14){
        var newdiv = '<div class="subTitle" style="text-align:center">'+r+' Audio-prothésistes</div>'+
                    '<div class="mainText" style="margin-top:3vh">1192 médecins audioprothésistes sont présents en France. 1990 villes de Bourgogne n’ont pas de spécialiste audioprothésiste sur leur territoire. 6 des 25 praticiens exercent dans la ville de Dijon. Au niveau régional, la région PACA accueillent presqu’autant d’audioprothésistes que l’Ile-de-France.</div>'+
                    '<div id="barBubble" style="margin-top:3vh"></div>'+
                    row;
        document.getElementById('btext').innerHTML=newdiv;
        
        if(idClassement==0) lancerBarreBubble("Quimper (29)", 10, 63235, 15, "Valence (26)", 8, 63148, 12, "Vannes (56)", 5, 52784, 9);
        else if(idClassement==1) lancerBarreBubble("Roumare (76)", 2, 1382, 144, "Thoissey (01)", 2, 1558, 128, "Malafretaz (01)", 1, 1018, 98);
        else lancerBarreBubble("Ecromagny (70)", 1, 163, 613, "Bretonvillers (25)", 1, 233, 429, "Altenach (68)", 1, 380, 263);

    }
    else{
        var newdiv = '<div class="subTitle" style="text-align:center">214974 Praticiens en France</div>'+
                    '<div class="mainText" style="margin-top:3vh">Les masseurs-kinésithérapeutes sont aussi nombreux que les médecins omnipraticiens (les généralistes) : presque 62000 praticiens pour chaque catégorie. Associés aux chirurgiens-dentistes, ces 3 spécialités représentent près de trois quarts des praticiens sur le territoire français.</div>'+
                    '<div id="barBubble" style="margin-top:3vh"></div>';
        document.getElementById('btext').innerHTML=newdiv;
        lancerBarreGen("Medecins généralistes", 61937, "Masseurs-Kinés", 61801, "Dentistes", 37105);
    }
    
    
    
    if(idClassement==0) {
        document.getElementById("petites").style.opacity = "0.3";
        document.getElementById("moyennes").style.opacity = "0.3";
        document.getElementById("grandes").style.opacity = "1";
    }
    else if(idClassement==1) {
        document.getElementById("petites").style.opacity = "0.3";
        document.getElementById("moyennes").style.opacity = "1";
        document.getElementById("grandes").style.opacity = "0.3";
    }
    else {
        document.getElementById("petites").style.opacity = "1";
        document.getElementById("moyennes").style.opacity = "0.3";
        document.getElementById("grandes").style.opacity = "0.3";
    }
}