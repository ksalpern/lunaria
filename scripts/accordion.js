let clickAccordion = document.getElementsByClassName("accordion-item-header");

for (let i = 0; i < clickAccordion.length; i++) {
  clickAccordion[i].onclick = function () {
    let panel = this.nextElementSibling;
    let coursePanel = document.getElementsByClassName("accordion-item-body");
    let courseAccordion = document.getElementsByClassName("accordion-item-header");
    let courseAccordionActive = document.getElementsByClassName("accordion-item-header active");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.classList.remove("active");
    } else {
      for (let j = 0; j < courseAccordionActive.length; j++) {
        courseAccordionActive[j].classList.remove("active");
      }
      for (let k = 0; k < coursePanel.length; k++) {
        this.classList.remove("active");
        coursePanel[k].style.maxHeight = null;
      }
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.classList.add("active");
    }
  }
}
