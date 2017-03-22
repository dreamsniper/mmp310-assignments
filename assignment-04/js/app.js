/*jslint browser, es6, single, for, devel, this */
/*global window */

var accordion = document.getElementById('accordion');
var accordionButton = document.getElementsByTagName('h2');
var boxSlider = document.getElementsByClassName('box');

//add eventListeners to h2 buttons
for (var i = 0; i < accordionButton.length; i++) {
    accordionButton[i].addEventListener('click', toggle, false);
}

//to open and close child divs
function toggle() {
    var currentClass = this.parentNode.className;

    for (var a = 0; a < boxSlider.length; a++) {
        boxSlider[a].className = 'box hide';
    }
    if (currentClass == 'box hide') {
        this.parentNode.className = 'box show';
    }
}
