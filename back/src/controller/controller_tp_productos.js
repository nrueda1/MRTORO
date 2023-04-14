const {registerFunctionProducto} = require('../model/tp_productos_modelo');

const Register_producto = async(request,response) => {
    try {
        const {nombre_tipo_producto} = request.body
        const resultado = await registerFunctionProducto(nombre_tipo_producto);
        if(resultado === "Producto Registrado" ){
            response.status(200);
            response.json("Producto Registrado Exitosamente");
        }else{
            response.status(400);
            response.json("Error al registrar el producto")
        }
    } catch (error) {
        console.error(error)
    }
};

module.exports = {Register_producto}