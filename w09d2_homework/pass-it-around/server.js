const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send(`99 bottles of beer on the wall. <a href='/98'>Take one down, pass it around`);
})
app.listen(port, ()=>{
    console.log('listening on port ' , port);
  });