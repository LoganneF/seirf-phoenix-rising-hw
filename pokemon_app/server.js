const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js');
app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!');
})

//index route
app.get('/pokemon', (req, res)=>{
    //res.send(pokemon);
    res.render('index.ejs', {pokemon: pokemon});
})

//show route
app.get('/pokemon/:id', (req, res)=>{
    res.send(req.params.id);
})


app.listen(port,() => {
    console.log('listening on port' , port);
});