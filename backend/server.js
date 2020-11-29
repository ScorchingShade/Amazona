import express from "express";
import data from "./data.js";
import mongoose from 'mongoose'
import userRouter from "./routers/userRouter.js";

const app = express();

//Connect to mongoDb
const uri = process.env.ATLAS_URI;
mongoose.connect(process.env.MONGODB_URL || `mongodb+srv://ankush:1234@cluster0-nmfdz.mongodb.net/users?retryWrites=true&w=majority`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDb connection established")
})



const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Server done");
});

//fetch all products
app.get("/api/v1/products", (req, res) => {
    res.send(data.products);
});

//fetch all products using id
app.get("/api/v1/products/:id", (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.status(200).send(product);
    } else res.status(404).send({ message: "Product not found" });
});

//Router usage
app.use('/api/v1/users', userRouter)


//Error middleware
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})

app.listen(PORT, () => {
    console.log(`Served at http://localhost:${PORT}`);
});