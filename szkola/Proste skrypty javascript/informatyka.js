function przetworzFormularz() {
    let imie = document.getElementById("imie").value.trim().toUpperCase();
    let nazwisko = document.getElementById("nazwisko").value.trim().toUpperCase();
    let zgloszenie = document.getElementById("zgloszenie").value.trim();
    let regulaminZaznaczony = document.getElementById("regulamin").checked;
    let komunikat = document.getElementById("komunikat");

    if (!regulaminZaznaczony) {
        komunikat.innerHTML = "Musisz zapoznać się z regulaminem";
        komunikat.style.color = "red";
    } else {
        komunikat.innerHTML = `${imie} ${nazwisko}<br>Treść Twojej sprawy: ${zgloszenie}`;
        komunikat.style.color = "navy";
    }
}