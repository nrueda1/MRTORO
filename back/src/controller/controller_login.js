const {autentificarLogin} = require('../model/login_modelo');

const Login_admin = async(request,response) => {
    try {
        const {Correo,Contraseña} = request.body
        const resultado = await autentificarLogin(Correo,Contraseña);
        if(resultado === "Usuario Correcto" ){
            response.status(200);
            response.json("Usuario Correcto");
        }else{
            response.status(400);
            response.json("Usuario Incorrecto")
        }
    } catch (error) {
        console.error(error)
    }
};

module.exports = {Login_admin}