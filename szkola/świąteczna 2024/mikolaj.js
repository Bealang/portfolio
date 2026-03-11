window.addEventListener('load', () => {
  setTimeout(() => {
    const mikolaj = document.getElementById('mikolaj');
    mikolaj.classList.add('show');

    // Funkcja animacji
    const triggerAnimation = () => {
      mikolaj.style.animation = 'jump 2s ease-in-out';
      mikolaj.addEventListener(
        'animationend',
        () => {
          mikolaj.style.animation = '';
        },
        { once: true }
      );
    };

    // Co 10 sekund uruchamia animację
    const animationInterval = setInterval(triggerAnimation, 10000);

    // Zatrzymanie animacji na stałe po najechaniu kursorem
    mikolaj.addEventListener('mouseenter', () => {
      clearInterval(animationInterval); // Usunięcie interwału
    });
  }, 1000);
});
