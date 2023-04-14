const {Comparar} = require('../helpers/encrypt');
const {getConnection} =require("../model/conexion_db");


const Autentificacion = async (datausuario,datacontrasena)=>{
    try {
        const conexion = await getConnection();
        const traer = await conexion.query(`SELECT * FROM administrador where usuario = ${datausuario} `);
        const primer_arreglo =traer[0];
        const segundo_arreglo = primer_arreglo[0];
        const contenido = segundo_arreglo[0];
        if(contenido.NULL === "NULL"){
            return false; 
        }else{
            const contrasena = contenido.contrasena;
            const resultado = await Comparar(datacontrasena,contrasena);
            // console.log('resultado de la comparacion: '+ resultado);
            return resultado;
        }
    }catch(error){
        console.error(error);
    }
}

module.exports={Autentificacion}