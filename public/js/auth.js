// AUTH PAGE ------------------------------------------------------------------------------------------------
const signinForm = document.querySelector('.authForms--signin');
const signupForm = document.querySelector('.authForms--signup');
const toggleFormText = document.querySelector('.authToggle--text');
const toggleForm = document.querySelector('.authToggle--link');

toggleForm.addEventListener('click', () => {
  signinForm.classList.toggle('authForms--hidden');
  signupForm.classList.toggle('authForms--hidden');
  toggleFormText.textContent = (toggleFormText.textContent === 'Não tem uma conta?') ?'Já tem uma conta? ' :'Não tem uma conta?';
  toggleForm.textContent = (toggleForm.textContent === 'Criar conta') ?'Entrar' :'Criar conta';
});


// SIGNUP FORM ------------------------------------------------------------------------------------------------
const emailCadastro = document.getElementById('emailCadastro');
const nomeCadastro = document.getElementById('nomeCadastro');
const senhaCadastro = document.getElementById('senhaCadastro');
const confirmarSenhaCadastro = document.getElementById('confirmarSenhaCadastro');

const emailCadastro__Error = document.querySelector('.emailCadastro__errorMsg');
const nomeCadastro__Error = document.querySelector('.nomeCadastro__errorMsg');
const senhaCadastro__Error = document.querySelector('.senhaCadastro__errorMsg');
const confirmarSenhaCadastro__Error = document.querySelector('.confirmarSenhaCadastro__errorMsg');


// SIGNIN FORM ------------------------------------------------------------------------------------------------
const emailLogin = document.getElementById('emailLogin');
const senhaLogin = document.getElementById('senhaLogin');

const emailLogin__Error = document.querySelector('.emailLogin__errorMsg');
const senhaLogin__Error = document.querySelector('.senhaLogin__errorMsg');

// VALIDATE FORMS ON SUBMIT --------------------------------------------------------------------------------------------
function validateSignupForm() {

    if (!emailCadastro.value || !nomeCadastro.value || !senhaCadastro.value || !confirmarSenhaCadastro.value) {

        if (!emailCadastro.value) {
            emailCadastro.classList.add('invalid');
            emailCadastro__Error.textContent = 'Campo obrigatório';
        }

        if (!nomeCadastro.value) {
            nomeCadastro.classList.add('invalid');
            nomeCadastro__Error.textContent = 'Campo obrigatório';
        }

        if (!senhaCadastro.value) {
            senhaCadastro.classList.add('invalid');
            senhaCadastro__Error.textContent = 'Campo obrigatório';
        }

        if (!confirmarSenhaCadastro.value) {
            confirmarSenhaCadastro.classList.add('invalid');
            confirmarSenhaCadastro__Error.textContent = 'Campo obrigatório';
        }

        return false;
    }

    if (senhaCadastro.value !== confirmarSenhaCadastro.value) {

        senhaCadastro.classList.add('invalid');
        senhaCadastro__Error.textContent = 'As senhas não coincidem';
        confirmarSenhaCadastro.classList.add('invalid');
        confirmarSenhaCadastro__Error.textContent = 'As senhas não coincidem';

        return false;
    }
}

function validateSigninForm() {

        if (!emailLogin.value || !senhaLogin.value) {
    
            if (!emailLogin.value) {
                emailLogin.classList.add('invalid');
                emailLogin__Error.textContent = 'Campo obrigatório';
            }
    
            if (!senhaLogin.value) {
                senhaLogin.classList.add('invalid');
                senhaLogin__Error.textContent = 'Campo obrigatório';
            }
    
            return false;
        }
}


/// FUNTIONS SIGNUP ------------------------------------------------------------------------------------------------
function validateEmailCadastroInput(emailCadastro) {
    if (!emailCadastro.value) {
        emailCadastro.classList.add('invalid');
        emailCadastro__Error.textContent = 'Campo obrigatório';
        return
    }

    if (!emailCadastro.value.includes('@')) {
        emailCadastro.classList.add('invalid');
        emailCadastro__Error.textContent = 'emailCadastro inválido';
        return
    }

    emailCadastro.classList.remove('invalid');
    emailCadastro__Error.textContent = '';
}

function validateNameCadastroInput(nomeCadastro) {
    if (!nomeCadastro.value) {
        nomeCadastro.classList.add('invalid');
        nomeCadastro__Error.textContent = 'Campo obrigatório';
        return
    }

    nomeCadastro.classList.remove('invalid');
    nomeCadastro__Error.textContent = '';
}

function validatePasswordCadastroInput(senhaCadastro, confirmPassword) {
    if (!senhaCadastro.value) {
        senhaCadastro.classList.add('invalid');
        senhaCadastro__Error.textContent = 'Campo obrigatório';
        return
    }
    
    if (!confirmPassword.value) {
        confirmPassword.classList.add('invalid');
        confirmarSenhaCadastro__Error.textContent = 'Campo obrigatório';
        return
    }

    if (senhaCadastro.value !== confirmPassword.value) {
        senhaCadastro.classList.add('invalid');
        senhaCadastro__Error.textContent = 'As senhas não coincidem';
        confirmPassword.classList.add('invalid');
        confirmarSenhaCadastro__Error.textContent = 'As senhas não coincidem';
        return
    }

    senhaCadastro.classList.remove('invalid');
    senhaCadastro__Error.textContent = '';
    confirmPassword.classList.remove('invalid');
    confirmarSenhaCadastro__Error.textContent = '';
}

/// FUNTIONS SIGNIN ------------------------------------------------------------------------------------------------
function validateEmailLoginInput(emailLogin) {
    if (!emailLogin.value) {
        emailLogin.classList.add('invalid');
        emailLogin__Error.textContent = 'Campo obrigatório';
        return
    }

    if (!emailLogin.value.includes('@')) {
        emailLogin.classList.add('invalid');
        emailLogin__Error.textContent = 'Email inválido';
        return
    }

    emailLogin.classList.remove('invalid');
    emailLogin__Error.textContent = '';
}

function validatePasswordLoginInput(senhaLogin) {
    if (!senhaLogin.value) {
        senhaLogin.classList.add('invalid');
        senhaLogin__Error.textContent = 'Campo obrigatório';
        return
    }

    senhaLogin.classList.remove('invalid');
    senhaLogin__Error.textContent = '';
}

/// EVENT LISTENERS SIGNUP --------------------------------------------------------------------------------------------
emailCadastro.addEventListener('blur', () => {
    validateEmailCadastroInput(emailCadastro);
});

nomeCadastro.addEventListener('blur', () => {
    validateNameCadastroInput(nomeCadastro);
});

senhaCadastro.addEventListener('blur', () => {
    validatePasswordCadastroInput(senhaCadastro, confirmarSenhaCadastro);
});

confirmarSenhaCadastro.addEventListener('blur', () => {
    validatePasswordCadastroInput(senhaCadastro, confirmarSenhaCadastro);
});


/// EVENT LISTENERS SIGNIN --------------------------------------------------------------------------------------------
emailLogin.addEventListener('blur', () => {
    validateEmailLoginInput(emailLogin);
});

senhaLogin.addEventListener('blur', () => {
    validatePasswordLoginInput(senhaLogin);
});