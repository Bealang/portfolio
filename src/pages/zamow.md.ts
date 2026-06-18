export async function GET() {
  const markdown = `# Zamów bezpłatną wycenę - web2sell

Szukasz profesjonalnego wykonawcy strony internetowej w Myślenicach, Krakowie lub okolicach? Przygotujemy dla Ciebie bezpłatną, niezobowiązującą wycenę w ciągu maksymalnie 24 godzin.

## Jak zamówić wycenę?

W celu otrzymania wyceny prześlij wiadomość przez formularz kontaktowy dostępny na naszej stronie pod adresem: https://web2sell.pl/zamow lub bezpośrednio skontaktuj się telefonicznie.

### Informacje przydatne do wyceny:
1. **Nazwa i branża Twojej firmy**.
2. **Wybrany pakiet** (OnePage, Multi-Page, Wizytówka + CMS, System Dedykowany) – jeśli nie wiesz, jaki wybrać, opisz swoje cele, a my doradzimy.
3. **Funkcjonalności**, których potrzebujesz (np. formularz kontaktowy, galeria projektów, blog, system rezerwacji terminów, integracje z zewnętrznymi API).
4. **Materiały, które posiadasz** (np. logo, teksty, zdjęcia, stara strona internetowa do przebudowy).
5. **Preferowana kolorystyka i styl** (np. ciemny, elegancki, minimalistyczny, nowoczesny).

## Kontakt bezpośredni

- **Telefon**: +48 530 315 860
- **E-mail / Formularz**: Dostępny na https://web2sell.pl/zamow
`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
