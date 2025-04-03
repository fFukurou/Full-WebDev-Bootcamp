// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

let container = document.querySelector('#container');

for (let i = 1; i <= 151; i++) {
    const pokeDiv = document.createElement('div');
    const pokeSpan = document.createElement('span');
    pokeSpan.innerText = `Pokemon #${i}`;
    let newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

    pokeDiv.classList.add('pokemon');

    pokeDiv.append(pokeSpan);
    pokeDiv.append(newImg);

    container.append(pokeDiv);

}