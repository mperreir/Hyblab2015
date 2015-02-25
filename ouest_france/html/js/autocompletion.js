"use strict";
var tuplesEtablissement;
var tuplesPraticien;
$(function() {
        donneesNantes();       // lance les dataviz par défaut, quand on ne choisit aucune ville
        
        $.ajax({ // requete ajax pour récupérer la liste des communes a charger pour l'autocomplétion
          url: "communes",
          type: "get",
          dataType: "json",
          success: function( data ) { 
             $( "#rechercheauto" ).autocomplete({
              source: data,
       
      
              open: function() {
                $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
              },
              close: function() {
                  $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
              },
              select: function(event, ui){
                 afficherDataviz('villePrac','toutPraticiens');
                 afficherDataviz('etab3','toutEtablissement')
                 
                 //Chargement des données relatives à cette commune
                 
               //chargementData(ui.item.label);
               var commune=ui.item.label;
                          $.ajax({ // Chargement des données de la commune sélectionnée précédemment
                              url: "data",
                              type: "get",
                              dataType: "json",
                              data: {'commune':commune},
                              success: function( data ) {
                                     $(".main").moveDown();
                                     
                                    var communePopulation = data.P11_POP;
                                    var communeSuperficie = data.SUPERF;
              
                                    var tabDonnees = new Array();
                                  
                                    if(commune.length>20){
                                        document.getElementById('nomDeLaVille').innerHTML="<marquee id='villeName' scrollamount=3>"+ui.item.label+"</marquee>";
                                        document.getElementById('VilleNomChx1').innerHTML="<marquee scrollamount=3>"+ui.item.label+"</marquee>";
                                  
                                    }
                                    else{
                                        document.getElementById('nomDeLaVille').innerHTML="<p id='villeName'>"+ui.item.label+"</p>";
                                        document.getElementById('VilleNomChx1').innerHTML="<p>"+ui.item.label+"</p>";
                                    } 
                                    
                                    document.getElementById('rechercheauto1').value=ui.item.label;
                                    document.getElementById('populationCity').innerHTML = communePopulation;
                                    document.getElementById('superficieCity').innerHTML = communeSuperficie+' km²';
                                    document.getElementById('VilleNomChx1Pop').innerHTML = communePopulation;
                                     document.getElementById('VilleNomChx1Sup').innerHTML = communeSuperficie+' km²';;
                                   
                                    
                                    
                                    delete data["CODGEO"];
                                    delete data["LIBGEO"];
                                    delete data["REG"];
                                    delete data["LIBREG"];
                                    delete data["DEP"];
                                    delete data["P11_POP"];
                                    delete data["SUPERF"];
                                   
                                   setdonneesVille(data);
                                   
                                    var tempPraticien = [];
                                    
                                    //clone data array
                                    tempPraticien=JSON.parse(JSON.stringify(data));
                                
                                  
                                    delete tempPraticien["NB_D105"];
                                    delete tempPraticien["NB_D106"];
                                    delete tempPraticien["NB_D107"];
                                    delete tempPraticien["NB_D108"];
                                    delete tempPraticien["PSYCHO"];
                                    delete tempPraticien["NB_D110"];
                                    delete tempPraticien["NB_D111"];
                                    delete tempPraticien["NB_D112"];
                                    delete tempPraticien["NB_D301"];
                                    delete tempPraticien["NB_D302"];
                                    delete tempPraticien["NB_D306"];
                                   
                                   
                                    
                                    var tuplesPraticien = [];
                                    
                                    
                                    /****** TRI ASSOCIATIF PRATICIENS*****/
                                    for (var key in tempPraticien) tuplesPraticien.push([key, tempPraticien[key]]);
                                    
                                    tuplesPraticien.sort(function(a, b) {
                                        a = a[1];
                                        b = b[1];
                                    
                                        return a > b ? -1 : (a < b ? 1 : 0);
                                    });
                                    

                                     setDonneesSpecialiteVille(tuplesPraticien,tuplesPraticien[0][1]);
                                     lancerBarre();
     
                                    
                                    /****** TRI ASSOCIATIF ETABLISSEMENTS*****/
                                    
                                var tempEtablissement = [];   
                                tempEtablissement= JSON.parse(JSON.stringify(data));;
                                delete tempEtablissement["NB_D201"];
                                delete tempEtablissement["NB_D202"];
                                delete tempEtablissement["GYNECO"];
                                delete tempEtablissement["NB_D206"];
                                delete tempEtablissement["NB_D207"];
                                delete tempEtablissement["NB_D208"];
                                delete tempEtablissement["NB_D209"];
                                delete tempEtablissement["NB_D210"];
                                delete tempEtablissement["NB_D211"];
                                delete tempEtablissement["NB_D221"];
                                delete tempEtablissement["NB_D212"];
                                delete tempEtablissement["NB_D233"];
                                delete tempEtablissement["NB_D237"];
                                delete tempEtablissement["NB_D238"];
                                
                                
                                var tuplesEtablissement = [];
                                for (var cle in tempEtablissement) tuplesEtablissement.push([cle, tempEtablissement[cle]]);
                                    
                                tuplesEtablissement.sort(function(c, d) {
                                    return d[1] - c[1];
                                });
 
                                    setDonneesEtablissementVille(tuplesEtablissement,tuplesEtablissement[0][1]);
                                    lancerBarreEtab();
                                    setDonneesVille1(tempPraticien);
                                    genererBarVersus();
 
                              }
                          })
               
                 
                 
                 
              },
              minLength: 3
          }),
           $( "#rechercheauto1" ).autocomplete({
               source: data,
       
      
              open: function() {
                $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
              },
              close: function() {
                  $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
              },
              select: function(event, ui){
                  var commune=ui.item.label;
                  document.getElementById('VilleNomChx1').innerHTML=commune;
                     if(commune.length>12){
                                        
                                        document.getElementById('VilleNomChx1').innerHTML="<marquee scrollamount=3>"+ui.item.label+"</marquee>";
                                  
                                    }
                                    else{
                                        
                                        document.getElementById('VilleNomChx1').innerHTML="<p>"+ui.item.label+"</p>";
                                    } 
                  $.ajax({ // requete ajax pour récupérer les données sur la première ville à comparer
                              url: "data",
                              type: "get",
                              dataType: "json",
                              data: {'commune':commune},
                              success: function( data ) {
                                  document.getElementById('VilleNomChx1Pop').innerHTML=data["P11_POP"];
                                  document.getElementById('VilleNomChx1Sup').innerHTML= data["SUPERF"]+' km2';
                                  
                                  if(document.getElementById("rechercheauto2").value!="") $(".main").moveDown();
                                  
                                    delete data["CODGEO"];
                                    delete data["LIBGEO"];
                                    delete data["REG"];
                                    delete data["LIBREG"];
                                    delete data["DEP"];
                                    delete data["P11_POP"];
                                    delete data["SUPERF"];
                                   
                                    var tempPraticienVersus = [];
                                    
                                    //clone data array
                                    tempPraticienVersus=JSON.parse(JSON.stringify(data));
                                
                                  
                                    delete tempPraticienVersus["NB_D105"];
                                    delete tempPraticienVersus["NB_D106"];
                                    delete tempPraticienVersus["NB_D107"];
                                    delete tempPraticienVersus["NB_D108"];
                                    delete tempPraticienVersus["PSYCHO"];
                                    delete tempPraticienVersus["NB_D110"];
                                    delete tempPraticienVersus["NB_D111"];
                                    delete tempPraticienVersus["NB_D112"];
                                    delete tempPraticienVersus["NB_D301"];
                                    delete tempPraticienVersus["NB_D302"];
                                    delete tempPraticienVersus["NB_D306"];
                                    
                                    var tuplesPraticienVersus = [];
                           
                                    setDonneesVille1(tempPraticienVersus);
                                    genererBarVersus();
                                  
                             }
                   })
              }
               
           }),
           
           
           
           
             $( "#rechercheauto2" ).autocomplete({ 
               source: data,
       
      
              open: function() {
                $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
              },
              close: function() {
                  $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
              },
              select: function(event, ui){
                var commune=ui.item.label;
               document.getElementById('VilleNomChx2').innerHTML=commune;
                  if(commune.length>12){
                    document.getElementById('VilleNomChx2').innerHTML="<marquee scrollamount=3>"+ui.item.label+"</marquee>";
                                  
                    }
                  else{
                    document.getElementById('VilleNomChx2').innerHTML="<p>"+ui.item.label+"</p>";
                  } 
                 
                          $.ajax({ // requete ajx pour récuprér les données de la seconde ville sélectionnée
                              url: "data",
                              type: "get",
                              dataType: "json",
                              data: {'commune':commune},
                              success: function( data ) {
                                  $(".main").moveDown();
                                  document.getElementById('nombreHabitants2').innerHTML=data["P11_POP"];
                                  document.getElementById('superficieCity2').innerHTML= data["SUPERF"]+' km2';
                                  
                                  /************ DATAVIZ BONNIEC **********/
                                  delete data["CODGEO"];
                                    delete data["LIBGEO"];
                                    delete data["REG"];
                                    delete data["LIBREG"];
                                    delete data["DEP"];
                                    delete data["P11_POP"];
                                    delete data["SUPERF"];
                                   
                                    var tempPraticienVersus = [];
                                    
                                    //clone data array
                                    tempPraticienVersus=JSON.parse(JSON.stringify(data));
                                
                                  
                                    delete tempPraticienVersus["NB_D105"];
                                    delete tempPraticienVersus["NB_D106"];
                                    delete tempPraticienVersus["NB_D107"];
                                    delete tempPraticienVersus["NB_D108"];
                                    delete tempPraticienVersus["PSYCHO"];
                                    delete tempPraticienVersus["NB_D110"];
                                    delete tempPraticienVersus["NB_D111"];
                                    delete tempPraticienVersus["NB_D112"];
                                    delete tempPraticienVersus["NB_D301"];
                                    delete tempPraticienVersus["NB_D302"];
                                    delete tempPraticienVersus["NB_D306"];
  
                                    var tuplesPraticienVersus = [];
                                   
                                  setDonneesVille2(tempPraticienVersus);
                                  genererBarVersus();
                                  
                              }
                          })
                 }
           })
        }
        
   });

                  
});

