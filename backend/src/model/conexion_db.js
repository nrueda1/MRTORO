const mysql = require('mysql2');
const config = require('./../config.js')
 
 //conexion base de datos
 const conexion = mysql.createConnection({
    host: config.host,
    user: config.user,
    password:config.password,
    database: config.database
})

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("CONEXION EXITOSA")
     }
});

const getConnection = ()=>{
    return conexion
};

module.exports  = {getConnection};
