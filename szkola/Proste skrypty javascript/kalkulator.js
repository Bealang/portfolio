var dzialanie = document.getElementById('wynik');

function dodaj(znak) {
    dzialanie.value = dzialanie.value + znak;
}

function wyczysc() {
    dzialanie.value = '';
}

function usun(ilosc) {
    dzialanie.value = dzialanie.value.slice(0, -ilosc);
}

function kalk() {
    if (dzialanie.value.includes('/0')) {
        dzialanie.value = 'Błąd';
        return;
    }
    try {
        dzialanie.value = eval(dzialanie.value);
    } catch (e) {
        dzialanie.value = 'Błąd';
    }
}