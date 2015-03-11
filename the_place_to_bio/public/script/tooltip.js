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
    
    this.visible = false;
    
    
}

Tooltip.prototype = {
    show:function(){
        if(this.visible) return;
        this.visible = true;
        $(this.div).fadeIn();
    },
    change: function(parent, text){
        var self = this;
        if(!this.visible){
            this.update(parent, text)
        }
        else{
            $(this.div).fadeOut(250, function(){
                self.update(parent, text);
                $(self.div).fadeIn(250);
            });
        }
    },
    update: function(parent, text){
        this.div.innerHTML = text;
        var p = $(parent);
        var offset = p.offset();
        var x = parseInt(offset.left) - parseInt($(this.div).width())/2;
        var y = parseInt(offset.top) + parseInt($(this.div).height()) + 30;
        $(this.div).css('left',x+"px");
        $(this.div).css('top',y+"px");
    },
    hide: function(){
        if(!this.visible) return;
        this.visible = false;
        $(this.div).fadeOut();
    }
}