const express = require('express');
const app = express();
const port = 3000;

app.get("/:bugNumber", (req, res)=> {
    let number = parseInt(req.params.bugNumber) - 1
    
    if(req.params.bugNumber > 0) {
        res.send(`<h1>${req.params.bugNumber} bugs in the code</h1>
        <a href="${number}">take one down, patch it around`);
    }
})
app.get('/', (req, res)=>{
    res.send(`99 bugs in the code. <a href='/98'>Take one down, patch it around`);
})
app.listen(port, ()=>{
    console.log('listening on port ' , port);
  });