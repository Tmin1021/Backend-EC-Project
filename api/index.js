import express from "express"
import { config } from "dotenv";
import products from "./data/Products.js";

const app = express();
config();

app.get("/api/products", (req, res) => {
    // res.send("<h1> Hello World! </h1>");
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find((product) => product.id === req.params.id);
    res.json(product);
});

const port = process.env.PORT;
app.listen(port || 9000, () => {
  console.log(`Listening on port ${port}`);
});