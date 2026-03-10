function funkcjaKwadratowa() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Podaj poprawne liczby!");
        return;
    }
    
    let delta = b * b - 4 * a * c;
    let x1 = x2 = "Brak";
    if (delta > 0) {
        x1 = (-b - Math.sqrt(delta)) / (2 * a);
        x2 = (-b + Math.sqrt(delta)) / (2 * a);
    } else if (delta === 0) {
        x1 = x2 = -b / (2 * a);
    }
    
    let p = -b / (2 * a);
    let q = -delta / (4 * a);
    let zbior = a > 0 ? `[${q.toFixed(2)}; ∞)` : `(-∞; ${q.toFixed(2)}]`;
    let kierunek = a > 0 ? "W górę" : "W dół";
    let monotonicznosc = a > 0 ? `Malejąca na (-∞, ${p.toFixed(2)}), rosnąca na (${p.toFixed(2)}, ∞)` : `Rosnąca na (-∞, ${p.toFixed(2)}), malejąca na (${p.toFixed(2)}, ∞)`;
    let viete = delta >= 0 ? `x₁ + x₂ = ${(-b / a).toFixed(2)}  x₁ * x₂ = ${(c / a).toFixed(2)}` : "Nie ma pierwiastków";
    
    document.getElementById("ka").textContent = a;
    document.getElementById("kp ").textContent = p.toFixed(2);
    document.getElementById("kq").textContent = q.toFixed(2);
    
    document.getElementById("ia").textContent = a;
    document.getElementById("ix1").textContent = x1 === "Brak" ? "Brak" : x1.toFixed(2);
    document.getElementById("ix2").textContent = x2 === "Brak" ? "Brak" : x2.toFixed(2);
    
    document.getElementById("delta").textContent = delta.toFixed(2);
    document.getElementById("mx1").textContent = x1.toFixed(2);
    document.getElementById("mx2").textContent = x2.toFixed(2);
    document.getElementById("zbior").textContent = zbior;
    document.getElementById("wierzcholekX").textContent = p.toFixed(2);
    document.getElementById("wierzcholekY").textContent = q.toFixed(2);
    document.getElementById("viete").textContent = viete;
    document.getElementById("kierunek").textContent = kierunek;
    document.getElementById("monotonicznosc").textContent = monotonicznosc;
}