function przeliczTemperature(zJednostki) {
    let wartosc = parseFloat(document.getElementById(zJednostki).value);
    
    if (isNaN(wartosc)) {
        ["C", "F", "K", "R", "r"].forEach(jednostka => document.getElementById(jednostka).value = "");
        return;
    }

    let tempC;
    
    switch (zJednostki) {
        case "C": tempC = wartosc; break;
        case "F": tempC = (wartosc - 32) * 5/9; break;
        case "K": tempC = wartosc - 273.15; break;
        case "R": tempC = (wartosc - 491.67) * 5/9; break;
        case "r": tempC = wartosc * 1.25; break;
    }

    let przeliczoneWartosci = {
        C: tempC,
        F: tempC * 9/5 + 32,
        K: tempC + 273.15,
        R: (tempC + 273.15) * 9/5,
        r: tempC * 0.8
    };

    for (let jednostka in przeliczoneWartosci) {
        if (jednostka !== zJednostki) {
            document.getElementById(jednostka).value = przeliczoneWartosci[jednostka].toFixed(2);
        }
    }
}
