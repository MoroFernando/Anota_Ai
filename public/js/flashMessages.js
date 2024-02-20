// HIDE FLASH MESSAGES
const flashMessages = document.querySelectorAll('.flash_msg');
flashMessages.forEach(flash => {
  setTimeout(() => {
    flash.classList.add('hidden');
    setTimeout(() => {
      flash.style.display = 'none';
    }, 500); 
  }, 4000);
});