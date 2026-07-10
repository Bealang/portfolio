---
title: "Fundacja MOCna!"
date: "2026"
color: "#2c5ea9"
accent: "rgba(44, 94, 169, 0.2)"
url: "https://mocnakrakow.pl"
thumbnail: "/assets/project-img/mocna.avif"
thumbnailAlt: "Fundacja MOCna! — strona internetowa kawiarni społecznej w Krakowie"
gallery:
  - "/assets/project-img/mocna_1.avif"
  - "/assets/project-img/mocna_2.avif"
  - "/assets/project-img/mocna_3.avif"
  - "/assets/project-img/mocna_4.avif"
  - "/assets/project-img/mocna_5.avif"
  - "/assets/project-img/mocna_6.avif"
  - "/assets/project-img/mocna_7.avif"
  - "/assets/project-img/mocna_8.avif"
  - "/assets/project-img/mocna_9.avif"
  - "/assets/project-img/mocna_10.avif"
  - "/assets/project-img/mocna_11.avif"
  - "/assets/project-img/mocna_12.avif"
  - "/assets/project-img/mocna_13.avif"
order: 4
---

# O projekcie

Dla Fundacji MOCna! oraz powiązanej z nią kawiarni społecznej stworzyliśmy aplikację, która zdecydowanie wykracza poza standardową wizytówkę. Naszym celem było dostarczenie zaawansowanego narzędzia do obsługi całego zaplecza biznesowego. Zrezygnowaliśmy z gotowych rozwiązań na rzecz autorskich modułów. Napisaliśmy od zera system e-commerce, rezerwacje stolików, sprzedaż biletów oraz dedykowany panel pracowniczy.

Całość zoptymalizowaliśmy tak, by wykręcała najwyższe wyniki **Lighthouse**, bazując na architekturze server-first.

# Co zrobiliśmy?

- **Sklep internetowy z mapą Paczkomatów i płatnościami online** - zbudowaliśmy kompletny koszyk i autorski proces zakupowy z integracją Stripe (obsługa płatności kartą i blikiem) oraz widgetem InPost, dzięki któremu klient wybiera punkt odbioru z interaktywnej mapy bezpośrednio w checkoucie.
- **Panel pracowniczy i automatyzacja maili** - wdrożyliśmy bezpieczne zaplecze z uprawnieniami RBAC; zmiana statusu zamówienia przez obsługę (np. na „w realizacji”) automatycznie generuje i wysyła do klienta maila transakcyjnego przez API Resend.
- **Skanowanie biletów z weryfikacją na żywo** - stworzyliśmy generator biletów eventowych z kodem QR wysyłanym w wiadomości e-mail. Pracownicy kawiarni skanują wejściówki własnymi smartfonami, a system weryfikuje ich ważność w czasie rzeczywistym, dbając o blokadę overbookingu na poziomie bazy danych.
- **Rezerwacje stolików odporne na race conditions** - goście wybierają miejsca na interaktywnej mapie sali. Logika w PostgreSQL (unikalne indeksy kompozytowe) uniemożliwia zdublowanie rezerwacji przy dużym ruchu, a rezygnacja z wizyty odbywa się jednym kliknięciem w mailu za pomocą bezpiecznego tokenu.
- **Architektura wyspowa, bezpieczeństwo i testy** - serwis oparty na Astro serwuje lekki kod HTML, a komponenty Reacta uruchamiają się tylko tam, gdzie niezbędna jest interakcja. Autoryzację sesji oparliśmy na plikach cookie HTTP-Only z podpisem HMAC-SHA256, a stabilność kodu zabezpieczyliśmy testami Playwright i Vitest.

# Technologie

- Astro
- React
- TypeScript
- PostgreSQL
- Drizzle ORM
- Tailwind CSS
- Framer Motion
- Stripe
- InPost
- Resend
- Vercel
- Vercel Blob
- Playwright
- Vitest
