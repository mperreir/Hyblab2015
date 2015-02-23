
function moveID() {
  if( $( "#poleID" ).hasClass("opened")){
      closeSidepage();
  }
  else{
      openSidepage()
  }
};

function openSidepage() {  
    var button = document.getElementById("move_poleID");
    var div = $( "#poleID" )
    div.addClass("opened");
    div.animate({  
        left: '2%'  
    }, 400, 'easeOutBack');   
}  
  
function closeSidepage(){ 
    var button = document.getElementById("move_poleID");
    var div = $("#poleID")
    div.removeClass("opened");  
    div.animate({  
        left: '-23%'  
    }, 400, 'easeOutQuint');   
}  
