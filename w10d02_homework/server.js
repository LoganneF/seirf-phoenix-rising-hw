const express = require('express');
const app = express();
const port = 3000;
const budget = require('./models/budget.js');

//tell express to use the middleware
app.use(express.urlencoded({extended:false}));

// middleware
app.use((req, res, next)=>{
    console.log('I run for all routes');
    next();
});

//configure express.static
app.use(express.static('public'));

// Define routes:
app.get('/', (req, res) => {
    res.send("working!");
});

//index route
app.get('/budget', (req, res)=>{
    //res.send(budget);
    res.render('index.ejs', {budget: budget})
});
//new route
app.get('/budget/new', (req, res)=> {
    res.render('new.ejs');
});

//post route
app.post('/budget', (req, res)=>{
    //console.log(req.body);
    budget.push(req.body);
    console.log('data received');
    res.redirect('/budget');

});
//show route
app.get('/budget/:id', (req, res)=>{
    const currentItem = budget[req.params.id]
    res.render('show.ejs', {budget: currentItem})
})
// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port,() => {
    console.log('listening on port' , port);
});