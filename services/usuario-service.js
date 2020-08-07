const dataStore = require("../db/database");
//importa libreria npm install bcryptjs
const bcrypt = require('bcryptjs')

// module.exports.crearUsuario = function (usuario) {
//     let buscarUsuarioPorNombreYApellido = dataStore.usuarios.filter(
//         (r) => r.nombre == usuario.nombre && r.apellido == usuario.apellido
//     );
//     if (buscarUsuarioPorNombreYApellido.length > 0) {
//         throw new Error("Ya existe un usuario con ese nombre y apellido");
//     }
//     return dataStore.agregarUsuario(usuario);
// };

//en vez de validar si existe por nombre y apellido, voy a buscar solo por email.
//lo que no se debe repetir en la base de datos es el mail, esta va a ser la manera de que el usuario acceda a la cuenta
module.exports.crearUsuario = function (usuario) {
    let buscarUsuarioPorEmail = dataStore.usuarios.find(
        (r) => r.email == usuario.email
    );
    if (buscarUsuarioPorEmail) {
        throw new Error("Ya existe un usuario con ese email");
    }
    return dataStore.agregarUsuario(usuario);
};

module.exports.hashPassword = async function (usuario) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(usuario.password, salt);
    return hashedPassword;
};

module.exports.listarUsuarios = function () {
    return dataStore.usuarios;
};
