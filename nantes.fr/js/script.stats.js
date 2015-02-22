var valider = false, question1 = false, question2 = false, question3 = false, question4 = false, question5 = false , question6 = false;
var rep = "";
sexe = 'femme';
var img_age = 'img/stats/tranche_age/' + sexe + '-age1.png';
$('.selonvous').attr('src', img_age);

$(document).ready(function() {
	
	$(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.7});
	
	var slider = $('#age').bxSlider({
		hideControlOnEnd: true	
	});
				
	$('.main').onepage_scroll({
		pagination: false,
		beforeMove: function(index)
		{
			$(".nuage").cloud_animation($(".nuage").width());
			if(valider)
			{
				if(index == '2')
				{
					switch(sexe)
					{
						case "homme":
						{
							$('#img1').attr('src', 'img/stats/tranche_age/homme-age1.png');
							$('#img2').attr('src', 'img/stats/tranche_age/homme-age2.png');
							$('#img3').attr('src', 'img/stats/tranche_age/homme-age3.png');
							$('#img4').attr('src', 'img/stats/tranche_age/homme-age4.png');
							$('#img5').attr('src', 'img/stats/tranche_age/cercueilguy.png');
							break;
						}
						case "femme":
						{
							$('#img1').attr('src', 'img/stats/tranche_age/femme-age1.png');
							$('#img2').attr('src', 'img/stats/tranche_age/femme-age2.png');
							$('#img3').attr('src', 'img/stats/tranche_age/femme-age3.png');
							$('#img4').attr('src', 'img/stats/tranche_age/femme-age4.png');
							$('#img5').attr('src', 'img/stats/tranche_age/curcueiljosie.png');
							break;
						}
					}
				}
			}
			else
			{
				$('.main').moveTo(1);
			}
			
			if(index == '3')
			{
				$(".bus").bus_animation($("#slide5").width());
				
				img_age = 'img/stats/tranche_age/' + sexe + '-age' + (slider.getCurrentSlide() + 1) + '.png';
				$('.selonvous').attr('src', img_age);
			}
			
			if(index == '4')
			{
				$('.selonvous').attr('src', img_age);
				if(question1) {}
				else $('.main').moveTo(3);
			}
			
			if(index == '5')
			{
				$(".tram").tram_animation($("#slide7").width());
			}
			
			if(index == '6')
			{
				$('.selonvous').attr('src', img_age);
				if(question2) {}
				else $('.main').moveTo(5);
			}
						
			if(index == '8')
			{
				$('.selonvous').attr('src', img_age);
				if(question3) {}
				else $('.main').moveTo(7);
			}
			
			if(index == '10')
			{
				$('.selonvous').attr('src', img_age);
				if(question4) {}
				else $('.main').moveTo(9);
			}
			
			if(index == '12')
			{
				$('.selonvous').attr('src', img_age);
				if(question5) {}
				else $('.main').moveTo(11);
    		}
			
			if(index == '14')
			{
				$('.selonvous').attr('src', img_age);
				if(question6) {}
				else $('.main').moveTo(13);
			}
		},
		afterMove: function(index)
		{
			if(index == '8')
			{
				$.getJSON('snap_svg/hyblab.json', function(data) {
   					bulle(data.taux_emploi.homme,data.taux_emploi.femme,'%','#graph_slide10');
				});
			}
						
			if(index == '10')
			{
				$.getJSON('snap_svg/hyblab.json', function(data) {
   					compteurHomme(data.tempsPartiel.homme/100,'#compteur12','pourcent12');
   					compteurFemme(data.tempsPartiel.femme/100,'#compteur12bis','pourcent12bis');
			    });
			}
		}
	});
			
	$('.bouton_valider').click(function() {
		valider = true;
		$('.main').moveDown();
	});

	$('.question1').click(function() {
		question1 = true;
		rep = $(this).attr('alt');
		$('.main').moveDown();
	});

	$('.question3').click(function() {
		question3 = true;
		rep = $(this).attr('alt');
		$('.main').moveDown();
	});

	$('.question4').click(function() {
		question4 = true;
		rep = $(this).attr('alt');
		$('.main').moveDown();
	});

    $('.question5').click(function() {
		question5 = true;
		rep = $(this).attr('alt');
		$('.main').moveDown();
	});
	
	$('.question6').click(function() {
		question6 = true;
		rep = $(this).attr('alt');
		$('.main').moveDown();
	});
	
	$('.text_stats').fitText(1.2, {maxFontSize: '32px', minFontSize: '2px'});
	$('.question_slide1').fitText(1, {maxFontSize: '32px', minFontSize: '2px'});
	$('.legend_sexe').fitText(1, {maxFontSize: '32px', minFontSize: '2px'});
	$('.sexe').fitText(1, {maxFontSize: '32px', minFontSize: '2px'});
	$('.tranche_age').fitText(1, {maxFontSize: '20px', minFontSize: '2px'});
	$('.box_titre').fitText(1, {maxFontSize: '20px', minFontSize: '2px'});
	$('#pourcent12').fitText(1, {maxFontSize: '80px', minFontSize: '2px'});
	$('#pourcent12bis').fitText(1, {maxFontSize: '80px', minFontSize: '2px'});
	$('.synopsis').fitText(3, {maxFontSize: '20px', minFontSize: '2px'});
	$('.source').fitText(1, {maxFontSize: '15px', minFontSize: '2px'});
	$('.question').fitText(3, {maxFontSize: '32px', minFontSize: '2px'});
	$('.selonvous').fitText(0.8, {maxFontSize: '50px', minFontSize: '2px'});
	$('#slider_1').slider(
	{
		min:'0',
		max:'10',
		value: '0',
		animate: 'slow',
		slide: function(event, ui)
		{
			$('#current_value').text(ui.value + '€');
			question2 = true;
		}
	});
	
	$('.fancybox').fancybox();
	
/* appel des differents dataviz's */

	$.getJSON('snap_svg/hyblab.json', function(data) {
 		glaconFemme(data.sansDiplome.femme,'#sans_diplome');
   		glaconFemme(data.bepCap.femme,'#bep_cap');
   		glaconFemme(data.bacTechno.femme,'#bac_techno');
   		glaconFemme(data.bac.femme,'#bac_general');
   		glaconFemme(data.CycleUniv1.femme,'#cycle1');
   		glaconFemme(data.CycleUniv2.femme,'#cycle2');
    	colonneFemme(data.ouvrierNonQual.homme,data.ouvrierNonQual.femme,'€','#non_qualif');
    	colonneFemme(data.ouvrierQual.homme,data.ouvrierQual.femme,'€','#qualif');
    	colonneFemme(data.employe.homme,data.employe.femme,'€','#employes');
   		colonneFemme(data.professionInter.homme,data.professionInter.femme,'€','#prof_inter');
   		colonneFemme(data.cadre.homme,data.cadre.femme,'€','#cadres');
       	colonneFemme(data.moyen.homme,data.moyen.femme,'€','#moyenne');
        pyramideHomme(data.conseilJeune.homme,data.conseilJeune.femme,'%','#conseil_jeunes');
        pyramideHomme(data.conseilEtranger.homme,data.conseilEtranger.femme,'%','#conseil_etrangers');
        pyramideHomme(data.conseilHandicap.homme,data.conseilJeune.femme,'%','#conseil_handi');
        pyramideHomme(data.conseilEcole.homme,data.conseilHandicap.femme,'%','#conseil_ecoles');
        pyramideHomme(data.conseilCreche.homme,data.conseilCreche.femme,'%','#conseil_creches');
    });
    
    $('#slide6_h').click(function() {
        $.getJSON('snap_svg/hyblab.json', function(data) {
            glaconHomme(data.sansDiplome.homme,'#sans_diplome');
            glaconHomme(data.bepCap.homme,'#bep_cap');
            glaconHomme(data.bacTechno.homme,'#bac_techno');
        	glaconHomme(data.bac.homme,'#bac_general');
        	glaconHomme(data.CycleUniv1.homme,'#cycle1');
    	    glaconHomme(data.CycleUniv2.homme,'#cycle2');
        });
    });
    
    $('#slide6_f').click(function() {
	 	$.getJSON('snap_svg/hyblab.json', function(data) {
   			glaconFemme(data.sansDiplome.femme,'#sans_diplome');
   			glaconFemme(data.bepCap.femme,'#bep_cap');
   			glaconFemme(data.bacTechno.femme,'#bac_techno');
   			glaconFemme(data.bac.femme,'#bac_general');
   			glaconFemme(data.CycleUniv1.femme,'#cycle1');
   			glaconFemme(data.CycleUniv2.femme,'#cycle2');
		});
    });
    
    $('#slide8_h').click(function() {
     	$.getJSON('snap_svg/hyblab.json', function(data) {
    		colonneHomme(data.ouvrierNonQual.homme,data.ouvrierNonQual.femme,'€','#non_qualif');
        	colonneHomme(data.ouvrierQual.homme,data.ouvrierQual.femme,'€','#qualif');
       		colonneHomme(data.employe.homme,data.employe.femme,'€','#employes');
       		colonneHomme(data.professionInter.homme,data.professionInter.femme,'€','#prof_inter');
            colonneHomme(data.cadre.homme,data.cadre.femme,'€','#cadres');
            colonneHomme(data.moyen.homme,data.moyen.femme,'€','#moyenne');
        });
    });
    
    $('#slide8_f').click(function() {
     	$.getJSON('snap_svg/hyblab.json', function(data) {
    		colonneFemme(data.ouvrierNonQual.homme,data.ouvrierNonQual.femme,'€','#non_qualif');
    		colonneFemme(data.ouvrierQual.homme,data.ouvrierQual.femme,'€','#qualif');
    		colonneFemme(data.employe.homme,data.employe.femme,'€','#employes');
    		colonneFemme(data.professionInter.homme,data.professionInter.femme,'€','#prof_inter');
    		colonneFemme(data.cadre.homme,data.cadre.femme,'€','#cadres');
        	colonneFemme(data.moyen.homme,data.moyen.femme,'€','#moyenne');
        });
    });

    $('#slide14_h').click(function() {
     	$.getJSON('snap_svg/hyblab.json', function(data) {
        	pyramideHomme(data.conseilJeune.homme,data.conseilJeune.femme,'%','#conseil_jeunes');
        	pyramideHomme(data.conseilEtranger.homme,data.conseilEtranger.femme,'%','#conseil_etrangers');
        	pyramideHomme(data.conseilHandicap.homme,data.conseilJeune.femme,'%','#conseil_handi');
        	pyramideHomme(data.conseilEcole.homme,data.conseilHandicap.femme,'%','#conseil_ecoles');
        	pyramideHomme(data.conseilCreche.homme,data.conseilCreche.femme,'%','#conseil_creches');
        });
    });
    
    $('#slide14_f').click(function() {
     	$.getJSON('snap_svg/hyblab.json', function(data) {
    		pyramideFemme(data.conseilJeune.homme,data.conseilJeune.femme,'%','#conseil_jeunes');
    		pyramideFemme(data.conseilEtranger.homme,data.conseilEtranger.femme,'%','#conseil_etrangers');
    		pyramideFemme(data.conseilHandicap.homme,data.conseilJeune.femme,'%','#conseil_handi');
    		pyramideFemme(data.conseilEcole.homme,data.conseilHandicap.femme,'%','#conseil_ecoles');
    		pyramideFemme(data.conseilCreche.homme,data.conseilCreche.femme,'%','#conseil_creches');
        });
    });
});
