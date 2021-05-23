// SHOW - HIDE MOBILE MENU
const hamburger = document.querySelector('.hamburger-menu');
const openMenu = document.querySelector('aside');
const x = document.querySelector('.x');
const aside = document.querySelector('aside');
const home = document.querySelector('.menu-container .home');

function show() {
    aside.style.display = 'block';
    aside.style.zIndex = 8;
}

function hide() {
    aside.style.display = 'none';
}

hamburger.addEventListener('click', show);
x.addEventListener('click', hide);
home.addEventListener('click', hide);

// SLICK JS CAROUSEL
$('.review-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    responsive: [
        {
            breakpoint: 1600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
  