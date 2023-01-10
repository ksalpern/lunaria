$(document).ready(function () {
  $('.values__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('.projects__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 300,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
});