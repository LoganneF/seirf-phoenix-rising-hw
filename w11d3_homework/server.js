const express = require("express");
const app = express();

// Load up mongoose npm as mongoose:
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));

// Connect mongoose to mongo db:
mongoose.connect("mongodb://localhost:27017/fruitsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

const Product = require('./models/products');

////////////////////
///  ROUTES     ////
////////////////////

// NEW
app.get("/products/new", (req, res) => {
    res.render("new.ejs");
  });
  
  // CREATE
  app.post("/products/", (req, res) => {
    if (req.body.readyToEat === "on") {
      //if checked, req.body.readyToEat is set to 'on'
      req.body.readyToEat = true;
    } else {
      //if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false;
    }
    Product.create(req.body, (error, result) => {
      // res.send(result);
      res.redirect("/products");
    });
  });
  
  // INDEX
  app.get("/products", (req, res) => {
    Product.find({}, (error, products) => {
      res.render("index.ejs", { products });
    });
  });
  
  // SECRET SEED ROUTE
  app.get('/seed', async (req, res) => {
    const newProducts =
      [
        {
          name: 'Beans',
          description: 'A small pile of beans. Buy more beans for a big pile of beans.',
          img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
          price: 5,
          qty: 99
        }, {
          name: 'Bones',
          description: 'It\'s just a bag of bones.',
          img: 'http://bluelips.com/prod_images_large/bones1.jpg',
          price: 25,
          qty: 0
        }, {
          name: 'Bins',
          description: 'A stack of colorful bins for your beans and bones.',
          img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
          price: 7000,
          qty: 1
        }
      ]
  
    try {
      const seedItems = await Product.create(newProducts)
      res.send(seedItems)
    } catch (err) {
      res.send(err.message)
    }
  })
  
  // SHOW
  
  app.get("/products/:id", (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
      res.render("show.ejs", {
        product: foundProduct
      });
    });
  });
  
  // Web server:
  app.listen(27017, () => {
    console.log("listening");
  });