const express = require("express");
const router = express.Router();
const productoService = require("../services/productos-service");

//ahora la ruta es /products.solo para agregar productos
router.post("/", (req, res) => {
    try {
        let nuevoProducto = req.body;
        let idUser = req.headers.id;
        let result = productoService.crearProducto(nuevoProducto, idUser);
        if(result){
            res.status(201).json(result);
        }else{
            res.status(400).send('error, no se puedo crear el producto')
        }
    } catch (err) {
        res.status(400).json({ Error: err.message });
    }
});

router.get('/', (req,res) =>{
 let productos = productoService.listarProductos();
 res.json(productos);
})
module.exports = router;
