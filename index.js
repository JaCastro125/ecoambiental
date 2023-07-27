const botonDeContacto = document.getElementById('botonDeContacto');

botonDeContacto.addEventListener('click', () => {
    window.scrollTo(0, 2000)
})


const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const iconElements = document.querySelectorAll('.icon');

iconElements.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    const textId = icon.id.replace('icon', 'text');
    const text = document.getElementById(textId);
    text.style.display = 'block';
  });
  icon.addEventListener('mouseout', () => {
    const textId = icon.id.replace('icon', 'text');
    const text = document.getElementById(textId);
    text.style.display = 'none';
  });
});
