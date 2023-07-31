const images = document.querySelectorAll('.image-container img');
let currentImage = 0;

images[currentImage].classList.add('active');

function changeImage() {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
}

setInterval(changeImage, 2000); // Cambiar imagen cada 3 segundos (3000 ms)


/*carrusel*/

const circles = document.querySelectorAll('.circle');
const imagesContainer = document.querySelector('.services-images');
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');

// Mostrar primera vista al cargar la página
//imagesContainer.style.transform = 'translateX(0)';
container1.style.display = 'flex';
container2.style.display = 'none';

// Alternar vista al hacer clic en el segundo círculo
circles[1].addEventListener('click', () => {
  //imagesContainer.style.transform = 'translateX(-100%)';
  container2.style.display = 'flex';
  container2.style.transform = 'translateX(0)';
  container1.style.display = 'none';
  container1.style.transform = 'translateX(-100%)';
});

circles[0].addEventListener('click', () => {
  container1.style.display = 'flex';
  container1.style.transform = 'translateX(0)';
  container2.style.display = 'none';
  container2.style.transform = 'translateX(-100%)';
});
// Cambiar círculos activos al hacer clic en ellos
circles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    //imagesContainer.style.transform = `translateX(-${index * 50}%)`;
    circles.forEach((c, i) => {
      c.classList.toggle('active', index === i);
    });
   
  });
});


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
      animateCounter(entry.target, 0, targetValue, 650); // Duración de la animación: 1000ms
      observer.unobserve(entry.target); // Dejar de observar el elemento después de animarlo
    }
  });
}

// Crear un IntersectionObserver para los elementos con clase 'counter'
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver(handleCounterAnimation, {
  threshold: 0.2 // Umbral de intersección: 0.2 (20% del elemento visible en la pantalla)
});

// Observar los elementos con clase 'counter'
counters.forEach(counter => counterObserver.observe(counter));




function toggleMenu() {
  const menu = document.querySelector('.menu-hidden');
  menu.classList.toggle('show-menu');
  menu.addEventListener('click', (event) => {event.stopPropagation();})
}

const menu = document.querySelector('.menu-hidden');
menu.addEventListener('click', (event) => {
  // Evitar que se produzcan acciones predeterminadas (por ejemplo, seguir el enlace de un <a>)
  event.preventDefault();
});

const xIcon = document.querySelector('.x-icon');
xIcon.addEventListener('click', (event) => {
  // Evitar que el evento se propague al contenedor padre (x-icon-container)
  event.stopPropagation();
  // Cerrar el menú
  const menu = document.querySelector('.menu-hidden');
  menu.classList.remove('show-menu');
});

function toggleSubMenu() {
  const subMenu = document.querySelector('.sub-menu-acordeon');
  subMenu.classList.toggle('show-sub-menu');
}