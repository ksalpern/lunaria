// var linksScroll = document.getElementById('linksScroll')
// var linksScroll = $('#linksScroll').offset();
// console.log(elementPosition)
// console.log(document.body.scrollTop)
// console.log($(window).scrollTop())
// $(window).scroll(function () {
//   if (document.body.scrollTop > elementPosition.top) {
//     $('#linksScroll').css('position', 'fixed').css('top', '44');

//   } else {
//     $('#linksScroll').css('position', 'static');
//   }
// });

// When the user scrolls the page, execute myFunction
// window.onscroll = function () {
//   myFunction()
// };

// Get the header
// var linksScroll = document.getElementById('linksScroll');

// Get the offset position of the navbar
// var sticky = linksScroll.offsetTop;
// console.log(sticky)
// console.log(window.pageYOffset)

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     linksScroll.classList.add("sticky");
//   } else {
//     linksScroll.classList.remove("sticky");
//   }
// }


// window.addEventListener('scroll', e => {
// 	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
// })
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
// ScrollSmoother.create({
// 	wrapper: '.wrapper',
// 	content: '.content'
// })


// const el = document.getElementById('test');
// const elTop = el.getBoundingClientRect().top - document.body.getBoundingClientRect().top;

// window.addEventListener('scroll', function(){
//     if (document.documentElement.scrollTop > elTop){
//         el.style.position = 'fixed';
//         el.style.top = '40px';
//     }
//     else
//     {
//         el.style.position = 'static';
//         el.style.top = 'auto';
//     }
// });

// //


// const top = document.documentElement;
// document.documentElement.style.setProperty.scrollTop = function (e) {
//   top.style.top = (e.scrollY - 50) + 'px';
//   top.style.display = 'block';
// }
window.addEventListener('scroll', () => {
	console.log(window.screenTop);
});