/**
* Template Name: Laura
* Template URL: https://bootstrapmade.com/laura-free-creative-bootstrap-theme/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

setInterval(showTime, 1000);

function storedata(){
  const person = new Object();

// Add Properties
person.firstName = "";
person.lastName = "";
person.email = "";
person.phone = "";
person.address = "";
person.quest1 = 0;
person.quest2 = 0;
person.quest3 = 0;
person.quest4 = 0;
person.quest5 = 0;
  person.firstname = document.getElementById("fname").value;
  person.lastname = document.getElementById("lname").value;
  person.email = document.getElementById("email").value;
  person.phone = document.getElementById("pnumber").value;
  person.address = document.getElementById("adress").value;
  person.quest1 = document.getElementById("quest1").value;
  person.quest2 = document.getElementById("quest2").value;
  person.quest3 = document.getElementById("quest3").value;
  person.quest4 = document.getElementById("quest4").value;
  person.quest5 = document.getElementById("quest5").value;
  var validemailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var validphoneRegex = /^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/;

  if (!person.email.match(validemailRegex)) {
    alert("Invalid email address!");
  }
  else if(person.phone.match(validphoneRegex)){
    alert("Invalid phone number")
  }
  console.log(
    "First name: " + person.firstname
  );
  console.log(
    "Last name: " + person.lastname
  );
  console.log(
    "Email: " + person.email
  );
  console.log(
    "Phone: " + person.phone
  );
  console.log(
    "Address: " + person.address
  );
  console.log(
    "Question 1: " + person.quest1
  );
  console.log(
    "Question 2: " + person.quest2
  );
  console.log(
    "Question 3: " + person.quest3
  );
  console.log(
    "Question 4: " + person.quest4
  );
  console.log(
    "Question 5: " + person.quest5
  );
  avr = (Number(person.quest1) + Number(person.quest2) + Number(person.quest3) + Number(person.quest4) + Number(person.quest5))/5
  console.log(
    "Numeric average of ratings: " + avr
  );
  document.getElementById("avrage").innerHTML = person.firstname + " " + person.lastname + "(" + person.email + ")" + " " + String(avr)
  if (avr < 3.4){
    document.getElementById("avrage").style.color = "rgb(255, 0, 0)"
  }
  else if(3.5 <= avr && avr < 7.1){
    document.getElementById("avrage").style.color = "rgb(255, 165, 0)"
  }
  else if(7.2<= avr && avr <= 10){
    document.getElementById("avrage").style.color = "rgb(0, 255, 0)"
  }
}

(function() {
  "use strict";
  /**
   * Toggle dark mode
   */
  let darkToggle = document.querySelector('#darkToggle');

  darkToggle.addEventListener('change', ()=> {
  document.body.classList.toggle('dark-background');
  })

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let currentTime =
        hour + ":" + min + ":" + sec;

    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}