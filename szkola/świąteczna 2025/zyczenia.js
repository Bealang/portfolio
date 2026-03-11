document.addEventListener('DOMContentLoaded', () => {
    // Baza życzeń
    const bazaZyczen = [
        // --- KLASYCZNE I CIEPŁE ---
        "Droga/Drogi {ADRESAT}!\n\nNiech te Święta będą pełne magii, ciepła i radości. Życzę Ci góry prezentów, pysznego karpia i chwili wytchnienia od codzienności.\n\nŻyczy {NADAWCA}",
        
        "{ADRESAT},\n\nZdrowia, szczęścia, pomyślności,\nniech w Twym sercu radość gości.\nW te Święta życzę Ci dużo uśmiechu i wspaniałych chwil z bliskimi.\n\nPrzesyła {NADAWCA}",
        
        "Kochana/Kochany {ADRESAT}!\n\nNiech ten świąteczny czas będzie dla Ciebie wyjątkowy. Dużo śniegu za oknem, ciepła w domu i miłości wokół.\n\nŚciskam,\n{NADAWCA}",
        
        "{ADRESAT}!\n\nZ okazji Bożego Narodzenia życzę Ci, aby pierwsza gwiazdka spełniła Twoje najskrytsze marzenia, a nadchodzący Nowy Rok był pasmem sukcesów.\n\nWesołych Świąt życzy {NADAWCA}",

        "Drogi {ADRESAT}!\n\nŚwiąt białych, pachnących choinką, skrzypiących śniegiem pod butami, spędzonych w ciepłej, rodzinnej atmosferze.\n\nŻyczy {NADAWCA}",

        // --- ZABAWNE I NA LUZIE ---
        "{ADRESAT}!\n\nŻyczę Ci, aby Mikołaj nie utknął w kominie, choinka pachniała lasem, a sernik nie miał rodzynek! ;)\n\nWesołych Świąt życzy {NADAWCA}",
        
        "Hej {ADRESAT}!\n\nDużo prezentów, mało w biodrach, karpia bez ości i żeby teściowa była w te święta wyjątkowo znośna! :)\n\nNajlepszego,\n{NADAWCA}",
        
        "{ADRESAT},\n\nŻyczę Ci, żebyś w Wigilię najadł się za trzech, a w Sylwestra bawił się za czterech! Niech barszcz będzie gorący, a prezenty trafione.\n\nPozdrawiam,\n{NADAWCA}",
        
        "Drogi {ADRESAT}!\n\nŻyczę Ci góry prezentów, ale tylko takich, których nie trzeba oddawać ani wymieniać! I żeby Kevin sam w domu się nie znudził.\n\nŻyczy {NADAWCA}",

        "{ADRESAT}!\n\nNiech Mikołaj przyniesie Ci to, o czym marzysz, a nie to, co 'może się przydać'. :D Wesołych i beztroskich Świąt!\n\n{NADAWCA}",

        // --- RYMOWANE ---
        "{ADRESAT}!\n\nGdy pierwsza gwiazdka na niebie zabłyśnie,\nniech Cię aniołek ode mnie uściśnie.\nNiech stół wigilijny ugina się od pyszności,\na w Twoim domu niech radość zagości!\n\nŻyczy {NADAWCA}",
        
        "Dla {ADRESAT}:\n\nKarpia szalonego, renifera pijanego,\nMikołaja bogatego, bałwana śnieżnego,\nPrezentów całej góry i wesołej natury!\n\nWesołych Świąt życzy {NADAWCA}",
        
        "{ADRESAT}!\n\nStołów pięknie ozdobionych,\npysznościami zastawionych.\nCudownych prezentów pod choinką,\ni żebyś zawsze był z uśmiechniętą minką!\n\nPrzesyła {NADAWCA}",

        // --- KRÓTKIE I ZWIĘZŁE ---
        "{ADRESAT}! Magicznych Świąt Bożego Narodzenia i Szczęśliwego Nowego Roku!\n\nŻyczy {NADAWCA}",
        
        "Wesołych Świąt, {ADRESAT}! Niech to będzie czas pełen spokoju i odpoczynku.\n\n{NADAWCA}",
        
        "{ADRESAT} – wszystkiego najlepszego na Święta! Zdrowia i spełnienia marzeń.\n\nPozdrawia {NADAWCA}"
    ];

    // Elementy DOM
    const inputImie = document.getElementById('imie');
    const inputAdresat = document.getElementById('adresat');
    const btnGeneruj = document.getElementById('generuj-btn');
    const btnKopiuj = document.getElementById('kopiuj-btn');
    const tekstWynikowy = document.getElementById('tresc-zyczen');

    // Funkcja generująca
    btnGeneruj.addEventListener('click', () => {
        const nadawca = inputImie.value.trim();
        const adresat = inputAdresat.value.trim();

        if (!nadawca || !adresat) {
            tekstWynikowy.innerText = "Wpisz oba imiona!";
            btnKopiuj.style.display = 'none';
            return;
        }

        // Losowanie
        const losowyIndeks = Math.floor(Math.random() * bazaZyczen.length);
        let wylosowaneZyczenia = bazaZyczen[losowyIndeks];

        // Podmiana
        wylosowaneZyczenia = wylosowaneZyczenia.replace(/{NADAWCA}/g, nadawca);
        wylosowaneZyczenia = wylosowaneZyczenia.replace(/{ADRESAT}/g, adresat);

        // Wyświetlenie
        tekstWynikowy.innerText = wylosowaneZyczenia;

        // Pokazanie przycisku
        btnKopiuj.style.display = 'inline-block';
        btnKopiuj.innerText = "Skopiuj do schowka";
    });

    // Funkcja kopiowania
    btnKopiuj.addEventListener('click', () => {
        navigator.clipboard.writeText(tekstWynikowy.innerText).then(() => {
            const staryTekst = btnKopiuj.innerText;
            btnKopiuj.innerText = "Skopiowano!";
            setTimeout(() => {
                btnKopiuj.innerText = staryTekst;
            }, 2000);
        }).catch(err => {
            alert('Nie udało się skopiować.');
        });
    });
});