//this is the button
let acc = document.getElementsByClassName("accordion-item-header");

for (let i = 0; i < acc.length; i++) {
  //when one of the buttons are clicked run this function
  acc[i].onclick = function () {
    //letiables
    let panel = this.nextElementSibling;
    let coursePanel = document.getElementsByClassName("accordion-item-body");
    let courseAccordion = document.getElementsByClassName("accordion-item-header");
    let courseAccordionActive = document.getElementsByClassName("accordion-item-header active");

    /*if pannel is already open - minimize*/
    if (panel.style.maxHeight) {
      //minifies current pannel if already open
      panel.style.maxHeight = null;
      //removes the 'active' class as toggle didnt work on browsers minus chrome
      this.classList.remove("active");
    } else { //pannel isnt open...
      //goes through the buttons and removes the 'active' css (+ and -)
      for (let ii = 0; ii < courseAccordionActive.length; ii++) {
        courseAccordionActive[ii].classList.remove("active");
      }
      //Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
      for (let iii = 0; iii < coursePanel.length; iii++) {
        this.classList.remove("active");
        coursePanel[iii].style.maxHeight = null;
      }
      //opens the specified pannel
      panel.style.maxHeight = panel.scrollHeight + "px";
      //adds the 'active' addition to the css.
      this.classList.add("active");
    }
  }//closing to the acc onclick function
}//closing to the for loop.
