const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt)
//     console.log(salt);
//     console.log(`${hash}`);
// }

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(`${hash}`);
}


const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log(`LOGGED IN SUCCESSFULLY!`);
    } else {
        console.log(`WRONG LOGIN PAL`);
    }
}

hashPassword('monkey');

login('monkey', '$2b$12$o0UKRbs5n7lhemQTh0AsSuU.xYHCRnIi/Znt3Rbbd4.eMov7JoDym');