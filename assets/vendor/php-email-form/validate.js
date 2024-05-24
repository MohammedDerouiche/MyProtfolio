(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      let name = thisForm.querySelector('[name="name"]').value;
      let email = thisForm.querySelector('[name="email"]').value;
      let subject = thisForm.querySelector('[name="subject"]').value;
      let message = thisForm.querySelector('[name="message"]').value;

      if (!name || !email || !subject || !message) {
        displayError(thisForm, 'Please fill out all fields.');
        return;
      }

      let mailtoLink = `mailto:mohammed.der.work@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
      
      window.location.href = mailtoLink;
    });
  });

  function displayError(thisForm, error) {
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
