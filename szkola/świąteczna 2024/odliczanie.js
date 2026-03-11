document.addEventListener('DOMContentLoaded', function() {
    function odliczanieDoSwiatek() {
        const teraz = new Date();
        const swieta = new Date(teraz.getFullYear(), 11, 24, 0, 0, 0); // teraz.getFullYear(), 11 (msc), 24 (dzien), 0 (godzina), 0 (minuta), 0 (sekunda)
        
        if (teraz > swieta) {
            swieta.setFullYear(teraz.getFullYear() + 1);
        }

        const roznica = swieta - teraz;

        const dni = Math.floor(roznica / (1000 * 60 * 60 * 24));
        const godziny = Math.floor((roznica % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minuty = Math.floor((roznica % (1000 * 60 * 60)) / (1000 * 60));
        const sekundy = Math.floor((roznica % (1000 * 60)) / 1000);

        document.getElementById('odliczanie__dni').innerText = dni;
        document.getElementById('odliczanie__h').innerText = godziny;
        document.getElementById('odliczanie__m').innerText = minuty;
        document.getElementById('odliczanie__s').innerText = sekundy;
    }

    
    setInterval(odliczanieDoSwiatek, 1000);
    odliczanieDoSwiatek();
});

document.addEventListener('DOMContentLoaded', function() {
    function koniecPromocji() {
        const teraz = new Date();
        const swieta = new Date(teraz.getFullYear(), 11, 26, 23, 59, 59); // teraz.getFullYear(), 11 (msc), 24 (dzien), 0 (godzina), 0 (minuta), 0 (sekunda)
        
        if (teraz > swieta) {
            swieta.setFullYear(teraz.getFullYear() + 1);
        }

        const roznica = swieta - teraz;

        const dni = Math.floor(roznica / (1000 * 60 * 60 * 24));
        const godziny = Math.floor((roznica % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minuty = Math.floor((roznica % (1000 * 60 * 60)) / (1000 * 60));
        const sekundy = Math.floor((roznica % (1000 * 60)) / 1000);

        document.getElementById('rabat__czas').innerHTML = dni + ' dni ' + godziny + 'h ' + minuty + 'm ' + sekundy + 's';
    }

    
    setInterval(koniecPromocji, 1000);
    koniecPromocji();
});