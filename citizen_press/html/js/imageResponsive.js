"use strict";
function ImageResponsive(div, options){
    this.div= div;
	this.options = $.extend(true, {}, {
		ratio: 1, //Par defaut l'image est aussi large que haute. > 1 veut dire que l'image est plus large que haute et < 1 plus haute que large 
	}, options);
    this.initListener();
};
ImageResponsive.prototype = {
	update: function (){
		this.resize();
	},
    initListener: function() {
        var self = this;
        $(window).on('load resize', function() {   
            self.resize();
        });
    },
    resize: function() {
		var self = this;
        this.div.each(function() {
            var container = $(this).parent();
            $(this).css({
                'width' : Math.min(container.width()*self.options.ratio,container.height()*self.options.ratio),
                'height' : Math.min(container.width()*self.options.ratio,container.height()*self.options.ratio),
            });   
        });
    },
};