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
    x: '-30vw',
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
