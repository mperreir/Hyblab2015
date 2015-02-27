/**
 * @author Claire REMY
 * 
 * Ajax request to load the data corresponding to the selected classification.
 */
$('#creationPostes, #variationNbEntreprises, #nbEmployes, #variationEffectifs, #creationEntreprises').on('click', function(e) {
    var methode = $(this).attr('id');
    $('#selectionPodium').html($(this).html());
    
    $.getJSON('matchfinal?methode=' + methode, function(data) {
        if(data) {
            $('#premiereVille').text(data[0].numero1);
            $('#deuxiemeVille').text(data[0].numero2);
            $('#troisiemeVille').text(data[0].numero3);
        }
    });
});
