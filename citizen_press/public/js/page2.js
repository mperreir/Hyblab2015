(function ($) {
    var dataPartie2 = [["Vélo",0,0],["Bus",130,4.9],["Train Grande Vitesse",13,0.49],["Tramway",20,0.75],["Voiture Essence", 135,5.09]];
    var maxVolume = 200;
    var animationDuration = 100;
    
    showDataOf(0);
    
    $("#page2").on("newPosition", function(event,newPosition) {
        showDataOf(newPosition-1);
    });  
    $('.boutonPage2').click(function() {
        showDataOf($(this).attr('data-index'));
    });
    
    function showDataOf(index) {
        console.log(index);
        if (index == -1) {
            return showDataOf(0);
        }
        $(".boutonPage2").attr("class", "boutonPage2 col-xs-2");
        $(".boutonPage2").each(function( currentIndex ) {
            if(currentIndex == index){
                $(this).attr("class", "boutonPage2 col-xs-2 selected");
            }
        });
        $('#dataPage2Un').text("1 ");
        $('#dataPage2Transport').text(dataPartie2[index][0] + " consomme ");
        $('#dataPage2Consommation').text(dataPartie2[index][1]+"g de CO2/km");
        $('#conversionPage2Consommation').text(dataPartie2[index][2]+" Litre pétrole/100 km");

        var newPercentage = 100*(dataPartie2[index][1]/maxVolume);
        changerNiveauEssence(newPercentage);
    }
    
    function changerNiveauEssence (pourcentage) {
        var pourcentageInverse = 100-pourcentage;
    
    	$('#fondEssence').animate({
            height: pourcentageInverse+"%"
        }, animationDuration);
    }
}(jQuery));