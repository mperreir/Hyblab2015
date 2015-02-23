$('#creationPostes, #ratioEntreprises, #nbEmployes, #variationEffectifs, #ratioEffectiffs').on('click', function(e) {
    var methode = $(this).attr('id');
    $.getJSON('matchfinal?methode=' + methode, function(data) {
        $('#premiereVille').text(data[0].numero1);
        $('#deuxiemeVille').text(data[0].numero2);
        $('#troisiemeVille').text(data[0].numero3);
    });
});
