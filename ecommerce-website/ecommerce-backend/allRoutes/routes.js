  let routes = require("express").Router();

  routes.use("/api/v1/product", require("../controllers/ProductController"));
// const { getAllProducts, createProduct } = require("../controllers/ProductController");

// // Get all products
// routes.get("/", getAllProducts);

// // Create a new product
// routes.post("/", createProduct);

module.exports = routes;
