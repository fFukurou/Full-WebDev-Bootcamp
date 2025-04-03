// ARRAYS
const scores = [921932, 31923219, 173281, 3213218, 99, 77, 655, 33, 121];

const [gold, silver, bronze, ...everyoneElse] = scores;

console.log(everyoneElse);

// OBJECTS
const user = {
    email: 'dummyemail@gmail.com',
    password: 'c@hk2K121-<a',
    nickname: 'ultrab00b64',
    born: 1930,
    died: 2012,
    bio: 'Homie was a true homie, fr fr...'
}


const {bruh ='N/A', email, password: userPassword, nickname, died: diedOn, bio: desc} = user;

console.log("Email: ", email, "\nnickname: ", nickname, "\nbio: ", desc, "\nDied on: ", diedOn);

console.log(bruh);

// PARAMETERS
function fullName({ email, nickname }) {
    return `${email} ${nickname}`;
}

console.log( fullName(user));