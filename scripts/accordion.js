let clickAccordion = document.getElementsByClassName("accordion-item-header");

for (let i = 0; i < clickAccordion.length; i++) {
  //when one of the buttons are clicked run this function
  clickAccordion[i].onclick = function () {
    //letiables
    let panel = this.nextElementSibling;
    let coursePanel = document.getElementsByClassName("accordion-item-body");
    let courseAccordion = document.getElementsByClassName("accordion-item-header");
    let courseAccordionActive = document.getElementsByClassName("accordion-item-header active");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.classList.remove("active");
    } else {
      //goes through the buttons and removes the 'active' css (+ and -)
      for (let j = 0; j < courseAccordionActive.length; j++) {
        courseAccordionActive[j].classList.remove("active");
      }
      //Goes through and removes 'active' from the css, also minifies any 'panels' that might be open
      for (let k = 0; k < coursePanel.length; k++) {
        this.classList.remove("active");
        coursePanel[k].style.maxHeight = null;
      }
      //opens the specified pannel
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.classList.add("active");
    }
  }
}
