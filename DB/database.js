let idUsuario = 1;
let idProducto = 1;
module.exports =  {
    usuarios: [],
    productos: [],
    
    //crear usuario
    agregarUsuario(usuario) {
        usuario.id = idUsuario;
        //agrego array de productos creados por el usuario
        // misProductos = []
        this.usuarios.push(usuario);
        idUsuario++;
        return usuario;
    },
    //crear producto
    agregarProducto(producto, idUser) {
        producto.id = idProducto;
        producto.idUsuario = idUser;
        // agregar producto al usuario correspondiente en su lista de 'misProductos'
        console.log(this.usuarios)
        let findUser = usuarios.find((user) => user.id == idUser)
        if(!findUser){
            return false
        }
        findUser.misProductos.push(producto)
        this.productos.push(producto);
        idProducto++;
        return true;
    }

    //agregar producto a usuario
    
}


