$(document).ready(function(){
    var zindex = 10;
    
    jQuery("div.card").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if (jQuery(this).hasClass("show")) {
        isShowing = true
      }
  
      if (jQuery("div.cards").hasClass("showing")) {
        // a card is already in view
        jQuery("div.card.show")
          .removeClass("show");
  
        if (isShowing) {
          // this card was showing - reset the grid
          jQuery("div.cards")
            .removeClass("showing");
        } else {
          // this card isn't showing - get in with it
          jQuery(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
        // no cards in view
        jQuery("div.cards")
          .addClass("showing");
          jQuery(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });
  });
  jQuery(document).ready(function() {
    // Función para cambiar el contenido del banner y los cards
    function cambiarContenidoEspeciales() {
      // Cambiar la imagen del banner
      let banner = document.querySelector(".banner img");
      banner.src="./Images/boda-grupal.png"
      // Cambiar los cards
      var cards = document.getElementById("cards");
      cards.innerHTML = `
      <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?wave" alt="wave" />
          </div>
          <div class="card-title">
            <a href="#" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?beach" alt="beach" />
          </div>
          <div class="card-title">
            <a href="#" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?mountain" alt="mountain" />
          </div>
          <div class="card-title">
            <a href="#" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?field" alt="field" />
          </div>
          <div class="card-title">
            <a href="#" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?water" alt="water" />
          </div>
          <div class="card-title">
            <a href="#" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?river" alt="river" />
          </div>
          <div class="card-title">
            <a href="#" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?kite" alt="kite" />
          </div>
          <div class="card-title">
            <a href="#" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?underwater" alt="underwater" />
          </div>
          <div class="card-title">
            <a href="#" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?desert" alt="desert" />
          </div>
          <div class="card-title">
            <a href="#" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
      `;
    }
    function cambiarContenidoClasicos() {
        // Cambiar la imagen del banner
        let banner = document.querySelector(".banner img");
        banner.src="./Images/hora loca.jpg"
        // Vaciar los cards
        let cards = document.getElementById("cards");
        cards.innerHTML = `
        <div class="cards" id="cards">
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?wave" alt="wave" />
          </div>
          <div class="card-title">
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?beach" alt="beach" />
          </div>
          <div class="card-title"> 
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?mountain" alt="mountain" />
          </div>
          <div class="card-title">
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?field" alt="field" />
          </div>
          <div class="card-title"> 
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?water" alt="water" />
          </div>
          <div class="card-title"> 
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?river" alt="river" />
          </div>
          <div class="card-title">
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?kite" alt="kite" />
          </div>
          <div class="card-title">
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?underwater" alt="underwater" />
          </div>
          <div class="card-title">
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?desert" alt="desert" />
          </div>
          <div class="card-title">

            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      `
      }
    // Evento para el botón "Shows Especiales"
    jQuery(".btn-show-especiales").click(function(e) {
      e.preventDefault();
      cambiarContenidoEspeciales();
      jQuery(".btn-show-especiales").addClass("active");
          jQuery(".btn-show-clasicos").removeClass("active");
    });
  
    // Evento para el botón "Shows Clásicos"
    jQuery(".btn-show-clasicos").click(function(e) {
      e.preventDefault();
      cambiarContenidoClasicos();
      jQuery(".btn-show-clasicos").addClass("active");
     jQuery(".btn-show-especiales").removeClass("active");
      
    });
       
        
    cambiarContenidoEspeciales();
  });
 
 
  /*
function toggleMenu() {
    const menu = document.querySelector('.menu-hidden');
    menu.classList.toggle('show-menu');
    menu.addEventListener('click', (event) => {event.stopPropagation();})
  }
  
  const menu = document.querySelector('.menu-hidden');
  menu.addEventListener('click', (event) => {
     event.preventDefault();
  });
  
  const xIcon = document.querySelector('.x-icon');
  xIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    // Cerrar el menú
    const menu = document.querySelector('.menu-hidden');
    menu.classList.remove('show-menu');
  });
  
  function toggleSubMenu() {
    const subMenu = document.querySelector('.sub-menu-acordeon');
    subMenu.classList.toggle('show-sub-menu');
    window.location.href = "catalogo.html"
  }

  function seleccionar(){
    const inicio= document.querySelector('.menu-item');
    window.location.href = "index.html"
  }
  */