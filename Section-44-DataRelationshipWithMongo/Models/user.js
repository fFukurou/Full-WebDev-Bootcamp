// ONE TO FEW
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/TESTrelationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const userSchema = new mongoose.Schema({
     first: String,
     last: String,
     addresses: [
        {
            _id: { id: false },
            street: String,
            city: String,
            state: String,
            country: String
        }
     ]
})


const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123 Bruhv Street',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save();
    console.log(res);
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: '123 Yance Street!',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }
    )

    const res = await user.save();
    console.log(res);
}


// makeUser();
addAddress('67f3c47151e78360b8366b90');

