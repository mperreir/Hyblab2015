var stop = 0;

$("#slider").slider({
    animate: "slow",
    value:4, min:1, max:4, step:1
});
$( "#slider" ).css('background', 'rgb(18,126,182)');
$( "#slider" ).css('border', '0px');

$("#slider").slider({
    change: function( event, ui ) {
        if(ui.value==1){
            document.getElementById("divCarte").innerHTML='<img src="imgs/imageCarte/1v.png" id="imageCarte">';
        }
        else if(ui.value==2){
            document.getElementById("divCarte").innerHTML='<img src="imgs/imageCarte/2v.png" id="imageCarte">';
        }
        else if(ui.value==3){
            document.getElementById("divCarte").innerHTML='<img src="imgs/imageCarte/3v.png" id="imageCarte">';
        }
        else{
            document.getElementById("divCarte").innerHTML='<img src="imgs/imageCarte/5v.png" id="imageCarte">';
        }
    }
});

var x;

$(function AutoSlider() {
	if(stop==0){
	    setTimeout(function () {
	        if($('#slider').slider("value") == 1){
	            $("#slider").slider("value", $('#slider').slider("value") + 1);
	            x=1;
	        }
	        else if($('#slider').slider("value") == 4){
	            $("#slider").slider("value", $('#slider').slider("value") - 1);
	            x=2;
	        }
	        else{
	            if(x==1) $("#slider").slider("value", $('#slider').slider("value") + 1);
	            else $("#slider").slider("value", $('#slider').slider("value") - 1);
	        }
	    }, 3000);
	    setTimeout(AutoSlider, 3000);
	}
});


function stopSlider(){
	stop = 1;
	document.getElementById("stop").style.opacity = "0.3";
}

