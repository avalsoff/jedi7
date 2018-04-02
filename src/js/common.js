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

  // var api = $('#my-menu').data('mmenu');
  // api.bind('open:start', function () {
  //   $('.hamburger').addClass('is-active');
  // }).bind('close:finish', function () {
  //   $('.hamburger').removeClass('is-active');
  // });

});
