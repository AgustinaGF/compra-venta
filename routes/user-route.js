const express = require("express");
const router = express.Router();
const userService = require("../services/usuario-service");
const { validateRegister } = require("../validations");

//importo las validaciones

router.post("/", async (req, res) => {
    try {
        let usuario = req.body;
        const { error } = validateRegister(usuario);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        //encriptar password (libreria bcryptjs)
        const hashedPassword = await userService.hashPassword(usuario);
        //agregamos el hashpassword a la propiedad password en body request
        usuario.password = hashedPassword;
        usuario.misProductos = [];
        let usuarioNuevo = userService.crearUsuario(usuario);
        res.status(201).json(usuarioNuevo)
    } catch (error) {
        res.status(400).json({ Error: error.message });
    }
});

router.post("/login", (req, res) => {});

router.get("/", (req, res) => {
    let usuarios = userService.listarUsuarios();
    res.json(usuarios);
});

module.exports = router;
