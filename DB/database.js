let idUsuario = 1;
let idProducto = 1;

let usuarios = [];
let productos = [];

function agregarUsuario(usuario) {
    usuario.id = idUsuario;
    //agrego array de productos creados por el usuario
    // misProductos = []
    usuarios.push(usuario);
    idUsuario++;
    return usuario;
}
//crear producto
function agregarProducto(producto, idUser) {
    producto.id = idProducto;
    producto.idUsuario = idUser;
    // agregar producto al usuario correspondiente en su lista de 'misProductos'
    // console.log(this.usuarios)
    console.log(usuarios);
    let findUser = usuarios.find((user) => user.id == idUser);
    if (!findUser) {
        return false;
    }
    console.log(findUser);
    findUser.misProductos.push(producto);
    productos.push(producto);
    idProducto++;
    return true;
}

module.exports = {
    usuarios: usuarios,
    productos: productos,
    agregarUsuario: agregarUsuario,
    agregarProducto: agregarProducto,
};
