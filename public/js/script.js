const body = document.body;
const navHeader = document.querySelector('.sideBar');
const navLogo = document.querySelector('.sideBar--logo');
const navToggleIcon = document.querySelector('.sideBar--toggleIcon');
const navLightMode = document.querySelector('.sideBar--lightMode');
const navLightModeIconCircle = document.querySelector('.sideBar--lightModeIcon');
const navLightModeIcon = document.querySelector('.sideBar--lightModeIcon .material-icons');


// LOCAL STORAGE -------------------------------------
window.onload = function() {

    // VERIFICA SE NAV BAR ESTA COLAPSADA
    const navBarCollapsed = localStorage.getItem('navBarCollapsed'); 
    if (navBarCollapsed !== 'true') {
        navHeader.classList.remove('sideBar--collapsed');
    } else {
        navHeader.classList.add('sideBar--collapsed');
    }

    //VERIFICA SE DARK MODE ESTA ATIVO
    const darkModeActive = localStorage.getItem('darkModeActive'); 
    if (darkModeActive !== 'true') {
        body.classList.remove('darkMode');
        navLightModeIconCircle.classList.remove('dark');
        navLightMode.title = 'Modo claro';
        navLightModeIcon.textContent = 'light_mode';
    } else {
        body.classList.add('darkMode');
        navLightModeIconCircle.classList.add('dark');
        navLightMode.title = 'Modo escuro';
        navLightModeIcon.textContent = 'dark_mode';
    }
};

// TOGGLE NAV BAR -----------------------------------
navToggleIcon.addEventListener('click', () => {
    navHeader.classList.toggle('sideBar--collapsed');
    navToggleIcon.title = (navToggleIcon.title === 'Expandir menu') ?'Recolher menu' :'Expandir menu';

    const navBarCollapsed = navHeader.classList.contains('sideBar--collapsed');
    localStorage.setItem('navBarCollapsed', navBarCollapsed);
});
navLogo.addEventListener('click', () => {
  navHeader.classList.toggle('sideBar--collapsed');

  const navBarCollapsed = navHeader.classList.contains('sideBar--collapsed');
  localStorage.setItem('navBarCollapsed', navBarCollapsed);
});

// TOGGLE DARK/LIGHT MODE ---------------------------
navLightMode.addEventListener('click', () => {
    body.classList.toggle('darkMode');
    navLightModeIconCircle.classList.toggle('dark');
    navLightMode.title = (navLightMode.title === 'Modo claro') ?'Modo escuro' :'Modo claro';
    navLightModeIcon.textContent = (navLightModeIcon.textContent === 'dark_mode') ?'light_mode' :'dark_mode';

    const darkModeActive = body.classList.contains('darkMode');
    localStorage.setItem('darkModeActive', darkModeActive);
});

// FORAMATA ESCAPES JSON -------------------------------------------------------------------
function toJSON(string) {
    return JSON.parse(string.replace(/\r\n/g, '\\r\\n'));
}

// POPUP EDITAR
const popupEditarNota = document.getElementById('modal__editarNota');
function openModal_editarNota(nota) {
    const notaJSON = toJSON(nota);
    popupEditarNota.showModal();
    document.getElementById("editarNota_id").value = notaJSON._id;
    document.getElementById("editarNota--titulo").value = notaJSON.titulo;
    document.getElementById("editarNota--conteudo").value = notaJSON.conteudo;
}
function closeModal_editarNota(){
    popupEditarNota.close();
}

// POPUP REMOVER
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

// FECHA POPUPS AO CLICAR FORA  -------------------------------------------------------------------------
popupRemoverNota.addEventListener('click', (event) => {
    if(event.target == popupRemoverNota) popupRemoverNota.close();
});
popupEditarNota.addEventListener('click', (event) => {
    if(event.target == popupEditarNota) popupEditarNota.close();
});

 