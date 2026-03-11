document.addEventListener('DOMContentLoaded', () => {
    const pytania = [
        { tresc: "Ile reniferów ciągnie sanie Świętego Mikołaja (wliczając Rudolfa)?", odpowiedzi: ["7", "8", "9", "12"], poprawna: 2 },
        { tresc: "W którym kraju wymyślono szklane bombki choinkowe?", odpowiedzi: ["W Polsce", "W Niemczech", "W USA", "W Chinach"], poprawna: 1 },
        { tresc: "Jak nazywa się pomocnik św. Mikołaja, który karze niegrzeczne dzieci?", odpowiedzi: ["Grinch", "Krampus", "Elf", "Sknerus"], poprawna: 1 },
        { tresc: "Z czego tradycyjnie robi się barszcz wigilijny?", odpowiedzi: ["Z buraków", "Z pomidorów", "Z kapusty", "Z grzybów"], poprawna: 0 },
        { tresc: "Która kolęda jest najpopularniejsza na świecie (przetłumaczona na 300 jęz.)?", odpowiedzi: ["Lulajże Jezuniu", "Cicha Noc", "Dzisiaj w Betlejem", "Jingle Bells"], poprawna: 1 },
        { tresc: "Ile potraw powinno tradycyjnie znaleźć się na wigilijnym stole?", odpowiedzi: ["7", "10", "12", "24"], poprawna: 2 },
        { tresc: "Co według tradycji należy włożyć do portfela, aby mieć pieniądze przez cały rok?", odpowiedzi: ["Kawałek opłatka", "Igły z choinki", "Łuskę z karpia", "Sianko"], poprawna: 2 },
        { tresc: "Jak ma na imię chłopiec z filmu 'Kevin sam w domu'?", odpowiedzi: ["Kevin", "Stuart", "Marv", "Harry"], poprawna: 0 },
        { tresc: "Co symbolizuje sianko wkładywane pod obrus?", odpowiedzi: ["Bogactwo", "Ubóstwo, w jakim narodził się Jezus", "Dobre plony w przyszłym roku", "Zdrowie zwierząt domowych"], poprawna: 1 },
        { tresc: "Jaki kolor ma nos renifera Rudolfa?", odpowiedzi: ["Czarny", "Brązowy", "Złoty", "Czerwony"], poprawna: 3 },
        { tresc: "Z jakich składników wypieka się opłatek?", odpowiedzi: ["Mąka i woda", "Mąka, woda i drożdże", "Mąka, jajka i mleko", "Mąka i mleko"], poprawna: 0 },
        { tresc: "Kto spopularyzował wizerunek Świętego Mikołaja w czerwonym stroju?", odpowiedzi: ["Walt Disney", "Coca-Cola", "Pepsi", "The New York Times"], poprawna: 1 },
        { tresc: "W jakim mieście urodził się Jezus?", odpowiedzi: ["W Nazarecie", "W Jerozolimie", "W Betlejem", "W Kairze"], poprawna: 2 },
        { tresc: "Jak nazywa się uroczysta msza odprawiana o północy w Wigilię?", odpowiedzi: ["Jutrznia", "Pasterka", "Roraty", "Nieszpory"], poprawna: 1 },
        { tresc: "Jaki zespół wykonuje hit 'Last Christmas'?", odpowiedzi: ["ABBA", "Queen", "Wham!", "The Beatles"], poprawna: 2 },
        { tresc: "Co oznacza pojawienie się pierwszej gwiazdki na niebie w Wigilię?", odpowiedzi: ["Czas na otwarcie prezentów", "Czas na pójście do kościoła", "Znak do rozpoczęcia kolacji", "Koniec postu"], poprawna: 2 },
        { tresc: "Co tradycyjnie robi się pod jemiołą?", odpowiedzi: ["Śpiewa kolędy", "Całuje się", "Łamie opłatkiem", "Składa życzenia"], poprawna: 1 },
        { tresc: "Jakie imiona nosili Trzej Królowie?", odpowiedzi: ["Kacper, Melchior i Baltazar", "Marek, Mateusz i Łukasz", "Piotr, Paweł i Jan", "Atos, Portos i Aramis"], poprawna: 0 },
        { tresc: "Którego dnia obchodzimy Święto Trzech Króli?", odpowiedzi: ["1 stycznia", "25 grudnia", "6 stycznia", "2 lutego"], poprawna: 2 },
        { tresc: "Czyje imieniny przypadają w Wigilię (24 grudnia)?", odpowiedzi: ["Marii i Józefa", "Adama i Ewy", "Piotra i Pawła", "Krzysztofa i Barbary"], poprawna: 1 }
    ];

    // Elementy DOM
    const polePytania = document.getElementById('pytanie');
    const kontenerPrzyciskow = document.getElementById('przyciski');
    const licznikPytanElem = document.getElementById('licznik-pytan');
    const poprawnychElem = document.getElementById('liczba-poprawnych');
    const blednychElem = document.getElementById('liczba-blednych');
    
    const przyciski = [
        document.getElementById('odpA'),
        document.getElementById('odpB'),
        document.getElementById('odpC'),
        document.getElementById('odpD')
    ];

    // Zmienne stanu gry
    let aktualnyInterwalKropek;
    let czyZablokowane = false;
    let dostepnePytania = [];
    
    // Liczniki
    let numerPytania = 0;
    let licznikPoprawnych = 0;
    let licznikBlednych = 0;
    const TOTAL_PYTAN = pytania.length;

    uruchomQuiz();

    function uruchomQuiz() {
        // Reset zmiennych na start
        numerPytania = 0;
        licznikPoprawnych = 0;
        licznikBlednych = 0;
        dostepnePytania = [...pytania]; // Kopiujemy wszystkie pytania
        
        aktualizujWidokLicznikow();
        losujPytanie();
    }

    function aktualizujWidokLicznikow() {
        // Jeśli gra się skończyła (brak pytań), nie wyświetlamy "21/20" tylko status
        if (dostepnePytania.length === 0 && numerPytania > 0) {
            licznikPytanElem.innerText = "WYNIK KOŃCOWY";
        } else {
            let wyswietlanyNumer = numerPytania === 0 ? 1 : numerPytania;
            licznikPytanElem.innerText = `PYTANIE ${wyswietlanyNumer} / ${TOTAL_PYTAN}`;
        }
        
        poprawnychElem.innerText = licznikPoprawnych;
        blednychElem.innerText = licznikBlednych;
    }

    function losujPytanie() {
        czyZablokowane = false;

        // Reset wyglądu przycisków (klasy i widoczność)
        przyciski.forEach(btn => {
            btn.className = '';
            btn.style.display = ''; // Resetujemy display (pokazujemy C i D jeśli były ukryte)
        });
        
        kontenerPrzyciskow.classList.remove('ukryte');
        kontenerPrzyciskow.classList.remove('zablokowane');
        polePytania.classList.remove('fade-out');

        // --- SPRAWDZENIE CZY TO KONIEC GRY ---
        if (dostepnePytania.length === 0) {
            pokazEkranKoncowy();
            return;
        }

        // Zwiększamy licznik (bo zadajemy nowe pytanie)
        numerPytania++;
        aktualizujWidokLicznikow();

        // --- LOSOWANIE ---
        const losowyIndeks = Math.floor(Math.random() * dostepnePytania.length);
        const wybranePytanie = dostepnePytania[losowyIndeks];

        // Usuwamy pytanie z puli
        dostepnePytania.splice(losowyIndeks, 1);

        polePytania.innerText = wybranePytanie.tresc;

        przyciski.forEach((btn, index) => {
            const prefix = String.fromCharCode(65 + index) + ". "; 
            btn.innerText = prefix + wybranePytanie.odpowiedzi[index];
            
            // Klonujemy, żeby usunąć stare listenery
            const nowyBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(nowyBtn, btn);
            przyciski[index] = nowyBtn;
            
            nowyBtn.addEventListener('click', () => sprawdzOdpowiedz(index, wybranePytanie.poprawna));
        });
    }

    function pokazEkranKoncowy() {
        aktualizujWidokLicznikow();
        
        // Obliczamy procent
        const procent = Math.round((licznikPoprawnych / TOTAL_PYTAN) * 100);
        
        // Wyświetlamy wynik zamiast pytania
        polePytania.innerText = `Twój wynik: ${procent}%`;
        polePytania.classList.remove('fade-out');
        kontenerPrzyciskow.classList.remove('ukryte');
        
        // Ukrywamy przyciski C i D
        przyciski[2].style.display = 'none'; // C
        przyciski[3].style.display = 'none'; // D

        // --- KONFIGURACJA PRZYCISKU A (KOPIOWANIE) ---
        const btnA = przyciski[0];
        const noweA = btnA.cloneNode(true);
        btnA.parentNode.replaceChild(noweA, btnA);
        przyciski[0] = noweA;

        noweA.className = 'poprawna'; // Żeby był zielony/wyróżniony
        noweA.innerText = "Udostępnij wynik";
        
        noweA.addEventListener('click', () => {
            const tekstDoSkopiowania = `W quizie świątecznym osiągnąłem ${procent}% i odpowiedziałem dobrze na ${licznikPoprawnych}/${TOTAL_PYTAN} pytań!`;
            
            navigator.clipboard.writeText(tekstDoSkopiowania).then(() => {
                const staryTekst = noweA.innerText;
                noweA.innerText = "Skopiowano!";
                setTimeout(() => { noweA.innerText = staryTekst; }, 2000);
            }).catch(err => {
                console.error("Błąd kopiowania", err);
                alert("Nie udało się skopiować wyniku.");
            });
        });

        // --- KONFIGURACJA PRZYCISKU B (RESTART) ---
        const btnB = przyciski[1];
        const noweB = btnB.cloneNode(true);
        btnB.parentNode.replaceChild(noweB, btnB);
        przyciski[1] = noweB;

        noweB.className = ''; // Standardowy styl
        noweB.innerText = "Zacznij ponownie";
        
        noweB.addEventListener('click', () => {
            uruchomQuiz();
        });
    }

    function sprawdzOdpowiedz(wybranyIndeks, poprawnyIndeks) {
        if (czyZablokowane) return; 
        czyZablokowane = true;      

        kontenerPrzyciskow.classList.add('zablokowane');

        if (wybranyIndeks === poprawnyIndeks) {
            przyciski[wybranyIndeks].classList.add('poprawna');
            licznikPoprawnych++;
        } else {
            przyciski[wybranyIndeks].classList.add('bledna');
            przyciski[poprawnyIndeks].classList.add('poprawna');
            licznikBlednych++;
        }
        
        aktualizujWidokLicznikow();

        setTimeout(() => {
            rozpocznijLosowanie();
        }, 3000); 
    }

    function rozpocznijLosowanie() {
        czyZablokowane = true;

        kontenerPrzyciskow.classList.add('ukryte');
        polePytania.classList.add('fade-out'); 

        setTimeout(() => {
            // Sprawdzamy, czy to już koniec, żeby wyświetlić odpowiedni tekst
            const czyKoniec = (dostepnePytania.length === 0);
            const tekstLadowania = czyKoniec ? "Obliczam wynik" : "Losuję pytanie";

            polePytania.innerText = tekstLadowania;
            polePytania.classList.remove('fade-out'); 
            
            let kropki = 0;
            aktualnyInterwalKropek = setInterval(() => {
                kropki++;
                if (kropki > 3) kropki = 0;
                let tekstKropek = "";
                for(let i=0; i < kropki; i++) tekstKropek += ".";
                polePytania.innerText = tekstLadowania + tekstKropek;
            }, 500);

            setTimeout(() => {
                clearInterval(aktualnyInterwalKropek);
                polePytania.classList.add('fade-out'); 
                
                setTimeout(() => {
                   losujPytanie(); 
                }, 300);
                
            }, 4700);

        }, 500); 
    }
});