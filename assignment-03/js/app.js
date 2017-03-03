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

if (null !== enlargeButton) {

    enlargeButton.addEventListener('click', showAlert, false);

} else {
    console.error('No reference to ID %c enlarge-div established');
}

if (null !== shrinkButton) {

    shrinkButton.addEventListener('click', showAlert, false);

} else {
    console.error('No reference to ID %c shrink-div established');
}