import express from "express";
import data from "./data.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Server done");
});

app.get("/api/v1/products", (req, res) => {
    res.send(data.products);
});

app.get("/api/v1/products/:id", (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.status(200).send(product);
    } else res.status(404).send({ message: "Product not found" });
});

app.listen(PORT, () => {
    console.log(`Served at http://localhost:${PORT}`);
});