class Home {
  create() {
    this.element = document.createElement("div");
    this.element.className = "home";

    this.element.innerHTML = `
      <h2 class="home__title">Ласкаво просимо</h2>
      <div class="home__content">
         <div class="home__sale">
            <img class="home__img" src="https://horoshop.ua/content/images/23/how-to-sell-handmade-abroad-from-ukraine-93666887725719.png" >
            <a class="home__btn" href="/#shop" id="hash">Дізнатись більше</a>
         </div>
      </div>
      `;
  }
  init() {
    this.create();
    return this.element;
  }
}
let home = new Home().init();

export { home };
