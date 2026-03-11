function ukryjPrzepis(){
    const przepis = document.getElementById("szczegolowy_przepis");
    const tlo = document.getElementById("rozmyte_tlo");

    // Rozpoczęcie animacji znikania (CSS Transition zajmie 0.4s)
    przepis.style.opacity = 0;
    tlo.style.opacity = 0;

    // Po 400ms (czas trwania transition) ukrywamy elementy, 
    // aby nie blokowały interakcji i wyzerowały stan visibility
    setTimeout(() => {
        przepis.style.visibility = 'hidden';
        tlo.style.visibility = 'hidden';
    }, 400); // Czas musi być zgodny z transition: 0.4s
}

function otworzPrzepis(przepis){
    const szczegolowy = document.getElementById("szczegolowy_przepis");
    const tlo = document.getElementById("rozmyte_tlo");

    // 1. Zmień treść przepisu (Twój kod pozostaje bez zmian)
    switch(przepis){
        case 'uszka':
            document.getElementById("przepis_tytul").innerText = 'Uszka z grzybami'
            document.getElementById("przepis_opis").innerHTML = `
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
            `
        break;
        case 'barszcz':
            document.getElementById("przepis_tytul").innerText = 'Barszcz czerwony';
            document.getElementById("przepis_opis").innerHTML = `
            <h3>Aby przygotować danie, potrzeba: </h3>
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
            `

        break;
        case 'grzybowa':
            document.getElementById("przepis_tytul").innerText = 'Zupa grzybowa';
            document.getElementById("przepis_opis").innerHTML = `
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
            `
        break;
        case 'ryba':
            document.getElementById("przepis_tytul").innerText = 'Smażona ryba';
            document.getElementById("przepis_opis").innerHTML = `
            <h3>Aby przygotować danie, potrzeba: </h3>
                <ul>
                    <li>1kg filetów z ryby morskiej lub słodkowodnej</li>
                    <li>sól, pieprz</li>
                    <li>3 łyżki mąki</li>
                    <li>oliwa lub olej do smażenia</li>
                </ul>
            <h3>Przygotowanie:</h3>
            <p>Dokładnie oczyszzczone filety pokrajać na porcje, otoczyć w przesianej mące, oprószyć pieprzem. Wkładać na patelnię z rozgrzanym tłuszczem, smażyć rumieniąc równomiernie na jasnozloty kolor. Oprószyć solą. Obrumienione ryby wstawić do piekarnika, żeby "doszły" (na kilkanaście minut). Podawać z dodatkiem struganego chrzanu. Na wigilię podaje sie z pieczonymi ziemniakami i kapustą duszoną z grzybami.</p>
            `
        break;
        case 'fasola':
            document.getElementById("przepis_tytul").innerText = 'Fasola';
            document.getElementById("przepis_opis").innerHTML = `
            <h3>Aby przygotować danie, potrzeba: </h3>
                <ul>
                    <li>1 szklanka fasoli "Jasiek"</li>
                    <li>2 łyżki masła</li>
                    <li>2 łyżki tartej bułki</li>
                </ul>
            <h3>Przygotowanie:</h3>
            <p>Fasole przebrać, umyć, zalać trzema składnikami ostudzonej przegotowanej wody, pozostawić na noc. Następnego dnia ugotować w tej samej wodzie, w której się moczyła. Pod koniec gotowania osolić. Tartą bułkę zrumienić na suchej patelni na złoty kolor. MAsło stopić. ugotowaną fasolę odcedzić, wyłożyć na półmisek, posypać zrumienioną bułeczką, polać stopionym masłem. Półmisek warto ozdobić listkami pietruszki czy jarmużu. Podawać jako jedno z przekąsek wigilijnych na </p>
            `
        break;
        case 'kompot':
            document.getElementById("przepis_tytul").innerText = 'Kompot z suszu';
            document.getElementById("przepis_opis").innerHTML = `
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
            `
        break;
        case 'kompots':
            document.getElementById("przepis_tytul").innerText = 'Kompot ze śliwek';
            document.getElementById("przepis_opis").innerHTML = `
            <h3>Aby przygotować danie, potrzeba: </h3>
            <ul>
                <li>30 dag suszonych śliwek</li>
                <li>15-20dag cukru</li>
                <li>kawałek skórki cytrynowej</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <p>Suszone śliwki umyć starannie, zalać chłodną  przegotowaną wodą, pozostawić na noc. Następnego dnia dodać cukier i starannie umytą skórkę cytrynową. Ugotować do miękkości, odstawić, ostudzić, oziębić w lodówce. Podawać na deser po wigilii.</p>
            `
        break;
        case 'jarzynowa':
            document.getElementById("przepis_tytul").innerText = 'Sałatka jarzynowa';
            document.getElementById("przepis_opis").innerHTML = `
            <h3>Aby przygotować danie, potrzeba: </h3>
            <ul>
                <li>3 ziemniaki</li>
                <li>2 marchewki</li>
                <li>1 pietruszka</li>
                <li>4 jajkas</li>
                <li>3 ogórki kiszone</li>
                <li>1/4 cebuli</li>
                <li>1/2 jabłka</li>
                <li>1 mała puszka zielonego groszku</li>
                <li>1 szklanka majonezu</li>
                <li>1 łyżeczka musztardy</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <p>Ziemniaki, marchewkę i pietruszkę umyć (nie obierać), włożyć do garnka, zalać wodą, posolić i gotować pod przykryciem do miękkości, przez ok. 40 minut.</p>
            <p>Odcedzić, ostudzić, obrać ze skórek i pokroić w kosteczkę, włożyć do dużej miski.</p>
            <p>Jajka ugotować na twardo (ok. 5 - 6 minut licząc od zagotowania się wody), pokroić w kosteczkę, dodać do miski z jarzynami.</p>
            <p>Ogórki, cebulę oraz jabłko obrać i pokroić w kosteczkę, dodać do miski. Wsypać dobrze odsączony i osuszony groszek.</p>
            <p>Całość doprawić solą (około 1/2 łyżeczki) oraz zmielonym czarnym pieprzem (około 1/2 łyżeczki). Wymieszać z majonezem (kilka łyżek zostawić do dekoracji) oraz musztardą.</p>
            <p>Przełożyć do salaterki i pokryć odłożonym majonezem, udekorować wedle uznania.</p>
            `
        break;
        case 'sharma':
            document.getElementById("przepis_tytul").innerText = 'Sałatka "Sharma"';
            document.getElementById("przepis_opis").innerHTML = `
            <h3>Aby przygotować danie, potrzeba: </h3>
            <ul>
                <li>2 łyżki oleju</li>
                <li>1 podwójna pierś z kurczaka razem z polędwiczkami</li>
                <li>1 mała cebula</li>
                <li>puszka kukurydzy konserwowej</li>
                <li>4 duże ogórki konserwowe</li>
                <li>4 duże łyżki majonezu</li>
                <li>ok. 5 dużych łyżek ketchupu</li>
                <li>1/2 główki kapusty pekińskiej lub sałaty lodowej czy strzępiastej</li>
                <li>1 łyżka przyprawy do gyros – sharma</li>
                <li>sól i pieprz</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <p>Filet z kurczaka oczyść i pokrój w niedużą kostkę. Wymieszaj z przyprawą do grosa, posól, popieprz i smaż na rozgrzanej patelni z olejem do mocnego zrumienienia. Odstaw do ostygnięcia.</p>
            <p>Cebulę i ogórki pokrój w kostkę</p>
            <p>Do dużej, najlepiej szklanej miski dodaj kolejno: kurczaka, cebulę, polej połową ketchupu, ogórki, resztę ketchupu, odsączoną kukurydzę, majonez a na koniec pokrojoną kapustę pekińską lub sałatę. Na wierzchu możesz posypać odrobiną przyprawy kebab – sharma.</p>
            `
        break;
        case 'piernik':
            document.getElementById("przepis_tytul").innerText = 'Ciasto [!!!] piernik"';
            document.getElementById("przepis_opis").innerHTML = `
            <h3>Aby przygotować danie, potrzeba: </h3>
            <ul>
                <li>2 szklanki mąki pszennej</li>
                <li>Szklanka cukru</li>
                <li>1/2 szklanki oleju</li>
                <li>1/2 szklanki mleka</li>
                <li>3 jajka</li>
                <li>2 łyżki ciemnego kakao</li>
                <li>2 łyżeczki przyprawy kuchennej</li>
                <li>1 łyżka cukru waniliowego</li>
                <li>1 czubata sody</li>
                <li>3 łyżki wody</li>
                <li>3 łyżki cukru pudru</li>
                <li>3 łyżki ciemnego kako</li>
                <li>100g masła</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <p>Składniki ciasta miksujemy na gładką masę, wlewamy ciasto do foremki do piekarnika na 180 stopni przez 50-60minut do suchego patyczka</p>
            <p>Polewa: Do rondelka wlewamy wodę, rozpuszczamy w niej cukier. Dodajemy pokrojone masło i rozpuszczamy na małym ogniu i wsypujemy kako. Przestudzić i polać na gotowe ciasto</p>
            `
        break;
        case 'piernik':
            document.getElementById("przepis_tytul").innerText = 'Ciasto [!!!] piernik"';
            document.getElementById("przepis_opis").innerHTML = `
            <h3>Aby przygotować danie, potrzeba: </h3>
            <ul>
                <li>2 szklanki mąki pszennej</li>
                <li>Szklanka cukru</li>
                <li>1/2 szklanki oleju</li>
                <li>1/2 szklanki mleka</li>
                <li>3 jajka</li>
                <li>2 łyżki ciemnego kakao</li>
                <li>2 łyżeczki przyprawy kuchennej</li>
                <li>1 łyżka cukru waniliowego</li>
                <li>1 czubata sody</li>
                <li>3 łyżki wody</li>
                <li>3 łyżki cukru pudru</li>
                <li>3 łyżki ciemnego kako</li>
                <li>100g masła</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <p>Składniki ciasta miksujemy na gładką masę, wlewamy ciasto do foremki do piekarnika na 180 stopni przez 50-60minut do suchego patyczka</p>
            <p>Polewa: Do rondelka wlewamy wodę, rozpuszczamy w niej cukier. Dodajemy pokrojone masło i rozpuszczamy na małym ogniu i wsypujemy kako. Przestudzić i polać na gotowe ciasto</p>
            `
        break;
        case 'sernik':
            document.getElementById("przepis_tytul").innerText = 'Sernik';
            document.getElementById("przepis_opis").innerHTML = `
            <h3>Aby przygotować danie, potrzeba: </h3>
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
            <h3>Przygotowanie:</h3>
            <p>Margarynę ucieramy z cukrem na puszystą masę. Dodajemy jajka, mąkę ziemniaczaną i mąkę wymieszaną z proszkiem do pieczenia. Wylewamy na brytwanę i podpiekamy spód</p>
            <p>Do sera dodajemy 1/2 szklanki cukru i cukier waniliowy, mieszamy. Białka oddzielamy od żółtek i ubijamy na sztywno z 1 szklaneczki cukru. Osobno wbijamy śmietanę. Do masy serowej dodajemy po jednym żółtku i miksujemy, dalej dodajemy budyniue, piane z białek i ubitą śmietanę.</p>
            <p>Całość wylewamy na podpieczony blat i zostawiamy do nagrzanego piekarnika do 180 stopni, i pieczemy 60 min. Po tym czasie sernik przykryć folią i piec 20 min w temperaturze 100 stopni.</p>
            `
        break;
        case 'karmelowiec':
            document.getElementById("przepis_tytul").innerText = 'Karmelowiec 3-bit';
            document.getElementById("przepis_opis").innerHTML = `
            <h3>Aby przygotować danie, potrzeba: </h3>
            <ul>
                <p>Biszkopt</p>
                <li>5 jajek</li>
                <li>3/4 szklanki mąki pszennej</li>
                <li>cukier drobny 3/4 szklanki</li>
                <li>proszek do pieczenia 1 łyżeczka</li>
                <li>gotowa masa krówkowa 1 puszka</li>
                <li>śmietana kremówka 500 ml</li>
                <li>śmietan fix 2 torebki</li>
                <li>cukier puder 2 łyżki</li>
                <li>gorzka czekolada 100 g</li>
                <p>Masa budyniowa</p>
                <li>mleko 1/2 litra</li>
                <li>masło 1/2 kostki</li>
                <li>cukier drobny 5 łyżek</li>
                <li>cukier waniliowy 16 g</li>
                <li>krakersy 300 g</li>
                <li>budyń śmietankowy 1 sztuka</li>
                <li>herbatniki 250 g</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <p> Białka oddzielamy od żółtek i ubijamy na sztywną pianę dodajemy żółtka miksujemy delikatnie następnie wsypujemy mąkę wymieszaną proszkiem i mieszamy mikserem na najniższych obrotach.Pieczemy przez 30 min w temp 160 * Masa budyniowa:<br>
            Pół litra mleka gotujemy z cukrami w reszcie mleka rozrabiamy budyń gdy mleko się zagotuje,dodajemy budyń i gotujemy ,zostawiamy do ostudzenia.</p>
            <p>Masło ucieramy na puch i dodajemy po łyżce zimnego budyniu ,ja daję do kremu jeszcze parę kropi olejku migdałowego. Zimną śmietanę kremówkę ubijamy na sztywno pod koniec ubijania dodajemy cukier puder i śmietan fiksy.</p>
            <p>Na ostudzony biszkopt wykładamy krem budyniowy przykrywamy krakersami następnie smarujemy karmelem i na to kładziemy herbatniki na wierzch wykładamy ubitą śmietanę</p>
            <p>Trzemy czekoladę na tarce i posypujemy</p>
            <p>Gotowe!</p>
            `
        break;
        default:
            document.getElementById('przepis_tytul').innerText='Błąd 404';
            document.getElementById('przepis_opis').innerText='Nie znaleziono przepisu';
        break;
    }

    // 2. Ustawiamy elementy jako widoczne, zanim zmienimy opacity
    szczegolowy.style.visibility = 'visible';
    tlo.style.visibility = 'visible';

    // 3. Po krótkiej chwili (lub od razu) ustawiamy opacity na 1, 
    // co wywoła płynne przejście dzięki transition w CSS
    setTimeout(() => {
        szczegolowy.style.opacity = 1;
        tlo.style.opacity = 1;
    }, 10); 
}