// Przygotowanie przykładowych zadań
const zadania = {
    1: "Napisz prosty program w JavaScript, który dodaje dwie liczby.",
    2: "Stwórz podstawową stronę HTML z nagłówkiem i paragrafem.",
    3: "Przeczytaj artykuł o podstawach CSS.",
    4: "Znajdź i zainstaluj edytor kodu, np. Visual Studio Code.",
    5: "Zainstaluj przeglądarkowe rozszerzenie do debugowania, np. React Developer Tools.",
    6: "Sprawdź, jak działa konsola w przeglądarce.",
    7: "Stwórz prostą tabelę w HTML.",
    8: "Zrób plan na naukę nowego języka programowania.",
    9: "Napisz funkcję w Pythonie, która zwraca sumę liczb w liście.",
    10: "Zainstaluj Git i skonfiguruj konto GitHub.",
    11: "Zrób swój pierwszy commit w repozytorium Git.",
    12: "Naucz się, jak korzystać z pętli for w dowolnym języku programowania.",
    13: "Znajdź artykuł o różnicach między HTTP i HTTPS.",
    14: "Przeczytaj dokumentację jakiejś popularnej biblioteki, np. Lodash.",
    15: "Utwórz nowy projekt w dowolnym IDE.",
    16: "Dowiedz się, co to jest API i jak działa.",
    17: "Napisz prosty kalkulator w HTML i JavaScript.",
    18: "Stwórz proste style CSS dla swojej strony.",
    19: "Zrób krótką notatkę o różnicach między let, const i var w JavaScript.",
    20: "Znajdź tutorial na temat Flexbox w CSS.",
    21: "Wypróbuj prosty quiz programistyczny online.",
    22: "Zainstaluj lokalny serwer, np. XAMPP lub WAMP.",
    23: "Przeczytaj o różnicy między backendem a frontendem.",
    24: "Znajdź interesujący projekt open-source na GitHub.",
    25: "<b>To już koniec adwentu! Ale jeśli chcesz robić dodatkowe zadania, to bardzo dobrze!</b> <br> W takim razie, zainstaluj narzędzie do zarządzania pakietami, np. npm.",
    26: "<b>Fajnie że dalej ci się chce, mimo końca adwentu!</b> <br> <br>Zadanie: przetestuj swoją stronę w różnych przeglądarkach.",
    27: "Zapisz notatkę o różnicach między HTML i XML.",
    28: "Znajdź prosty problem na LeetCode i go rozwiąż.",
    29: "Utwórz wykres za pomocą biblioteki, np. Chart.js.",
    30: "Spróbuj użyć programu do tworzenia grafiki, np. Canva, do stworzenia logo.",
    31: "Znajdź artykuł o tym, czym są frameworki i jakie są ich przykłady.",
};
// Dodanie event listenera do komórek kalendarza
        const modal = document.getElementById("modal");
        const modalOverlay = document.getElementById("modalOverlay");
        const modalTitle = document.getElementById("zadanie__tytul");
        const modalOpis = document.getElementById("zadanie__opis");
        const modalCloseButton = document.getElementById("modalClose");

        // Funkcja otwierania modala
        const showModal = (dzien) => {
            if (zadania[dzien]) {
                const bonusText = dzien > 24 ? "Bonusowe zadanie: " : ""; // Dodaj słowo BONUS dla dni powyżej 24
                modalTitle.textContent = `${bonusText}Zadanie na dzień ${dzien}`;
                modalOpis.innerHTML = zadania[dzien];
                modal.classList.remove("fadeOut"); // Usuń efekt fadeOut, jeśli wcześniej był
                modal.classList.add("fadeIn"); // Dodaj efekt fadeIn
                modal.classList.add("show");
            }
        };

        // Funkcja zamykania modala
        const closeModal = () => {
            modal.classList.remove("fadeIn"); // Usuń efekt fadeIn
            modal.classList.add("fadeOut"); // Dodaj efekt fadeOut
        
            // Usuń klasę 'show' po zakończeniu animacji
            modal.addEventListener("animationend", () => {
                if (modal.classList.contains("fadeOut")) {
                    modal.classList.remove("show");
                }
            }, { once: true });
        
            modalOverlay.addEventListener("animationend", () => {
                if (modalOverlay.classList.contains("fadeOut")) {
                    modalOverlay.classList.remove("show");
                }
            }, { once: true });
        };
        

        // Dodanie event listenerów do komórek kalendarza
        document.querySelectorAll(".kalendarz__komorka").forEach((cell) => {
            cell.addEventListener("click", () => {
                const dzien = cell.textContent.trim();
                showModal(dzien);
            });
        });

        // Wyróżnij dzisiejszy dzień
        const today = new Date().getDate(); // Pobierz dzisiejszy dzień
        document.querySelectorAll(".kalendarz__komorka").forEach((cell) => {
            if (parseInt(cell.textContent.trim()) === today) {
                cell.classList.add("dzis");
            }
        });

        // Dodanie event listenera do zamykania modala
        modalCloseButton.addEventListener("click", closeModal);
        modalOverlay.addEventListener("click", closeModal);
