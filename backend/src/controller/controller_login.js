

const{Autentificacion} = require('./../model/login_modelo');

const Auth =async (request,response)=>{
    try {
        const {usuario,contrasena} = await request.body
        const resultado = await Autentificacion(usuario,contrasena);
        if(resultado === true){
            response.status(200)
            response.send(`Usuario Y contaseña Correctos`)
        }else{
            response.status(403)
            response.send(`Usuario o contraseña incorrectos`)
        }
    } catch (error) {
        console.error('desde el controlador' , error)
    }
}


module.exports={
    Auth
}