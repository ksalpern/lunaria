$(document).ready(function(){
  $('.smollImg').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.bigSlider',
    focusOnSelect: true,
    // centerMode: true,
  });
  $('.bigSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.smollImg',
    focusOnSelect: true,
    speed: 300,
    
  });
});