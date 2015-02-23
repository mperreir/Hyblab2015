//penser à inclure <script src= "dist/snap.svg-min.js"></script>
    function pyramideHomme(pourcent1,pourcent2,unite,svg){//unite=% ou €
        
        var s = Snap(svg);
        s.clear();
        
            var t11 =[0,200,25,200,25,215];//position depart triangle1
            var t12 =[0,200,25,200-2*pourcent1,25,215];//position arrivée
            var t21 =[50,200,25,200,25,215];// positon depart triangle 2
            var t22 =[50,200,25,200-2*pourcent1,25,215];//position arrivée
            
            var t31 =[60,200,85,200,85,215];//position depart triangle3
            var t32 =[60,200,85,200-2*pourcent2,85,215];//position arrivée
            var t41 =[110,200,85,200,85,215];//position depart triangle4
            var t42 =[110,200,85,200-2*pourcent2,85,215];//position arrivée
            var triangle1 = s.polygon(t11); //creation des triangles avec la position de depart
            var triangle2 = s.polygon(t21);
            var triangle3 = s.polygon(t31);
            var triangle4 = s.polygon(t41);
            
            triangle1.attr({   //attributs des triangles
                fill:"#83B588"
            });
            triangle2.attr({
                fill:"#A2DDAB"
            });
            
             triangle3.attr({
                fill:"#E5E5E5"
            });
            triangle4.attr({
                fill:"#ffffff"
            });
            
            triangle1.animate({"points":t12},1000,mina.linear); //animation vers les coordonnées d'arrivées
            triangle2.animate({"points":t22},1000,mina.linear);
            triangle3.animate({"points":t32},1000,mina.linear);
            triangle4.animate({"points":t42},1000,mina.linear);
        
        //texte du pourcentage
        s.paper.text(15,230, [pourcent1+unite]).attr({fill: '#a2ddab', fontFamily: 'Sofia',fontSize: '1em'});
        s.paper.text(75,230, [pourcent2+unite]).attr({fill: '#ffffff', fontFamily: 'Sofia',fontSize: '1em'});
        
    } 
    
    function pyramideFemme(pourcent1,pourcent2,unite,svg){//unite=% ou €
        
        var s = Snap(svg);
        s.clear();
            var t11 =[0,200,25,200,25,215];//position depart triangle1
            var t12 =[0,200,25,200-2*pourcent1,25,215];//position arrivée
            var t21 =[50,200,25,200,25,215];// positon depart triangle 2
            var t22 =[50,200,25,200-2*pourcent1,25,215];//position arrivée
            
            var t31 =[60,200,85,200,85,215];//position depart triangle3
            var t32 =[60,200,85,200-2*pourcent2,85,215];//position arrivée
            var t41 =[110,200,85,200,85,215];//position depart triangle4
            var t42 =[110,200,85,200-2*pourcent2,85,215];//position arrivée
            var triangle1 = s.polygon(t11); //creation des triangles avec la position de depart
            var triangle2 = s.polygon(t21);
            var triangle3 = s.polygon(t31);
            var triangle4 = s.polygon(t41);
            
            triangle1.attr({   //attributs des triangles
                fill:"#E5E5E5"
            });
            triangle2.attr({
                fill:"#ffffff"
            });
            
             triangle3.attr({
                fill:"#E5C180"
            });
            triangle4.attr({
                fill:"#FFE0A1"
            });
            
            triangle1.animate({"points":t12},1000,mina.linear); //animation vers les coordonnées d'arrivées
            triangle2.animate({"points":t22},1000,mina.linear);
            triangle3.animate({"points":t32},1000,mina.linear);
            triangle4.animate({"points":t42},1000,mina.linear);
        
        //texte du pourcentage
        s.paper.text(15,230, [pourcent1+unite]).attr({fill: '#ffffff', fontFamily: 'Sofia',fontSize: '1em'});
        s.paper.text(75,230, [pourcent2+unite]).attr({fill: '#ffe0a1', fontFamily: 'Sofia',fontSize: '1em'});
        
    } 
  
    function colonneHomme(pourcent1,pourcent2,unite,svg){
     var s = Snap(svg);
            s.clear();
            s.attr("preserveAspectRatio", "xMidYMid meet"); 
            //coordonnée premiere colonne avant et apres transformation
            var top11 =[0,200,25,185,50,200,25,215];//position depart 
            var top12 =[0,200-2*pourcent1,25,185-2*pourcent1,50,200-2*pourcent1,25,215-2*pourcent1];//position arrivée 
            var gauche11 =[0,200,0,200,25,215,25,215];
            var gauche12 =[0,200,0,200-2*pourcent1,25,215-2*pourcent1,25,215];
            var droite11 =[50,200,50,200,25,215,25,215];
            var droite12 =[50,200,50,200-2*pourcent1,25,215-2*pourcent1,25,215];
            
            
            //coordonnée premiere colonne avant et apres transformation
            var top21 =[80,200,105,185,130,200,105,215];//position depart 
            var top22 =[80,200-2*pourcent2,105,185-2*pourcent2,130,200-2*pourcent2,105,215-2*pourcent2];//position arrivée 
            var gauche21 =[80,200,80,200,105,215,105,215];
            var gauche22 =[80,200,80,200-2*pourcent2+1,105,215-2*pourcent2,105,215];
            var droite21 =[130,200,130,200,105,215,105,215];
            var droite22 =[130,200,130,200-2*pourcent2,105,215-2*pourcent2,105,215];
            
            var haut = s.polygon(top11);
            var gauche = s.polygon(gauche11);
            var droite = s.polygon(droite11);
            
            var haut2 = s.polygon(top21);
            var gauche2 = s.polygon(gauche21);
            var droite2 = s.polygon(droite21);
            
            haut.attr({
                fill:"#BCE8C2"
            });
            
            gauche.attr({
                fill:"#83B588"
            });
            
            droite.attr({
                fill:"#A2DDAB"
            });
            
            haut2.attr({
                fill:"#FFFFFF",

            });
            
            gauche2.attr({
                fill:"#D1D1D1"
            });
            
            droite2.attr({
                fill:"#EAEAEA"
            });
            
            haut.animate({"points":top12},1000,mina.linear);
            gauche.animate({"points":gauche12},1000,mina.linear);
            droite.animate({"points":droite12},1000,mina.linear);
            
            haut2.animate({"points":top22},1000,mina.linear);
            gauche2.animate({"points":gauche22},1000,mina.linear);
            droite2.animate({"points":droite22},1000,mina.linear);
            
            s.paper.text(0,300, [pourcent1+unite]).attr({fill: '#a2ddab', fontFamily: 'Sofia',fontSize: '5em'});
            
    }
    
    function colonneFemme(pourcent1,pourcent2,unite,svg){
     var s = Snap(svg);
            s.clear();
            //coordonnée premiere colonne avant et apres transformation
            var top11 =[0,200,25,185,50,200,25,215];//position depart 
            var top12 =[0,200-2*pourcent1,25,185-2*pourcent1,50,200-2*pourcent1,25,215-2*pourcent1];//position arrivée 
            var gauche11 =[0,200,0,200,25,215,25,215];
            var gauche12 =[0,200,0,200-2*pourcent1,25,215-2*pourcent1,25,215];
            var droite11 =[50,200,50,200,25,215,25,215];
            var droite12 =[50,200,50,200-2*pourcent1,25,215-2*pourcent1,25,215];
            
            
            //coordonnée premiere colonne avant et apres transformation
            var top21 =[80,200,105,185,130,200,105,215];//position depart 
            var top22 =[80,200-2*pourcent2,105,185-2*pourcent2,130,200-2*pourcent2,105,215-2*pourcent2];//position arrivée 
            var gauche21 =[80,200,80,200,105,215,105,215];
            var gauche22 =[80,200,80,200-2*pourcent2+1,105,215-2*pourcent2,105,215];
            var droite21 =[130,200,130,200,105,215,105,215];
            var droite22 =[130,200,130,200-2*pourcent2,105,215-2*pourcent2,105,215];
            
            var haut = s.polygon(top11);
            var gauche = s.polygon(gauche11);
            var droite = s.polygon(droite11);
            
            var haut2 = s.polygon(top21);
            var gauche2 = s.polygon(gauche21);
            var droite2 = s.polygon(droite21);
            
            haut.attr({
                fill:"#FFFFFF"
            });
            
            gauche.attr({
                fill:"#D1D1D1"
            });
            
            droite.attr({
                fill:"#EAEAEA"
            });
            
            haut2.attr({
                fill:"#FFEAC5",

            });
            
            gauche2.attr({
                fill:"#E5C180"
            });
            
            droite2.attr({
                fill:"#FFE0A1"
            });
            
            haut.animate({"points":top12},1000,mina.linear);
            gauche.animate({"points":gauche12},1000,mina.linear);
            droite.animate({"points":droite12},1000,mina.linear);
            
            haut2.animate({"points":top22},1000,mina.linear);
            gauche2.animate({"points":gauche22},1000,mina.linear);
            droite2.animate({"points":droite22},1000,mina.linear);
            
         
            s.paper.text(0,300, [pourcent2+unite]).attr({fill: '#ffe0a1', fontFamily: 'Sofia',fontSize: '5em'});
    }

    function bulle(pourcent1,pourcent2,unite,svg){
    
         var s = Snap(svg);
         s.clear();
         //dessin forme blanche
            var carre1 =[0,200,0,100,100,100,100,200];
            var carre2 =[250,200,250,100,350,100,350,200];
            
            
            var carre = s.polygon(carre1);
            var circle = s.circle(100,100,100);
            
            var carredroit = s.polygon(carre2);
            var circledroit = s.circle(350,100,100);
            
            carre.attr({
                fill:"#ffffff",
            });
            
            circle.attr({
                fill:"#ffffff",
            });
    
            carredroit.attr({
                fill:"#ffffff",
            });
            
            circledroit.attr({
                fill:"#ffffff",
            });
           
           //dessin forme couleur
            var carre11 = [0,200,0,200,0,200,0,200];
            var carre12 = [0,200,0,200-pourcent1,0+pourcent1,200-pourcent1,0+pourcent1,200];
            var carrebis = s.polygon(carre11);
            var circlebis = s.circle(0,200,0);
            
            carrebis.attr({
                fill:"#ffe0a1",
            });
            
            circlebis.attr({
                fill:"#ffe0a1",
            });
        
            
            carrebis.animate({"points":carre12},1000,mina.linear);
            circlebis.animate({cx:pourcent1, cy:200-pourcent1, r: pourcent1},1000,mina.linear);
            
            //animation droite
     
            var carre21 = [250,200,250,200,250,200,250,200];
            var carre22 = [250,200,250,200-pourcent2,250+pourcent2,200-pourcent2,250+pourcent2,200];
            var carredroitbis = s.polygon(carre21);
            var circledroitbis = s.circle(250,200,0);
            
            carredroitbis.attr({
                fill:"#a2ddab",
            });
            
            circledroitbis.attr({
                fill:"#a2ddab",
            });
        
            
            carredroitbis.animate({"points":carre22},1000,mina.linear);
            circledroitbis.animate({cx:250+pourcent2, cy:200-pourcent2, r: pourcent2},1000,mina.linear);
    
     s.paper.text(0,280, [pourcent1+unite]).attr({fill: '#ffe0a1', fontFamily: 'Sofia',fontSize: '5em'});
        s.paper.text(250,280, [pourcent2+unite]).attr({fill: '#a2ddab', fontFamily: 'Sofia',fontSize: '5em'});    
        
    }
    
    function glaconHomme(pourcent1,svg){
     
        var s = Snap(svg);
            s.clear();
          
            var a =0;
            var b = 0;
            if(pourcent1>50){
                a =50;
                b =pourcent1-50;
            }
            else{
                a=pourcent1;
            }
            
            var posGrandRect=[0,0,0,200,200,200,200,0];
            var posLigne1 =[97,0,97,200,103,200,103,0];
            var posLigne2 =[0,97,200,97,200,103,0,103];
            
            var rect11 =[0,200,0,200,100,200,100,200];
            var rect12 =[0,200-4*a,0,200,100,200,100,200-4*a];
            var rect21 =[100,200,100,200,200,200,200,200];
            var rect22 =[100,200-4*b,100,200,200,200,200,200-4*b];
            var grandRect =s.polygon(posGrandRect);
            var rect1 = s.polygon(rect11);
            var rect2 = s.polygon(rect21);
            
            
            grandRect.attr({   
                fill:'white',
            });
            
            rect1.attr({   
                fill:"#a2ddab",
            });
            
            rect2.attr({   
                fill:"#a2ddab",
            });
            
            
            setTimeout(function () { rect1.animate({"points":rect12},1000,mina.linear);
                
            },0);
            
         setTimeout(function () {  rect2.animate({"points":rect22},1000,mina.linear);
                
            },1000);
            
            
           
            
            
            var ligne1 =s.polygon(posLigne1);
            var ligne2 =s.polygon(posLigne2);
            
            ligne1.attr({   //attributs des triangles
                fill:"#393535",
            });
            
            ligne2.attr({   //attributs des triangles
                fill:"#393535",
            });
            
            s.paper.text(60,290, [pourcent1+'%']).attr({fill: '#a2ddab', fontFamily: 'Sofia',fontSize: '5em'});
        
    }
    
    function glaconFemme(pourcent1,svg){
     
        var s = Snap(svg);
            s.clear();
          
            var a =0;
            var b = 0;
            if(pourcent1>50){
                a =50;
                b =pourcent1-50;
            }
            else{
                a=pourcent1;
            }
            
            var posGrandRect=[0,0,0,200,200,200,200,0];
            var posLigne1 =[97,0,97,200,103,200,103,0];
            var posLigne2 =[0,97,200,97,200,103,0,103];
            
            var rect11 =[0,200,0,200,100,200,100,200];
            var rect12 =[0,200-4*a,0,200,100,200,100,200-4*a];
            var rect21 =[100,200,100,200,200,200,200,200];
            var rect22 =[100,200-4*b,100,200,200,200,200,200-4*b];
            var grandRect =s.polygon(posGrandRect);
            var rect1 = s.polygon(rect11);
            var rect2 = s.polygon(rect21);
            
            
            grandRect.attr({   
                fill:'white',
            });
            
            rect1.attr({   
                fill:"#ffe0a1",
            });
            
            rect2.attr({   
                fill:"#ffe0a1",
            });
            
            
            setTimeout(function () { rect1.animate({"points":rect12},1000,mina.linear);
                
            },0);
            
         setTimeout(function () {  rect2.animate({"points":rect22},1000,mina.linear);
                
            },1000);
            
            
           
            
            
            var ligne1 =s.polygon(posLigne1);
            var ligne2 =s.polygon(posLigne2);
            
            ligne1.attr({   //attributs des triangles
                fill:"#393535",
            });
            
            ligne2.attr({   //attributs des triangles
                fill:"#393535",
            });
            
            s.paper.text(60,290, [pourcent1+'%']).attr({fill: '#ffe0a1', fontFamily: 'Sofia',fontSize: '5em'});
        
    }
    
    function compteurHomme(percent,svg,divPercent) {
        var canvasSize = 200,
            centre = canvasSize/2,
            radius = canvasSize*0.8/2,
            s = Snap(svg);
            s.clear();
            var  path = "",
            arc = s.path(path),    
            startY = centre-radius,
            percDiv = document.getElementById(divPercent);
        
            s.circle(centre,centre,radius).attr({
                fill: "none",
                stroke: 'white',
                strokeWidth: 12,
                });
                   
            var endpoint = percent*360;
            Snap.animate(0, endpoint,   function (val) {
                arc.remove();

                var d = val,
                dr = d-90;
                radians = Math.PI*(dr)/180,
                endx = centre + radius*Math.cos(radians),
                endy = centre + radius * Math.sin(radians),
                largeArc = d>180 ? 1 : 0;  
                path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;
  
                arc = s.path(path);
                arc.attr({
                    stroke: '#a2ddab',
                    fill: 'none',
                    strokeWidth: 12
                });
                percDiv.innerHTML =    Math.round(val/360*100) +'%';

            }, 2000, mina.easeinout);  
        }
        
    function compteurFemme(percent,svg,divPercent) {
        var canvasSize = 200,
            centre = canvasSize/2,
            radius = canvasSize*0.8/2,
           s = Snap(svg);
            s.clear();
            var  path = "",
            arc = s.path(path),    
            startY = centre-radius,
            percDiv = document.getElementById(divPercent);
        
            s.circle(centre,centre,radius).attr({
                fill: "none",
                stroke: 'white',
                strokeWidth: 12,
                });
                   
            var endpoint = percent*360;
            
            Snap.animate(0, endpoint, function (val) {
                arc.remove();
                var d = val,
                dr = d-90;
                radians = Math.PI*(dr)/180,
                endx = centre + radius*Math.cos(radians),
                endy = centre + radius * Math.sin(radians),
                largeArc = d>180 ? 1 : 0;  
                path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;
  
                arc = s.path(path);
                arc.attr({
                    stroke: '#ffe0a1',
                    fill: 'none',
                    strokeWidth: 12
                });
                percDiv.innerHTML =    Math.round(val/360*100) +'%';
            }, 2000, mina.easeinout);  
        }