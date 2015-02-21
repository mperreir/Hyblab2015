"use strict";
(function ($) {
   var chartColors = ['#963b42','#fa5a65','#784f71','#4a3247','#16a689','#65d6be'];
   var maxOpacity = 1;
   var minOpacity = 0.75;
   var listePictos= ['media/picto/traitementdechets.svg', 'media/picto/agriculture-sylviculture.svg', 'media/picto/industrie-manufacturiere.svg', 'media/picto/industrie-energie.svg', 'media/picto/residentiel-tertiaire-institutionnel.svg', 'media/picto/transports.png'];
   var datasetInit = [0,0,0,0,0,0,0];
   var convertedDataSet1992 = [];
   var convertedDataSet1997 = [];
   var convertedDataSet2002 = [];
   var convertedDataSet2007 = [];
   var convertedDataSet2012 = [];
   var convertedDataSetName = [];
   
   var sunburstWidth = 600,
       sunburstHeight = 800;
   var arcMin = 80;
   var arcWidth = 40;
   var arcPad = 10;
   
   var animationDuration = 1000;
   var delayDuration = 50;
   var arcSelected;
   var dataset;
   var lastOver;
   
   d3.csv("data/page1.csv", function(d) {
      return {
         name: d.name,
         annee1992: +d.annee1992, //convert to number
         annee1997: +d.annee1997, //convert to number
         annee2002: +d.annee2002, //convert to number
         annee2007: +d.annee2007, //convert to number
         annee2012: +d.annee2012 //convert to number
      };
   }, function(error, dataset) {    
      for(var i in dataset){
         convertedDataSetName[i] = dataset[dataset.length-1-i].name
         convertedDataSet1992[i] = dataset[dataset.length-1-i].annee1992;
         convertedDataSet1997[i] = dataset[dataset.length-1-i].annee1997;
         convertedDataSet2002[i] = dataset[dataset.length-1-i].annee2002;
         convertedDataSet2007[i] = dataset[dataset.length-1-i].annee2007;
         convertedDataSet2012[i] = dataset[dataset.length-1-i].annee2012;
      }
      dataset = dataset;
   });
   
   var svg = d3.select("#chartPage1").append("svg")
             .attr("width", 400)
             .attr("height", 350)
             
   var g = svg.append("g")
             .attr("transform", "translate(70,333)");
     
   var render = function(dataset) {
      if(dataset==[]) return; 
      
      var scale = d3.scale.linear()
                 .domain([0, d3.max(convertedDataSet1992)*2]) 
                 .range([0, Math.PI]); 
         
      var drawArc = d3.svg.arc()
                 .innerRadius(function(d, i) {return  arcMin + i*(arcWidth) + arcPad;})
                 .outerRadius(function(d, i) {return arcMin + (i+1)*(arcWidth);})
                 .startAngle(0)
                 .endAngle(function(d) {return scale(d);});

      var arcs = g.selectAll("path").data(dataset);
      
      function arc2Tween(d, indx) {                
          var interp = d3.interpolate(this._current, d);
          this._current = d;
          
          return function(t) {
              var tmp = interp(t);
              return drawArc(tmp, indx);
          }
      };
      
      arcs.transition()
              .delay(function (d,i){return i * delayDuration;})
              .duration(animationDuration)
              .attr("fill", function(d,i){return chartColors[i];})
              .attrTween("d", arc2Tween);
              
      arcs.enter().append("svg:path")
              .attr("fill",    function(d,i){return chartColors[i];})
              .attr("data-index", function(d, i) {return i;})
              .attr("class","arc")
              .attr("d", drawArc)
              .attr("fill-opacity",minOpacity)
              .on("mouseover", function(data,i) {
                  $('#pictoDataPage1').attr("src", listePictos[i]);
                  $('#numberDataPage1').text(data+"%");
                  $('#sourceEmission').text(convertedDataSetName[$(this).attr('data-index')]);
                  $(this).attr("fill-opacity",maxOpacity);
                  lastOver = $(this);
              })
              .each(function(d){this._current = d;})

      var arcTimeout = setTimeout(function() {
          arcs.attr("class","arc animationComplete");
      }, animationDuration+delayDuration*dataset.length);
   }
   
   var anneePage1 = g.append("text")
          .attr("x",-60)
          .attr("y",10)
          .attr("id","page1-annee");

   //Slider
   $(".tl-circ").on('click', function () {
      goToIndex($(this).attr('data-index')-1);
   });
   
   function goToIndex(index) {
      $(".tl-circ").removeClass("selected");
      
      $(".tl-circ").each(function( currentIndex ) {
         if(currentIndex < index+1){
          $(this).addClass("selected");
         }
      });
      
      $('#timelineLineProgression').animate({
         width: (16.66666667 * (index+1))+"%"
      }, animationDuration, 'linear');
      
      if (index == 0) {
         anneePage1.text("1992");
         if(lastOver) {
            $('#numberDataPage1').text(convertedDataSet1992[lastOver]+"%");
         }
         render(convertedDataSet1992);
      }
      else if (index == 1) {
         anneePage1.text("1997");
         if(lastOver) {
           $('#numberDataPage1').text(convertedDataSet1997[lastOver]+"%");
         }
         render(convertedDataSet1997);
      }
      else if (index == 2) {
         anneePage1.text("2002");
         if(lastOver) {
            $('#numberDataPage1').text(convertedDataSet2002[lastOver]+"%");
         }
         render(convertedDataSet2002);
      }
      else if (index == 3) {
         anneePage1.text("2007");
         if(lastOver) {
            $('#numberDataPage1').text(convertedDataSet2007[lastOver]+"%");
         }
         render(convertedDataSet2007);
      }
      else if (index == 4) {
         anneePage1.text("2012");
         if(lastOver) {
            $('#numberDataPage1').text(convertedDataSet2012[lastOver]+"%");
         }
         render(convertedDataSet2012);
      }
   }
   
   $("#page1").on("inViewport", function() {
      pageOnLoad();
   });  
  
   $("#page1").on("newPosition", function(event,newPosition) {
      goToIndex(newPosition-1);
   });  
  
   // Pour afficher les animations de lancement 
   function pageOnLoad(){
      render(datasetInit);
      render(convertedDataSet1992);
   }
   
}(jQuery));