/*jslint browser, es6, single, devel, multivar */
/*global window */

let body = document.body,
    //0 selects the first indexed item in the array lists of the tag names
    head = document.getElementsByTagName('head')[0],
    header = document.getElementsByTagName('header')[0],
    nav = document.getElementsByTagName('nav')[0],
    main = document.getElementsByTagName('main')[0];

//create script tag for the Json file and append to head
var script = document.createElement('script');
script.src = "data/nav.json";
body.appendChild(script);

//define HeaderNav as function loop through the file and build the menu items
function headerNav(navItems) {
    //create ad append a ul element
    var ul = document.createElement('ul');
    nav.appendChild(ul);

    //  <li><a href="#">Work</a></li>
    for (var i = 0; i < navItems.items.length; i++) {
        ul += '<li><a href="' + navItems.items[i].url + '">' + navItems.items[i].label + '</a></li>';
    }
}
