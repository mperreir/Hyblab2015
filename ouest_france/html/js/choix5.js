function choix5(){
    document.getElementById('divPraticien5').style.visibility="hidden";

        var newdiv = 
            '<div class="villebar" id="villePrac5" style="margin-left:10vw">'+
                '<div class="col-xs-2 col-lg-2"></div>'+   
                '<div class="col-xs-8 col-lg-8">'+  
                    '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/tout.svg" title="Tous les praticiens" class="pictoChoix" onclick="javascript:afficherDataviz5(\'toutPraticiens\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/generalistes.svg" title="Généralistes" class="pictoChoix" onclick="javascript:afficherDataviz5(\'generalistes\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/cardiologue.svg" title="Cardiologues" class="pictoChoix" onclick="javascript:afficherDataviz5(\'cardiologue\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/gynecologue.svg" title="Gynecologues" class="pictoChoix" onclick="javascript:afficherDataviz5(\'gynecologue\')">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/gastro.svg" title="Gastro-entérologues" class="pictoChoix" onclick="javascript:afficherDataviz5(\'gastro\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/psychiatrie.svg" title="Psychiatres" class="pictoChoix" onclick="javascript:afficherDataviz5(\'psychiatrie\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/ophtalmologie.svg" title="Ophtalmologues" class="pictoChoix" onclick="javascript:afficherDataviz5(\'ophtalmologie\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/rhino.svg" class="pictoChoix" title="Rhino-laryngologues" onclick="javascript:afficherDataviz5(\'rhino\')">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/pediatrie.svg" class="pictoChoix" title="Pédiatres" onclick="javascript:afficherDataviz5(\'pediatrie\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/pneumologue.svg" class="pictoChoix" title="Pneumologues" onclick="javascript:afficherDataviz5(\'pneumologue\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/radio.svg" class="pictoChoix" title="Radiodiagnostic et imagerie médicale" onclick="javascript:afficherDataviz5(\'radio\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/dentiste.svg" class="pictoChoix" title="Dentistes" onclick="javascript:afficherDataviz5(\'dentiste\')">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row" style="margin-top:2vh">'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/kine.svg" class="pictoChoix" title="Masseur-kinésithérapeutes" onclick="javascript:afficherDataviz5(\'kine\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/audio.svg" class="pictoChoix" title="Audio-prothésistes" onclick="javascript:afficherDataviz5(\'audio\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3">'+
                            '<img src="imgs/picto/praticiens/podologue.svg" class="pictoChoix" title="Pédicure-podologues" onclick="javascript:afficherDataviz5(\'podologue\')">'+
                        '</div>'+
                        '<div class="col-xs-3 col-lg-3"></div>'+
                    '</div>'+
                '</div>'+
                '<div class="col-xs-2 col-lg-2"></div>'+  
            '</div>';
        
    document.getElementById('prac5').innerHTML=newdiv;
    return true;
}



function afficherDataviz5(nom){
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
    }
    
    var newdivPicto =
        '<img src="imgs/choisirPraticien.svg">' +
        '<img src="' + pictosPraticiens[nom] + '" class="pictoChoix" onclick="javascript:choix5()" title="Choisir un praticien">';
    document.getElementById('divPraticien5').innerHTML = newdivPicto;
    document.getElementById('divPraticien5').style.visibility = "visible";
    if(nom=='toutPraticiens') genererBarVersus();//document.getElementById('prac5').innerHTML='<p>Lancer graphique en barre</p>';
    else generercercleVersus('prac5',nom);//fchart('prac5','versus2',nom,'#127eb6'); //document.getElementById('prac5').innerHTML='<p>'+nom+'</p>';
}