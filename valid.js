document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("form").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let nomeregex = /([A-z]+\s)+/;
    
    if(nombre === nomeregex) {
        console.log(nombre);
        document.getElementById('nombre').focus();
        document.getElementById('nombre').value="";
        return;
    }
    let email = document.getElementById('email').value;
    let emailregex = /\w+@\w+\.\w+/;

    if(email != emailregex) {

        alert('E-mail no es valido');
        document.getElementById('email').focus();
        document.getElementById('email').value="";

    }
    this.submit();
}