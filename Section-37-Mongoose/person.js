// VIRTUAL ATTRIBUTES

const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log(`------ Connection Open ------`);
    })
    .catch( err => {
        console.log(`ERROR!!`);
        console.log(`${err}`);
    })


const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName')
.get(function () {
    return `${this.first} ${this.last}`;
})
.set(function (fullName) {
    this.first = fullName.substr(0, fullName.indexOf(' '));
    this.last = fullName.substr(fullName.indexOf(' ') + 1);
});

personSchema.pre('save', async function() {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log(`I'm ABOUT TO SAVE!!!`);
});

personSchema.post('save', async function () {
    console.log(`I JUST SAVED!!!`);
})


const Person = mongoose.model('Person', personSchema);

const fukurou = Person({first: 'Fukurou', last: 'JGR'});
console.log(`${fukurou.fullName}`);

fukurou.fullName = 'Fukurou Strange';
console.log(`${fukurou.first}, ${fukurou.last}`);

fukurou.save().then(p => console.log(`${p}`));