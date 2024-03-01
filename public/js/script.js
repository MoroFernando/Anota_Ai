// SIDEBAR ------------------------------------------------------------------------------------------------
const navHeader = document.querySelector('.sideBar');
const navLogo = document.querySelector('.sideBar--logo');
const navToggle = document.querySelector('.sideBar--toggleIcon');
const navToggleIcon = document.querySelector('.sideBar--toggleIcon');
const navLightMode = document.querySelector('.sideBar--lightMode');
const navLightModeIconCircle = document.querySelector('.sideBar--lightModeIcon');
const navLightModeIcon = document.querySelector('.sideBar--lightModeIcon .material-icons');

navToggle.addEventListener('click', () => {
  navHeader.classList.toggle('sideBar--collapsed');
  navToggleIcon.title = (navToggleIcon.title === 'Expandir menu') ?'Recolher menu' :'Expandir menu';
});

navLogo.addEventListener('click', () => {
  navHeader.classList.toggle('sideBar--collapsed');
});

navLightMode.addEventListener('click', () => {
  document.body.classList.toggle('darkMode');
  navLightModeIconCircle.classList.toggle('dark');
  navLightMode.title = (navLightMode.title === 'Modo claro') ?'Modo escuro' :'Modo claro';
  navLightModeIcon.textContent = (navLightModeIcon.textContent === 'dark_mode') ?'light_mode' :'dark_mode';
});

// FORAMATA ESCAPES JSON -------------------------------------------------------------------
function toJSON(string) {
  return JSON.parse(string.replace(/\r\n/g, '\\r\\n'));
}


// POPUPS REMOVER NOTA ---------------------------------------------------------------------------
const popupRemoverNota = document.getElementById('modal__removerNota');

function openModal_removerNota(nota) {

    const notaJSON = toJSON(nota);

    popupRemoverNota.showModal();

    document.getElementById("removeNota_id").value = notaJSON._id;
    document.getElementById("removerNota--titulo").textContent = notaJSON.titulo;
    document.getElementById("removerNota--conteudo").value = notaJSON.conteudo;
}

function closeModal_removerNota(){
    popupRemoverNota.close();
}

// FECHA POPUPS -------------------------------------------------------------------------
popupRemoverNota.addEventListener('click', (event) => {
    if(event.target == popupRemoverNota) popupRemoverNota.close();
})

 