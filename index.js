const botonDeContacto = document.getElementById('botonDeContacto');

botonDeContacto.addEventListener('click', () => {
    window.scrollTo(0, 2000)
})

const iconElements = document.querySelectorAll('.icon');

iconElements.forEach(icon => {
  icon.addEventListener('click', () => {
    const textId = icon.id.replace('icon', 'text');
    const text = document.getElementById(textId);
    text.style.display = text.style.display === 'none' ? 'block' : 'none';
  });
});