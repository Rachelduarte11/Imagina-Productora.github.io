const images = document.querySelectorAll('.image-container img');
let currentImage = 0;

images[currentImage].classList.add('active');

function changeImage() {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
}

setInterval(changeImage, 2000); // Cambiar imagen cada 3 segundos (3000 ms)




//CONTADOR DE TRIUNFOS
// Función para animar el contador
function animateCounter(target, startValue, endValue, duration) {
  const range = endValue - startValue;
  const increment = range / duration;
  let current = startValue;

  const counterInterval = setInterval(() => {
    current += increment;
    target.textContent = Math.round(current);

    if (current >= endValue) {
      target.textContent = endValue;
      clearInterval(counterInterval);
    }
  }, 1);
}

// Función para comprobar si el contador está en la pantalla
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleCounterAnimation(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetValue = parseInt(entry.target.textContent);
      animateCounter(entry.target, 0, targetValue, 650); 
      observer.unobserve(entry.target); // Dejar de observar el elemento después de animarlo
    }
  });
}

// Crear un IntersectionObserver para los elementos con clase 'counter'
const counters = document.querySelectorAll('#counter');
const counterObserver = new IntersectionObserver(handleCounterAnimation, {
  threshold: 0.2 // Umbral de intersección: 0.2 (20% del elemento visible en la pantalla)
});

// Observar los elementos con clase 'counter'
counters.forEach(counter => counterObserver.observe(counter));

//MENU///////////////////////
function toggleMenu(event) {
  const menu = document.querySelector('.menu-hidden');
  menu.classList.toggle('show-menu');
 //menu.addEventListener('click', (event) => {event.stopPropagation()})
}

 

function toggleSubMenu() {
  const subMenu = document.querySelector('.sub-menu-acordeon');
  subMenu.classList.toggle('show-sub-menu');
  window.location.href = "catalogo.html"
}

$(document).ready(function(){
  $('.bxslider').bxSlider();
   });
   $('.testimonios .bxslider').bxSlider({
     pagerCustom: '#bx-pager'
   });


const xIcon = document.querySelector('.x-icon');
xIcon.addEventListener('click', (event) => {
  event.stopPropagation();
  // Cerrar el menú
  const menu = document.querySelector('.menu-hidden');
  menu.classList.remove('show-menu');
});
