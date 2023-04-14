/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
//autentificacion
const Autentificacion = function(){


        let user = String;
        const usuarioingreso = document.getElementById("inputEmail").value.trim();
        user = usuarioingreso;
        let contrasena = String;
        const contrasenausuario = document.getElementById("inputPassword").value.trim();
        contrasena = contrasenausuario;
        if(user ==='nrueda01' && contrasena ==='123'){
            window.location.href='../index.html'
        }else{
            alert("Datos Incorrectos","Ingreso mal el usuario o la contraseña.","error");
    };
};
