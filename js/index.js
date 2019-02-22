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

/*--------------------------------------------------------------------------------------------------------------------------*/

class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.tabsItemLeft = document.querySelector(
      `.tabs-item-left[data-tab = '${this.data}']`
    );
    this.tabsItemRight = document.querySelector(
      `.tabs-item-right[data-tab = '${this.data}']`
    );
    this.tabItem = new TabItem(this.tabsItemLeft, this.tabsItemRight);
    this.element.addEventListener("click", () => this.select());
  }

  select() {
    // Select all elements with the .tab class on them
    const tabButtons = document.querySelectorAll(".tabs-link");
    // Iterate through the NodeList removing the .active-tab class from each element
    tabButtons.forEach(tabButton =>
      tabButton.classList.remove("tabs-link-selected")
    );
    this.element.classList.add("tabs-link-selected");
    this.tabItem.select();
  }
}

class TabItem {
  constructor(tabsItemLeft, tabsItemRight) {
    // Assign this.cardElement to the cardElement DOM reference
    this.tabsItemLeft = tabsItemLeft;
    this.tabsItemRight = tabsItemRight;
  }
  select() {
    const leftItem = document.querySelectorAll(".tabs-item-left");
    const rightItem = document.querySelectorAll(".tabs-item-right");
    leftItem.forEach(item => item.classList.remove("tabs-item-selected"));
    rightItem.forEach(item => item.classList.remove("tabs-item-selected"));
    this.tabsItemLeft.classList.add("tabs-item-selected");
    this.tabsItemRight.classList.add("tabs-item-selected");
  }
}

tabButtons = document
  .querySelectorAll(".tabs-link ")
  .forEach(tabButton => new TabLink(tabButton));
