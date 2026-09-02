export async function GET() {
  const markdown = `# Strona OnePage – Cennik, Zakres i Korzyści | web2sell

Strona OnePage (Single-Page Website) to nowoczesna witryna jednostronicowa, na której cała oferta, opis firmy, cennik i kontakt znajdują się na jednej, płynnie przewijanej stronie.

- **Cena pakietu**: od 990 zł netto / 1217 zł brutto (+23% VAT)
- **Czas realizacji**: 5-7 dni roboczych
- **Abonament**: 0 zł / brak stałych opłat za silnik

---

## Co to jest strona OnePage i jak działa?
OnePage to rozwiązanie zoptymalizowane pod maksymalną konwersję i prostotę. Zamiast otwierać kilka podstron, użytkownik jednym ruchem kciuka lub myszki zapoznaje się z całą ofertą firmy. Menu nawigacyjne na górze strony działa w oparciu o płynne przewijanie do konkretnych sekcji (smooth scroll).

---

## Co realnie znajduje się w wizytówce OnePage? (Anatomia strony)
1. **Sekcja Hero (Nagłówek i pierwsze wrażenie)** – Wyraziste hasło z unikalną propozycją wartości (UVP) oraz bezpośredni przycisk do kontaktu telefonicznego (tel:) lub wyceny.
2. **O firmie / O Tobie (Budowa zaufania)** – Krótka, autentyczna prezentacja doświadczenia i standardów pracy.
3. **Przejrzysty zakres usług i oferta** – Kafelki z opisami poszczególnych usług, ikonami i korzyściami dla klienta.
4. **Cennik lub pakiety orientacyjne** – Przejrzyste widełki cenowe oszczędzające czas na powtarzające się pytania.
5. **Opinie klientów & Dowód społeczny (Social Proof)** – Referencje, opinie z Google i certyfikaty budujące wiarygodność.
6. **Kontakt, interaktywna mapa i godziny otwarcia** – Bezpośrednie odnośniki do telefonu, e-maila, formularz kontaktowy i mapa dojazdu Google.
7. **Fundament techniczny, SEO i RODO** – Czysty kod Astro, czas ładowania poniżej 0.5 sekundy, certyfikat SSL, baner cookies i podstawowe SEO pod wyszukiwarkę Google.

---

## Jakie realne korzyści biznesowe daje OnePage?
- **Więcej telefonów od klientów**: Brak rozpraszaczy i skupienie uwagi na jednym celu (kontakt).
- **Szybki start w sieci**: Uruchomienie strony pod Twoją domeną już w 5-7 dni roboczych.
- **Ekonomia i brak abonamentów**: Jednorazowy koszt wykonania, strona w 100% należy do Ciebie.
- **Perfekcyjna na smartfony (Mobile-First)**: Działa jak lekka i płynna aplikacja mobilna.
- **Wizytówka Google Maps w cenie**: Pełna konfiguracja i optymalizacja profilu firmy w Google Maps.
- **Idealny landing page pod reklamy**: Gotowa struktura pod kampanie Google Ads i Meta Ads.

---

## Dla kogo OnePage to najlepszy wybór?
- Lokalne usługi i rzemieślnicy (hydraulicy, elektrycy, autoserwisy, budownictwo, transport).
- Gabinety, salony i branża beauty (fryzjerzy, kosmetyczki, masażyści, fizjoterapeuci, trenerzy).
- Eksperci i freelancerzy (księgowi, doradcy, prawnicy, tłumacze, fotografowie).
- Nowe firmy i startupy potrzebujące natychmiastowej, profesjonalnej obecności w sieci.

---

## Kiedy warto wybrać pakiet Wizytówka + CMS?
Jeśli Twoja firma potrzebuje:
- Osobnych, rozbudowanych podstron dla kilkunastu różnych usług (pod pozycjonowanie szerokie),
- Samodzielnego panelu administracyjnego do codziennej edycji wpisów i oferty,
- Prowadzenia bloga firmowego lub obszernej galerii realizacji.

W takim przypadku rekomendujemy pakiet **Wizytówka + CMS (od 2290 zł netto)**.

---

## Kontakt i zamówienie
- Formularz zamówienia: https://web2sell.pl/zamow?pakiet=onepage
- Telefon: +48 530 315 860
- E-mail: kontakt@web2sell.pl
`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
