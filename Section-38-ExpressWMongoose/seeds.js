const mongoose = require('mongoose');
const Product = require('./models/product');


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log(`------ Mongo Connection OPEN ------`);
    })
    .catch( err => {
        console.log(`Mongo Connection ERROR!`);
        console.log(`${err}`);
    })


const p = new Product({
    name: 'Ruby Grapefruit',
    price: 1.99,
    category: 'fruit'
})

p.save()
.then( p => {
    console.log(`${p}`);
})
.catch( err => {
    console.log(`${err}`);
})

const productList = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    }
];

Product.insertMany(productList)
.then( res => {
    console.log(`${res}`);
})
.catch ( err => {
    console.log(`${err}`);
});