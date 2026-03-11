const targetDate = new Date("December 24, 2025 17:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Wywołujemy funkcję aktualizującą dla każdego elementu
        updateDigit('days-wrapper', days);
        updateDigit('hours-wrapper', hours);
        updateDigit('minutes-wrapper', minutes);
        updateDigit('seconds-wrapper', seconds);
    }

    function updateDigit(wrapperId, value) {
        const wrapper = document.getElementById(wrapperId);
        const formattedValue = value < 10 ? "0" + value : value;
        
        // Znajdź aktualną cyfrę (ostatni element span w wrapperze)
        const currentSpan = wrapper.querySelector('.number:last-child');
        
        // Jeśli nie ma cyfry (start) lub wartość jest taka sama -> nic nie rób
        if (currentSpan && currentSpan.innerText === formattedValue.toString()) {
            return;
        }

        // 1. Stwórz NOWĄ cyfrę
        const newSpan = document.createElement('span');
        newSpan.classList.add('number', 'slide-in'); // Dodaj klasę wjazdu
        newSpan.innerText = formattedValue;

        // 2. Jeśli jest STARA cyfra, wyrzuć ją w dół
        if (currentSpan) {
            currentSpan.classList.remove('slide-in'); // Usuń animację wejścia (dla pewności)
            currentSpan.classList.add('slide-out');   // Dodaj animację wyjścia
            
            // Usuń stary element z HTML po zakończeniu animacji (0.5s = 500ms)
            setTimeout(() => {
                if(currentSpan.parentNode) {
                    currentSpan.remove();
                }
            }, 480); // Dajemy 480ms, ciut mniej niż animacja, żeby nie mrugało
        }

        // 3. Dodaj nową cyfrę do wrappera
        wrapper.appendChild(newSpan);
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();