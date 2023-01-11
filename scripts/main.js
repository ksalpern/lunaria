 "use strict"

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form')
  console.log(form)
  form.addEventListener('submit', formSend)

  async function formSend(e) {
    e.preventDefault()
    let error = formValidate(form)
    let formData = new FormData(form)

    if (error === 0) {
      form.classList.add('_sending')
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        let result = await response.json()
        alert(result.message)
        form.reset()
        form.classList.remove('_sending')
      } else {
        alert('error!')
        form.classList.remove('_sending')
      }

    } else {
      alert('fill in the required fields')
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');
    console.log(formReq)

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      console.log(input)
      formRemoveError(input)
      if (input.classList.contains('_emailPhone')) {
        if (emailPhoneTest(input)) {
          formAddError(input)
          error++
        }
      } else {
        if (input.value === '') {
          formAddError(input)
          error++
        }
      }
    }
    return error
  }

  //add error class
  function formAddError(input) {
    input.parentElement.classList.add('_error')
    input.classList.add('_error')
  }
  //remove error class
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error')
    input.classList.remove('_error')
  }

  //email & telephone regex test
  function emailPhoneTest(input) {
    return !/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(input.value)
  }
});