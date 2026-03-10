function zamow() {
    var nr = document.getElementsByTagName("input")[0].value;
    var wynik = document.getElementById("wynikcukierki");

    if (nr == 1) wynik.innerHTML = "Twoje zamówienie to cukierek cytryna";
    else if (nr == 2) wynik.innerHTML = "Twoje zamówienie to cukierek liść";
    else if (nr == 3) wynik.innerHTML = "Twoje zamówienie to cukierek banan";
    else wynik.innerHTML = "Twoje zamówienie to cukierek inny";

    var r = document.getElementsByTagName("input")[1].value;
    var g = document.getElementsByTagName("input")[2].value;
    var b = document.getElementsByTagName("input")[3].value;

    var kolor = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("kolorBtn").style.backgroundColor = kolor;
  }