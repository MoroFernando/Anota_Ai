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