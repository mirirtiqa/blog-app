const express = require('express')
const app = express()
const port = 3000
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const { v4: uuid } = require('uuid');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var methodOverride = require('method-override');
app.use(methodOverride('_method'));


let posts = [
    {id: uuid(), title: "first post",text: "Hi this is my first post. i wam justw riting down stuff here for you to watch", author:"Irtiqa"},
    {id: uuid(), title: "first post",text: "Hi this is my first post. i wam justw riting down stuff here for you to watch", author:"Yamin"},
    {id: uuid(),title: "first post",text: "Hi this is my first post. i wam justw riting down stuff here for you to watch", author:"Iqra"},
    {id: uuid(), title: "first post",text: "Hi this is my first post. i wam justw riting down stuff here for you to watch", author:"Urooj"}
];

app.get('/', (req, res) => {

  res.render('posts/home',{posts})
});
app.get('/newpost', (req, res) => {

    res.render('posts/newpost')
  });
app.post('/newpost', (req, res) => {
    const {author,title,text} = req.body;
    const id = uuid();
    posts.push({id,title,text,author});
    res.redirect('/');
  });

  app.get('/show/:id', (req, res) => {
    const {id} = req.params;
    const post = posts.find(p => p.id===id);
    res.render('posts/show',{post});
  });

  app.get('/edit/:id', (req, res) => {
    const {id} = req.params;
    const post = posts.find(p => p.id===id);
    res.render('posts/edit',{post});
  });
  app.patch('/edit/:id', (req, res) => {
    const {id} = req.params;
    const post = posts.find(p => p.id===id);
    post.text = req.body.text;
    post.title = req.body.title;
    res.render('posts/show',{post});
  });
  app.get('/delete/:id', (req, res) => {
    const {id} = req.params;
    posts = posts.filter(p => p.id!==id);

    res.redirect('/');
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});