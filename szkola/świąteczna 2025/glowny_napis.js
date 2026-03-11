const powitalneTeksty = [
    "Święta coraz bliżej! Poczuj magię Bożego Narodzenia!",
    "Niech radość zagości w Twoim sercu. Wesołych Świąt!",
    "Czas na barszcz, karpia i prezenty! Czy jesteś gotowy?",
    "Złap oddech! Zima w pełni, a świąteczny czas nadszedł.",
    "Magiczny czas kolędowania już tu jest!",
    "Pamiętaj o bliskich! Świąteczny klimat czeka.",
    "Ciepło rodzinnego ogniska jest bezcenne. Witamy!",
    "Pierwsza gwiazdka czeka, a z nią... świąteczny quiz!",
    "Hoł, hoł, hoł! Mikołaj w drodze. Zaczynamy zabawę!",
    "Życzymy Ci samych cudownych, pachnących choinką chwil."
];

function losujNapis() {
    const rand = Math.floor(Math.random() * powitalneTeksty.length);
    document.getElementById('glowny_napis').innerText = powitalneTeksty[rand];
}