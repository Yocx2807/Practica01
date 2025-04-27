const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 1;

function updateCarousel() {
  const itemWidth = items[0].offsetWidth;
  carousel.style.transform = `translateX(-${itemWidth * currentIndex}px)`;

  items.forEach((item, index) => {
    item.classList.remove('active');
    if (index === currentIndex) {
      item.classList.add('active');
    }
  });
}

function next() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

function prev() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
}

document.querySelector('.next').addEventListener('click', next);
document.querySelector('.prev').addEventListener('click', prev);

// Espera que cargue la página
window.addEventListener('load', updateCarousel);

// Carrusel automático
setInterval(next, 3000);
