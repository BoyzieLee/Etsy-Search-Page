import $ from 'jquery';

var para = document.querySelector('p');
// ^^^ this var replaces the js code above ^^^
// var para = $('p');

// console.log('para');

function updateGreeting (timeofday, name) {

// this is standard JS. just use this or the Interpretator///
  // para.innerHTML = 'Good' + timeofday + ' ' + '<span class="underline">' + name +'</span>';

// this is a string Interpretator//////////////
  para.innerHTML =
  // para.content =
    `Good ${timeofday}
    <span class="underline">${name}</span>`;

  // para.html(contents);
}

updateGreeting(' afternoon', 'Etsy');
