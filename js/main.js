$(window).on("load", function () {
  $(".preloader").fadeOut("500", function () {
    $(this).remove();
    $("body").removeClass("overflow");
  });


});
$(document).ready(function(){

  $('.slider-head').owlCarousel({
    autoplay: false,
    rtl: true,
    loop: true,
    nav: true,
    margin:25,
    items: 1,
    dots:true,
    navText: ['<i class="las la-arrow-right"></i>','<i class="las la-arrow-left"></i>'],

});
  $('.owl-select').owlCarousel({
    autoplay: false,
    rtl: true,
    margin:25,
    loop:false,
    nav: true,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        767: {
            items: 3
        },
        991: {
            items: 3   
        },
        1199: {
            items: 4
        },
        1200: {
            items: 4
        }
    },
    navText: ['<i class="las la-arrow-right"></i>','<i class="las la-arrow-left"></i>'],

});
  $('.owl-arrived').owlCarousel({
    autoplay: false,
    rtl: true,
    margin:25,
    loop:false,
    nav: true,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        767: {
            items: 3
        },
        991: {
            items: 3   
        },
        1199: {
            items: 4
        },
        1200: {
            items: 4
        }
    },
    navText: ['<i class="las la-arrow-right"></i>','<i class="las la-arrow-left"></i>'],

});
  $('.owl-products-home').owlCarousel({
    autoplay: false,
    rtl: true,
    margin:25,
    loop:false,
    nav: true,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        767: {
            items: 3
        },
        991: {
            items: 3   
        },
        1199: {
            items: 4
        },
        1200: {
            items: 4
        }
    },
    navText: ['<i class="las la-arrow-right"></i>','<i class="las la-arrow-left"></i>'],

});
$("h5[data-toggle='collapse']").on('click', function() {
  $(this).parent().children('.collapse').collapse('toggle');
  $(this).parent().parent().siblings().find('.collapse.in').collapse('hide');
});

$(".down[data-toggle='collapse']").on('click', function() {
  $(this).parent().children('.collapse').collapse('toggle');
  $(this).parent().siblings().find('.collapse.in').collapse('hide');
});

})