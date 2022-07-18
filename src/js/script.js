$(document).ready(function () {
  $(".carousel__inner").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
      prevArrow: '<button type="button" class="slick-prev"><img src="img/carousel/chevron-left-solid.png" alt="left-arrow"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/chevron-right-solid.png" alt="right-arrow"></button>',
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  arrows: false,
                  dots:false,
                
              }
          }
      ]
  });
});

