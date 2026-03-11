document.addEventListener('DOMContentLoaded', function () {
    var ustawienie = document.getElementById('ustawienie');
    var ustawienia = document.getElementById('ustawienia');

    ustawienie.addEventListener('click', function () {
        // Przełącz widoczność ustawień
        if (ustawienia.style.display === 'none' || ustawienia.style.display === '') {
            ustawienia.style.display = 'block';
        } else {
            ustawienia.style.display = 'none';
        }
    });
});

window.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu__pc');
    const checkbox = document.getElementById('animowaneMenuCheckbox');
    const applyButton = document.getElementById('applySettings');

    // Funkcja zmieniająca styl tła
    function setMenuBackground(isChecked) {
        if (isChecked) {
            menu.style.backgroundColor = '#AF0808';
            menu.style.height = '100px';
        } else {
            menu.style.backgroundColor = ''; // Przywrócenie domyślnego stylu
            menu.style.height = '150px';
        }
    }

    // Funkcja resetująca ustawienia
    function menuReset() {
        checkbox.checked = false; // Zaznacz checkbox
        localStorage.setItem('animowaneMenuEnabled', 'false'); // Zapisz domyślną wartość do localStorage
        setMenuBackground(true); // Zastosuj styl dla zaznaczonego checkboxa
    }

    // Inicjalizacja ustawień
    function initSettings() {
        const isChecked = localStorage.getItem('animowaneMenuEnabled') === 'true';
        checkbox.checked = isChecked;

        // Ustawienie stylu na podstawie stanu checkboxa
        setMenuBackground(isChecked);
    }

    // Obsługa kliknięcia "Zastosuj"
    applyButton.addEventListener('click', function () {
        const isChecked = checkbox.checked;
        localStorage.setItem('animowaneMenuEnabled', isChecked);

        // Zastosowanie stylu po kliknięciu
        setMenuBackground(isChecked);
    });

    // Wywołanie inicjalizacji
    initSettings();

    // Dodaj funkcję resetującą do globalnego obszaru
    window.menuReset = menuReset;
});
