const przeliczniki = {
    dlugosc: {
        mm: 1, cm: 10, dm: 100, m: 1000, km: 1000000,
        in: 25.4, ft: 304.8, yd: 914.4, mi: 1609344, nmi: 1852000
    },
    waga: {
        mg: 1, g: 1000, dag: 10000, kg: 1000000, tg: 1000000000,
        ld: 1000000, stone: 6350293.18, oz: 283495.23, karat: 200
    },
    objetosc: {
        ml: 1, l: 1000, hl: 100000, cm3: 1, m3: 1000000,
        barylka: 158987, galonUS: 3785.41, galonUK: 4546.09,
        pintaUS: 473.176, pintaUK: 568.261
    },
    powierzchnia: {
        cm2: 1, m2: 10000, km2: 10000000000, ar: 1000000, ha: 100000000,
        akr: 40468564.2, mi2: 25899881103.36, in2: 6.4516, yd2: 8361.27, ft2: 929.03
    },
    waluta: {
        gr: 1, zl: 100
    },
    cisnienie: {
        Pa: 1, hPa: 100, bar: 100000, psi: 6894.76, 
        "N/mm2": 1000000, "kg/m2": 9.80665, at: 98066.5, atm: 101325, Tr: 133.322
    },
    predkosc: {
        "km/h": 1, mph: 1.60934, "m/s": 3.6
    },
    temperatura: {
        C: 1, F: 33.8, K: 274.15, R: 493.47, r: 0.8
    },
    czas: {
        ns: 1, mikrosekunda: 1000, ms: 1000000, s: 1000000000, 
        min: 60000000000, h: 3600000000000, d: 86400000000000, 
        tydzien: 604800000000000, miesiac: 2629800000000000, rok: 31557600000000000
    },
    moc: {
        kW: 1, KM: 1.35962
    }
};

function przelicz(zJednostki, typJednostek) {
    let wartosc = parseFloat(document.getElementById(zJednostki).value);
    if (isNaN(wartosc)) {
        for (let jednostka in przeliczniki[typJednostek]) {
            document.getElementById(jednostka).value = "";
        }
        return;
    }

    let wartoscPodstawowa = wartosc * przeliczniki[typJednostek][zJednostki];

    for (let jednostka in przeliczniki[typJednostek]) {
        if (jednostka !== zJednostki) {
            let wynik = wartoscPodstawowa / przeliczniki[typJednostek][jednostka];

            document.getElementById(jednostka).value = wynik !== 0 ? wynik.toFixed(4) : "0";
        }
    }
}
