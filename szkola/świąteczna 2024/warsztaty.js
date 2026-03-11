// ten skrypt akurat robiłem sam
const przepisy = [
    { opis: `
        <h3 >Aby przygotować danie, potrzeba: </h3>
        <ul>
            <li>1kg buraków</li>
            <li>40-50dag kwaśnych jabłek</li>
            <li>4 cebule</li>
            <li>Kawałek selera</li>
            <li>4-5 suszonych grzybów</li>
            <li>3-4 ząbki czosnku</li>
            <li>listek laurowy</li>
            <li>Kilka ziaren ziela angielskiego</li>
            <li>Kilka ziaren jałowca</li>
            <li>2-3 goździki</li>
            <li>Sól, cukier, pieprz</li>
        </ul>
        <h3>Przygotowanie:</h3>
        <p>Buraki umyć, włożyć do wrzącej wody, ugotować do miękkości. Grzybki umyć, zalać zimną wodą, osolić, mastawić do gotowania. Po upływie około pół godziny dodać pokrojony seler i cebulę. Ugotowane grzybki odcedzić z wywaru, drobno posiekać. Ostudzone buraki obrać, utrzeć na tarce, osolić , zalac wrzącą wodą, zagotować. Jabłka umyć, obrać, utrzeć na tarce z małymi otworami. Gdy zawrze - odstawić. Wlać wywar z grzybów i warzyw. Czosnek posiekać i rozetreć z solą, dodać do zupy. Pozostawić na około 0,5-1 godziny. Przed podaniem barszcz przecedzić przez gęste sito. Podawać w filiżankach z dodatkiem knyszów albo na talerzach - z uszkami nadziewanymi grzybami. Barszcz powinien być bardzo gorący.</p>
    ` },
    { opis: `
        <h3>Aby przygotować danie, potrzeba: </h3>
        <ul>
            <li>0,5kg warzyw mieszanych (marchew, pietruszka, seler, por)</li>
            <li>3 cebule</li>
            <li>4 - 5 dag suszonych grzybów</li>
            <li>1,5 łyżki masła</li>
            <li>sól, pieprz</li>
            <li>4 łyżki posiekanej, zielonej pietruszki</li>
        </ul>
        <h3>Przygotowanie:</h3>
        <p>Grzyby umyć, zalać zimną przegotowaną wodą i pozostawić na kilka godzin, ugotować w tej samej wodzie, w której się moczyły. Warzywa obrać, opłykać, pokrajać na kawałki i lekko poddusić z dodatkiem połowy łyżki masła. Cebulę dodać do duszących się warzyw. Podduszone warzywa zalać litrem wrzącej dowy, osolić, ugotować do miękkości. Grzyby odcedzić z wywaru i drobniutko posiekać. Wywar z warzyw przecedzić, połączyć z wywarem z grzybów, dodać grzybki i masło, przyprawić do smaku solą i pieprzem. Zupę grzybową podawaną z łazankami można wzbogacić dodatkiem śmietany.</p>
    ` },
    { opis: `
        <h3>Aby przygotować danie, potrzeba: </h3>
        <ul>
            <li>20 dag mąki</li>
            <li>1 żółtko</li>
            <li>1 łyżeczka masła</li>
            <li>10 dag suszonych grzybów</li>
            <li>2-3 cebule</li>
            <li>3 łyżki oliwy</li>
            <li>2 łyżki tartej bułki</li>
            <li>2 łyżki śmietany</li>
            <li>sól, pieprz</li>
        </ul>
        <h3>Przygotowanie:</h3>
        <p>Grzyby umyć, zalać wodą, pozostawić na godzinę, a następnie ugotować do miękkości w tej wodzie, w której się moczyły. Po ostudzeniu drobno posiekać lub zemleć w maszynce do mięsa. Cebulę pokrajać w jak najdrobniejsza kostkę, osolić, wsypać na patelnie, podgrzać, mieszając od czasu do czasu. Gdy cebula zmięknie i zacznie żółknąć, dodać oliwę, lub masło, zrumienić na jasnozłoty kolor. Dodać grzyby i śmietanę, wymieszać, dusić chwilę, wsypać tartą bułkę. Gdyby masa była zbyt gęsta, dodać nieco wywaru z grzybów. Przyprawić do smaku solą i pieprzem. Mąkę przesiać, dodać masło, żółtko i nieco wody, zarobić noże, zagnieść elastyczne ciasto pierogowe, wyrobić ręką, cieniutko rozwałkować, lekko podsypując mąką. Placek pokrajać w kwadraciki o boku 3-4 cm. Na każdy kwadracik nakładać nadzienie z grzybów, skleić boki, formując trójkąt. Kąty podstawy trójkąta połączyć, przyciskając skleić. Układać na stolnicy lub desce posypanej mąką. Gotować, wkładając do wrzącej osolonej wody. Odcedzić. Wyłożyć na półmisek, skropić stopionym masłem. Gorące uszka wkładac do barszczu i odrazu podawać (w każdej porcji powinno być 8 - 10 uszek)</p>
        ` },
    { opis: `
        <h3>Aby przygotować danie, potrzeba: </h3>
        <ul>
            <li>20 dag suszonych śliwek</li>
            <li>15 dag suszonych jabłek</li>
            <li>10 dag cukru</li>
            <li>3 szklanki wody</li>
            <li>2-3 goździki</li>
            <li>Kawałek skórki z cytryny bądź pomarańczy</li>
        </ul>
        <h3>Przygotowanie:</h3>
        <p>Suszone owoce umyć, namoczyć w zimnej wodzie. Woda powinna przykryć owoce. Namoczone jabłka trzeba przycisnąć spodeczkiem. Gdy zmiękną gotować w tej samej wodzie, w której się moczyły, z dodatkiem cukru i przypraw.</p>
        ` },
    { opis: `
        <h3>Aby przygotować danie, potrzeba: </h3>
        <ul>
            <li>1 szklanka fasoli "Jasiek"</li>
            <li>2 łyżki masła</li>
            <li>2 łyżki tartej bułki</li>
        </ul>
        <h3>Przygotowanie:</h3>
        <p>Fasole przebrać, umyć, zalać trzema składnikami ostudzonej przegotowanej wody, pozostawić na noc. Następnego dnia ugotować w tej samej wodzie, w której się moczyła. Pod koniec gotowania osolić. Tartą bułkę zrumienić na suchej patelni na złoty kolor. MAsło stopić. ugotowaną fasolę odcedzić, wyłożyć na półmisek, posypać zrumienioną bułeczką, polać stopionym masłem. Półmisek warto ozdobić listkami pietruszki czy jarmużu. Podawać jako jedno z przekąsek wigilijnych na </p>
    ` },
    { opis: `
        <h3 >Aby przygotować danie, potrzeba: </h3>
        <ul>
            <p>Ciasto</p>
            <li>1/2 kostki margaryny</li>
            <li>2 jajka</li>
            <li>1/2 szklanki cukru</li>
            <li>3/4 szklanki mąki</li>
            <li>1/2 szklanki mąki ziemniaczanej</li>
            <li>1 łyżeczka proszku do pieczenia</li>
            <li>Aromat śmietankowy</li>
            <p>Ser</p>
            <li>1kg sera</li>
            <li>500g śmietany 30%</li>
            <li>2 budynie śmietankowe</li>
            <li>8 jajek</li>
            <li>1 opakowanie cukru waniliowego</li>
            <li>1 szklanka cukru</li>
            <li>Aromat waniliowy</li>
        </ul>
        <h3 >Przygotowanie:</h3>
        <p>Margarynę ucieramy z cukrem na puszystą masę. Dodajemy jajka, mąkę ziemniaczaną i mąkę wymieszaną z proszkiem do pieczenia. Wylewamy na brytwanę i podpiekamy spód</p>
        <p>Do sera dodajemy 1/2 szklanki cukru i cukier waniliowy, mieszamy. Białka oddzielamy od żółtek i ubijamy na sztywno z 1 szklaneczki cukru. Osobno wbijamy śmietanę. Do masy serowej dodajemy po jednym żółtku i miksujemy, dalej dodajemy budyniue, piane z białek i ubitą śmietanę.</p>
        <p>Całość wylewamy na podpieczony blat i zostawiamy do nagrzanego piekarnika do 180 stopni, i pieczemy 60 min. Po tym czasie sernik przykryć folią i piec 20 min w temperaturze 100 stopni.</p>
        ` },
    { opis: `Opis Makowca` },
    { opis: `Opis Klusek z makiem` },
    { opis: `<p>Link do filmiku: </p>
        <center><iframe width="960" height="630" src="https://www.youtube.com/embed/l4O7Cy3xCn4?si=1kwmTrqEsRL4EgMU" title="Papierowe gwiazdy tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>
        `}
];
function otworz(nazwaPotrawy) {
    const opisDiv = document.getElementById("warsztat__opis");

    switch (nazwaPotrawy) {
        case "Barszcz z uszkami":
            opisDiv.innerHTML = `<h2>${nazwaPotrawy}</h2>${przepisy[0].opis}`;
            break;
        case "Zupa z grzybami":
            opisDiv.innerHTML = `<h2>${nazwaPotrawy}</h2><p>${przepisy[1].opis}</p>`;
            break;
        case "Uszka z grzybami":
            opisDiv.innerHTML = `<h2>${nazwaPotrawy}</h2><p>${przepisy[2].opis}</p>`;
            break;
        case "Kompot z suszu":
            opisDiv.innerHTML = `<h2>${nazwaPotrawy}</h2><p>${przepisy[3].opis}</p>`;
            break;
        case "Fasola wigilijna":
            opisDiv.innerHTML = `<h2>${nazwaPotrawy}</h2><p>${przepisy[4].opis}</p>`;
            break;
        case "Sernik":
            opisDiv.innerHTML = `<h2>${nazwaPotrawy}</h2><p>${przepisy[5].opis}</p>`;
            break;
        case "Makowiec":
            opisDiv.innerHTML = `<h2>${nazwaPotrawy}</h2><p>${przepisy[6].opis}</p>`;
            break;
        case "Kluski z makiem":
            opisDiv.innerHTML = `<h2>${nazwaPotrawy}</h2><p>${przepisy[7].opis}</p>`;
            break;
        case "Papierowe gwiazdy":
            opisDiv.innerHTML = `<h2>${nazwaPotrawy}</h2><p>${przepisy[8].opis}</p>`;
            break;
        default:
            opisDiv.innerHTML = `<h2>${nazwaPotrawy}</h2><p>Niestety, ale narazie pracujemy nad opisem tego przepisu/dekoracji. Wkrótce się pojawi, obiecujemy! </p>`;
    }
}