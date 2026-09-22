export async function GET() {
  const markdown = `# Polityka Prywatności i Cookies - web2sell
Ostatnia aktualizacja: 22 września 2026 r. (wersja 2026-09-22)

Niniejsza Polityka Prywatności i Cookies określa zasady przetwarzania i ochrony danych osobowych przekazywanych przez Użytkowników w związku z korzystaniem z serwisu web2sell, a w szczególności z formularza kontaktowego, oraz stosowania plików cookies i pamięci przeglądarki.

## 1. Administrator danych
Administratorem Twoich danych osobowych przekazywanych za pośrednictwem formularza kontaktowego oraz zbieranych podczas korzystania z witryny jest osoba prywatna:
- **Szymon Kotula**
- E-mail do kontaktu: kontakt@web2sell.pl

Dane osobowe są przetwarzane z poszanowaniem przepisów Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).

## 2. Podstawa prawna i cel przetwarzania
- **Art. 6 ust. 1 lit. a RODO (zgoda użytkownika)**: Przetwarzamy dane na podstawie zgody udzielonej przy wysyłaniu formularza oraz uruchamiamy opcjonalne usługi Google Analytics i osadzoną mapę Google po zaakceptowaniu ich w banerze prywatności.
- **Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora)**: Przetwarzamy dane w celu obsługi korespondencji, udzielenia odpowiedzi na zapytania, zapewnienia bezpieczeństwa formularza i obrony przed ewentualnymi roszczeniami.

## 3. Zakres przetwarzanych danych
Podczas korzystania z formularza kontaktowego podajesz nam:
- Imię i Nazwisko (lub nazwę firmy)
- Adres e-mail
- Treść wiadomości
- Opcjonalnie numer telefonu

## 4. Odbiorcy danych i transfer poza EOG
- **EmailJS**: Usługa służąca do przesyłania wiadomości z formularza kontaktowego bezpośrednio na naszą skrzynkę pocztową (EmailJS Inc., USA). Dane są przekazywane na podstawie Standardowych Klauzul Umownych (SCC).
- **Google Analytics**: Narzędzie Google LLC (USA) do pomiaru ruchu, uruchamiane wyłącznie po wyrażeniu zgody. Może zbierać m.in. losowy identyfikator klienta, informacje o sesji, przybliżonej lokalizacji, przeglądarce i urządzeniu. Dla użytkowników z UE adres IP jest używany do ustalenia przybliżonej lokalizacji, a następnie odrzucany przed zapisaniem w Google Analytics. Sygnały Google i personalizacja reklam są wyłączone.
- **Google Maps**: Osadzona mapa Google LLC (USA). Iframe mapy nie jest tworzony przed wyrażeniem zgody. Po zgodzie Google może otrzymywać m.in. adres IP, czas żądania, adres strony odsyłającej oraz informacje o przeglądarce i urządzeniu. Bez zgody dostępny jest przycisk „Zobacz w Google Maps”, który otwiera wizytówkę jako zewnętrzną stronę dopiero po świadomym kliknięciu.

## 5. Twoje prawa (RODO)
Przysługuje Ci prawo do dostępu do swoich danych, sprostowania, ograniczenia przetwarzania, wniesienia sprzeciwu, przenoszenia danych, cofnięcia zgody w dowolnym momencie oraz usunięcia danych („prawo do bycia zapomnianym” - prośby prosimy kierować na kontakt@web2sell.pl). Masz także prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).

## 6. Profilowanie i zautomatyzowane podejmowanie decyzji
Twoje dane osobowe nie będą wykorzystywane do zautomatyzowanego podejmowania decyzji, w tym do profilowania, o którym mowa w art. 22 ust. 1 i 4 RODO.

## 7. Ciasteczka (Cookies) i Pamięć Lokalna (localStorage)
Nasza witryna korzysta z technologii plików cookies oraz pamięci lokalnej (localStorage) w następujący sposób:
- **color-theme (ciasteczko, 365 dni)**: Niezbędne (preferencyjne) – zapamiętuje wybraną paletę kolorów witryny.
- **theme (localStorage, trwałe)**: Niezbędne (preferencyjne) – zapamiętuje wybór motywu jasnego/ciemnego.
- **cookie-consent (localStorage, trwałe)**: Niezbędne (techniczne) – zapisuje decyzję, jej datę w formacie ISO, wersję polityki i status opcjonalnych kategorii Google Analytics oraz Google Maps.
- **lastEmailSentTime (localStorage, 2 minuty)**: Niezbędne (bezpieczeństwo) – zapobiega spamowaniu formularza.
- **pricing-type (localStorage, trwałe)**: Niezbędne (preferencyjne) – zapamiętuje wybrany sposób prezentowania cen netto lub brutto.
- **_ga* (cookies, do 2 lat)**: Opcjonalne (wymaga zgody) – rozróżnianie użytkowników i sesji oraz tworzenie statystyk Google Analytics.
- **Google Maps**: Opcjonalna usługa zewnętrzna. Iframe jest tworzony dopiero po zgodzie; Google może wtedy używać cookies i podobnych technologii zgodnie ze swoimi zasadami.

## 8. Zarządzanie zgodą
Decyzję można w każdej chwili zmienić przyciskiem „Ustawienia prywatności” w stopce witryny. Odrzucenie opcjonalnych usług zatrzymuje dalsze pomiary Google Analytics, usuwa dostępne dla witryny pliki _ga i _ga_* oraz usuwa osadzony iframe Google Maps z bieżącej strony. Cofnięcie zgody nie wpływa na zgodność z prawem wcześniejszego przetwarzania.
`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
