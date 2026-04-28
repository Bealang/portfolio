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

