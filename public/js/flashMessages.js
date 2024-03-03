// // HIDE FLASH MESSAGES
const flashMessages = document.querySelectorAll('.flash_msg');
const closeIcons = document.querySelectorAll('.flash_msg--closeIcon');

flashMessages.forEach(flash => {
  setTimeout(() => {
    flash.classList.add('hidden');
    setTimeout(() => {
      flash.style.display = 'none';
    }, 500); 
  }, 4000);
});

closeIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const flashMessage = icon.parentElement;
        flashMessage.classList.add('hidden');
    })
});