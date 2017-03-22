/*jslint browser, es6, single, for, devel, this */
/*global window */

var accordion = document.getElementById('accordion');
var accordionButton = document.getElementsByClassName('accordion-button');
var boxSlider = document.getElementsByClassName('box');

for (var i = 0; i < accordionButton.length; i++) {
    accordionButton[i].addEventListener('click', toggle, false);
}

function toggle() {
    var currentClass = this.parentNode.className;

    for (var a = 0; a < boxSlider.length; a++) {
        boxSlider[a].className = 'box hide';
    }
    if (currentClass == 'box hide') {
        this.parentNode.className = 'box show';
    }
}
