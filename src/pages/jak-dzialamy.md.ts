export async function GET() {
  const markdown = `# Jak wygląda współpraca z nami?

Poniżej znajdują się kroki powstawania twojej przyszłej strony internetowej od wysłania formularza, po publikację w sieci.

## KROK PO KROKU

### Krok 1: Kontakt & opis potrzeb
Wypełniasz formularz kontaktowy, opisując swoje potrzeby i oczekiwania dotyczące strony internetowej. Im więcej szczegółów podasz, tym lepiej będziemy mogli dopasować ofertę do Twoich wymagań. Przygotuj własne grafiki (logo, zdjęcia) i opisy, jeśli chcesz, ale nie jest to konieczne - możemy też je przygotować za Ciebie.

### Krok 2: Bezpłatna wycena
W ciągu **max. 24 godzin** odpowiadamy na Twoją wiadomość i przedstawiamy naszą wycenę i szczegóły strony internetowej. Wycena jest bezpłatna i niezobowiązująca, a wszystkie koszty są jasne od początku - bez ukrytych opłat. Jeśli masz pytania dotyczące wyceny lub chcesz wprowadzić zmiany, jesteśmy otwarci na rozmowę.

### Krok 3: Szczegóły & materiały
Po dogadaniu oferty i zaakceptowaniu wyceny, wysyłasz nam szczegółowe informacje o twojej stronie:
- preferowana kolorystyka
- pomysł na układ strony (jeśli masz)
- odpowiednie grafiki (logo w dobrej jakości, zdjęcia produktów/firmy)
- opisy poszczególnych sekcji

### Krok 4: Start pracy & zaliczka
Zaczynamy pracę nad Twoją stroną. W tym momencie pobieramy zaliczkę w wysokości **20%** wartości zamówienia. Reszta płatna po wykonaniu i zatwierdzeniu strony. W trakcie pracy będziemy na bieżąco informować Cię o postępach i konsultować wszelkie wątpliwości, aby efekt końcowy był zgodny z Twoimi oczekiwaniami.

### Krok 5: Prototyp strony
Po kilku dniach pracy nad projektem, wysyłamy Ci prototyp strony do wglądu. Możesz zobaczyć, jak Twoja strona prezentuje się na żywo, zanim zostanie opublikowana. To moment, w którym możesz zgłosić swoje uwagi i sugestie dotyczące wyglądu i funkcjonalności strony, abyśmy mogli wprowadzić ewentualne poprawki przed finalizacją projektu.

### Krok 6: Tura poprawek
Po przedstawieniu prototypu, masz możliwość zgłoszenia **jednej tury poprawek**. Wypisujesz wszystkie rzeczy, które chcesz zmienić, dokładnie i szczegółowo. My wykonujemy wszystkie poprawki zgodnie z Twoimi wskazówkami. Jeśli po tej turze chciałbyś wprowadzić kolejne zmiany, wyceniamy je indywidualnie (od 50 zł za drobne korekty).

### Krok 7: Hosting & konfiguracja
Po zaakceptowaniu ostatecznej wersji strony, zajmujemy się jej publikacją w sieci. Jeśli nie masz jeszcze hostingu i domeny, możemy pomóc Ci je założyć i skonfigurować. Jeśli już posiadasz hosting, zajmiemy się konfiguracją i wdrożeniem strony na Twoim serwerze. Po wszystkim strona będzie gotowa do użytku!

### Krok 8: Gotowe!
Strona internetowa jest gotowa i opublikowana! Po zakończeniu projektu, wysyłamy Ci wszystkie pliki źródłowe strony oraz krótką dokumentację techniczną. Jesteśmy też dostępni do pomocy po wdrożeniu bezpłatnie przez określony czas w cenniku, jeśli będziesz potrzebować dodatkowych zmian lub wsparcia.

---

## Najczęściej zadawane pytania (FAQ)

### Czy muszę mieć kupioną domenę i hosting przed kontaktem?
**Nie.** Nie trzeba, gdyż wszystko konfigurujemy od zera. Jesteśmy w stanie także przenieść stronę na inny hosting. Jeśli masz starą stronę — nie ma problemu, zajmiemy się migracją.

### Ile trwa realizacja?
Realizacja prostej wizytówki trwa zazwyczaj około **od 1 do 2 tygodni**. Profesjonalne systemy zarządzania treścią (blog, aktualności, łatwo edytowane galerie itd.) z pakietu **System** mają czas realizacji co najmniej **od 3 tygodni**.
Wstępny czas realizacji dla każdego pakietu jest podany w cenniku.

### Czy stroną będę mógł zarządzać sam?
Po zakończonej pracy wysyłamy kod źródłowy strony i krótką dokumentację techniczną. Dla prostych wizytówek nie ma dedykowanego panelu do edytowania wartości na stronie. Natomiast dla pakietu **System z własnym CMS** — oczywiście, można zarządzać samemu stroną. Trzeba tylko dać znać przy składaniu zamówienia, co chcesz łatwo edytować.

### Jakie są koszty utrzymania strony internetowej?
Koszt utrzymania strony zależy od wybranego pakietu. Najprostsze wizytówki i proste systemy CMS dla lokalnych firm wymagają hostingu w cenie od ~137zł netto rocznie. Jeśli strona zacznie się zacinać, wolno działać, można bez problemu przejść na droższy i wydajniejszy pakiet. Natomiast każda strona internetowa wymaga domeny .pl - dla przykładu twojanazwa.pl, której koszt to 99zł netto rocznie.
- Zarejestrowanie domeny na pierwszy rok: **~15zł netto**
- Zarejestrowanie hostingu na pierwszy rok: **~50zł netto**

### Czy mogę otrzymać fakturę?
Po zakończeniu realizacji projektu wystawiamy fakturę VAT na całą kwotę za pośrednictwem serwisu **useme.pl**. Dzięki temu masz pewność, że wszystko jest w 100% legalne i zgodne z przepisami podatkowymi.
**Jak to wygląda w praktyce?** My zgłaszamy zlecenie w serwisie, a Ty otrzymujesz na maila fakturę proforma do opłacenia. Nie musisz zakładać żadnego konta ani się rejestrować. Po zaksięgowaniu wpłaty system automatycznie wyśle do Ciebie oficjalną fakturę VAT, którą bez problemu wrzucasz w koszty firmy. Jeśli masz pytania dotyczące rozliczenia, daj nam znać!
`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
