/*jslint browser, es6, single, devel, multivar */
/*global window */

'use strict'

var body = document.body,
    //0 selects the first indexed item in the array lists of the tag names
    head = document.getElementsByTagName('head')[0],
    header = document.getElementsByTagName('header')[0],
    nav = document.getElementsByTagName('nav')[0],
    main = document.getElementsByTagName('main')[0],
    h1 = document.getElementsByTagName('h1')[0],
    h2 = document.getElementsByTagName('h2')[0],
    h3 = document.getElementsByTagName('h3')[0],
    pTag = document.getElementsByTagName('p')[0],
    blockquote = document.getElementsByTagName('blockquote')[0],
    mainLi = document.querySelectorAll('main > ul > li'),
    footerSpan = document.querySelectorAll('footer > nav > span');


//create script tag for the Json file and append to head
var script = document.createElement('script'),
    scriptContent = document.createElement('script');

scriptContent.src = 'data/content.json';
script.src = "data/nav.json";
body.appendChild(script);
body.appendChild(scriptContent);

//define HeaderNav as function loop through the Json file and build the menu items
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

            ul += '<ul>';

            for (var a = 0; a < navItems.items[i].items.length; a++) {
                ul += '<li>';

                //cycle through theurls and labels and build the a tag
                html[a] = '<a href="' + navItems.items[1].items[a].url + '" >' + navItems.items[1].items[a].label + '</a>';

                ul += html[a];

                ul += '</li>';
            }
            //close the nested ul
            ul += '</ul>';

        } else {
            ul += '<li>';

            //cycle through theurls and labels and build the a tag
            html[i] = '<a href="' + navItems.items[i].url + '" >' + navItems.items[i].label + '</a>';

            ul += html[i];

            ul += '</li>';
        }
    }
    //append html to nav
    nav.innerHTML = ul;
}

function content(info) {
    'use strict';

    //append text to header
    h1.innerHTML = info.h1;

    //append text to p element
    pTag.innerHTML = info.p;

    //append text to h2 element
    h2.innerHTML = info.h2;

    //append text to blockquote element
    blockquote.innerHTML = info.blockquote;

    //append text to h3 element
    h3.innerHTML = info.h3;

    //append text list to li elements
    for (var q = 0; q < info.list.length; q++) {
        if (info.list) {
            mainLi[q].innerHTML = info.list[q].content;
        }
    }
}

/*
<i class="fa fa-facebook" aria-hidden="true"></i>
<i class="fa fa-twitter" aria-hidden="true"></i>
<i class="fa fa-instagram" aria-hidden="true"></i>
<i class="fa fa-youtube" aria-hidden="true"></i>
*/

var spanArray = {
    icons: ['facebook',
            'twitter',
            'instagram',
            'youtube']
};

for (var f = 0; f < footerSpan.length; f++) {
    var spanHtml = '';
    spanHtml += '<a href="#"><i class="fa fa-';
    spanHtml += spanArray.icons[f];
    spanHtml += '" aria-hidden="true"></i></a>';
    footerSpan[f].innerHTML = spanHtml;
}
