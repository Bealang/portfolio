function nominaly() {
    let kw = document.getElementById("kwota").value;
    let nom = [10, 5, 2, 1];
    let ile = 0;

    for (let i = 0; i < nom.length; i++) {
        let id = i;
        let liczbaNominalow = Math.floor(kw / nom[i]);
        document.getElementById(id).innerHTML = liczbaNominalow + "szt";
        ile = ile + liczbaNominalow;
        kw = kw % nom[i];
    }
}