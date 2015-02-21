google.load("visualization", "1", {packages:["geochart"]});
google.setOnLoadCallback(drawRegionsMap);

var nomsPays2013 = [], nomsPays2011 = [], nomsPays2009 = [], nomsPays2007 = [], nomsPays2005 = [];

function drawRegionsMap() {

var moduleC = moduleCSV();

moduleC.readTextFile('data/classement_global.csv', function (csvString) {

  var i, ligne, c;

  // Récupération des données (globales, cad somme pour tous les sports)
  var lines = csvString.split('\n');
  nomsPays2013.push(['Country', 'Label', 'Rang']);
  nomsPays2011.push(['Country', 'Label', 'Rang']);
  nomsPays2009.push(['Country', 'Label', 'Rang']);
  nomsPays2007.push(['Country', 'Label', 'Rang']);
  nomsPays2005.push(['Country', 'Label', 'Rang']);

  lines.forEach(function(line)
  {
    c = line.split(';');
    if (c[0]  == "2013")
      nomsPays2013.push([c[1], c[2], parseInt(c[7])]);
    else if (c[0]  == "2011")
      nomsPays2011.push([c[1], c[2], parseInt(c[7])]);
    else if (c[0]  == "2009")
      nomsPays2009.push([c[1], c[2], parseInt(c[7])]);
    else if (c[0]  == "2007")
      nomsPays2007.push([c[1], c[2], parseInt(c[7])]);
    else if (c[0]  == "2005")
      nomsPays2005.push([c[1], c[2], parseInt(c[7])]);
  });

  var options = {
    colorAxis:{
          colors:['#F6A713', '#7F7F7E', '#A56A42', '#3B6664'],
          minValue: 1,
          maxValue:4},
    legend: 'none',
    keepAspectRatio: 'true',
    datalessRegionColor: 'white',
    width: '350',
    backgroundColor: { fill:'transparent' }
  };

  var data2013 = google.visualization.arrayToDataTable(nomsPays2013);
  var chart2013 = new google.visualization.GeoChart(document.getElementById('carte2013'));
  chart2013.draw(data2013, options);
 
  var data2011 = google.visualization.arrayToDataTable(nomsPays2011);
  var chart2011 = new google.visualization.GeoChart(document.getElementById('carte2011'));
  chart2011.draw(data2011, options);
  
  var data2009 = google.visualization.arrayToDataTable(nomsPays2009);
  var chart2009 = new google.visualization.GeoChart(document.getElementById('carte2009'));
  chart2009.draw(data2009, options);
  
  var data2007 = google.visualization.arrayToDataTable(nomsPays2007);
  var chart2007 = new google.visualization.GeoChart(document.getElementById('carte2007'));
  chart2007.draw(data2007, options);
  
  var data2005 = google.visualization.arrayToDataTable(nomsPays2005);
  var chart2005 = new google.visualization.GeoChart(document.getElementById('carte2005'));
  chart2005.draw(data2005, options);
});
}