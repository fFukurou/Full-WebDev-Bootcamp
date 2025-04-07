// ONE TO BAJILLIONS
// YOU REFERENCE THE PARENT ON THE CHILD DOCUMENT

const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/TESTrelationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })



const userSchema = new Schema({
    username: String,
    age: Number
});


const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async () => {
    // const user = new User({
    //     username: 'chickenfan99',
    //     age: 61
    // });

    
    // const tweet1 = new Tweet( { 
        //     text: 'omg i loev my chicken family',
        //     likes: 2
        // });
    const user2 = await User.findOne({username: 'chickenfan99'});
    const tweet2 = new Tweet({ text: 'bok bock bock my chiken make noises', likes: 999});

    // tweet1.user = user;
    // user.save();
    // tweet1.save();

    tweet2.user = user2;
    tweet2.save();
}

// makeTweets();


const findTweet = async () => {      // POPULATE THE USER FIELD, BUT ONLY GIVE ME USERNAME
    const t = await Tweet.findOne({}).populate('user', 'username');
    console.log(t);
}

findTweet();