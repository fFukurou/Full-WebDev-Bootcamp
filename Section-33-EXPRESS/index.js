const express = require('express');
const app = express();


// app.use( (req, res) => {
//     console.log("GOT A NEW REQUEST!");
//     res.send("HELLO RESPONSE");
// })

app.get('/', (req, res) => {
    res.send("THIS. THIS. HOMEPAGE!");
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing the post ${postId} on the ${subreddit} subreddit`);
})

app.post('/cats', (req, res) => {
    res.send("this is a post request to CATS");
})

app.get('/cats', (req, res) => {
    res.send("MEOW!!");
})

app.get('/dogs', (req, res) => {
    res.send("WOOF!");
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("Nothing found if nothing searched...");
    }

    res.send(`<h1> Search results for: ${q} </h1>`);
})


app.get(/(.*)/, (req, res) => {
    res.send(`I don't know the route to that path...`);
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})