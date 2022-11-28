const form =  document.getElementById('form');
const campo = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span-required');
const emailReg = /\w+@\w+\.\w+/;

form.addEventListener('submit',evento =>{
    evento.preventDefault();
    nomeValidate();
    emailValidate();
    asuValidate();
})

function mostError(index){
    campo[index].style.border = '2px solid red';
    span[index].style.display ='block';
    }
function deleteError(index) {
    campo[index].style.border = '';
    span[index].style.display ='none';
}  

function nomeValidate(){
    if(campo[0].value.length < 3) {
        mostError(0);
    }else{
        deleteError(0);
    }
}

function emailValidate() {
    if(!emailReg.test(campo[1].value)){
        mostError(1);
    }else {
        deleteError(1);
    }
  
}
function asuValidate(){
    if(campo[2].value.length = 0) {
        mostError(2);
    }else{
        deleteError(2);
    }
}