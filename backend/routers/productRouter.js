import express from "express";
import data from "../data.js";
import Product from "../models/productModel.js";
import expressAsyncHandler from 'express-async-handler'
import { isAdmin, isAuth } from "../utils.js";

const productRouter = express.Router();


productRouter.get(
    "/",
    expressAsyncHandler(async(req, res) => {
        const products = await Product.find({});
        res.status(200).send(products);
    })
);


productRouter.get(
    "/:id",
    expressAsyncHandler(async(req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.status(200).send(product);
        } else {
            res.status(404).send({ message: 'Product not found' });
        }

    })
);




productRouter.get(
    "/seed",
    expressAsyncHandler(async(req, res) => {
        // await Product.remove({});
        const createdProducts = await Product.insertMany(data.products);
        res.status(200).send({ createdProducts });
    })
);

productRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async(req, res) => {
        const product = new Product({
            name: 'sample name ' + Date.now(),
            image: '/images/p1.jpg',
            price: 0,
            category: 'sample category',
            brand: 'sample brand',
            countInStock: 0,
            rating: 0,
            numReviews: 0,
            description: 'sample description',
        });
        const createdProduct = await product.save();
        res.send({ message: 'Product Created', product: createdProduct });
    })
);


export default productRouter;