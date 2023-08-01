//CARRUSEL PANTALLAS PEQUEÑAS
/*$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });*/
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
/*
  $(document).ready(function () {
    // Inicializar el carrusel con Owl Carousel
    $(".custom-carousel").owlCarousel({
      autoWidth: true,
      loop: true,
      animateOut: 'fadeOut', // Agregar animación de desvanecimiento suave
      animateIn: 'fadeIn', // Agregar animación de desvanecimiento suave al volver al primer elemento
    });
  function moveCarousel() {
    $(".custom-carousel").trigger("next.owl.carousel");
  }

  // Ejecutar la función moveCarousel cada 3 segundos
  setInterval(moveCarousel, 2000);
});

 // Detener el intervalo cuando se hace clic en un elemento del carrusel
 $(".custom-carousel .item").click(function () {
  $(".custom-carousel .item").not($(this)).removeClass("active");
  $(this).toggleClass("active");

  // Detener el intervalo usando la función clearInterval
  clearInterval(moveCarousel);
});*/

$(document).ready(function () {
  let carouselInterval; // Variable para almacenar el ID del intervalo

  // Función para mover el carrusel automáticamente
  function moveCarousel() {
    $(".custom-carousel").trigger("next.owl.carousel");
  }
})
  // Inicializar el carrusel con Owl Carousel
  $(document).ready(function () {
    let isCarouselPlaying = true;

    // Inicializar el carrusel con Owl Carousel
    const carousel = $(".custom-carousel").owlCarousel({
      autoWidth: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
    });

  
    // Detener o reanudar el carrusel cuando se hace clic en un elemento
    $(".custom-carousel .item").click(function () {
      if (isCarouselPlaying) {
        carousel.trigger('stop.owl.autoplay');
      } else {
        carousel.trigger('play.owl.autoplay');
      }
      isCarouselPlaying = !isCarouselPlaying;
      
    });
      

  });

