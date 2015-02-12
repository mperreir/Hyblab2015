(function ($) {
    var json = '[{"name":"Israel","dial_code":"+972","code":"IL"},{"name":"Afghanistan","dial_code":"+93","code":"AF"},{"name":"Albania","dial_code":"+355","code":"AL"},{"name":"Algeria","dial_code":"+213","code":"DZ"},{"name":"AmericanSamoa","dial_code":"+1 684","code":"AS"},{"name":"Andorra","dial_code":"+376","code":"AD"},{"name":"Angola","dial_code":"+244","code":"AO"},{"name":"Anguilla","dial_code":"+1 264","code":"AI"},{"name":"Antigua and Barbuda","dial_code":"+1268","code":"AG"},{"name":"Argentina","dial_code":"+54","code":"AR"},{"name":"Armenia","dial_code":"+374","code":"AM"},{"name":"Aruba","dial_code":"+297","code":"AW"},{"name":"Australia","dial_code":"+61","code":"AU"},{"name":"Austria","dial_code":"+43","code":"AT"},{"name":"Azerbaijan","dial_code":"+994","code":"AZ"},{"name":"Bahamas","dial_code":"+1 242","code":"BS"},{"name":"Bahrain","dial_code":"+973","code":"BH"},{"name":"Bangladesh","dial_code":"+880","code":"BD"},{"name":"Barbados","dial_code":"+1 246","code":"BB"}]';
    
    var data = JSON.parse(json);
    data.map(function(d) { return console.log(d);});
    
    var gdpDataAutres = {
      "GB": 1.7,
      "SE": 2.3,
      "ES": 1.3,
      "SI": 0,
      "SK": 0.2,
      "RO": 2.3,
      "PT": 0.5,
      "PL": 0.2,
      "NL": 3.3,
      "LT": 0,
      "LV": 0.8,
      "IT": 1.9,
      "IE": 0.9,
      "HU": 1.6,
      "GR": 2.2,
      "DE": 0,
      "FR": 2.7,
      "FI": 1.8,
      "EE": 1.9,
      "DK": 1.5,
      "CZ": 1.6,
      "HR": 1.5,
      "BG": 3,
      "BE": 2.2,
      "AT": 0
    };
    
     var gdpDataDeuxRoues = {
       "GB": 2.2,
      "SE": 0.3,
      "ES": 13,
      "SI": 0.9,
      "SK": 0,
      "RO": 0,
      "PT": 0,
      "PL": 0.6,
      "NL": 2.8,
      "LT": 0,
      "LV": 0,
      "IT": 8.4,
      "IE": 0.6,
      "HU": 0.7,
      "GR": 6.7,
      "DE": 0.8,
      "FR": 2.7,
      "FI": 0,
      "EE": 0,
      "DK": 0,
      "CZ": 0.3,
      "HR": 0.2,
      "BG": 0,
      "BE": 0.6,
      "AT": 1.2
    };
    
     var gdpDataMarche = {
       "GB": 10,
      "SE": 16.3,
      "ES": 15.9,
      "SI": 11,
      "SK": 11.4,
      "RO": 8.1,
      "PT": 10.1,
      "PL": 5,
      "NL": 2.7,
      "LT": 11.6,
      "LV": 14.5,
      "IT": 7.2,
      "IE": 13.5,
      "HU": 6.4,
      "GR": 12.4,
      "DE": 5.5,
      "FR": 11.7,
      "FI": 11.9,
      "EE": 5.6,
      "DK": 5.2,
      "CZ": 5.4,
      "HR": 12.4,
      "BG": 12,
      "BE": 8.9,
      "AT": 9
    };
    
     var gdpDataTransportsPublics = {
      "GB": 59.6,
      "SE": 47.6,
      "ES": 54.3,
      "SI": 29.2,
      "SK": 56.1,
      "RO": 58.6,
      "PT": 47.6,
      "PL": 60,
      "NL": 22,
      "LT": 36.1,
      "LV": 59.7,
      "IT": 31.6,
      "IE": 28.9,
      "HU": 58.9,
      "GR": 30.8,
      "DE": 42.9,
      "FR": 67,
      "FI": 50.1,
      "EE": 52.2,
      "DK": 15.4,
      "CZ": 65.9,
      "HR": 48.7,
      "BG": 52,
      "BE": 45.9,
      "AT": 53
    };
    
     var gdpDataVoiture = {
      "GB": 17.1,
      "SE": 14.4,
      "ES": 15.2,
      "SI": 43.2,
      "SK": 31.1,
      "RO": 29.8,
      "PT": 41,
      "PL": 33.5,
      "NL": 23.6,
      "LT": 51.3,
      "LV": 24.2,
      "IT": 49.9,
      "IE": 51.4,
      "HU": 26.7,
      "GR": 46.2,
      "DE": 32.2,
      "FR": 10.7,
      "FI": 25.9,
      "EE": 38.8,
      "DK": 18.4,
      "CZ": 26.4,
      "HR": 34,
      "BG": 33,
      "BE": 38.6,
      "AT": 32.6
    };
    
    var gdpDataVelo = {
        "GB": 9.1,
        "SE": 18.7,
        "ES": 0.3,
        "SI": 15.4,
        "SK": 1.2,
        "RO": 0.7,
        "PT": 0.8,
        "PL": 0.6,
        "NL": 45.6,
        "LT": 0.8,
        "LV": 0.9,
        "IT": 1,
        "IE": 4.8,
        "HU": 5.7,
        "GR": 1.6,
        "DE": 17.2,
        "FR": 5.3,
        "FI": 10,
        "EE": 0.6,
        "DK": 59.5,
        "CZ": 0.1,
        "HR": 3.1,
        "BG": 0,
        "BE": 3.9,
        "AT": 3.7
    };

    var MonGdp = gdpDataVoiture;
    var mamap = new jvm.Map({
         map: 'europe_mill_en',
         container: $('#europe-map'),
              zoomAnimate: false,
              zoomOnScroll: false,
              zoomMin: 1,
              zoomMax: 1,
              backgroundColor: '#1A0D2B',
              regionStyle: { initial: { fill: '#f0f0dd' } },
          series: {
            regions: [{
                scale: ['#fabbbf','#fa9ba1','#fa7883','#fa5762', '#ba4147','#7a2b30'],
                normalizeFunction: 'polynomial',
                min: 0,
                max: 100,
                legend: {vertical: true}
            }]
          },
          onRegionTipShow: function(e, el, code){
            if (MonGdp[code] !== undefined) {
                el.html(el.html()+' ('+MonGdp[code]+' %)');
            } else {
                el.html(el.html()+'(Proportion inconnue)');
            }
        },
    });
    
    showDataOf(0);
    
    function showDataOf(index) {
        $(".boutonPage5").attr("class", "boutonPage5 col-xs-4 col-sm-2");
        $(".boutonPage5").each(function(currentIndex) {
            if(currentIndex == index){
                $(this).attr("class", "boutonPage5 col-xs-4 col-sm-2 selected");
            }
        });
        if(index == 4) {
             mamap.series.regions[0].setValues(gdpDataVoiture);
             mamap.series.regions[0].scale.setMin(minValue(gdpDataVoiture));
             mamap.series.regions[0].scale.setMax(maxValue(gdpDataVoiture));
             MonGdp = gdpDataVoiture;
        } else if(index == 1) {
             mamap.series.regions[0].setValues(gdpDataTransportsPublics);
             mamap.series.regions[0].scale.setMin(minValue(gdpDataTransportsPublics));
             mamap.series.regions[0].scale.setMax(maxValue(gdpDataTransportsPublics));
            MonGdp = gdpDataTransportsPublics;
        } else if(index == 2) {
             mamap.series.regions[0].setValues(gdpDataAutres);
             mamap.series.regions[0].scale.setMin(minValue(gdpDataAutres));
             mamap.series.regions[0].scale.setMax(maxValue(gdpDataAutres));
            MonGdp = gdpDataAutres;
        } else if(index == 0) {
             mamap.series.regions[0].setValues(gdpDataVelo);
             mamap.series.regions[0].scale.setMin(minValue(gdpDataVelo));
             mamap.series.regions[0].scale.setMax(maxValue(gdpDataVelo));
            MonGdp = gdpDataVelo;
        } else if(index == 3) {
             mamap.series.regions[0].setValues(gdpDataMarche);
             mamap.series.regions[0].scale.setMin(minValue(gdpDataMarche));
             mamap.series.regions[0].scale.setMax(maxValue(gdpDataMarche));
             MonGdp = gdpDataMarche;
        } else {
            console.error("Probleme d'index");
        }
    }
    
    $("#page4").on("newPosition", function(event,newPosition) {
        showDataOf(newPosition-1);
    }); 
    
    $('.boutonPage5').click(function() {
        showDataOf($(this).attr('data-index'));
    });
    
    function maxValue(arr){
        var max = 0;                
        jQuery.map(arr, function (obj) {
          if (obj > max)
            max = obj;
        });
        return max;
    }
    
    function minValue(arr){
        var min = 100;                
        jQuery.map(arr, function (obj) {
          if (obj < min)
            min = obj;
        });
        return min;
    }
}(jQuery));