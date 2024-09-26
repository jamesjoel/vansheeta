const routes = require("express").Router();
const productModel = require("../models/Product");
routes.post('/', async (req, res) => {
    
  let {title, price, category, detail} = req.body;
      const createdProduct = await productModel.create({
      title,
      price,
      category, 
      detail
  })
  res.send(createdProduct);

})


routes.get('/', async (req, res) => {
  try {
      const products = await productModel.find(); // Fetch all products
      res.status(200).send(products); // Respond with the product list
  } catch (error) {
      res.status(500).send({ error: error.message }); // Handle errors
  }
});



 
module.exports = routes;   