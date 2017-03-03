/*jslint browser, es6, single, for, devel, this */
/*global window */

var enlargeButton = document.getElementById('enlarge-div'),
    shrinkButton = document.getElementById('shrink-div');

//function showEnlargeAlert(){
//    'use strict';
//    
//    alert('enlarge-div');
//}
//
//function showShrinkAlert(){
//    'use strict';
//    
//    alert('shrink-div');
//}

function showAlert() {
    'use strict';

    alert('You Clicked The ' + this.id);
}

//To enlarve div box by 100 px
function enlargeBox() {
    var box = document.querySelector('div'); //selects the div in the Dom
    var boxWidth = window.getComputedStyle(box, null).getPropertyValue('width'); //get the width element
    var boxHeight = window.getComputedStyle(box, null).getPropertyValue('height');
    var newWidth = parseInt(boxWidth, 10); //gets rid of the px and leaves integer set to variable
    var newHeight = parseInt(boxHeight, 10);
    newWidth += 100; //adds 100px to element
    newHeight += 100;
    box.style.width = (newWidth) + "px"; //sets the style of the elemet
    box.style.height = (newHeight) + "px";
    //alert(box.style.width);
}

//To shrink div box by 100 px
function shrinkBox() {
  var box = document.querySelector('div'); //selects the div in the Dom
  var boxWidth = window.getComputedStyle(box, null).getPropertyValue('width'); //get the width element
  var boxHeight = window.getComputedStyle(box, null).getPropertyValue('height');
  var newWidth = parseInt(boxWidth, 10); //gets rid of the px and leaves integer
  var newHeight = parseInt(boxHeight, 10);
  newWidth -= 100;
  newHeight -= 100;
  box.style.width = (newWidth) + "px";
  box.style.height = (newHeight) + "px";
  //alert(box.style.width);
}

if (null !== enlargeButton) {
    enlargeButton.addEventListener('click', enlargeBox, false);
} else {
    console.error('No reference to ID %c enlarge-div established');
}
if (null !== shrinkButton) {
    shrinkButton.addEventListener('click', ShrinkBox, false);
} else {
    console.error('No reference to ID %c shrink-div established');
}
