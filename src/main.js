const express = require('express')

const ProductosApi = require('../api/productos')

const productosApi = new ProductosApi()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.post('/', (req, res) => {
    const prod = req.body;
    const newProduct = productosApi.guardar(prod);
    res.send(newProduct);
})

app.get('/productos', (req, res) => {
    const products = productosApi.listarAll()
    res.send(products);
});

//--------------------------------------------
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
