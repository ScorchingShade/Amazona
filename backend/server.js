import express from 'express'
import data from './data.js'

const app = express();

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Server done');
})

app.get('/api/v1/products', (req, res) => {
    res.send(data.products);
})




app.listen(PORT, () => {
    console.log(`Served at http://localhost:${PORT}`);
})