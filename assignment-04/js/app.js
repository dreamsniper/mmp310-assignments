/*jslint browser, es6, single, for, devel, this */
/*global window */

var accordion = document.getElementById('accordion');
var accordionButton = document.getElementsByTagName('h2');

//add eventListeners to h2 buttons
for (var i = 0; i < accordionButton.length; i++) {
    accordionButton[i].addEventListener('click', toggle, false);
}

//add classes to the divs keeping first one open
for (var j = 0; j < accordionButton.length; j++ ){
   for (var b = 0; b < 1; b++) {
     accordionButton[b].nextElementSibling.classList = 'box show';
   }
   accordionButton[j].nextElementSibling.classList = 'box hide';
 }
 
var boxSlider = document.getElementsByClassName('box');

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
