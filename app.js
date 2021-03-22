const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public/'));

const aboutcontent = "IoT20 is a bunch of misfits crammed togheter in a Zoom meeting talking shit on discord"
const contactcontent = "Jag vet inte. ring nån. poolia?"

const bloggposts = [];

app.get('/', function(req, res) {
    res.render('index', {bloggposts: bloggposts.reverse()});
});

app.get('/about', function(req, res) {
    res.render('about', {aboutcontent: aboutcontent});
});

app.get('/contact', function(req, res) {
    res.render('contact', {contactcontent: contactcontent});
});
app.get('/compose', function(req, res) {
    res.render('compose');
})
app.post('/compose', function(req, res){
    console.log(req.body.composed);
    let input={
    title: req.body.title,
    text: req.body.text
    }
    bloggposts.push(input)
    res.redirect('/');
});

app.listen(process.env.PORT||3000, function(){
    console.log('listening on port 3000');
});