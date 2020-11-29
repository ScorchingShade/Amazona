import express from "express";
import mongoose from 'mongoose'
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

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


//Router usage
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)


//Error middleware
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})

app.listen(PORT, () => {
    console.log(`Served at http://localhost:${PORT}`);
});