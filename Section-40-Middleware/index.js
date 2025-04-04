const express = require('express');
const app = express()   ;
const morgan = require('morgan');



// app.use(morgan('dev'));


app.use((req, res, next) => {
    // req.method = 'GET';
    req.requestTime = Date.now();
    console.log(req.method, req.path, req.requestTime);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log(`I HATE DOGS`);
    next();
})

// PASSWORD MIDDLWARE
const verifyPassword = (req,res,next) => {
    const { password } = req.query;
    if (password === 'chickennugget') next();

    res.send("SORRY YOU NEED A PASSWORD!!!");
};


app.use((req, res,next ) => {
    console.log(`This is my first middleware`); 
    return next();
})

app.use((req, res,next ) => {
    console.log(`This is my second middleware`);
    return next();
})


app.get('/', (req, res) => {
    res.send('Home Page');

})

// PASSING A FUNCTION AS A MIDDLEWARE
app.get('/secret', verifyPassword ,(req, res) => {
    res.send("Sometimes I wear Headphones in public so I don't have to talk to anyone");
})

app.get('/dogs', (req, res) => {
    res.send('WOOD');
})


app.use((req, res) => {
    res.status(404).send("NOT FOUND!");
})


app.listen(3000, () => {
    console.log(`App is running on 127.0.0.1:3000`);
})