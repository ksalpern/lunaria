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

mm.add('(min-width: 1500px)', () => {
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

  // main section animations===================================================
  const team = gsap.utils.toArray('.team__item');
  team.forEach(cardItem => {
    gsap.fromTo(cardItem, {
      y: 200,
      x: '10vw',
      opacity: 0.5,
      start: 0,
      end: 'center',
      stagger: 1,

    }, {
      y: 0,
      x: 0,
      scrollTrigger: {
        trigger: cardItem,
        scrub: true
      },

      delay: 3,
      opacity: 1
    })
  });

  const h2 = gsap.utils.toArray('.section__header');
  h2.forEach(item => {
    gsap.fromTo(item, {
      opacity: 0.5,
      x: '100vw'
    }, {

      scrollTrigger: {
        trigger: item,
        start: 'centr bottom',
        end: 'bottom bottom',
      },
      x: 0,
      opacity: 1,
    })
  });
})

