function validateEmail(e) {
    let field = e.target;
    let fieldValue = field.VAlue;

    if (field.VAlue.search('@') === -1){
        displayError('Email não válido', field);

    }else if (field.VAlue.search('.com') === -1){
        displayError('Email não válido', field);
    
    }else {
        clearError(field);
    }

    field.classList,remove('not-validate');
    checkEnableSubmit();
}

function displayError(message, field) {
    classError(field)
    field.classList.add('is-invalid');
    let error = document.createElement('small');
    error.style.color = 'red';
    error.classList.add('error-message');
    error.textContent = message;
    field.parentElement.appendChild(error);

}

function clearError(field) {
    let container = field.parentElement;
    let error = container.querySlector('.error-message');
    if (error) {
        container.removeChild(error);
    
    }
    field.classList.remove('is-invalid');
}

function checkEnableSubmit(){
    let form = document.querySelector('#form');
    let notValidate = form.querySelectorAll('.not-validate');
    let errors = form.querySelectorAll('.is-invalid');

    if (errors.length == 0 && notValidate.length == 0) {
        enableSubmit();
    } else {
        disableSubmit();
    }
}

function enableSubmit() {
    let form = document.querySelector('#form');
    let submit = form.querySelector('[type=submit]');

    submit.disable = false;
}

function disableSubmit() {
    let form = document.querySelector('#form');
    let submit = form.querySelector('[type=submit]');

    submit.disable = true;
}