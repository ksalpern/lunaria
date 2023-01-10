// const cursor = document.getElementById('cursor');
// document.onmousemove = function (e) {
//   cursor.style.left = (e.pageX - 50) + 'px';
//   cursor.style.top = (e.pageY - 50) + 'px';
//   cursor.style.display = 'block';
// }

// // var cursor = {
// //   delay: 8,
// //   _x: 0,
// //   _y: 0,
// //   endX: (window.innerWidth / 2),
// //   endY: (window.innerHeight / 2),
// //   cursorVisible: true,
// //   cursorEnlarged: false,
// //   $dot: document.querySelector('.cursor-dot'),
// //   $outline: document.querySelector('.cursor-dot-outline'),

// //   init: function() {
// //       // Set up element sizes
// //       this.dotSize = this.$dot.offsetWidth;
// //       this.outlineSize = this.$outline.offsetWidth;

// //       this.setupEventListeners();
// //       this.animateDotOutline();
// //   },

// // //     updateCursor: function(e) {
// // //         var self = this;

// // //         console.log(e)

// // //         // Show the cursor
// // //         self.cursorVisible = true;
// // //         self.toggleCursorVisibility();

// // //         // Position the dot
// // //         self.endX = e.pageX;
// // //         self.endY = e.pageY;
// // //         self.$dot.style.top = self.endY + 'px';
// // //         self.$dot.style.left = self.endX + 'px';
// // //     },

// //   setupEventListeners: function() {
// //       var self = this;

// //       // Anchor hovering
// //       document.querySelectorAll('a').forEach(function(el) {
// //           el.addEventListener('mouseover', function() {
// //               self.cursorEnlarged = true;
// //               self.toggleCursorSize();
// //           });
// //           el.addEventListener('mouseout', function() {
// //               self.cursorEnlarged = false;
// //               self.toggleCursorSize();
// //           });
// //       });

// //       // Click events
// //       document.addEventListener('mousedown', function() {
// //           self.cursorEnlarged = true;
// //           self.toggleCursorSize();
// //       });
// //       document.addEventListener('mouseup', function() {
// //           self.cursorEnlarged = false;
// //           self.toggleCursorSize();
// //       });


// //       document.addEventListener('mousemove', function(e) {
// //           // Show the cursor
// //           self.cursorVisible = true;
// //           self.toggleCursorVisibility();

// //           // Position the dot
// //           self.endX = e.pageX;
// //           self.endY = e.pageY;
// //           self.$dot.style.top = self.endY + 'px';
// //           self.$dot.style.left = self.endX + 'px';
// //       });

// //       // Hide/show cursor
// //       document.addEventListener('mouseenter', function(e) {
// //           self.cursorVisible = true;
// //           self.toggleCursorVisibility();
// //           self.$dot.style.opacity = 1;
// //           self.$outline.style.opacity = 1;
// //       });

// //       document.addEventListener('mouseleave', function(e) {
// //           self.cursorVisible = true;
// //           self.toggleCursorVisibility();
// //           self.$dot.style.opacity = 0;
// //           self.$outline.style.opacity = 0;
// //       });
// //   },

// //   animateDotOutline: function() {
// //       var self = this;

// //       self._x += (self.endX - self._x) / self.delay;
// //       self._y += (self.endY - self._y) / self.delay;
// //       self.$outline.style.top = self._y + 'px';
// //       self.$outline.style.left = self._x + 'px';

// //       requestAnimationFrame(this.animateDotOutline.bind(self));
// //   },

// //   toggleCursorSize: function() {
// //       var self = this;

// //       if (self.cursorEnlarged) {
// //           self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
// //           self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
// //       } else {
// //           self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
// //           self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
// //       }
// //   },

// //   toggleCursorVisibility: function() {
// //       var self = this;

// //       if (self.cursorVisible) {
// //           self.$dot.style.opacity = 1;
// //           self.$outline.style.opacity = 1;
// //       } else {
// //           self.$dot.style.opacity = 0;
// //           self.$outline.style.opacity = 0;
// //       }
// //   }
// // }

// // cursor.init();






//===========================================
// After update OptimizedHTML5
let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree

document.addEventListener('DOMContentLoaded', () => {

  // Custom JS

  const body = document.querySelector('body')

  body.addEventListener('mousemove', e => {

    clientX = e.pageX
    clientY = e.pageY

    request = requestAnimationFrame(updateMe)

    mouseCoords(e)
    cursor.classList.remove('hidden')
    follower.classList.remove('hidden')

  })

  function updateMe() {

    gsap.to('.content', 1, {
      transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )`
    })

  }

  

  const cursor = document.getElementById('cursor')
  const follower = document.getElementById('aura')
  const links = document.getElementsByTagName('a')

  mouseX = 0, mouseY = 0, posX = 0, posY = 0

  function mouseCoords(e) {

    mouseX = e.pageX
    mouseY = e.pageY

  }

  gsap.to({}, .01, {

    repeat: -1,

    onRepeat: () => {

      posX += (mouseX - posX) / 5
      posY += (mouseY - posY) / 5

      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY
        }
      })

      gsap.set(follower, {
        css: {
          left: posX - 21,
          top: posY - 21
        }
      })

    }

  })

  for (let i = 0; i < links.length; i++) {

    links[i].addEventListener('mouseover', () => {
      cursor.classList.add('active')
      follower.classList.add('active')
    })

    links[i].addEventListener('mouseout', () => {
      cursor.classList.remove('active')
      follower.classList.remove('active')
    })

  }

  body.addEventListener('mouseout', () => {
    cursor.classList.add('hidden')
    follower.classList.add('hidden')
  })

})