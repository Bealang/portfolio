
function pokazWynik() {
var imie = document.getElementById("imie").value.trim();
var nazwisko = document.getElementById("nazwisko").value.trim();
var wiek = document.getElementById("wiek").value;
var fryzura = document.getElementById("fryzura").value;
var komentarz = document.getElementById("komentarz").value.trim();
var termin = document.getElementById("termin").value;

// Sprawdzanie wymaganych danych
if (imie === "" || nazwisko === "" || wiek === "" || termin === "") {
    document.getElementById("wynik").innerHTML = "Nie podano wszystkich danych";
    return;
}

var kosztFryzura = 0;
if (fryzura === "krótkie") kosztFryzura = 50;
if (fryzura === "półdługie") kosztFryzura = 70;
if (fryzura === "długie") kosztFryzura = 90;

var makijazTekst = "";
var kosztMakijaz = 0;

if (document.getElementById("cien").checked) {
    var r = document.getElementById("cien_r").value;
    var g = document.getElementById("cien_g").value;
    var b = document.getElementById("cien_b").value;
    makijazTekst += "Cień: rgb(" + r + ", " + g + ", " + b + ")<br>";
    kosztMakijaz += 15;
}

if (document.getElementById("szminka").checked) {
    var r = document.getElementById("szminka_r").value;
    var g = document.getElementById("szminka_g").value;
    var b = document.getElementById("szminka_b").value;
    makijazTekst += "Szminka: rgb(" + r + ", " + g + ", " + b + ")<br>";
    kosztMakijaz += 15;
}

if (document.getElementById("lakier").checked) {
    var r = document.getElementById("lakier_r").value;
    var g = document.getElementById("lakier_g").value;
    var b = document.getElementById("lakier_b").value;
    makijazTekst += "Lakier: rgb(" + r + ", " + g + ", " + b + ")<br>";
    kosztMakijaz += 10;
}

var razem = kosztFryzura + kosztMakijaz;

document.getElementById("wynik").innerHTML =
    "Imię: " + imie + "<br>" +
    "Nazwisko: " + nazwisko + "<br>" +
    "Wiek: " + wiek + "<br><br>" +
    "Fryzura: " + fryzura + ", koszt: " + kosztFryzura + " zł<br>" +
    "Makijaż:<br>" + (makijazTekst || "Brak makijażu") +
    "Koszt makijażu: " + kosztMakijaz + " zł<br><br>" +
    "Razem: " + razem + " zł<br><br>" +
    "Uwagi do salonu:<br>" + (komentarz || "Brak") + "<br><br>" +
    "Termin wykonania: " + termin;
}
