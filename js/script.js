function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 2200, // продолжительность анимации в миллисекундах
    once: true, // анимация сработает только один раз при первом скролле
    delay: 100, // задержка перед началом анимации
  });

});

window.addEventListener('scroll', function () {
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = window.pageYOffset / totalHeight;
  const backgroundPosition = (scrolled * 40) + 'vh';
  document.documentElement.style.backgroundPositionY = backgroundPosition;
});

