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
  icon.addEventListener('mouseover', (event) => {
    event.preventDefault();
    const textId = icon.id.replace('icon', 'text');
    const text = document.getElementById(textId);
    text.style.display = text.style.display === 'none' ? 'block' : 'none';
  });
});

const closeButtons = document.querySelectorAll('.btn-close');

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const textId = button.parentElement.id.replace('text', 'icon');
    const icon = document.getElementById(textId);
    icon.nextElementSibling.style.display = 'none';
  });
});