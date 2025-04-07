// ONE TO MANY

// 'POPULATE' replaces the ObjectIDs with the actual Object

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

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     {name: 'Goddess Melon', price: 4.00, season: 'Summer'},
//     {name: 'Sugar Baby Watermelon', price: 3.00, season: 'Summer'},
//     {name: 'Aspargus', price: 5.33, season: 'Spring'},
// ]);

// const makeFarm = async () => {
//     const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA' });
//     const melon = await Product.findOne({name: 'Goddess Melon'});

//     farm.products.push(melon);
//     await farm.save();
//     console.log(farm);
// }


// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' });
    const watermelon = await Product.findOne({ name: 'Sugar Baby Watermelon'});
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}

// addProduct();

Farm.findOne({ name: 'Full Belly Farms'})
    .populate('products')
    .then(farm => console.log(farm));