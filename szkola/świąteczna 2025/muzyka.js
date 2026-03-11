document.addEventListener('DOMContentLoaded', () => {
    // --- KONFIGURACJA ---
    const folderMuzyki = "muzyka/";
    const kluczZapisu = "swiateczny_player_v2"; // Nowa wersja klucza
    
    // Tablica utworów
    const piosenki = [
        { tytul: "Last Christmas", autor: "Wham!", plik: "last_christmas.mp3" },
        { tytul: "Jingle Bells", autor: "Frank Sinatra", plik: "jingle_bells.mp3" },
        { tytul: "All I Want For Christmas", autor: "Mariah Carey", plik: "all_i_want.mp3" },
        // Możesz dodać więcej...
    ];

    // --- ELEMENTY DOM ---
    const odtwarzaczDiv = document.getElementById('odtwarzacz'); // Główny kontener
    const zwinBtn = document.getElementById('zwin-odtwarzacz'); // Przycisk zwijania
    
    const tytulElement = document.getElementById('tytul');
    const autorElement = document.getElementById('autor');
    
    const playPauseBtn = document.getElementById('play-pause');
    const prevBtn = document.getElementById('poprzednia');
    const nextBtn = document.getElementById('nastepna');
    const ikonaSvg = document.getElementById('ikona-play-pause');
    
    const pasekPostepu = document.getElementById('pasek-postepu');
    const postepWypelnienie = document.getElementById('postep-wypelnienie');

    const ikonaGlosnosciBtn = document.getElementById('ikona-glosnosci');
    const svgGlosnosci = document.getElementById('svg-glosnosci');
    const pasekGlosnosci = document.getElementById('pasek-glosnosci');
    const wypelnienieGlosnosci = document.getElementById('wypelnienie-glosnosci');

    // --- ZMIENNE STANU ---
    let aktualnyIndeks = 0;
    let czyGra = false;
    let ostatniaGlosnosc = 1;
    let czyZwiniety = false; // NOWA ZMIENNA
    let audio = new Audio();
    
    // --- ŚCIEŻKI SVG ---
    const pathPlay = "M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z";
    const pathPause = "M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z";
    const pathGlosno = "M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z";
    const pathWycisz = "M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z";

    // --- START ---
    wczytajStan(); 

    // --- OBSŁUGA ZWIJANIA ---
    zwinBtn.addEventListener('click', () => {
        czyZwiniety = !czyZwiniety;
        aktualizujWidokZwiniecia();
        zapiszStan();
    });

    function aktualizujWidokZwiniecia() {
        if (czyZwiniety) {
            odtwarzaczDiv.classList.add('ukryty');
        } else {
            odtwarzaczDiv.classList.remove('ukryty');
        }
    }

    // --- FUNKCJE ZAPISU/ODCZYTU ---

    function zapiszStan() {
        const stan = {
            indeks: aktualnyIndeks,
            czas: audio.currentTime,
            glosnosc: audio.volume,
            czyGralo: !audio.paused,
            czyZwiniety: czyZwiniety // Zapisujemy stan zwinięcia
        };
        localStorage.setItem(kluczZapisu, JSON.stringify(stan));
    }

    function wczytajStan() {
        const zapisanyStan = localStorage.getItem(kluczZapisu);
        
        if (zapisanyStan) {
            const dane = JSON.parse(zapisanyStan);
            
            aktualnyIndeks = dane.indeks || 0;
            if (aktualnyIndeks >= piosenki.length) aktualnyIndeks = 0;
            
            // Wczytanie stanu zwinięcia
            czyZwiniety = dane.czyZwiniety || false;
            aktualizujWidokZwiniecia();

            zaladujUtwor(aktualnyIndeks);
            audio.currentTime = dane.czas || 0;
            
            audio.volume = (dane.glosnosc !== undefined) ? dane.glosnosc : 1;
            aktualizujWygladGlosnosci();

            if (dane.czyGralo) {
                setTimeout(() => { grajUtwor(true); }, 100); 
            }
        } else {
            aktualnyIndeks = 0;
            audio.volume = 1;
            zaladujUtwor(aktualnyIndeks);
            aktualizujWygladGlosnosci();
        }
    }

    // --- POZOSTAŁE FUNKCJE (BEZ ZMIAN) ---

    function zaladujUtwor(indeks) {
        const utwor = piosenki[indeks];
        tytulElement.innerText = utwor.tytul;
        autorElement.innerText = utwor.autor;
        
        if (audio.src.indexOf(utwor.plik) === -1) {
             audio.src = folderMuzyki + utwor.plik;
        }
    }

    function przelaczOdtwarzanie() {
        if (czyGra) pauzujUtwor();
        else grajUtwor();
    }

    function grajUtwor(wznowienie = false) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                czyGra = true;
                aktualizujIkonePlay();
                playPauseBtn.classList.add('playing');
            }).catch(error => {
                console.log("Autoplay zablokowany.");
                czyGra = false;
                aktualizujIkonePlay();
                playPauseBtn.classList.remove('playing');
            });
        }
    }

    function pauzujUtwor() {
        audio.pause();
        czyGra = false;
        aktualizujIkonePlay();
        playPauseBtn.classList.remove('playing');
        zapiszStan();
    }

    function nastepnyUtwor() {
        aktualnyIndeks++;
        if (aktualnyIndeks > piosenki.length - 1) aktualnyIndeks = 0;
        
        audio.src = folderMuzyki + piosenki[aktualnyIndeks].plik;
        audio.currentTime = 0;
        zaladujUtwor(aktualnyIndeks);
        
        if (czyGra) grajUtwor();
        zapiszStan();
    }

    function poprzedniUtwor() {
        aktualnyIndeks--;
        if (aktualnyIndeks < 0) aktualnyIndeks = piosenki.length - 1;
        
        audio.src = folderMuzyki + piosenki[aktualnyIndeks].plik;
        audio.currentTime = 0;
        zaladujUtwor(aktualnyIndeks);
        
        if (czyGra) grajUtwor();
        zapiszStan();
    }

    function zmienGlosnosc(e) {
        const szerokosc = this.clientWidth;
        const klikX = e.offsetX;
        let volume = klikX / szerokosc;
        
        if (volume < 0.05) volume = 0;
        if (volume > 0.95) volume = 1;

        audio.volume = volume;
        aktualizujWygladGlosnosci();
        zapiszStan();
    }

    function przelaczWyciszenie() {
        if (audio.volume > 0) {
            ostatniaGlosnosc = audio.volume;
            audio.volume = 0;
        } else {
            audio.volume = ostatniaGlosnosc > 0 ? ostatniaGlosnosc : 1;
        }
        aktualizujWygladGlosnosci();
        zapiszStan();
    }

    function aktualizujWygladGlosnosci() {
        wypelnienieGlosnosci.style.width = (audio.volume * 100) + "%";
        const path = svgGlosnosci.querySelector('path');
        path.setAttribute('d', audio.volume === 0 ? pathWycisz : pathGlosno);
    }

    function aktualizujIkonePlay() {
        const path = ikonaSvg.querySelector('path');
        path.setAttribute('d', czyGra ? pathPause : pathPlay);
    }

    function aktualizujPasekPostepu(e) {
        if (audio.duration) {
            const procent = (audio.currentTime / audio.duration) * 100;
            postepWypelnienie.style.width = `${procent}%`;
        }
    }

    function przewinUtwor(e) {
        const szerokosc = this.clientWidth;
        const klikX = e.offsetX;
        audio.currentTime = (klikX / szerokosc) * audio.duration;
        zapiszStan();
    }

    // --- LISTENERY ---

    playPauseBtn.addEventListener('click', przelaczOdtwarzanie);
    nextBtn.addEventListener('click', nastepnyUtwor);
    prevBtn.addEventListener('click', poprzedniUtwor);
    audio.addEventListener('timeupdate', aktualizujPasekPostepu);
    audio.addEventListener('ended', () => { nastepnyUtwor(); });
    pasekPostepu.addEventListener('click', przewinUtwor);
    pasekGlosnosci.addEventListener('click', zmienGlosnosc);
    ikonaGlosnosciBtn.addEventListener('click', przelaczWyciszenie);
    
    let isDraggingVol = false;
    pasekGlosnosci.addEventListener('mousedown', () => isDraggingVol = true);
    document.addEventListener('mouseup', () => { if(isDraggingVol) { isDraggingVol = false; zapiszStan(); } });
    pasekGlosnosci.addEventListener('mousemove', (e) => { if (isDraggingVol) zmienGlosnosc.call(pasekGlosnosci, e); });

    window.addEventListener('beforeunload', () => { zapiszStan(); });
});