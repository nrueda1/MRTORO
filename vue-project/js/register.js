
function Registar (){
    const d = document;
    const correo = d.getElementById("inputEmail").value.trim();
    const nombre = d.getElementById("inputNombre").value.trim();
    const password = d.getElementById("inputPassword").value.trim();
    const apellido = d.getElementById("inputApellido").value.trim();
    const tipo_de_documento = d.getElementById("tipodedocumento").value;
    const numero_de_documento = d.getElementById("inputNumeroDocumento").value.trim();
    const administrador = d.getElementById("tipodeusuario").value;
    const objeto = {Nombre : `${nombre}`,  Apellido : `${apellido}`, Numero_de_documento : `${numero_de_documento}`, Correo : `${correo}`
    , Contraseña : `${password}`, Tipo_documento : `${tipo_de_documento}`, Tipo_usuario : `${administrador}`}
    Peticion(objeto);
}
function EventoClick(){
    document.getElementById("registrarse").addEventListener("click",Registar)
}
addEventListener("DOMContentLoaded",EventoClick)

async function Peticion(data){
    try {
        console.log(data)
        const option = {
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }

        }
        let resultado = await fetch("http://localhost:3000/crack/register/hptelquelolea",option)
        resultado =  await resultado.json()
        alert(resultado);
    } catch (error) {
        console.log(error)
    }
}