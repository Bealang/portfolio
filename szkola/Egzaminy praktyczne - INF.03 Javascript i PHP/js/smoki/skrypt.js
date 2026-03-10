function pokazSekcje(numer) {
    const sekcje = [
        document.getElementById('sekcja1'),
        document.getElementById('sekcja2'),
        document.getElementById('sekcja3')
    ];
    
    const bloki = [
        document.getElementById('blok1'),
        document.getElementById('blok2'),
        document.getElementById('blok3')
    ];

    for (let i = 0; i < 3; i++) {
        sekcje[i].style.display = 'none';
        bloki[i].style.backgroundColor = '#FFAEA5';
    }

    const index = numer - 1;
    sekcje[index].style.display = 'block';
    bloki[index].style.backgroundColor = 'MistyRose';
}