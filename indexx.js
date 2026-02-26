const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Product API");
});

app.get("/products", (req, res) => {
  res.status(200).json(products);
});
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id)

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json(product);
});

app.get("/products/category/:categoryName", (req, res) => {
  const categoryName = req.params.categoryName;
  const filteredProducts = products.filter( 
    p => p.category.toLowerCase() === categoryName.toLowerCase()
  );

  res.status(200).json(filteredProducts);
});

app.post("/products", (req, res) => {
  const { name, category, price, stock, rating } = req.body;  
  const newProduct = {
    id,
    name,
    category,
    price,
    stock,
    rating
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const { name, category, price, stock, rating } = req.body;
  products[index] = {
    id: id,
    name,
    category,
    price,
    stock,
    rating
  };

  res.status(200).json(products[index]);
});

// // PATCH - Update Only Stock
// app.patch("/products/:id/stock", (req, res) => {
//   const id = parseInt(req.params.id);
//   const product = products.find(p => p.id === id);

//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   product.stock = req.body.stock;

//   res.status(200).json(product);
// });

// PUT - Update Only Stock

app.put("/products/:id/stock", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  product.stock = req.body.stock;

  res.status(200).json(product);
});

app.put("/products/:id/price", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  product.price = req.body.price;
  res.status(200).json(product);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



