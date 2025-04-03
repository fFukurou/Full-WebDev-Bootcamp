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

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive, stupid']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
        default: ['cycling']
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.methods.greet = function () {
    console.log(`Hello I'M A PRODUCT`);
    console.log(`- from ${this.name}`)
}

productSchema.statics.fireSale = function() {
    return this.updateMany({}, {onSale: true})
}

const Product = mongoose.model('Product', productSchema);



const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Shoes'});
    await foundProduct.toggleOnSale();
    console.log(`${foundProduct}`);
    await foundProduct.addCategory('Outdoors');
    console.log(`${foundProduct}`);
}

Product.fireSale().then( res => console.log(`${res}`));

// findProduct();
// HERE, Price will be converted into a number, color will be ignored, and onSale will be set to false by default;
// const product = new Product({name: 'Cycling Jersey', price: '2000', color: 'red', categories: ['Cycling', 'Running', 'Expensive'], size: 'L'});

// product.greet();

// product.save()
//     .then( data => {
//         console.log(`IT WORKED!`);
//         console.log(`data`);
//     })
//     .catch(err => {
//         console.log(`ERROR OCCURRED!`);
//         console.log(`${err}`);
//     })

// Product.findOneAndUpdate({ name: 'Tire Pump'}, {price: -10.99}, {new:true, runValidators: true})
//     .then( data => {
//         console.log(`IT WORKED!`);
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(`ERROR OCCURRED!`);
//         console.log(`${err}`);
//     })