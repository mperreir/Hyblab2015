/*
    Gestionnaire de Tooltip
*/
"use strict";


function Tooltip(application, div){
    
    this.application = application;
    
    
    this.div = document.createElement("div");
    this.div.className="tooltip";
    
    div.appendChild(this.div);
    
    
    $(this.div).hide();
    
    
}

Tooltip.prototype = {
    show:function(parent, text){
        var self = this;
        $(this.div).fadeOut(1000, function(){
            self.change(parent, text);
        });
    },
    change: function(parent, text){
        this.div.innerHTML = text;
        var p = $(parent);
        var offset = p.offset();
        var x = parseInt(offset.left) - parseInt($(this.div).width())/2;
        var y = parseInt(offset.top) + parseInt($(this.div).height()) + 30;
        $(this.div).css('left',x+"px");
        $(this.div).css('top',y+"px");
        $(this.div).fadeIn(1000);  
    },
    hide: function(){
        $(this.div).fadeOut();
    }
}