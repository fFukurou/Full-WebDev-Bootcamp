const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Score = document.querySelector('#p1Display');
const p2Score = document.querySelector('#p2Display');
const playTo = document.querySelector('#playto');



p1Button.addEventListener('click', (e) => {
    checkScore(p1Score, p2Score);
})

p2Button.addEventListener('click', (e) => {
    checkScore(p2Score, p1Score);
})

resetButton.addEventListener('click', (e) => {
    p1Score.innerText = 0;
    p1Score.style.color = 'black';
    p2Score.innerText = 0;
    p2Score.style.color = 'black';
    p1Button.disabled = false;
    p2Button.disabled = false;
})

function checkScore(player, opponent) {
    player.innerText++;
    if (player.innerText && player.innerText == playTo.value) {
        player.style.color = 'green';
        opponent.style.color = 'red';
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
}