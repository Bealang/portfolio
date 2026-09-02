export async function GET() {
  const markdown = `# Pakiet Wizytówka + CMS – Cennik, Zakres i Korzyści | web2sell

Wizytówka + CMS to pełnowymiarowa strona internetowa podzielona na 2-5 dedykowanych podstron, wyposażona w autorski, bezpieczny i banalnie prosty panel administracyjny do edycji tekstów, cenników, aktualności oraz galerii realizacji bez wiedzy programistycznej.

- **Cena pakietu**: od 2290 zł netto / 2817 zł brutto (+23% VAT)
- **Czas realizacji**: 1-2 tygodnie
- **Hosting i domena .pl**: W cenie na pierwszy rok (0 zł)
- **Opieka i gwarancja**: 6 miesięcy w pakiecie

---

## Dlaczego autorski CMS od web2sell deklasuje WordPressa?
- **Prostota i wygoda**: Czysty panel w języku polskim, bez tysiąca zbędnych opcji.
- **Bezpieczeństwo**: Brak podatności na ataki botów i złośliwych wtyczek.
- **Szybkość**: Błyskawiczny czas ładowania poniżej 0.5s (100/100 Google PageSpeed).
- **Zero awarii**: Brak zrywających się wtyczek po aktualizacjach.

---

## Co znajduje się w pakiecie Wizytówka + CMS?
1. **2 do 5 unikalnych podstron** (Strona Główna, O nas, Usługi, Galeria/Portfolio, Kontakt).
2. **Autorski panel administracyjny (CMS)** – edycja z komputera i smartfona.
3. **Darmowy hosting SSD + domena .pl** na pierwsze 12 miesięcy.
4. **6 miesięcy dedykowanej opieki technicznej i gwarancji**.
5. **Rozszerzona optymalizacja SEO pod wiele fraz kluczowych**.
6. **Wizytówka i profil Google Maps w cenie**.
7. **Formularz kontaktowy, certyfikat SSL i zgodność z RODO**.

---

## Kontakt i zamówienie
- Formularz zamówienia: https://web2sell.pl/zamow?pakiet=cms
- Telefon: +48 530 315 860
- E-mail: kontakt@web2sell.pl
`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
