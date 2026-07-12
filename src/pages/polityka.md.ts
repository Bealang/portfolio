export async function GET() {
  const markdown = `# Polityka Prywatności i Cookies - web2sell
Ostatnia aktualizacja: 12 lipca 2026 r.

Niniejsza Polityka Prywatności i Cookies określa zasady przetwarzania i ochrony danych osobowych przekazywanych przez Użytkowników w związku z korzystaniem z serwisu web2sell, a w szczególności z formularza kontaktowego, oraz stosowania plików cookies i pamięci przeglądarki.

## 1. Administrator danych
Administratorem Twoich danych osobowych przekazywanych za pośrednictwem formularza kontaktowego oraz zbieranych podczas korzystania z witryny jest osoba prywatna:
- **Szymon Kotula**
- E-mail do kontaktu: kontakt@web2sell.pl

Dane osobowe są przetwarzane z poszanowaniem przepisów Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).

## 2. Podstawa prawna i cel przetwarzania
- **Art. 6 ust. 1 lit. a RODO (Zgoda Użytkownika)**: Wyrażasz zgodę na przetwarzanie danych podczas wysyłania zapytania przez formularz kontaktowy oraz akceptując analityczne pliki cookies.
- **Art. 6 ust. 1 lit. f RODO (Prawnie uzasadniony interes administratora)**: Przetwarzamy Twoje dane w celu obsługi korespondencji, udzielenia odpowiedzi na zapytania, budowania relacji z klientami oraz w celach analitycznych (statystyki ruchu).

## 3. Zakres przetwarzanych danych
Podczas korzystania z formularza kontaktowego podajesz nam:
- Imię i Nazwisko (lub nazwę firmy)
- Adres e-mail
- Treść wiadomości
- Opcjonalnie numer telefonu

## 4. Odbiorcy danych i transfer poza EOG
- **EmailJS**: Usługa służąca do przesyłania wiadomości z formularza kontaktowego bezpośrednio na naszą skrzynkę pocztową (EmailJS Inc., USA). Dane są przekazywane na podstawie Standardowych Klauzul Umownych (SCC).
- **Google Analytics**: Narzędzie do analizy ruchu w witrynie dostarczane przez Google LLC (USA). Dane są zbierane wyłącznie po wyrażeniu przez Ciebie zgody na banerze cookies (są zanonimizowane - maskowanie IP).

## 5. Twoje prawa (RODO)
Przysługuje Ci prawo do dostępu do swoich danych, sprostowania, ograniczenia przetwarzania, wniesienia sprzeciwu, przenoszenia danych, cofnięcia zgody w dowolnym momencie oraz usunięcia danych („prawo do bycia zapomnianym” - prośby prosimy kierować na kontakt@web2sell.pl). Masz także prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).

## 6. Profilowanie i zautomatyzowane podejmowanie decyzji
Twoje dane osobowe nie będą wykorzystywane do zautomatyzowanego podejmowania decyzji, w tym do profilowania, o którym mowa w art. 22 ust. 1 i 4 RODO.

## 7. Ciasteczka (Cookies) i Pamięć Lokalna (localStorage)
Nasza witryna korzysta z technologii plików cookies oraz pamięci lokalnej (localStorage) w następujący sposób:
- **color-theme (ciasteczko, 365 dni)**: Niezbędne (preferencyjne) – zapamiętuje wybraną paletę kolorów witryny.
- **theme (localStorage, trwałe)**: Niezbędne (preferencyjne) – zapamiętuje wybór motywu jasnego/ciemnego.
- **cookie-consent (localStorage, trwałe)**: Niezbędne (techniczne) – zapamiętuje zgodę na analityczne pliki cookies.
- **contact_form_sent (localStorage, 2 minuty)**: Niezbędne (bezpieczeństwo) – zapobiega spamowaniu formularza.
- **_ga* (cookies, do 2 lat)**: Opcjonalne (wymaga zgody) – analityczne pliki cookies Google Analytics.
`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
