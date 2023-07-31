document.addEventListener("scroll", function () {
    // Obtener la distancia que ha sido desplazada la página verticalmente
    const scrollTop = window.scrollY;
  
    // Obtener el contenedor de la imagen
    const imagenContainer = document.querySelector(".imagen-container");
  
    // Aplicar una transformación en la imagen basada en el desplazamiento vertical
    imagenContainer.style.transform = `translateY(${scrollTop}px)`;
  });
  