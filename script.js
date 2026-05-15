(function () {
  document.querySelectorAll('a.page-scroll[href*="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      var href = this.getAttribute('href');
      if (!href || href.charAt(0) !== '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  var toggle = document.querySelector('.navbar-toggle');
  var collapse = document.getElementById('bs-example-navbar-collapse-1');
  if (toggle && collapse) {
    toggle.addEventListener('click', function () {
      collapse.classList.toggle('in');
      toggle.classList.toggle('collapsed');
    });
  }

  var contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      contactForm.reset();
      var success = document.getElementById('success');
      if (success) {
        success.textContent = 'Thank you! We will get back to you soon.';
      }
    });
  }
})();
