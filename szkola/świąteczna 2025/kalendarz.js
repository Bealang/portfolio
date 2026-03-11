document.addEventListener('DOMContentLoaded', () => {
    // --- KONFIGURACJA ---
    const czySprawdzacDate = false; // Zmień na true, jeśli chcesz blokować przyszłe dni!
    
    const zadania = [
        "Posłuchaj piosenki 'Last Christmas'!",
        "Zrób gorącą czekoladę z piankami.",
        "Napisz list do Świętego Mikołaja (nawet dla żartu!).",
        "Zrób papierowy łańcuch na choinkę.",
        "Obejrzyj 'Kevina samego w domu'.",
        "Zjedz mandarynkę (i zachowaj skórkę na zapach).",
        "Wypisz 3 rzeczy, za które jesteś wdzięczny.",
        "Zadzwoń do babci lub dziadka.",
        "Upiecz pierniczki (lub kup gotowe i udekoruj).",
        "Wyjdź na spacer i poszukaj świątecznych dekoracji.",
        "Naucz się fragmentu nowej kolędy.",
        "Zrób komuś drobny, miły uczynek.",
        "Posprzątaj swój pokój na błysk przed świętami.",
        "Przygotuj ozdobę choinkową z recyklingu.",
        "Wypij herbatę z goździkami i pomarańczą.",
        "Obejrzyj odcinek ulubionego świątecznego serialu.",
        "Uśmiechnij się do nieznajomego.",
        "Pomóż w świątecznych porządkach w kuchni.",
        "Zrób zdjęcie choinki i wyślij znajomym.",
        "Przeczytaj świąteczne opowiadanie.",
        "Zapakuj pierwszy prezent.",
        "Sprawdź, czy masz już opłatek.",
        "Pomóż nakrywać do stołu (próba generalna!).",
        "Wesołych Świąt! Ciesz się czasem z rodziną!"
    ];

    const grid = document.getElementById('kalendarz-grid');
    const modal = document.getElementById('modal-zadanie');
    const zamknijBtn = document.getElementById('zamknij-modal');
    const tytulDnia = document.getElementById('dzien-tytul');
    const trescZadania = document.getElementById('tresc-zadania');
    
    // Pobranie dzisiejszej daty
    const dzis = new Date();
    const dzienMiesiaca = dzis.getDate();
    const miesiac = dzis.getMonth(); // 11 to grudzień

    // --- GENEROWANIE OKIENEK ---
    for (let i = 1; i <= 24; i++) {
        const box = document.createElement('div');
        box.classList.add('dzien-box');
        box.innerHTML = `<span>${i}</span>`;
        
        // Sprawdzanie czy okienko było już otwarte (zapisane w localStorage)
        const czyOtwarte = localStorage.getItem(`kalendarz_dzien_${i}`);
        if (czyOtwarte) {
            box.classList.add('otwarte');
        }

        // Sprawdzanie daty (blokada)
        let zablokowane = false;
        if (czySprawdzacDate) {
            // Jeśli nie jest grudzień LUB dzień jest większy niż dzisiaj
            if (miesiac !== 11 || i > dzienMiesiaca) {
                zablokowane = true;
                box.classList.add('zablokowane');
                box.title = "Jeszcze nie czas!";
            }
        }

        // Obsługa kliknięcia
        box.addEventListener('click', () => {
            if (zablokowane) {
                alert("Nie podglądaj! To okienko otworzy się dopiero " + i + " grudnia.");
                return;
            }

            pokazZadanie(i);
            box.classList.add('otwarte');
            localStorage.setItem(`kalendarz_dzien_${i}`, 'true'); // Zapamiętaj
        });

        grid.appendChild(box);
    }

    // --- FUNKCJE MODALA ---
    function pokazZadanie(dzien) {
        tytulDnia.innerText = `Dzień ${dzien}`;
        
        // Pobieramy zadanie z tablicy (indeks to dzien - 1)
        const tekst = zadania[dzien - 1];
        trescZadania.innerText = tekst;

        modal.classList.remove('ukryty');
    }

    zamknijBtn.addEventListener('click', () => {
        modal.classList.add('ukryty');
    });

    // Zamknij po kliknięciu w tło
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('ukryty');
        }
    });
});