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

  $(".carousel-services").on('initialized.owl.carousel', function() {
    setTimeout(function () {      
      carouselService();
    }, 100);
  });

  $(".carousel-services").owlCarousel({
    loop: false,
    nav: true,
    dots: false,
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

  $('.carousel-services-content').equalHeights();

  function carouselService() {
    $('.carousel-services-item').each(function() {
      var ths  = $(this),
          thsh = ths.find('.carousel-services-content').outerHeight();
          ths.find('.carousel-services-image').css('min-height', thsh);
    });
  }carouselService();

  $('.carousel-services-composition .h3').each(function() {
    var ths = $(this)
    ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'))
  });

  $('section .h2').each(function() {
    var ths = $(this)
    ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'))
  });

  $('select').selectize();

  function onResize() {
    $('.carousel-services-content').equalHeights();
  }onResize();
  window.onresize = function() {onResize()}

  // var api = $('#my-menu').data('mmenu');
  // api.bind('open:start', function () {
  //   $('.hamburger').addClass('is-active');
  // }).bind('close:finish', function () {
  //   $('.hamburger').removeClass('is-active');
  // });

});
