var loadData = function(dataPath,move,index){
    
	$.ajax({
	    url: dataPath,
	    contentType:"json",
	    success: function(datas){
	        
            
	        if(move) $.fn.fullpage.moveSectionDown();
	        
	        document.getElementById("picto_poleID").src = datas.icon;
	        document.getElementById("modal_icon_img").src = datas.icon;
	        document.getElementById("name_poleID").innerHTML = datas.name;
	        document.getElementById("description_poleID").innerHTML = datas.desc;
	        document.getElementById("image_president_poleID").src = datas.president.image;
	        document.getElementById("name_president_poleID").innerHTML = datas.president.name;
	        document.getElementById("link_poleID").href = datas.link;
	        document.getElementById("podium_bassin_img").src = datas.bassinEmploi.img;
	        document.getElementById("cylindres_activites_img").src = datas.secteurs.img;
	        document.getElementById("modal_biographie_icon_img").src = datas.president.image;
	        document.getElementById("modal_biographie_body").innerHTML = datas.president.biographie;
	        document.getElementById("modal_biographie_title").innerHTML = datas.president.name;
	        document.getElementById("resultats_intelectuels_img").src = datas.resultats_intelectuels.img;
	        document.getElementById("resultats_operationnel_img").src = datas.resultats_operationnel.img;
	        
	        cacherLoupes();
	        afficherMoreInfo(datas);
	        
	        if(move){
	            var childs = document.getElementById("menu_pagePole").childNodes;
                activeMenu(childs[index]);
	        }
	        
       		var options3=loadAdherents(dataPath);
            $('#nouveaux_adherents').highcharts(options3,function (chart) {
                $.fn.fullpage.reBuild();
            });
            
            var options4=loadRepartitionEtablissement(dataPath);
            $('#repartition').highcharts(options4,function (chart) {
                $.fn.fullpage.reBuild();
            });
            
            var options5=loadProjetLabellise(dataPath);
            
            $('#graphique_courbe').highcharts(options5,function (chart) {
                $.fn.fullpage.reBuild();
            });
	        
	    }
    });
};

var activeMenu = function(elem){
    var childs = document.getElementById("menu_pagePole").childNodes;
    for(i=1;i<childs.length;i=i+2){
        console.log(i+":"+childs[i].classList);
        childs[i].classList.remove("selected");
    }
    elem.classList.add("selected");
};

var cacherLoupes = function(){
    var loupe = document.getElementById("adherents_loupe");
    loupe.classList.remove("rumble");
    loupe.style.visibility = "hidden";
    loupe = document.getElementById("bassin_loupe");
    loupe.classList.remove("rumble");
    loupe.style.visibility = "hidden";
    loupe = document.getElementById("activite_loupe");
    loupe.classList.remove("rumble");
    loupe.style.visibility = "hidden";
    loupe = document.getElementById("repartition_loupe");
    loupe.classList.remove("rumble");
    loupe.style.visibility = "hidden";
    loupe = document.getElementById("labellise_loupe");
    loupe.classList.remove("rumble");
    loupe.style.visibility = "hidden";
    loupe = document.getElementById("intelectuels_loupe");
    loupe.classList.remove("rumble");
    loupe.style.visibility = "hidden";
    loupe = document.getElementById("operationnel_loupe");
    loupe.classList.remove("rumble");
    loupe.style.visibility = "hidden";
};

var afficherMoreInfo = function(datas){
    if( datas.bassinEmploi.more ){
        var loupe = document.getElementById("bassin_loupe");
        loupe.style.visibility = "visible";
        document.getElementById("modal_title").innerHTML = datas.bassinEmploi.more.title;
        document.getElementById("modal_body").innerHTML = datas.bassinEmploi.more.content;
        document.getElementById("modal_icon_img").src = datas.bassinEmploi.more.icon;
        loupe.classList.add("rumble");
    }
    else if( datas.adherents.more ){
        var loupe = document.getElementById("adherents_loupe");
        loupe.style.visibility = "visible";
        document.getElementById("modal_title").innerHTML = datas.adherents.more.title;
        document.getElementById("modal_body").innerHTML = datas.adherents.more.content;
        document.getElementById("modal_icon_img").src = datas.adherents.more.icon;
        loupe.classList.add("rumble");
    }
    else if( datas.secteurs.more ){
        var loupe = document.getElementById("activite_loupe");
        loupe.style.visibility = "visible";
        document.getElementById("modal_title").innerHTML = datas.secteurs.more.title;
        document.getElementById("modal_body").innerHTML = datas.secteurs.more.content;
        document.getElementById("modal_icon_img").src = datas.secteurs.more.icon;
        loupe.classList.add("rumble");
    }
    else if( datas.repartition.more ){
        var loupe = document.getElementById("repartition_loupe");
        loupe.style.visibility = "visible";
        document.getElementById("modal_title").innerHTML = datas.repartition.more.title;
        document.getElementById("modal_body").innerHTML = datas.repartition.more.content;
        document.getElementById("modal_icon_img").src = datas.repartition.more.icon;
        loupe.classList.add("rumble");
    }
    else if( datas.projetLabellise.more ){
        var loupe = document.getElementById("labellise_loupe");
        loupe.style.visibility = "visible";
        document.getElementById("modal_title").innerHTML = datas.projetLabellise.more.title;
        document.getElementById("modal_body").innerHTML = datas.projetLabellise.more.content;
        document.getElementById("modal_icon_img").src = datas.projetLabellise.more.icon;
        loupe.classList.add("rumble");
    }
    else if( datas.resultats_intelectuels.more ){
        var loupe = document.getElementById("intelectuels_loupe");
        loupe.style.visibility = "visible";
        document.getElementById("modal_title").innerHTML = datas.resultats_intelectuels.more.title;
        document.getElementById("modal_body").innerHTML = datas.resultats_intelectuels.more.content;
        document.getElementById("modal_icon_img").src = datas.resultats_intelectuels.more.icon;
        loupe.classList.add("rumble");
    }
    else if( datas.resultats_operationnel.more ){
        var loupe = document.getElementById("operationnel_loupe");
        loupe.style.visibility = "visible";
        document.getElementById("mmodal_title").innerHTML = datas.resultats_operationnel.more.title;
        document.getElementById("modal_body").innerHTML = datas.resultats_operationnel.more.content;
        document.getElementById("modal_icon_img").src = datas.resultats_operationnel.more.icon;
        loupe.classList.add("rumble");
    }
}

var loadAdherents = function(dataPath){
    var name;
    var data;

    $.ajax({
	    url: dataPath,
	    contentType:"json",
	    async: false,
	    success: function(datas){
            name = datas.name;
            data = datas.adherents.data;	
	    }
    });
    
    var chart = {
        chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
            },
            title: {
                text: 'Combien d\'adhérents en 2012 ?'
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>'
            },
            exporting: {
                         enabled: false
            },
            credits: {
                    enabled: false
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true,
                    innerSize: '50%',
                    size: '100%',
                    borderWidth: 0
                }
            },
            series: [{
                type: 'pie',
                data: data
            }]

    };
    
    return chart;
};

var loadRepartitionEtablissement = function(dataPath){
    var name;
    var data;

    $.ajax({
	    url: dataPath,
	    contentType:"json",
	    async: false,
	    success: function(datas){
            name = datas.name;
            data = datas.repartition.data;	
	    }
    });
    
    var chart = {
        chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
            },
            title: {
                text: 'Qui sont les entreprises adhérentes aux pôles ?'
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>'
            },
            exporting: {
                         enabled: false
            },
            credits: {
                    enabled: false
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    title: false,
                    showInLegend: true,
                    innerSize: '50%',
                    size: '100%',
                    borderWidth: 0
                }
            },
            series: [{
                type: 'pie',
                data: data
            }]

    };
    
    return chart;
};

var loadProjetLabellise = function(dataPath){
    var categories;
    var name;
    var dataMontant;
    var dataNombre;

    $.ajax({
	    url: dataPath,
	    contentType:"json",
	    async: false,
	    success: function(datas){
            name = datas.name;
            categories = datas.projetLabellise.categories;
            dataMontant = datas.projetLabellise.montant;	
            dataNombre = datas.projetLabellise.nombre;
	    }
    });
    
     var chart ={
            title: {
                text: 'Les projets labellisés et financés par le Fonds Unique Interministériel',
                x: -20 //center
            },
            exporting: {
                     enabled: false
            },
            credits: {
                enabled: false
            },
            xAxis: [{
                categories: [2006, 2007, 2008, 2009, 2010, 2011, 2012]
            }],
            yAxis: [{ // Axe des montants
                title: {
                    text: 'Financement cumulé des projets par année',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                labels: {
                    format: '{value} €',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                opposite: true
            },
            { // Axe du nombre de projets
                title: {
                    text: 'Nombre de projets par année',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                }
            }],
            tooltip: {
                shared: true,
            },
            series: [{
                name: 'Nombre',
                yAxis:1,
                data: dataNombre
            }, {
                name: 'Montant',
                data: dataMontant,
                tooltip: {
                    valueSuffix: ' €'
                }
            }]
        }
    return chart;
};
