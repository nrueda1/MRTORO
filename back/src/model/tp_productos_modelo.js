const { getConnection } = require("./conexion_db");

async function registerFunctionProducto(nombre_tipo_producto){
    try {
        const conexion = getConnection()
        let resultadoquery = await conexion.query(`INSERT INTO mydb.tipos_de_producto (nombre_tipo_producto) VALUES ("${nombre_tipo_producto}")
        `)
        resultadoquery = resultadoquery[0]
        if(resultadoquery.affectedRows === 1){
            return "Producto Registrado"
        }
    } catch (error) {
        return "Error"
    }
      
        
}

module.exports = {registerFunctionProducto}