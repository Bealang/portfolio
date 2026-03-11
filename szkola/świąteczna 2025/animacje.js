document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Jeśli element pojawi się na ekranie
            if (entry.isIntersecting) {
                // 1. Pokazujemy go i animujemy
                entry.target.classList.remove('niewidoczny');
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                
                // 2. KLUCZOWE: Przestajemy go obserwować!
                // Dzięki temu animacja wykona się tylko raz, a element pozostanie widoczny
                // nawet jak przewiniesz stronę w górę i z powrotem.
                observer.unobserve(entry.target);
            } 
        });
    }, observerOptions);

    // Pobieramy i obserwujemy elementy
    const elementsToAnimate = document.querySelectorAll('.scroll-anim');
    elementsToAnimate.forEach(el => observer.observe(el));
});