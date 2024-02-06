const express = require('express')
const app = express()
const port = 3000
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let posts = [
    {text: "Hi this is my first post. i wam justw riting down stuff here for you to watch", author:"Irtiqa"},
    {text: "Hi this is my first post. i wam justw riting down stuff here for you to watch", author:"Yamin"},
    {text: "Hi this is my first post. i wam justw riting down stuff here for you to watch", author:"Iqra"},
    {text: "Hi this is my first post. i wam justw riting down stuff here for you to watch", author:"Urooj"}
];

app.get('/', (req, res) => {

  res.render('posts/home',{posts})
})
app.get('/newpost', (req, res) => {

    res.render('posts/newpost')
  })
app.post('/newpost', (req, res) => {
    
    res.render('posts/newpost')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})