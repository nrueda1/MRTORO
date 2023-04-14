const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/index_routes.js")
app.use(cors());
app.use(express.json());




//server
const Server =()=>{
    app.listen(3000,()=>{
        console.log(`El puerto esta en 3000`);
        console.log(routes)
    })
};

const Rutas =()=>{
    app.use("/api",require("./routes/index_routes"));
};

function llamadoFunciones (){
    Server()
    //Rutas ()

}

llamadoFunciones()

