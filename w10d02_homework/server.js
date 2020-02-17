const express = require('express');
const app = express();
const port = 3000;
const budget = require('./models/budget.js')

//configure express.static
app.use(express.static('public'));

// Define routes:
app.get('/', (req, res) => {
    res.send("working!");
});

app.get('/budget', (req, res)=>{
    //res.send(budget);
    res.render('index.ejs', {budget: budget})
});

// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port,() => {
    console.log('listening on port' , port);
});