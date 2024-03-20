class Footer {
  create() {
    this.element = document.createElement("footer");
    this.element.className = "footer";

    this.element.innerHTML = `
         <div class="container">
            <div class="footer__inner">
               <div class="footer__col">
                  <a class="logo" href="/" id="hash">
                     <span class='logo__top'>Sidko</span>
                     <span class='logo__bottom'>речі &#149; ручної &#149; роботи</span>
                  </a>
               </div>
               <div class="footer__col">
                  <a target="_blank" class="footer__contact" href='https://maps.app.goo.gl/aHbM1juBKHf3eoGd9'>
                     <i class="fa-solid fa-map-location-dot fa-xl" style="color: #cc9163;"></i>
                     <span>12, вулиця Євгена Чикаленка, Київ, Україна</span>
                  </a>
                  <a class="footer__contact" href='tel:+1234567890'>
                     <i class="fa-solid fa-phone fa-xl" style="color: #cc9163;"></i>
                     <span>+123 456 7890</span>
                  </a>
                  <a class="footer__contact" href="mailto:info@example.com">
                     <i class="fa-sharp fa-solid fa-envelope fa-xl" style="color: #cc9163;"></i>
                     <span>info@example.com</span>
                  </a>
               </div>
            </div>
         </div>
      `;
  }

  init() {
    this.create();
    return this.element;
  }
}

const footer = new Footer().init();
export { footer };
