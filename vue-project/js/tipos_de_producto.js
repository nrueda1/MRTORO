
function Registar_producto (){
    const d = document;
    const nombre = d.getElementById("inputNombre").value.trim();
    const objeto = {nombre_tipo_producto : `${nombre_tipo_producto}`}
    Peticion(objeto);
}
function EventoClick(){
    document.getElementById("registrar_producto").addEventListener("click",Registrar)
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
        let resultado = await fetch("http://localhost:3000/crack/registrarproducto/producto",option)
        resultado =  await resultado.json()
        alert(resultado);
    } catch (error) {
        console.log(error)
    }
}