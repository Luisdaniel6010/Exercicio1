document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("form").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    let nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
        console.log('nombre vacio');
        return;
    }
    let email = document.getElementById('email').value;
    let regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if (email != regex) {
        alert('E-mail no es valido');
        document.getElementById('email').focus();
        document.getElementById('email').value(" ");

    }
    this.submit();
}