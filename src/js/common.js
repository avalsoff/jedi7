$(function() {
  $('#my-menu').mmenu({
    extensions: [  'widescreen', 'theme-black', 'fx-menu-slide', 'pagedim-black', 'position-right' ],
    navbar: {
      title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">'
    },
    hooks: {
      'open:finish': function( $panel ) {
        $('.hamburger').addClass('is-active');
      },
      'close:finish': function( $panel ) {
        $('.hamburger').removeClass('is-active');
      }
    }
  });

  $(".carousel-services").owlCarousel({
    loop: true,
    nav: true,
    dots: false, //added by me
    smartSpeed: 700,
    navText: ['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1100: {
        items: 3
      }
    }
  });

  // var api = $('#my-menu').data('mmenu');
  // api.bind('open:start', function () {
  //   $('.hamburger').addClass('is-active');
  // }).bind('close:finish', function () {
  //   $('.hamburger').removeClass('is-active');
  // });

});
