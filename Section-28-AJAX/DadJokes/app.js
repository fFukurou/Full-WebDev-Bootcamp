const jokesList = document.querySelector('#jokes');
const button = document.querySelector('button');


const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement('li');
  newLI.append(jokeText);
  jokesList.append(newLI);
}



const getDadJoke = async () => {
  try {
    const config = { headers: {Accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', config);
  
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE BRUHV SORRY";
  }

}



button.addEventListener('click', addNewJoke);


