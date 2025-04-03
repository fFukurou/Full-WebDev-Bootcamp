const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}
 
let h2 = document.querySelector('h2');

h2.classList.add('BRUH');
h2.classList.add('purple');
h2.classList.toggle('purple');
h2.classList.toggle('purple');

const firstP = document.querySelector('p');

const newB = document.createElement('b');
newB.append('HELLO I WAS INSERTED THROUGH JS');
newB.style.color = 'blue';
newB.style.fontSize = '30px';

firstP.append(newB);
firstP.prepend(newB);

const imgRemoved = document.querySelector('#bruhv');
imgRemoved.remove();