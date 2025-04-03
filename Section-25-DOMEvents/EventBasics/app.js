const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED!");
}

function scream() {
    console.log('AHHHHHHHHHHH');
}

btn.onmouseenter = scream;


document.querySelector('h1').onclick = ( function () {
    alert("You clicked me!");
});

const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', function () {
    alert("I WAS CLICKED!!!!");
});

function twist() {
    console.log('twist');
}

function shout() {
    console.log('FUUS');
}

const tasButton = document.querySelector('#tas');

tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);