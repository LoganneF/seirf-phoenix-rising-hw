const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js');
const methodOverride = require("method-override");

//tell express to use the middleware
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"))

// middleware
app.use((req, res, next)=>{
    console.log('I run for all routes');
    next();
});

//configure express.static
app.use(express.static('public'));

//Define routes:

app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!');
})

//index route
app.get('/pokemon', (req, res)=>{
    //res.send(pokemon);
    res.render('index.ejs', {
        data: pokemon,
    })
});

//new route
app.get('/pokemon/new', (req, res)=> {
    res.render('new.ejs');
});

//create route
app.post('/pokemon', (req, res)=>{
    let index = pokemon.push(req.body) -1;
    res.redirect(`/pokemon/${index}`);
});

//show route
app.get('/pokemon/:id', (req, res)=>{
    const currentPokemon = pokemon[req.params.id]
    res.render('show.ejs', {data: currentPokemon})
});

//edit route (SOMETHING ISNT RIGHT HERE)
app.get('/pokemon/:id/edit', (req, res)=> {
    res.render('edit.ejs', {
        data: pokemon[req.params.id],
        index: req.params.id
    }
);
});

//Update
app.put('/pokemon/:id', (req, res)=>{
    pokemon[req.params.id] = req.body;
    res.redirect('/pokemon');
})
//Delete route:
app.delete('/pokemon/:id', (req, res)=> {
    pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
});

app.listen(port,() => {
    console.log('listening on port' , port);
});