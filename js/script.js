$(document).ready(function(){
  // Toggle the menu and header classes
  $('#menu').on('click', function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  // Handle scrolling and menu visibility
  $(window).on('scroll load', function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    // Show/hide the "top" element based on scroll position
    if ($(window).scrollTop() > 0) {
      $('.top').fadeIn();
    } else {
      $('.top').fadeOut();
    }
  });

  // Smooth scrolling for anchor links
  $('a[href*="#"]').on('click', function(e){
    e.preventDefault();

    // Animate scrolling to the target element
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    }, 500, 'linear');
  });
});