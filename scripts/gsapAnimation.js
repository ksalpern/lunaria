// let blueCircle = document.querySelector('.blue')
// let main = document.querySelector('.main')
// console.log(blueCircle)
// console.log(main)
// gsap.timeline({
//   scrollTriger:{
//     trigger: '.main',
//     start: 'center center',
//     end:'bottom top',
//     markers: true
//   }
// })
// .from(blueCircle, {x: innerWidth + 100})
// document.addEventListener("DOMContentLoaded", function () {
//   gsap.utils.toArray(".blue").forEach((box, i) => {
//     ScrollTrigger.create({
//       trigger: '.main',
//       start: "top c",
//       pin: false,
//       pinSpacing: true,
//       snap: true,
//       markers: true
//     });
//   });
// });

gsap.registerPlugin(ScrollTrigger)
const trig = {
  trigger: '.main',
  start: 'top center',
  scrub: true,
  toggleActions: 'restart none none none',
}
gsap.to('.blue', {
  scrollTrigger: trig,
  x: -600,
  y: '-5%',
  duration: 200,
})
gsap.to('.yellow', {
  scrollTrigger: trig,
  x: -700,
  y: '-5%',
  duration: 20,
  // ease: "Power1.easeOut"
})
gsap.to('.redCircle', {
  scrollTrigger: trig,
  x: 0,
  y: '300%',
  duration: 20,
})
gsap.to('.darckCircle', {
  scrollTrigger: trig,
  x: 0,
  y: '300%',
  duration: 20,
})