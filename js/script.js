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
    duration: 800,  // Продолжительность анимации
    easing: 'ease-in-out',  // Тип анимации
    once: false,  // Анимация активируется каждый раз при скроллинге
    mirror: true  // Активирует анимацию при прокрутке вверх
  });
});


window.addEventListener('scroll', function () {
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = window.pageYOffset / totalHeight;
  const backgroundPosition = (scrolled * 40) + 'vh';
  document.documentElement.style.backgroundPositionY = backgroundPosition;
});

// Данные проектов
const projectsData = {
  'project1': {
    title: 'Полноценное приложение по созданию заметок',
    description: 'Описание: Реализовано приложение по созданию заметок с регистрацией пользователя. Можно удалять, редактировать, создавать новые заметки на любой вкус и возможность менять задний фон нашего приложения',
    stack: 'Используемый стек технологий: CSS, JS, React, Redux, Firebase',
    githubLink: 'https://github.com/MrKartozka/TogetherProject',
    demoLink: 'https://notesapp-together.vercel.app/',
    img: './public/notesapp.png'
  },
  'project2': {
    title: 'Приложение по поиску прогноза погоды',
    description: 'Описание: Здесь можно ввести в поиск название любого города и можно будет получить информацию подробную информацию о погоде, при этом отображает при первом запуске ваше текущее местоположение',
    stack: 'Используемый стек технологий: CSS, JS, React, API',
    githubLink: 'https://github.com/Resedare/appweather',
    demoLink: 'https://resedare.github.io/appweather/',
    img: './public/weather.png'
  },
  'project3': {
    title: 'Тестовый вариант создания заметок',
    description: 'Описание: Можно создать заметки, где сохранятся у вас на локальном компьютере',
    stack: 'Используемый стек технологий: CSS, JS, React, JSON, localstorage',
    githubLink: 'https://github.com/MrKartozka/TestTask',
    demoLink: 'https://simplenoteapp-nine.vercel.app/',
    img: './public/simplenote.png'
  },
  'project4': {
    title: 'Сайт про описание различных бургеров',
    description: 'Описание: Попробовал реализовать сайт на новом для себя фреймворке, где можно поменять ценник у различных бургеров и заполнить анкету',
    stack: 'Используемый стек технологий: HTML, CSS, TypeScript, Angular',
    githubLink: 'https://github.com/MrKartozka/burgers',
    demoLink: 'https://mrkartozka.github.io/burgers/',
    img: './public/burgers.png'
  },
  'project5': {
    title: 'Адаптивный, анимированный сайт',
    description: 'Описание: Сделал всё стильно и добавил несколько анимаций и адаптацию мобильных телефонов для сайта',
    stack: 'Используемый стек технологий: HTML, CSS, JS',
    githubLink: 'https://github.com/MrKartozka/ResponsiveWebsite',
    demoLink: 'https://responsive-website-azure.vercel.app/',
    img: './public/responsive.png'
  },
  'project6': {
    title: 'Магазин наушников',
    description: 'Описание: Здесь можно добавлять понравившиеся товары в корзину и будет высчитываться общая сумма набранных товаров',
    stack: 'Используемый стек технологий: HTML, CSS, JS, React, Figma, JSON',
    githubLink: 'https://github.com/MrKartozka/WebShop',
    demoLink: 'https://web-shop-brown-nine.vercel.app/',
    img: './public/shopEarPods.png'
  },
  'project7': {
    title: 'Обычный прототип сайта',
    description: 'Описание: Мой первый заверстанный сайт, сделанный с помощью небольших знаний по верстке',
    stack: 'Используемый стек технологий: HTML, CSS, JS, JQuery Figma',
    githubLink: 'https://github.com/MrKartozka/BeginSite',
    demoLink: 'https://begin-site.vercel.app/',
    img: './public/beginSite.png'
  },
};

// Функция для открытия модального окна с данными проекта
function openModal(projectId) {
  const project = projectsData[projectId];
  document.querySelector('.modal-img').src = project.img;
  document.querySelector('.modal-title').textContent = project.title;
  document.querySelector('.modal-description').textContent = project.description;
  document.querySelector('.modal-stack').textContent = project.stack;
  document.querySelector('.modal-github-link').onclick = function () {
    window.open(project.githubLink);
  };
  document.querySelector('.modal-demo-link').onclick = function () {
    window.open(project.demoLink);
  };

  document.getElementById('modal').style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Закрыть модальное окно, если кликнуть вне его контента
window.onclick = function (event) {
  if (event.target === document.getElementById('modal')) {
    closeModal();
  }
}