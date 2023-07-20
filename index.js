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