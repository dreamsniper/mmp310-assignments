/*jslint browser, es6, single, for, devel, this */
/*global window */

var accordion = document.getElementById('accordion');
var accordionButton = document.getElementsByTagName('h2');

//add eventListeners to h2 buttons
for (var i = 0; i < accordionButton.length; i++) {
    accordionButton[i].addEventListener('click', toggle, false);

    for (var b = 0; b < 1; b++) {
        accordionButton[b].nextElementSibling.classList = 'box show';
    }
    accordionButton[i].nextElementSibling.classList = 'box hide';
}


//to open and close child divs
function toggle() {
    var currentClass = this.parentNode.className;

    for (var d = 0; d < this.length; d++) {
        if (accordionButton.nextElementSibling.className === 'box hide') {
            accordionButton.nextElementSibling.className = 'box show';
        }
    }
}