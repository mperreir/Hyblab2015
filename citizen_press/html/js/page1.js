"use strict";
function Page1(){
   this.chartColors = ['#963b42','#fa5a65','#784f71','#4a3247','#16a689','#65d6be'];
   this.maxOpacity = 1;
   this.minOpacity = 0.75;
   this.listePictos= ['media/picto/traitementdechets.svg', 'media/picto/agriculture-sylviculture.svg', 'media/picto/industrie-manufacturiere.svg', 'media/picto/industrie-energie.svg', 'media/picto/residentiel-tertiaire-institutionnel.svg', 'media/picto/transports.png'];
   this.fileName = "data/page1.csv";
   this.sunburstWidth = 410,
   this.sunburstHeight = 350,
   this.arcMin = 80,
   this.arcWidth = 40, 
   this.arcPad = 10;
   this.anneePage1Height = 120;
   this.anneePage1Width = 20;
   this.groups = ["name","annee1992","annee1997","annee2002","annee2007","annee2012"]
   this.animationDuration = 300;
   this.delayDuration = 50;
   this.arcSelected;
   this.dataset;
   this.lastOver;
   this.dispatch = d3.dispatch("load");

   this.init();
}

Page1.prototype = {
   init: function () {
      var self = this;
      var viewBoxHeight = (this.anneePage1Height/2 + this.sunburstHeight)*2;
      var viewBoxWidth = (this.anneePage1Width/2 + this.sunburstWidth);
      
      var svg = d3.select("#chartPage1").append("svg")
            .attr("width", '100%')
             .attr("height", '100%')
             .attr('viewBox','0 0 '+Math.min(viewBoxWidth,viewBoxHeight)+' '+Math.min(viewBoxWidth,viewBoxHeight))
             .attr('preserveAspectRatio','xMinYMin')
         
      this.g = svg.append("g")
             .attr("transform", "translate(" + Math.min(this.sunburstWidth,this.sunburstHeight) / 5 + "," + Math.min(this.sunburstWidth,this.sunburstHeight) + ")")

      var anneePage1 = this.g.append("text")
          .attr("x",-this.anneePage1Height/2)
          .attr("y",-this.anneePage1Width/2)
          .attr("id","page1-annee");
      
		this.compteurAnnee = new Compteur(anneePage1, {initialValue: 1992, durationAnimation: 100});
      
      this.datasetInit = [0,0,0,0,0,0,0];
      this.convertedDataSet1992 = [];
      this.convertedDataSet1997 = [];
      this.convertedDataSet2002 = [];
      this.convertedDataSet2007 = [];
      this.convertedDataSet2012 = [];
      this.convertedDataSetName = [];
      this.initListener();
      this.loadFile();
  },
  loadFile: function() {
     var self = this;
      d3.csv(this.fileName, function(d) {
         return d;
      }, function(error, dataset) {  
         if (error) throw error;
         self.stateById = d3.map();
         
         for(var i in dataset){
            self.convertedDataSetName[i] = dataset[dataset.length-1-i].name;
            self.convertedDataSet1992[i] = dataset[dataset.length-1-i].annee1992;
            self.convertedDataSet1997[i] = dataset[dataset.length-1-i].annee1997;
            self.convertedDataSet2002[i] = dataset[dataset.length-1-i].annee2002;
            self.convertedDataSet2007[i] = dataset[dataset.length-1-i].annee2007;
            self.convertedDataSet2012[i] = dataset[dataset.length-1-i].annee2012;
         }
         console.log("fini");
         console.log(self.convertedDataSet1992);
         self.dispatch.load();
      });
  },
  initListener: function() {
      var self = this;
      this.dispatch.on("load", function() {
         return self.pageOnLoad();
      });
      $("#page1").on("newPosition", function(event,newPosition) {
         self.goToIndex(newPosition, self.getButtonByIndex(newPosition).attr('data-value'));
      });
      $(".tl-circ").on('click', function () {
         self.goToIndex($(this).attr('data-index')-1, $(this).attr('data-value'));
         $(window).trigger("newPositionVoiture", [$(this).attr('data-index')-1]);
      });
   },
   render: function(dataset) {
      var self = this;
      if(dataset==[]) return; 
      
      var scale = d3.scale.linear()
                 .domain([0, d3.max(dataset)*2]) 
                 .range([0, Math.PI]); 
         
      var drawArc = d3.svg.arc()
                 .innerRadius(function(d, i) {return  self.arcMin + i*(self.arcWidth) + self.arcPad;})
                 .outerRadius(function(d, i) {return self.arcMin + (i+1)*(self.arcWidth);})
                 .startAngle(0)
                 .endAngle(function(d) {return scale(d);});
      
      if(this.lastOver) {
         this.lastOver.mouseover();
      }
      var arcs = this.g.selectAll("path").data(dataset);
      
      function arc2Tween(d, indx) {                
          var interp = d3.interpolate(this._current, d);
          this._current = d;
          
          return function(t) {
              var tmp = interp(t);
              return drawArc(tmp, indx);
          }
      };
      
      arcs.transition()
              .delay(function (d,i){return i * self.delayDuration;})
              .duration(self.animationDuration)
              .attr("fill", function(d,i){return self.chartColors[i];})
              .attrTween("d", arc2Tween);
              
      arcs.enter().append("svg:path")
              .attr("fill",    function(d,i){return self.chartColors[i];})
              .attr("data-index", function(d, i) {return i;})
              .attr("class","arc")
              .attr("d", drawArc)
              .attr("fill-opacity",this.minOpacity)
              .on("mouseover", function(data,i) {
                  self.mouseHover($(this));
              })
              .each(function(d){this._current = d;});
   },
   mouseHover: function(element) {
      $('#pictoDataPage1').attr("src", this.listePictos[$(element).attr("data-index")]);
      this.updateData(this.convertedDataSet[$(element).attr("data-index")]);
      $('#sourceEmission').text(this.convertedDataSetName[element.attr('data-index')]);
      if(this.lastOver) {
         this.lastOver.attr("fill-opacity", this.minOpacity);
      }
      element.attr("fill-opacity",this.maxOpacity);
      this.lastOver = element; 
      this.lastIndexOver = element;
   },
   updateData: function (data) {
      $('#numberDataPage1').text(data+"%");
   },
   getButtonByIndex: function(index) {
      var button;
      $(".tl-circ").each(function(currentIndex) {
         if(currentIndex == index){
            button = $(this);
         }
      });
      return button;
   },
   goToIndex: function(index, year) {
      $(".tl-circ").removeClass("selected");
      $(".tl-circ").each(function(currentIndex) {
         if(currentIndex < index+1){
          $(this).addClass("selected");
         }
      });
      
      $('#timelineLineProgression').animate({
         width: (20 * (index+1))- 10+"%"
      }, this.animationDuration, 'linear');
      
      if (index == 0) {
         this.convertedDataSet = this.convertedDataSet1992;
      }
      else if (index == 1) {
         this.convertedDataSet = this.convertedDataSet1997;
      }
      else if (index == 2) {
         this.convertedDataSet = this.convertedDataSet2002;
      }
      else if (index == 3) {
         this.convertedDataSet = this.convertedDataSet2007;
      }
      else if (index == 4) {
         this.convertedDataSet = this.convertedDataSet2012;
      } 
      this.render(this.convertedDataSet);
      if(this.lastOver) {
         this.mouseHover(this.lastIndexOver);
      }
      this.compteurAnnee.setValue(year);
   },
   pageOnLoad: function(){
      this.render(this.datasetInit);
      this.goToIndex(0,"1992")
   }
}