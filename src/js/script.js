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

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab__active)', function() {
    $(this)
    .addClass('catalog__tab__active').siblings().removeClass('catalog__tab__active')
    .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

 

  function toggleClass(item) { 
    $(item).each(function (i) { 
      $(this).on('click', function (e) { 
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content__active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list__active');
      })
    })
  }

  toggleClass('.catalog-item__link');
  toggleClass('.catalog-item__back');

  //Modal
$('[data-modal=consultation]').on('click', function () { 
  $('.overlay,#consultation').fadeIn()
})
$('.modal__close').on('click', function () { 
  $('.overlay,#consultation,#thanks,#order').fadeOut()
})

$('.button_mini').on('click', function () { 
  $('.overlay,#order').fadeIn()
})

$('.button_mini').each(function (i) { 
  $(this).on('click', function () { 
    $('#order .modal__subtitle').text($('.catalog-item__title').eq(i).text())
  })
})

// $('.button_consultation').on('click', function () {
//   $('.overlay,#thanks').fadeIn()
// })

  $('.button_consultation').on('click', function () { 
    $('#order').fadeOut()
})
});



