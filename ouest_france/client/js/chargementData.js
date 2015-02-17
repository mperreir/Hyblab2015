
// Praticiens
var communePopulation=0,
    communeSuperficie=0,
    P_Omnipraticiens,
    P_Cardio,
    P_Gyneco,
    P_Gastro,
    P_Psychiatrie,
    P_Ophtalmo,
    P_Rhino,
    P_Pediatrie,
    P_Pneumo,
    P_Imagerie,
    P_Dentiste,
    P_Kine,
    P_Podologue,
    P_AudioProthesiste;

// Etablissements   
var E_cancer,
    E_urgences,
    E_maternite,
    E_centreSante,
    E_psychiatrique,
    E_preventive,
    E_dialyse,
    E_domicile,
    E_pharmacie,
    E_analyse,
    E_alcoolisme;
    
    // A terminer


function chargementData(commune){
    alert('chargementData');
     $.ajax({
          url: "/data",
          type: "get",
          dataType: "json",
          data: {'commune':commune},
          success: function( data ) {
              
            communePopulation = data.P11_POP;
            communeSuperficie = data.SUPERF;
 /*           P_Omnipraticiens = data.NB_D201;
            P_Cardio = data.NB_D202;
            P_Gyneco = data.GYNECO;
            P_Gastro = data.NB_D206;
            P_Psychiatrie = data.NB_D207;
            P_Ophtalmo = data.NB_D208;
            P_Rhino = data.NB_D209;
            P_Pediatrie = data.NB_D210;
            P_Pneumo = data.NB_D211;
            P_Imagerie = data.NB_2012;
            P_Dentiste = data.NB_221;
            P_Kine = data.NB_D233;
            P_Podologue = data.NB_D237;
            P_AudioProthesiste = data.NB_D238;
            
            E_cancer = data.NB_D105;
            E_urgences = data.NB_D106;
            E_maternite = data.NB_D107;
            E_centreSante = data.NB_D108;
            E_psychiatrique = data.PSYCHO;
            E_preventive = data.NB_D110;
            E_dialyse = data.NB_D111;
            E_domicile = data.NB_D112;
            E_pharmacie = data.NB_D301;
            E_analyse = data.NB_D302;
            E_alcoolisme = data.NB_D306;
         */   
            alert("commu ePopulation: "+communePopulation);
            //return data;
          }
     })
}
