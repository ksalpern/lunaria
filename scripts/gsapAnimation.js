gsap.registerPlugin(ScrollTrigger)
let mm = gsap.matchMedia()

const trig = {
  trigger: '.main',
  start: 'top center',
  scrub: true,
  toggleActions: 'restart none none none',
}
gsap.to('.blue', {
  scrollTrigger: {
    trigger: '.main',
    start: 'top 0',
    end: 500,
    scrub: true,
    toggleActions: 'restart none none none',
  },
  x: '-50vw',
  y: '-5%',
  duration: 200,
})
gsap.to('.yellow', {
  scrollTrigger: {
    trigger: '.main',
    start: 'top 0',
    end: 500,
    scrub: true,
    toggleActions: 'restart none none none',
  },
  x: '-50vw',
  y: '-5%',
  duration: 20,
  // ease: "Power1.easeOut"
})
gsap.to('.redCircle', {
  scrollTrigger: trig,
  x: 0,
  y: '100%',
  duration: 20,
})
gsap.to('.darckCircle', {
  scrollTrigger: trig,
  x: 0,
  y: '100%',
  duration: 20,
})
gsap.to('.header', {
  scrollTrigger: {
    trigger: '.banner__links',
    start: 600,
    end: 1000 * 100,
    scrub: true,
    // toggleActions: 'restart none none none',
    toggleClass: 'fixed',
    // markers: {
    //   fontSize: '50px'
    // }
  },
})
mm.add('(min-width: 981px)', () => {
  gsap.to('.header__menu', {
    scrollTrigger: {
      trigger: '.banner__links',
      start: 0,
      end: 700,
      scrub: true,

      // toggleClass: 'fixed',

    },
    x: '-30vw',
  })
})

// arrow 
gsap.to('.main', {
  scrollTrigger: {
    trigger: '#arrowBtn',
    start: 1000,
    end: 1000 * 100,
    scrub: true,
    // toggleActions: 'restart none none none',
    toggleClass: 'arrowActive',
    // markers: {
    //   fontSize: '50px'
    // }
  },
})

// $('#arrowBtn').on('mouseenter', (e) => {
//   gsap.to('#arrowBtn', {
//     y: -10,
//     duration: 0.2,
//     ease: 'back.inOut(3)',
//     overwrite: 'auto'
//   });
// })
// $('#arrowBtn').on('mouseleave', (e) => {
//   gsap.to('#arrowBtn', {
//     y: 0,
//     duration: 0.5,
//     ease: 'power3.out',
//     overwrite: 'auto'
//   });
// })
// $('#arrowBtn').on('click', (e) => {
//   gsap.to(window, {
//     scrollTo: {
//       y: ".main"
//     },
//     duration: 1.5,
//     ease: 'power1.inOut'
//   });
// })
// let aa = document.getElementById('arrowBtn')
// // console.log(aa)
// aa.addEventListener('click', function () {
//   this.classList.toggle('arrowActiveaaaaaaaaaaa')

//   gsap.to(window, {
//     scrollTo: innerHeight,
//     // {
//       // y: 0
//       // x: 0,
//       // toggleClass: 'arrowActiveaaaaaaaaaaa',
//     // },
//     duration: 1.5,
//     ease: 'power1.inOut'
//   });
// })
// $('.back-to-top').click(function () {
//   // $('body,html').animate({
//   //   scrollTop: 0
//   // }, 2000);
// });
// console.log($('.back-to-top'))
// $(window).scroll(function () {
//   let scrolled = $(window).scrollTop();

//   if (scrolled > 350) {
//     $('.back-to-top').addClass('active');
//   } else {
//     $('.back-to-top').removeClass('active');
//   }
// });