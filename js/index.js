// JS goes here

//nav expand/collapse logic below

class Menu {
  constructor(element) {
    this.element = element;
    this.menu = this.element.querySelector("#menu");
    this.toggle = this.element.querySelector("#toggle");
    this.toggle.addEventListener("click", () => {
      this.toggleMenu();
    });
  }
  Expanded() {
    return this.element.classList.contains("expanded");
  }
  toggleMenu() {
    if (this.Expanded()) {
      this.collapse();
    } else {
      this.expand();
    }
  }
  collapse() {
    this.element.classList.add("dropdown");
    this.element.classList.remove("expanded");
  }
  expand() {
    this.element.classList.add("expanded");
    this.element.classList.remove("dropdown");
  }
}

let menu = document.querySelector("nav");
menu = new Menu(menu);
