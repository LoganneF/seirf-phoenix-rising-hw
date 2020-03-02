const express = require("express");
const app = express();
const Product = require('./models/products');
// const methodOverride = require("method-override");

// //tell express to use the middleware
// app.use(express.urlencoded({extended:false}));
// app.use(methodOverride("_method"))

// // middleware
// app.use((req, res, next)=>{
//     console.log('I run for all routes');
//     next();
// });

// //configure express.static
// app.use(express.static('public'));
  
////////////////////
///  ROUTES     ////
////////////////////

//index route
app.get("/products", (req, res) => {
  // Product.find({}, (error, products) => {
    res.render("index.ejs");
  // });
});

//show route
app.get('/products/:id', (req, res)=>{
  res.render('show.ejs')
});

  // Web server:
  app.listen(3000, () => {
    console.log("listening");
  });