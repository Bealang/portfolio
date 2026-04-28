const handleScrollFade = (el) => {
    // scrollHeight (całość) - scrollTop (ile przewinięto) === clientHeight (widoczna część)
    // Dodajemy 1-2px marginesu błędu dla różnych przeglądarek
    const isAtBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 2;

    if (isAtBottom) {
        el.classList.remove('has-fade');
    } else if (el.scrollHeight > el.clientHeight) {
        el.classList.add('has-fade');
    }
};

const checkOverflow = () => {
    const descriptions = document.querySelectorAll('.kafelek__opis');
    
    descriptions.forEach(el => {
        // Sprawdź stan na starcie
        handleScrollFade(el);

        // Dodaj nasłuchiwanie na scrollowanie
        el.addEventListener('scroll', () => handleScrollFade(el));
    });
};

window.addEventListener('load', checkOverflow);
window.addEventListener('resize', checkOverflow);

document.getElementById('year').textContent = new Date().getFullYear();

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY <= 50) {
        header.classList.remove('scrolled', 'hidden-up');
    } else if (scrollY > 300) {
        header.classList.add('scrolled');
        header.classList.remove('hidden-up');
    } else {
        header.classList.add('hidden-up');
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link, .nav-cta');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        header.classList.toggle('menu-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            header.classList.remove('menu-open');
        });
    });

    // Move nav to body on mobile to fix backdrop-filter bugs
    const moveNav = () => {
        if (window.innerWidth <= 850) {
            if (navMenu.parentElement !== document.body) {
                document.body.appendChild(navMenu);
            }
        } else {
            if (navMenu.parentElement !== header) {
                header.appendChild(navMenu);
            }
        }
    };
    window.addEventListener('resize', moveNav);
    moveNav();
}

