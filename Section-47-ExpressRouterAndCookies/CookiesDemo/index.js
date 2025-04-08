const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    const { name = 'dummy', anime = 'shingeki no kyojin'} = req.cookies;
    const { fruit = 'peach'} = req.signedCookies;

    console.log(req.cookies);
    console.log(req.signedCookies);

    res.send(`Hey there!, ${name}, still haven't finished ${anime}?\n Stop eating that ${fruit}`);
});

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

app.get('/setname', (req, res) => {
    res.cookie('name', 'henrietta');
    res.cookie('anime', 'shingeki no kyojin');
    res.send('OK TAKE MY COOKIE!');
});


app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send("OK SIGNED YOUR FRUITY COOKIE LOLLOL");
})



app.listen(3000, () => {
    console.log("SERVING!")
})