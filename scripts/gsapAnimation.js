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
  toggleActions: 'restart none none none'
  // toggleActions: 'restart reverse reverse reverse'
}
gsap.to('.blue', {
  scrollTrigger: trig,
  x: '-60%',
  y: '-5%', 
  duration: 20
})
gsap.to('.yellow', {
  scrollTrigger: trig,
  x: '-90%', 
  y: '-5%',
  duration: 20
})