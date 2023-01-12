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
    toggleClass: 'fixed',
  },
})
mm.add('(min-width: 981px)', () => {
  gsap.to('.header__menu', {
    scrollTrigger: {
      trigger: '.banner__links',
      start: 0,
      end: 700,
      scrub: true,
    },
    x: '-35vw',
  })
})

// arrow to top
gsap.to('.main', {
  scrollTrigger: {
    trigger: '#arrowBtn',
    start: 1000,
    end: 1000 * 100,
    scrub: true,
    toggleClass: 'arrowActive',
  },
})

mm.add('(min-width: 1025px)', () => {
  gsap.fromTo('.logo', {
    y: "150px",
  }, {
    y: "0px",
    scrollTrigger: {
      trigger: '.main',
      start: 0,
      end: '30px',
      scrub: true,
    },
  })
})


// main section animations===================================================
const team = gsap.utils.toArray('.team__item');
team.forEach(cardItem => {
  gsap.fromTo(cardItem, {
    y: 200,
    x: 100,
    opacity: 0.5,
    start: 0,
    end: '10px',
    stagger: 1,

  }, {
    y: 0,
    x: 0,
    scrollTrigger: {
      trigger: cardItem,
      scrub: true
    },

    // duration: 1,
    delay: 3,
    opacity: 1
  })
});

// gsap.fromTo('.section__header h2', {
//   y: 100,
//   x: '-100vw',
//   opacity: 0.5,

//   stagger: 1,

// }, {
//   y: 0,
//   x: 0,
//   scrollTrigger: {
//     trigger: '.section__header',
//     scrub: true,
//     markers: true,
//     start: 'top bottom',
//     end: 100,
//     toggleActions: 'none none none none',

//   },
//   delay: 3,
//   opacity: 1,

// })

const h2 = gsap.utils.toArray('.section__header');
h2.forEach(item => {
  gsap.fromTo(item, {
    opacity: 0.5,
    x:'100vw'
  }, {

    scrollTrigger: {
      trigger: item,
      // scrub: true,
      start: 'centr bottom',
      end: 'bottom bottom',
      // markers: true
      // toggleActions: 'none none none none',
    },
    // delay: 3,
    x: 0,
    opacity: 1,
  })
});
// const section__details = gsap.utils.toArray('.section__details');
// section__details.forEach(item => {
//   gsap.fromTo(item, {
//     y: 100,
//     x: '100vw',
//     opacity: 0.5,
//   }, {
//     y: 0,
//     x: 0,
//     scrollTrigger: {
//       trigger: item,
//       // scrub: true,
//       start: 'centr bottom',
//       end: 'bottom 500vh',
//       markers: true
//       // toggleActions: 'none none none none',
//     },
//     // delay: 3,
//     opacity: 1,
//   })
// });