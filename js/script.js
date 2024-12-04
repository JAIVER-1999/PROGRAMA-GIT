const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle("sticky", this.window.scrollY > 80);
});

// apertura de menu despues del ajuste de pantalla//
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// solucion para mantener que el menu se oculte durante l scroll//

window.onscroll = () => {
    menu.classList.remove ('bx-x');
    navlist.classList.remove('open');
}

// efesto de scroll de inicio //
const sr = ScrollReveal ({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: false
});

sr.reveal('.INICIO-text',{delay:300});
sr.reveal('.INICIO-img',{delay:400});

sr.reveal('.container',{delay:400});

sr.reveal('.NOSOTROS-img',{});
sr.reveal('.NOSOTROS-text',{delay:300});

sr.reveal('.middle-text',{});
sr.reveal('.row-btn, .PRODUCTOS-content', {delay:300});


sr.reveal('.review, .CONTACTANOS-content', {delay:300});