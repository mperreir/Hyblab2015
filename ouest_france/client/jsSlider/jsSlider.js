function genererSlider(){
var mySwiper = new Swiper('.swiper-container', {
    scrollContainer:true,
    mousewheelControl : true,
    mode:'vertical',
    //Enable Scrollbar
    scrollbar: {
      container :'.swiper-scrollbar',
      hide: false,
      draggable: false
    }
  })
}

function genererSlider2(){
var mySwiper2 = new Swiper('.swiper-container2', {
    scrollContainer:true,
    mousewheelControl : true,
    mode:'vertical',
    //Enable Scrollbar
    scrollbar: {
      container :'.swiper-scrollbar2',
      hide: false,
      draggable: false
    }
  })
}