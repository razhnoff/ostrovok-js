class Panel {
  init(el) {
    this.addListeners(el);
  }

  addListeners(el) {
    el.addEventListener("click", (ev) => this.clickHandler(ev));
  }

  clickHandler(ev) {
    this.counterHandler(ev);
  }

  counterHandler(ev) {
    const target = document.querySelector(`.${ev.target.className}-counter`);
    const value = Number(target.innerText);
    target.innerText = value + 1;
  }
}

function main() {
  var panelsElements = document.querySelector(".wrapper");
  [].slice.apply(panelsElements.children).forEach(function (panelElement) {
    var panel = new Panel();
    panel.init(panelElement);
  });
}

window.onload = main;
