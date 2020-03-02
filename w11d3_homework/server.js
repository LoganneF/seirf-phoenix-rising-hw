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
app.get('/',(req,res)=>{
  res.redirect('/products')
})

//index route
app.get("/products", (req, res) => {
  // Product.find({}, (error, products) => {
    res.render("index.ejs");
  // });
});

//show route (NEED MORE HERE)
app.get('/products/:id', (req, res)=>{
  res.render('show.ejs')
});

//new route (NEED MORE HERE)
app.get('/products/new', (req, res)=> {
  res.render('new.ejs');
});

//create route (NEED MORE HERE)
// app.post('/products', (req, res)=>{
//   //let index = products.push(req.body) -1;
//   //res.redirect(`/products/${index}`);
// });

//edit route (NEED MORE HERE)
app.get('/products/:id/edit', (req, res)=>{
  res.render('edit.ejs')
});

//update route (NEED MORE HERE)
app.put('products/:id', (req, res)=>{
  //products[req.params.id] = req.body;
  res.redirect('/products');
});

//delete route (NEED MORE HERE)
app.delete('products/:id', (req, res)=>{
  //products.splice(req.params.id, 1);
  res.redirect('/products');
});

  // Web server:
  app.listen(3000, () => {
    console.log("listening");
  });