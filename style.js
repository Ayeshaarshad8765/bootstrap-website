let navn= document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        navn.classList.add("header-scrolled");
    }else{
        navn.classList.remove("header-scrolled")
    }
}
//owl carrousel
$(document).ready(function(){
    $(".client-slider-section").owlCarousel({
        items: 4,
        loop: true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive: {
            0 : {
                items: 2
            },
            // breakpoint from 480 up
            600 : {
                item: 3
            },
            // breakpoint from 768 up
            1000 : {
                items: 6
        }
        }
    })
})


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})


$(document).ready(function(){
    $(".custumer-logos").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }
        ]

    });
});
$(document).ready(function(){
$('.customer-logos').slick({
    
    dots: true,
    infinite: false,
    autoplay:true,
    autoplayspeed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 4,
    
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 4,
        
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });