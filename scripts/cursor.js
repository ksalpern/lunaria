let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree

document.addEventListener('DOMContentLoaded', () => {

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