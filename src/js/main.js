var para = document.querySelector('p');


// console.log('para');

function updateGreeting (name) {

  para.innerHTML = 'js feed is working' + name;
}

updateGreeting(' Etsy');
