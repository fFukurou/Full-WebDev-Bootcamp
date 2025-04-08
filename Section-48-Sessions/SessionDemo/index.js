const express = require('express');
const app = express();
const session = require('express-session');

const sessionOptions = {secret: 'notagoodsecret', resave: false, saveUninitialized: false};

app.use(session(sessionOptions));

app.get('/viewcount', (req, res) => {
    req.session.count !== null ? req.session.count++ : req.session.count = 1;

    res.send(`You have viewed this page ${req.session.count} time${req.session.count > 1 ? 's' : ''}.`);
});


app.get('/register', (req, res) => {
    const { username = 'Annonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet');
});


app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome Back, ${username}`);
})









app.listen(3000, () => {
    console.log('listening on port 3000')
})