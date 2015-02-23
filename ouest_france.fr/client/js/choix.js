function choix(id){
    if(id=='prac3'){
        document.getElementById('divPraticien3').style.visibility="hidden";
        document.getElementById('prac3').innerHTML='';
        
        var newdiv = '<div class="villebar" id="villePrac">'+
                        '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/tout.svg" title="Tous les praticiens" class="pictoChoix" onclick="javascript:afficherDataviz(\'villePrac\',\'toutPraticiens\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/generalistes.svg" title="Généralistes" class="pictoChoix" onclick="javascript:afficherDataviz(\'villePrac\',\'generalistes\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/cardiologue.svg" title="Cardiologues" class="pictoChoix" onclick="javascript:afficherDataviz(\'villePrac\',\'cardiologue\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/gynecologue.svg" title="Gynécologues" class="pictoChoix" onclick="javascript:afficherDataviz(\'villePrac\',\'gynecologue\')">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/gastro.svg" title="Gastro-entérologues" class="pictoChoix" onclick="javascript:afficherDataviz(\'prac3\',\'gastro\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/psychiatrie.svg" title="Psychiatres" class="pictoChoix" onclick="javascript:afficherDataviz(\'prac3\',\'psychiatrie\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/ophtalmologie.svg" title="Ophtalmologues" class="pictoChoix" onclick="javascript:afficherDataviz(\'prac3\',\'ophtalmologie\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/rhino.svg" class="pictoChoix" title="Rhino-laryngologues" onclick="javascript:afficherDataviz(\'prac3\',\'rhino\')">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/pediatrie.svg" class="pictoChoix" title="Pédiatres" onclick="javascript:afficherDataviz(\'prac3\',\'pediatrie\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/pneumologue.svg" class="pictoChoix" title="Pneumologues" onclick="javascript:afficherDataviz(\'prac3\',\'pneumologue\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/radio.svg" class="pictoChoix" title="Radiodiagnostic et imagerie médicale" onclick="javascript:afficherDataviz(\'prac3\',\'radio\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/dentiste.svg" class="pictoChoix" title="Dentistes" onclick="javascript:afficherDataviz(\'prac3\',\'dentiste\')">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/kine.svg" class="pictoChoix" title="Masseur-kinésithérapeutes" onclick="javascript:afficherDataviz(\'prac3\',\'kine\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/audio.svg" class="pictoChoix" title="Audio-prothésistes" onclick="javascript:afficherDataviz(\'prac3\',\'audio\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/podologue.svg" class="pictoChoix" title="Pédicure-podologues" onclick="javascript:afficherDataviz(\'prac3\',\'podologue\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3"></div>'+
                    '</div>'+
                    '</div>';
        
        document.getElementById(id).innerHTML=newdiv;
    }
    else{
        document.getElementById('divEtablissement3').style.visibility="hidden";
        document.getElementById('etab3').innerHTML='';
        
        var newdiv = '<div class="villebar" id="villeEtab">'+
                        '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/tout.svg" class="pictoChoix" title="Tous les établissements" onclick="javascript:afficherDataviz(\'etab3\',\'toutEtablissement\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/psychiatrie.svg" class="pictoChoix" title="Psychiatrie" onclick="javascript:afficherDataviz(\'etab3\',\'psychiatrieE\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/cancerologie.svg" class="pictoChoix" title="Cancerologie" onclick="javascript:afficherDataviz(\'etab3\',\'cancerologie\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/urgence.svg" class="pictoChoix" title="Urgences" onclick="javascript:afficherDataviz(\'etab3\',\'urgence\')">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/maternite.svg" class="pictoChoix" title="Maternité" onclick="javascript:afficherDataviz(\'etab3\',\'maternite\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/centresante.svg" class="pictoChoix" title="Centre de santé" onclick="javascript:afficherDataviz(\'etab3\',\'centresante\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/medecinepreventive.svg" class="pictoChoix" title="Médecine préventives" onclick="javascript:afficherDataviz(\'etab3\',\'medecinepreventive\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/dialyse.svg" class="pictoChoix" title="Dialyse" onclick="javascript:afficherDataviz(\'etab3\',\'dialyse\')">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/hospitalisation.svg" class="pictoChoix" title="Hospitalisation" onclick="javascript:afficherDataviz(\'etab3\',\'hospitalisation\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/pharmacie.svg" class="pictoChoix" title="Pharmacie" onclick="javascript:afficherDataviz(\'etab3\',\'pharmacie\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/centrealcoolisme.svg" class="pictoChoix" title="Centre de lutte contre l\'alcoolisme" onclick="javascript:afficherDataviz(\'etab3\',\'centrealcoolisme\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/etablissements/laboratoire.svg" class="pictoChoix" title="Laboratoire d\'analyses médicales" onclick="javascript:afficherDataviz(\'etab3\',\'laboratoire\')">'+
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
        'psychiatrieE'       : 'imgs/picto/etablissements/psychiatrie.svg',
        'urgence'           : 'imgs/picto/etablissements/urgence.svg'
    };
    
    if (nom in pictosPraticiens) {
        newdivPicto =
            '<img src="imgs/choisirPraticien.svg">' +
            '<img src="' + pictosPraticiens[nom] + '" class="pictoChoix" onclick="javascript:choix(\'prac3\')" title="Choisir un praticien">';
        document.getElementById('divPraticien3').innerHTML = newdivPicto;
        document.getElementById('divPraticien3').style.visibility = "visible";
        if(nom=='toutPraticiens') lancerBarre(); //document.getElementById('prac3').innerHTML='<p>Lancer graphique en barre</p>';
        else fchart(id,'chartp3',nom,'#127eb6');
    }
    else{
        newdivPicto = 
            '<img src="' + pictosEtablissements[nom] + '" class="pictoChoix" onclick="javascript:choix(\'etab3\')" title="Choisir un établissement">'+
            '<img src="imgs/choisirEtablissement.svg">';
        document.getElementById('divEtablissement3').innerHTML=newdivPicto;
        document.getElementById('divEtablissement3').style.visibility="visible";
        if(nom=='toutEtablissement') lancerBarreEtab();//document.getElementById('etab3').innerHTML='<p>Lancer graphique en barre</p>';
        else fchart(id,'charte3',nom,'#f9a21c');
    }
}