// Funkcja dodająca przedmiot do koszyka
function dodajKoszyk(cena, przedmiot) {
    let koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];

    // Sprawdzenie, czy produkt już istnieje w koszyku
    const istnieje = koszyk.find(item => item.przedmiot === przedmiot);
    if (istnieje) {
        if (istnieje.ilosc < 10) {
            istnieje.ilosc += 1; // Zwiększenie ilości
        } else {
            pokazPowiadomienie('Nie możesz dodać więcej niż 10 sztuk tego produktu!', 3000);
            return;
        }
    } else {
        // Dodanie nowego produktu
        koszyk.push({
            przedmiot: przedmiot,
            cena: cena,
            przecenionaCena: null, // Dodajemy pole na przecenioną cenę
            ilosc: 1, // Ilość zaczynamy od 1
            timestamp: Date.now() // Czas dodania produktu
        });
    }

    localStorage.setItem('koszyk', JSON.stringify(koszyk));

    document.getElementById('add__cart__item').innerText = przedmiot;
    document.getElementById('add__cart').classList.add('show');

    setTimeout(function() {
        document.getElementById('add__cart').classList.remove('show');
    }, 3000);

    aktualizujKoszyk(); // Aktualizacja wyświetlanych danych
}

// Funkcja do wyświetlania powiadomienia
function pokazPowiadomienie(tresc, czas, kolor) {
    const kuponElement = document.getElementById('kupon');
    kuponElement.innerText = tresc;
    kuponElement.style.backgroundColor = kolor;
    kuponElement.classList.add('show');
    setTimeout(function () {
        kuponElement.classList.remove('show');
    }, czas);
}

// Funkcja do wyczyszczenia koszyka
function wyczyscKoszyk() {
    try{
        pokazPowiadomienie('Wyczyszczono koszyk', 3000, '#1de003');
        localStorage.removeItem('koszyk');
        localStorage.removeItem('kod_uzyty');
        document.getElementById('koszyk__wartosc').innerText = '0.00 zł';
        aktualizujSumeKoszyka([]); // Resetujemy sumę koszyka
        aktualizujTabeleKoszyka(); // Wyczyść tabelę
    }
    catch{
        pokazPowiadomienie('Wystąpił błąd.', 3000, '#f73527');
    }

}

// Funkcja do usuwania przedmiotu z koszyka
function usunZKoszyka(indeks) {
    let koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];
    koszyk.splice(indeks, 1); // Usuwamy element o danym indeksie
    localStorage.setItem('koszyk', JSON.stringify(koszyk)); // Aktualizujemy koszyk w LocalStorage
    aktualizujKoszyk(); // Aktualizacja wyświetlanych danych
    pokazPowiadomienie('Usunięto', 3000, '#1de003');
}
// Funkcja do aktualizowania koszyka (tabela + suma)
function aktualizujKoszyk() {
    let koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];
    let calkowitaWartosc = koszyk.reduce(function(suma, przedmiot) {
        return suma + (przedmiot.przecenionaCena || przedmiot.cena) * przedmiot.ilosc;
    }, 0);

    document.getElementById('koszyk__wartosc').innerText = calkowitaWartosc.toFixed(2) + ' zł';
    aktualizujSumeKoszyka(koszyk); // Aktualizujemy sumę koszyka
    aktualizujTabeleKoszyka(); // Aktualizujemy tabelę koszyka
}

// Funkcja do aktualizowania tabeli koszyka
// Funkcja do aktualizowania tabeli koszyka
function aktualizujTabeleKoszyka() {
    const tabela = document.getElementById('koszyk__tabela').getElementsByTagName('tbody')[0];
    const koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];

    // Wyczyść tabelę
    tabela.innerHTML = '';

    // Dodaj produkty do tabeli
    koszyk.forEach((item, indeks) => {
        let wiersz = tabela.insertRow();
        let komorkaIlosc = wiersz.insertCell(0); // Nowa kolumna "Ilość"
        let komorkaProdukt = wiersz.insertCell(1);
        let komorkaCena = wiersz.insertCell(2);
        let komorkaUsun = wiersz.insertCell(3);

        // Wypełnienie komórek
        komorkaProdukt.innerText = item.przedmiot;

        // Tworzenie przycisków do zmiany ilości i inputa
        komorkaIlosc.innerHTML = `
            <button class="koszyk__zmniejsz" onclick="zmienIlosc(${indeks}, -1)">-</button>
            <span class="koszyk__wartosc">${item.ilosc}</span>
            <button class="koszyk__zwieksz" onclick="zmienIlosc(${indeks}, 1)">+</button>
        `;

        const inputIlosc = komorkaIlosc.querySelector('.koszyk__ilosc');
        // Cena uwzględnia przecenioną cenę i ilość
        if (item.przecenionaCena !== null) {
            const lacznaCena = item.przecenionaCena * item.ilosc;
            const cenaJednostkowa = item.przecenionaCena.toFixed(2);
            const oryginalnaJednostkowa = item.cena.toFixed(2);
            komorkaCena.innerHTML = `
                <span style="text-decoration: line-through; color: gray;">${(item.cena * item.ilosc).toFixed(2)} zł</span>
                <span style="color: red; font-weight: bold;"> ${lacznaCena.toFixed(2)} zł</span>
                ${item.ilosc > 1 ? `
                <br>
                <small>
                    (<span style="text-decoration: line-through; color: gray;">${oryginalnaJednostkowa} zł/szt</span> 
                    <span style="color: red; font-weight: bold;">${cenaJednostkowa} zł/szt</span>)
                </small>
                ` : ''}
            `;
        } else {
            const lacznaCena = item.cena * item.ilosc;
            const cenaJednostkowa = item.cena.toFixed(2);
            komorkaCena.innerHTML = `
                <span>${lacznaCena.toFixed(2)} zł</span>
                ${item.ilosc > 1 ? `
                <br>
                <small>
                    (<span>${cenaJednostkowa} zł/szt</span>)
                </small>
                ` : ''}
            `;
        }

        // Dodanie przycisku "Usuń"
        komorkaUsun.classList.add('td__koszyk__usun');
        komorkaUsun.innerHTML = `<span class="material-symbols-outlined koszyk__usun" onclick="usunZKoszyka(${indeks})">delete</span>`;
    });
}

// Funkcja zmieniająca ilość produktu na podstawie kliknięcia przycisku (zmniejsz lub zwiększ)
function zmienIlosc(indeks, zmiana) {
    let koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];

    // Zmieniamy ilość przedmiotu
    const nowaIlosc = koszyk[indeks].ilosc + zmiana;

    if (nowaIlosc > 10) {
        pokazPowiadomienie('Nie możesz dodać więcej niż 10 sztuk tego produktu!', 3000, '#f73527');
        return;
    }

    if (nowaIlosc < 1) {
        pokazPowiadomienie('Musisz mieć conajmniej 1 sztukę produktu! Jeśli chcesz go usunąć, kliknij przycisk kosza!', 5000, '#f73527');
    } else {
        koszyk[indeks].ilosc = nowaIlosc;
    }

    // Zapisujemy zaktualizowany koszyk
    localStorage.setItem('koszyk', JSON.stringify(koszyk));

    // Aktualizujemy dane koszyka
    aktualizujKoszyk();
}



// Funkcja aktualizująca sumę koszyka
function aktualizujSumeKoszyka(koszyk) {
    const sumaKoszykaDiv = document.getElementById('suma__koszyka');
    
    const sumaOryginalna = koszyk.reduce((suma, item) => suma + item.cena * item.ilosc, 0);
    const sumaPrzeceniona = koszyk.reduce((suma, item) => suma + (item.przecenionaCena || item.cena) * item.ilosc, 0);

    if (sumaOryginalna !== sumaPrzeceniona) {
        // Jeśli zastosowano rabat, pokazujemy obie wartości
        sumaKoszykaDiv.innerHTML = `
            Suma: 
            <span style="text-decoration: line-through; color: gray;">${sumaOryginalna.toFixed(2)} zł</span>
            <span style="color: red; font-weight: bold;"> ${sumaPrzeceniona.toFixed(2)} zł</span>
        `;
    } else {
        // Jeśli nie ma rabatu, pokazujemy tylko jedną wartość
        sumaKoszykaDiv.innerText = `Suma: ${sumaOryginalna.toFixed(2)} zł`;
    }
}
let koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];
window.addEventListener('DOMContentLoaded', () => {
    aktualizujSumeKoszyka(koszyk);
    aktualizujKoszyk();
});


// Funkcja dodająca rabat
function dodajRabat() {
    const kod = document.getElementById('kod__rabatowy').value;
    const dataZakonczenia = new Date('2024-12-26');
    const dzisiaj = new Date();
    let koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];

    const kuponElement = document.getElementById('kupon');

    // Sprawdzenie, czy koszyk jest pusty
    if (koszyk.length === 0) {
        pokazPowiadomienie('Koszyk jest pusty! Dodaj produkty, aby zastosować kod rabatowy.', 5000, '#f73527');
        return; // Zakończ działanie funkcji
    }

    // Filtrujemy produkty, które jeszcze nie zostały przecenione
    const produktyNieprzecenione = koszyk.filter(item => !item.przecenionaCena);

    if (produktyNieprzecenione.length === 0) {
        // Jeśli wszystkie produkty są już przecenione
        pokazPowiadomienie('Wszystkie produkty już są przecenione!', 5000, '#f73527');
        return; // Zakończ działanie funkcji
    }

    if (kod === 'SWIETA2024' || kod === 'swieta2024') {
        if (dzisiaj > dataZakonczenia) {
            pokazPowiadomienie('Kod wygasł! :< ', 5000, '#f73527');
        } else {
            // Zastosowanie rabatu tylko dla produktów nieprzecenionych
            koszyk = koszyk.map(item => {
                if (!item.przecenionaCena) {
                    return {
                        ...item,
                        przecenionaCena: item.cena - (item.cena * 0.24) // Przecena o 24%
                    };
                }
                return item; // Zostawiamy produkty, które już mają przecenioną cenę
            });

            let calkowitaWartosc = koszyk.reduce(function (suma, przedmiot) {
                return suma + (przedmiot.przecenionaCena || przedmiot.cena);
            }, 0);

            localStorage.setItem('koszyk', JSON.stringify(koszyk)); // Zapisujemy koszyk z nowymi cenami
            pokazPowiadomienie('Zastosowano kod ' + kod + ' dla nowych produktów', 5000, '#1de003');
            // Zaktualizowanie wartości koszyka po zastosowaniu rabatu
            document.getElementById('koszyk__wartosc').innerText = calkowitaWartosc.toFixed(2) + ' zł';
            aktualizujSumeKoszyka(koszyk); // Odśwież sumę koszyka
            aktualizujTabeleKoszyka(); // Odśwież tabelę, aby uwzględniała zmiany
        }
    } else {
        // Jeśli kod jest niepoprawny
        pokazPowiadomienie('Nie znaleziono kodu rabatowego :<', 3000, '#f73527');
    }
}
function sortujKoszyk(kryterium) {
    let koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];

    switch (kryterium) {
        case 'najnowsze':
            koszyk.sort((a, b) => b.timestamp - a.timestamp); // Sortowanie po czasie dodania (od najnowszych)
            break;
        case 'najstarsze':
            koszyk.sort((a, b) => a.timestamp - b.timestamp); // Sortowanie po czasie dodania (od najstarszych)
            break;
        case 'najdrozsze':
            koszyk.sort((a, b) => ((b.przecenionaCena || b.cena) * b.ilosc) - ((a.przecenionaCena || a.cena) * a.ilosc));
            break;
        case 'najtansze':
            koszyk.sort((a, b) => ((a.przecenionaCena || a.cena) * a.ilosc) - ((b.przecenionaCena || b.cena) * b.ilosc));
            break;
        case 'najwiecej':
            koszyk.sort((a, b) => b.ilosc - a.ilosc);
            break;
        case 'najmniej':
            koszyk.sort((a, b) => a.ilosc - b.ilosc);
            break;
        default:
            console.error('Nieprawidłowe kryterium sortowania.');
            pokazPowiadomienie('Nie wiem jakim cudem wybrałeś inne kryterium sortowania, gratulacje.', 10000, '#f73527');
            return;
    }

    localStorage.setItem('koszyk', JSON.stringify(koszyk)); // Zapisujemy posortowany koszyk
    aktualizujTabeleKoszyka(); // Aktualizujemy tabelę
}

// Funkcja odświeżająca koszyk
function odswiezKoszyk() {
    const kryterium = localStorage.getItem('wybraneKryterium');
    sortujKoszyk(kryterium);
    pokazPowiadomienie('Odświeżono sortowanie koszyka.', 3000, '#1de003');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('koszyk__odswiez').addEventListener('click', odswiezKoszyk);
});

// Funkcja zapisująca wybraną opcję w localStorage
function zapiszKryterium() {
    const kryterium = document.getElementById('sortowanieKoszyka').value; // Pobieranie wartości z selecta
    localStorage.setItem('wybraneKryterium', kryterium); // Zapisujemy w localStorage
}

// Funkcja ustawiająca wybraną opcję z localStorage przy ładowaniu strony
function ustawKryterium() {
    const kryterium = localStorage.getItem('wybraneKryterium'); // Pobieramy zapisane kryterium z localStorage
    if (kryterium) {
        document.getElementById('sortowanieKoszyka').value = kryterium; // Ustawiamy wybraną opcję w select
    }
}
window.addEventListener('DOMContentLoaded', aktualizujKoszyk);
// Uruchomienie funkcji przy załadowaniu strony
window.onload = function() {
    const koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];
    localStorage.setItem('koszyk', JSON.stringify(koszyk)); // Inicjalizacja koszyka, jeśli jest pusty
    ustawKryterium(); // Ustawienie kryteriów sortowania
    aktualizujKoszyk(); // Aktualizacja koszyka
    aktualizujSumeKoszyka(koszyk); // Aktualizacja sumy koszyka
    document.getElementById('sortowanieKoszyka').addEventListener('change', zapiszKryterium); // Nasłuchiwanie zmian
};