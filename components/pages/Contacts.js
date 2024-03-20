class Contacts {
  create() {
    this.element = document.createElement("div");
    this.element.className = "contacts";
    this.element.innerHTML = `
         <h2 class="contacts__title">Контакти</h2>
         <div class="contacts__content">
            <div class="contacts__col">
               <div class="contacts__contact">
                  Адреса: <span>12, вулиця Євгена Чикаленка, Київ, Україна</span>
               </div>
               <div class="contacts__contact">
                  Телефон: <span>+123 456 7890</span>
               </div>
               <div class="contacts__contact">
                  Email: <span>info@example.com</span>
               </div>
            </div>
            <div class="contacts__col">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.6022081187687!2d30.52333971573318!3d50.44062697947215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc840731f535%3A0x82279a13598f5f30!2sPushkinska%20St%2C%2012%2C%20Kyiv%2C%2001000!5e0!3m2!1sen!2sua!4v1647727803539!5m2!1sen!2sua" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
         </div>
      `;
  }
  init() {
    this.create();
    return this.element;
  }
}
let contacts = new Contacts().init();

export { contacts };
