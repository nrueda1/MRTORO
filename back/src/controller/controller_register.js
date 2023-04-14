const {registerFunction} = require('../model/register_modelo');

const Register_admin = async(request,response) => {
    try {
        const {Nombre,Apellido,Numero_de_documento,Correo,Contraseña,Tipo_documento,Tipo_usuario,Id} = request.body
        const resultado = await registerFunction(Nombre,Apellido,Numero_de_documento,Correo,Contraseña,Tipo_documento,Tipo_usuario,Id);
        if(resultado === "Usuario Registrado" ){
            response.status(200);
            response.json("Usuario Exitoso hpt vida");
        }else{
            response.status(400);
            response.json("Error al registrar usuario hpt")
        }
    } catch (error) {
        console.error(error)
    }
};

module.exports = {Register_admin}