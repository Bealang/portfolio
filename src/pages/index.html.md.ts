export async function GET() {
  const markdown = `# web2sell - Tworzenie stron internetowych Myślenice i Kraków

Zaprojektujemy. Zbudujemy. Od zera. Dla Twojej firmy.

---

## O nas (Manifest)

### Tworzymy strony www z pasji. Dowozimy jakość drogiej agencji w uczciwej cenie.

Jesteśmy 3-osobowym zespołem pasjonatów programowania, który porzucił ciężkie szablony WordPress na rzecz czystego i szybkiego kodu. Tworzymy dedykowane witryny, które generują zyski i ładują się w mgnieniu oka, co lepiej pozycjonuje je w google.

### Twoja strona nie zbiera klientów? A może przyda jej się odświeżenie?
Przestarzały szablon WordPress i wolne ładowanie sprawiają, że potencjalny klient rezygnuje w pierwszych sekundach. My tworzymy dedykowane strony od zera – bez ciężkich motywów, bez zbędnych wtyczek i w uczciwej cenie.

Oferujemy autorski, lekki kod, natychmiastowe ładowanie na smartfonach i jakość drogiej agencji w lokalnej, uczciwej cenie – dla przedsiębiorców z Myślenic, Małopolski i całej Polski.


---

## Nasz Zespół


### Łukasz — Backend developer
Łukasz to ekspert od zaawansowanej struktury stron, baz danych oraz ochrony sieciowej. Projektuje stabilne zaplecze techniczne witryn, dbając o to, by Twoje dane oraz dane Twoich klientów były w 100% bezpieczne. Tworzy rozwiązania gwarantujące płynne działanie strony nawet przy bardzo dużym ruchu, skutecznie chroniąc ją przed awariami oraz atakami hakerskimi.

### Szymon — UI/UX Designer & Frontend Developer
Szymon zajmuje się projektowaniem nowoczesnego wyglądu stron i dba o ich pełną intuicyjność. Przekłada Twoją wizję biznesu na atrakcyjny interfejs, który przyciąga uwagę klientów i wzbudza zaufanie od pierwszego kliknięcia. Tworzy responsywne strony internetowe, które działają bezbłędnie i wyglądają perfekcyjnie na wszystkich urządzeniach.

### Kacper — Specjalista ds. Optymalizacji i SEO
Kacper odpowiada za to, aby Twoja strona była widoczna w internecie i działała bez jakichkolwiek opóźnień. Optymalizuje kod źródłowy tak, by witryna ładowała się błyskawicznie, co zapobiega ucieczce potencjalnych klientów i znacznie podnosi skuteczność sprzedaży. Dba o zaawansowane SEO, dzięki czemu Twoja firma zdobywa wysokie pozycje w wyszukiwarce Google.

---

## Dlaczego porzuciliśmy WordPressa i Elementora?

Większość tradycyjnych agencji reklamowych stawia strony na gotowych, ciężkich szablonach WordPress i edytorach wizualnych typu Elementor czy Divi. Wynik? Powolna strona, która zniechęca klientów na telefonach i generuje wysokie koszty utrzymania.

My idziemy zupełnie inną drogą. Odrzucamy generatory stron i budujemy dedykowane witryny w oparciu o najnowocześniejsze frameworki i architektury. Dzięki wykorzystaniu nowoczesnych i szybkich technologii nasze strony są bezpieczne, odporne na ataki oraz wolne od zbędnych wtyczek. Brak ciężkiego systemu sprawia, że w przyszłości witryna generuje znacznie mniejsze koszty utrzymania — stabilny i bezpieczny hosting kosztuje u nas zaledwie 140 zł rocznie, a nie 400-500 zł, jak w przypadku tradycyjnych rozwiązań. Nasze projekty są ultra szybkie i gotowe na przyszłość (wyniki 90+/100 w Lighthouse Mobile).

---

## Skupiamy się na efekcie biznesowym

Nie zaczynamy od ślepego pisania kodu. Każda współpraca to precyzyjnie zaplanowany proces, który gwarantuje stworzenie strony doskonale odpowiadającej na potrzeby Twoich klientów.

1. **Analiza**: Nie piszemy kodu w ciemno. Najpierw poznajemy Twój biznes i konkurencję, aby strona skutecznie zdobywała dla Ciebie klientów.
2. **Projekt**: Tworzymy nowoczesną oprawę wizualną, która wyróżni Twoją firmę i będzie idealnie działać na każdym smartfonie.
3. **Budowa**: Piszemy czysty, lekki kod bez zbędnych wtyczek. Gwarantuje to błyskawiczne ładowanie strony i bezawaryjność na lata.
4. **Wdrożenie**: Uruchamiamy stronę, podpinamy statystyki i konfigurujemy Google. Dostajesz gotowe narzędzie, które od razu dla Ciebie zarabia.

---

## Technologie, z których korzystamy

- **React**
- **Astro**
- **Vite**
- **TypeScript**
- **Node.js**
- **JavaScript**
- **HTML5**
- **CSS3**

---

## Kontakt

- **Zadzwoń**: +48 530 315 860
- **E-mail**: kontakt@web2sell.pl
- **Faktury**: Wystawiamy faktury VAT (przez useme.pl).
- **Lokalizacja**: web2sell, powiat myślenicki, woj. małopolskie.
`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
