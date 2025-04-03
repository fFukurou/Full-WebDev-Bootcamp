const form = document.querySelector('#tweetForm');
const username = document.querySelector('#username');
const input = document.querySelector('#tweet');
const tweetsList = document.querySelector('#tweets');


form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log("Submitted the form!");

    let newLi = document.createElement('li');
    newLi.append(`${username.value}:  ${input.value}`); 
    tweetsList.append(newLi);

    resetForms();
})  ;

function resetForms() {
    input.value = '';
    username.value = '';
}