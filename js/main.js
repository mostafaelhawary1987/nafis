$(window).on("load", function () {
  $(".preloader").fadeOut("500", function () {
    $(this).remove();
    $("body").removeClass("overflow");
  });


});
 // Sidemenu 

 $("#nav-icon").click( function() {
  $('#nav-icon').toggleClass('nav-icon_open');
  $('.sidenav').toggleClass('open');
  $(this).toggleClass('open');   
  $('body').toggleClass('ovh');
});
$("#openNav").click( function() {

     
});

$(".closebtn,.overlay").click( function() {
  $('.sidenav').removeClass('open');
  $('.overlay').fadeOut();
  $('body').removeClass('ovh');
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
    dots:true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        767: {
            items: 2
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
    dots:true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        767: {
            items: 2
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
    dots:true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        767: {
            items: 2
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
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     $('.top').addClass('fixedheader');
//   } else {
//     $('.top').removeClass('fixedheader');
//   }
// }

});