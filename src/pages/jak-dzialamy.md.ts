export async function GET() {
  const markdown = `# Jak działamy i FAQ - web2sell

Dowiedz się, jak wygląda proces tworzenia strony internetowej krok po kroku oraz znajdź odpowiedzi na najczęściej zadawane pytania.

## Proces współpracy (8 kroków)

### Krok 1: Kontakt i opis potrzeb
Wypełniasz formularz kontaktowy, opisując swoje potrzeby i oczekiwania dotyczące strony internetowej. Przygotuj własne grafiki (logo, zdjęcia) i opisy, jeśli chcesz, ale nie jest to konieczne – możemy przygotować je za Ciebie.

### Krok 2: Bezpłatna wycena
W ciągu maksymalnie 24 godzin odpowiadamy na Twoją wiadomość, przedstawiając naszą wycenę i szczegóły strony. Wycena jest bezpłatna i niezobowiązująca. Wszystkie koszty są jasne od początku – bez ukrytych opłat.

### Krok 3: Szczegóły i materiały
Po zaakceptowaniu wyceny przesyłasz nam szczegółowe informacje: preferowana kolorystyka, logo w dobrej jakości, zdjęcia i opisy poszczególnych sekcji.

### Krok 4: Start pracy i zaliczka
Zaczynamy pracę. Pobieramy zaliczkę w wysokości 20% wartości zamówienia. Reszta płatna po wykonaniu i zatwierdzeniu strony. Na bieżąco informujemy Cię o postępach.

### Krok 5: Prototyp strony
Po kilku dniach wysyłamy prototyp strony działający online do wglądu. Możesz sprawdzić wygląd i funkcjonalności przed oficjalną publikacją.

### Krok 6: Tura poprawek
Masz możliwość zgłoszenia jednej tury poprawek. Wypisujesz wszystkie zmiany dokładnie i szczegółowo, a my je wdrażamy. Kolejne tury poprawek wyceniamy indywidualnie (od 50 zł za drobne korekty).

### Krok 7: Hosting i konfiguracja
Zajmujemy się publikacją strony w sieci. Pomagamy w zakupie i konfiguracji hostingu oraz domeny lub wdrażamy stronę na Twoim serwerze.

### Krok 8: Gotowe!
Strona jest opublikowana. Przesyłamy pliki źródłowe oraz krótką dokumentację techniczną. Oferujemy również bezpłatną opiekę techniczną po wdrożeniu (okres zależny od wybranego pakietu).

---

## Najczęściej zadawane pytania (FAQ)

### Czy muszę mieć kupioną domenę i hosting przed kontaktem?
Nie. Wszystko konfigurujemy od zera. Migrujemy również stare strony na nowy hosting i domeny.

### Ile trwa realizacja?
- Prosta wizytówka: 1 do 2 tygodni.
- Strony z CMS (blog, aktualności) oraz pakiety dedykowane: od 3-4 tygodni.

### Czy stroną będę mógł zarządzać sam?
Dla pakietów z panelem administracyjnym (Wizytówka + CMS lub System Dedykowany) otrzymujesz autorski, bardzo prosty panel do edycji treści (oferta, galeria, blog). Wizytówki bez CMS wymagają edycji kodu, ale dołączamy dokumentację.

### Jakie są koszty utrzymania strony internetowej?
- Hosting: od ~137 zł netto rocznie.
- Domena .pl: ~99 zł netto rocznie.
- Rejestracja na 1. rok: domena ~15 zł netto, hosting ~50 zł netto.
- W pakietach Multi-Page, CMS i Dedykowanym otrzymujesz hosting i domenę na 1. rok darmowo.

### Czy mogę otrzymać fakturę?
Tak. Wystawiamy faktury VAT za pośrednictwem serwisu useme.pl. Otrzymujesz fakturę proforma na maila do opłacenia, a po zaksięgowaniu system przesyła oficjalną fakturę VAT, którą bez problemu wrzucasz w koszty firmy. Nie musisz zakładać konta w serwisie.
`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
