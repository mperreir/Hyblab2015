function choix(id){
    if(id=='prac3'){
        document.getElementById('divPraticien3').style.visibility="hidden";
        
        var newdiv = '<div class="villebar" id="villePrac">'+
                        '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/tout.svg" alt="Tous les praticiens" class="pictoChoix" onclick="javascript:afficherDataviz(\'villePrac\',\'toutPraticiens\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/generalistes.svg" alt="Généralistes" class="pictoChoix" onclick="javascript:afficherDataviz(\'villePrac\',\'generalistes\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/cardiologue.svg" alt="Cardiologues" class="pictoChoix" onclick="javascript:afficherDataviz(\'villePrac\',\'cardiologue\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/gynecologue.svg" alt="Gynécologues" class="pictoChoix" onclick="javascript:afficherDataviz(\'villePrac\',\'gynecologue\')">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/gastro.svg" alt="Gastro-entérologues" class="pictoChoix" onclick="javascript:afficherDataviz(\'prac3\',\'gastro\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/psychiatrie.svg" alt="Psychiatres" class="pictoChoix" onclick="javascript:afficherDataviz(\'prac3\',\'psychiatrie\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/ophtalmologie.svg" alt="Ophtalmologues" class="pictoChoix" onclick="javascript:afficherDataviz(\'prac3\',\'ophtalmologie\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/rhino.svg" class="pictoChoix" alt="Rhino-laryngologues" onclick="javascript:afficherDataviz(\'prac3\',\'rhino\')">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/pediatrie.svg" class="pictoChoix" alt="Pédiatres" onclick="javascript:afficherDataviz(\'prac3\',\'pediatrie\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/pneumologue.svg" class="pictoChoix" alt="Pneumologues" onclick="javascript:afficherDataviz(\'prac3\',\'pneumologue\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/radio.svg" class="pictoChoix" alt="Radiodiagnostic et imagerie médicale" onclick="javascript:afficherDataviz(\'prac3\',\'radio\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/dentiste.svg" class="pictoChoix" alt="Dentistes" onclick="javascript:afficherDataviz(\'prac3\',\'dentiste\')">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/kine.svg" class="pictoChoix" alt="Masseur-kinésithérapeutes" onclick="javascript:afficherDataviz(\'prac3\',\'kine\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/audio.svg" class="pictoChoix" alt="Audio-prothésistes" onclick="javascript:afficherDataviz(\'prac3\',\'audio\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/podologue.svg" class="pictoChoix" alt="Pédicure-podologues" onclick="javascript:afficherDataviz(\'prac3\',\'podologue\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3"></div>'+
                    '</div>'+
                    '</div>';
        
        document.getElementById(id).innerHTML=newdiv;
    }
    else{
        document.getElementById('divEtablissement3').style.visibility="hidden";
        
        var newdiv = '<div class="villebar" id="villeEtab">'+
                        '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/tout.svg" class="pictoChoix" alt="Tous les établissements" onclick="javascript:afficherDataviz(\'etab3\',\'toutEtablissement\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/psychiatrie.svg" class="pictoChoix" alt="Psychiatrie" onclick="javascript:afficherDataviz(\'etab3\',\'psychiatrie\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/cancerologie.svg" class="pictoChoix" alt="Cancerologie" onclick="javascript:afficherDataviz(\'etab3\',\'cancerologie\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/urgence.svg" class="pictoChoix" alt="Urgences" onclick="javascript:afficherDataviz(\'etab3\',\'urgence\')">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/maternite.svg" class="pictoChoix" alt="Maternité" onclick="javascript:afficherDataviz(\'etab3\',\'maternite\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/centresante.svg" class="pictoChoix" alt="Centre de santé" onclick="javascript:afficherDataviz(\'etab3\',\'centresante\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/medecinepreventive.svg" class="pictoChoix" alt="Médecine préventives" onclick="javascript:afficherDataviz(\'etab3\',\'medecinepreventive\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/dialyse.svg" class="pictoChoix" alt="Dialyse" onclick="javascript:afficherDataviz(\'etab3\',\'dialyse\')">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/hospitalisation.svg" class="pictoChoix" alt="Hospitalisation" onclick="javascript:afficherDataviz(\'etab3\',\'hospitalisation\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/pharmacie.svg" class="pictoChoix" alt="Pharmacie" onclick="javascript:afficherDataviz(\'etab3\',\'pharmacie\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/centrealcoolisme.svg" class="pictoChoix" alt="Centre de lutte contre l\'alcoolisme" onclick="javascript:afficherDataviz(\'etab3\',\'centrealcoolisme\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/laboratoire.svg" class="pictoChoix" alt="Laboratoire d\'analyses médicales" onclick="javascript:afficherDataviz(\'etab3\',\'laboratoire\')">'+
                        '</div>'+
                    '</div>'+
                    '</div>';
        
        document.getElementById(id).innerHTML=newdiv;
    }
    return true;
}

function afficherDataviz(id, nom) {
    var newdivPicto;

    var pictosPraticiens = {
        'toutPraticiens': 'imgs/picto/praticiens/praticiens.svg',
        'generalistes'  : 'imgs/picto/praticiens/generalistes.svg',
        'audio'         : 'imgs/picto/praticiens/audio.svg',
        'cardiologue'   : 'imgs/picto/praticiens/cardiologue.svg',
        'dentiste'      : 'imgs/picto/praticiens/dentiste.svg',
        'gastro'        : 'imgs/picto/praticiens/gastro.svg',
        'psychiatrie'   : 'imgs/picto/praticiens/psychiatrie.svg',
        'gynecologue'   : 'imgs/picto/praticiens/gynecologue.svg',
        'kine'          : 'imgs/picto/praticiens/gastro.svg',
        'radio'         : 'imgs/picto/praticiens/radio.svg',
        'ophtalmologie' : 'imgs/picto/praticiens/ophtalmologie.svg',
        'pediatrie'     : 'imgs/picto/praticiens/pediatrie.svg',
        'pneumologue'   : 'imgs/picto/praticiens/pneumologue.svg',
        'podologue'     : 'imgs/picto/praticiens/podologue.svg',
        'rhino'         : 'imgs/picto/praticiens/rhino.svg'
    };
    
    var pictosEtablissements = {
        'toutEtablissement' : 'imgs/picto/etablissements/etablissements.svg',
        'cancerologie'      : 'imgs/picto/etablissements/cancerologie.svg',
        'centrealcoolisme'  : 'imgs/picto/etablissements/centrealcoolisme.svg',
        'centresante'       : 'imgs/picto/etablissements/centresante.svg',
        'dialyse'           : 'imgs/picto/etablissements/dialyse.svg',
        'hospitalisation'   : 'imgs/picto/etablissements/hospitalisation.svg',
        'laboratoire'       : 'imgs/picto/etablissements/laboratoire.svg',
        'maternite'         : 'imgs/picto/etablissements/maternite.svg',
        'medecinepreventive': 'imgs/picto/etablissements/medecinepreventive.svg',
        'pharmacie'         : 'imgs/picto/etablissements/pharmacie.svg',
        'psychiatrie'       : 'imgs/picto/etablissements/psychiatrie.svg',
        'urgence'           : 'imgs/picto/etablissements/urgence.svg'
    };
    
    if (nom in pictosPraticiens) {
        newdivPicto =
            '<img src="imgs/choisirPraticien.svg">' +
            '<img src="' + pictosPraticiens[nom] + '" class="pictoChoix" onclick="javascript:choix(\'prac3\')">';
        document.getElementById('divPraticien3').innerHTML = newdivPicto;
        document.getElementById('divPraticien3').style.visibility = "visible";
        //document.getElementById(id).innerHTML='<p>'+nom+'</p>';
        dataViz(150);
    }
    else{
        newdivPicto = 
            '<img src="' + pictosEtablissements[nom] + '" class="pictoChoix" onclick="javascript:choix(\'etab3\')">'+
            '<img src="imgs/choisirEtablissement.svg">';
        document.getElementById('divEtablissement3').innerHTML=newdivPicto;
        document.getElementById('divEtablissement3').style.visibility="visible";
        document.getElementById(id).innerHTML='<p>'+nom+'</p>';
    }
}