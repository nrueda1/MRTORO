const { getConnection } = require("./conexion_db");
const {Encriptar,Comparar} = require("../helpers/encrypt");



async function autentificarLogin(Correo,Contraseña){
    try {
    const conexion = getConnection()
    let resultadoLogin = await conexion.query(`SELECT numero_de_documento FROM mydb.administrador where correo_electronico = "${Correo}" and contraseña = "${Contraseña}";`)
    resultadoLogin = resultadoLogin[0][0]
    if(resultadoLogin.numero_de_documento){
        return "Usuario Correcto"
    }else{
        return "Usuario Incorrecto"
    }
    } catch (error) {
        return "Error"
    }    
}
module.exports = {autentificarLogin}