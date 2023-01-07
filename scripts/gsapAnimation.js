const tl = gsap.timeline({defaults:{duration: 5}});
tl.fromTo('.blue', {x: '0'}, {x: '-500px'})
tl.fromTo('.yellow',{ x: '0'}, { x: '-500px' })


const body = document.querySelector('.body');

ScrollTrigger.create({
animation: tl,
trigger: '.site-container',
start: 'top top',
end: () => bodu.offsetWidth / 2,
// end: end,
scrub: true,
pin: true
});