/*jslint browser, es6, single, devel, multivar */
/*global window */

var body = document.body,
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
    //to build the html string
    var html = [];

    //create a ul element
    var ul = '<ul>';

    //loop to populate navigation
    for (var i = 0; i < navItems.items.length; i++) {

        if (navItems.items[i].items !== '') {
            ul += '<li>';

            //cycle through the urls and labels and build the a tag
            ul += '<a href="' + navItems.items[i].url + '" >' + navItems.items[i].label + '</a>';
            console.log(ul);

            ul += '<ul>';
            console.log(ul);
            for (var a = 0; a < navItems.items[i].items.length; a++) {
                ul += '<li>';
                console.log(ul);
                //cycle through theurls and labels and build the a tag
                html[a] = '<a href="' + navItems.items[1].items[a].url + '" >' + navItems.items[1].items[a].label + '</a>';

                //add ul li list
                ul += html[a];
                ul += '</li>';
                console.log(ul);
            }
            //close the nested ul
            ul += '</ul>';

        } else {
            //create li element
            ul += '<li>';

            //cycle through theurls and labels and build the a tag
            html[i] = '<a href="' + navItems.items[i].url + '" >' + navItems.items[i].label + '</a>';

            //add ul li list
            ul += html[i];
            ul += '</li>';
        }
    }
    //append html to nav
    nav.innerHTML = ul;
}

function content(info) {

}
