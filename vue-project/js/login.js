
async function Login (){
    const d = document;
    const correo = d.getElementById("inputEmail").value.trim();
    const password = d.getElementById("inputPassword").value.trim();
    const objeto = {Correo : `${correo}`
    , Contraseña : `${password}`}
    await Peticion(objeto);
}
function EventoClick(){
    document.getElementById("Login").addEventListener("click",Login)
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
        let resultado = await fetch("http://localhost:3000/crack/login/auth",option)
        resultado =  await resultado.json()
        if(resultado === "Usuario Correcto"){
            alert(resultado);
            location.replace("../public/menu.html");
        }else{
            alert(resultado);
        }
        
    } catch (error) {
        console.log(error)
    }
}