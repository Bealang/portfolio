const przelicznikWaluty = {
    gr: 1,
    zl: 100
};

function przeliczWalute(zJednostki) {
    let inputElement = document.getElementById(zJednostki);
    let wartosc = inputElement.value.replace(",", "."); // Zamiana przecinka na kropkę
    let wartoscNum = parseFloat(wartosc);

    if (isNaN(wartoscNum) || wartoscNum < 0) {
        document.getElementById("zl").value = "";
        document.getElementById("gr").value = "";
        return;
    }

    let wartoscWGr;
    if (zJednostki === "zl") {
        wartoscWGr = Math.round(wartoscNum * 100); // Zamiana złotych na grosze
        document.getElementById("gr").value = wartoscWGr;
    } else {
        wartoscWGr = Math.round(wartoscNum); // Grosze jako liczba całkowita
        document.getElementById("zl").value = (wartoscWGr / 100).toFixed(2);
    }
}
