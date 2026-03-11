// Początkowo chciałem zrobić aby chatGPT odpowiadał na te pytania i prawie działało (pokazywał się błąd 429 niewystarczająca ilość tokenów w konsoli) ale okazało się że trzeba doładować tokeny za pieniądze aby odpowiadał :/ Tak to działa on dosyć słabo niestety no ale nic nie poradzę :>

let waitingForGift = false;

        // Funkcja do generowania odpowiedzi Mikołaja
        function getSantaResponse(message) {
            // Słowa kluczowe i odpowiedzi
            const responses = [
                {
                    keywords: ['prezent', 'podarunek', 'upominek', 'co dostanę', 'co chcesz dostać', 'dostać', 'dostanę', 'choinkę'],
                    response: [
                        'A co byś chciał dostać? Ho ho ho!',
                        'Prezenty to moja specjalność! A co byś chciał znaleźć pod choinką?',
                        'Hmm, prezent... A co byś chciał dostać, grzeczny chłopczyku/dziewczynko?',
                        'Co marzy ci się na Święta? Ho ho ho!',
                        'Zbliżają się Święta! Co chciałbyś znaleźć pod choinką?',
                        'Na pewno dostaniesz coś wyjątkowego, ale co dokładnie? Ho ho ho!',
                        'Prezent już jest w drodze! Czekaj na Wigilię!',
                        'Ho ho ho! Mikołaj zawsze znajdzie coś idealnego dla Ciebie!',
                        'Czekaj na Wigilię, prezenty czekają na Ciebie!'
                    ]
                },
                {
                    keywords: ['list', 'życzenia', 'list do mikołaja'],
                    response: [
                        'Listy do mnie przychodzą codziennie! Co chciałbyś napisać w swoim liście?',
                        'Mam mnóstwo list! Jakie życzenia masz dla mnie?',
                        'Twoje życzenia są dla mnie bardzo ważne! Co chcesz napisać w liście?',
                        'Listy do Mikołaja są najlepsze! Co chciałbyś w nim zawrzeć?',
                        'Przesyłam Ci uściski z Laponii! Co chciałbyś zawrzeć w liście?',
                        'Listy do Mikołaja są pełne marzeń! Jakie masz marzenie na Święta?',
                        'Otrzymuję coraz więcej listów! Co chciałbyś napisać do Mikołaja?',
                        'Zbieram wszystkie listy! Czym mogę Ci pomóc, drogi przyjacielu?'
                    ]
                },
                {
                    keywords: ['grzeczny', 'niegrzeczny', 'kara', 'nagroda', 'będę grzeczny'],
                    response: [
                        'Hmm, sprawdzę, czy byłeś grzeczny w tym roku! :)',
                        'Chyba muszę sprawdzić Twój raport! Będziesz miał prezent, czy węgiel? Ho ho ho!',
                        'A jak myślisz? Czy byłeś grzeczny w tym roku?',
                        'Mikołaj widzi wszystko, ale każdy zasługuje na drugą szansę! Ho ho ho!',
                        'W tym roku może dostaniesz coś specjalnego, ale najpierw muszę sprawdzić, czy byłeś grzeczny.',
                        'Sprawdzam teraz Twoją listę grzeczności! Czy zasłużyłeś na prezent?',
                        'Jestem pewny, że w tym roku byłeś grzeczny! Ho ho ho!',
                        'Pamiętaj, że Mikołaj ocenia cały rok, ale każdy ma szansę na prezent!'
                    ]
                },
                {
                    keywords: ['ho ho ho', 'mikołaj', 'wesołych świąt', 'hej', 'cześć', 'siema'],
                    response: [
                        'Ho ho ho! Wesołych Świąt, drogi przyjacielu!',
                        'Ho ho ho! Jak się czujesz w Święta?',
                        'Mikołaj zawsze ma czas na rozmowy! Ho ho ho!',
                        'Ho ho ho! Jakie masz życzenia na Święta?',
                        'Wesołych Świąt! Czy czekasz na prezenty? Ho ho ho!',
                        'Ho ho ho! Dziękuję, że się do mnie odezwałeś!',
                        'Jestem tu, by rozświetlić Twoje Święta! Ho ho ho!',
                        'Ho ho ho! Święta są wspaniałe, prawda?'
                    ]
                },
                {
                    keywords: ['gdzie', 'prezent', 'kiedy', 'prezentu'],
                    response: [
                        'Oj, Twój prezent już jest w drodze, ale musisz poczekać na Wigilię!',
                        'Prezent jest już w drodze, musisz jeszcze tylko poczekać trochę!',
                        'Prezent czeka na Ciebie! Ho ho ho! Spodziewaj się go w Wigilię!',
                        'Czekaj na Wigilię, a prezent się pojawi! Ho ho ho!',
                        'Twój prezent jest już zapakowany! Musisz poczekać na Święta!',
                        'Ho ho ho! Prezent już jest w drodze! Będzie czekał na Ciebie w Wigilię!',
                        'Poczekaj, a prezent na pewno dotrze na czas!',
                        'Nie martw się, twój prezent na pewno przyjedzie na Święta!'
                    ]
                },
                {
                    keywords: ['życzenia', 'szczęśliwego', 'nowego roku', 'życzenia noworoczne'],
                    response: [
                        'Życzę Ci dużo szczęścia, zdrowia i prezentów! Wesołych Świąt!',
                        'Niech Nowy Rok przyniesie Ci same radości! Wesołych Świąt!',
                        'Szczęśliwego Nowego Roku! Ho ho ho!',
                        'Dużo radości, prezentów i spełnienia marzeń! Wesołych Świąt!',
                        'W Nowym Roku życzę Ci samych sukcesów i cudownych chwil!',
                        'Szczęśliwego Nowego Roku! Oby był jeszcze lepszy niż ten!',
                        'Niech każdy dzień w Nowym Roku będzie pełen radości i szczęścia!',
                        'Nowy Rok to czas nowych początków! Wesołych Świąt i szczęśliwego Nowego Roku!'
                    ]
                },
                {
                    keywords: ['święta', 'wigilia', 'choinka', 'kolacja', 'świąteczne'],
                    response: [
                        'Święta to magiczny czas! Co najbardziej lubisz w Wigilii?',
                        'Czy już masz przygotowaną choinkę? Ho ho ho!',
                        'A co lubisz najbardziej na kolacji wigilijnej? Pamiętaj, że Mikołaj uwielbia pierogi!',
                        'Co robisz na Święta? Spędzasz je z rodziną czy z przyjaciółmi?',
                        'Święta to najpiękniejszy czas w roku! Jak je spędzasz?',
                        'Pamiętaj o kolacji wigilijnej! Warto zostawić miejsce na dodatkowy kawałek ciasta!',
                        'Mam nadzieję, że choinka już ozdobiona i świeci w Twoim domu!',
                        'Choinka to najważniejszy element Świąt! Jakie ozdoby masz na swojej?'
                    ]
                },
                {
                    keywords: ['węgiel', 'kara', 'niegrzeczny', 'ruzga'],
                    response: [
                        'Oj, chyba w tym roku będziesz musiał się trochę poprawić! Ho ho ho!',
                        'Nie martw się, każdy zasługuje na drugą szansę! Może w przyszłym roku będziesz grzeczny?',
                        'Mikołaj jest sprawiedliwy, ale każdy zasługuje na drugą szansę! Ho ho ho!',
                        'Nie możesz się poddawać, zawsze możesz poprawić swoje zachowanie! Ho ho ho!',
                        'Mikołaj nie daje węgla, tylko szansę na poprawę! Bądź grzeczny w przyszłym roku!',
                        'Węgiel to tylko symbol, ale pamiętaj – na przyszłość bądź grzeczny!',
                        'Węgiel to tylko żart! Ale pamiętaj, że Mikołaj ceni grzeczność!',
                        'Nie przejmuj się, każdy ma prawo do błędów! Ho ho ho!'
                    ]
                },
                {
                    keywords: ['zabawki', 'dzieci', 'prezenty dla dzieci'],
                    response: [
                        'Zabawki dla dzieci to moja specjalność! Co najbardziej chciałbyś dostać?',
                        'A jakie zabawki chciałbyś znaleźć pod choinką? Ho ho ho!',
                        'Dla dzieci zawsze mam najfajniejsze prezenty! Co byś chciał dostać?',
                        'Prezenty dla dzieci to moja radość! Co byś chciał znaleźć w swojej skarpecie?',
                        'Zabawki! Hmm, może coś kreatywnego? Jakie prezenty ci się podobają?',
                        'Dzieci zawsze zasługują na najpiękniejsze zabawki! Co chciałbyś dostać?',
                        'Mikołaj uwielbia wybierać zabawki dla dzieci! Co najbardziej Cię interesuje?',
                        'Zabawki i radość! To moje ulubione połączenie! Co chciałbyś dostać na Święta?'
                    ]
                },
                {
                    keywords: ['ładną', 'moja choinka'],
                    response: [
                        'Jeszcze jej nie widziałem bo nie byłem w twoim domu, ale pewnie będzie śliczna!'
                    ]
                },
                {
                    keywords: ['wiesz'],
                    response: [
                        'Nie kłóć się ze mną, bo ruzgę dostaniesz! Nie wiem!'
                    ]
                },
                {
                    keywords: ['mija'],
                    response: [
                        'Mija mi bardzo dobrze, a tobie!',
                        'Nooo. Mi dobrze mija! Ho ho ho...'
                    ]
                },
                {
                    keywords: ['prawda', 'tak', 'oczywiście', 'oczywiscie'],
                    response: [
                        'Super! A co byś chciał dostać pod choinkę?'
                    ]
                },
                {
                    keywords: ['nie', 'nigdy',],
                    response: [
                        'Uważaj sobie, bo ruzgę pod choinkę dostaniesz!',
                        'Koleżko, uważaj sobie!'
                    ]
                },
            ];

            // Sprawdzenie, czy czekamy na odpowiedź o prezencie
            if (waitingForGift) {
                waitingForGift = false; // Po odpowiedzi użytkownika, przestajemy czekać
                return 'Da się załatwić! Ho ho ho!';
            }

            // Sprawdzenie, czy wiadomość zawiera którekolwiek słowo kluczowe
            for (const item of responses) {
                for (const keyword of item.keywords) {
                    if (message.toLowerCase().includes(keyword)) {
                        // Jeśli słowo kluczowe pasuje, wybieramy losową odpowiedź
                        const randomResponse = item.response[Math.floor(Math.random() * item.response.length)];
                        
                        // Jeśli to słowo kluczowe dotyczy prezentu, przełączamy stan
                        if (item.keywords.includes('prezent') || item.keywords.includes('podarunek') || item.keywords.includes('prawda')) {
                            waitingForGift = true; // Oczekujemy na odpowiedź o prezencie
                        }

                        return randomResponse;
                    }
                }
            }

            const noKeywordResponses = [
                'Mam już swoje lata i mam niedosłuch, mógłbyś powtórzyć i napisać bardziej dokładnie?',
                'Ho ho ho! Nie zrozumiałem do końca, możesz spróbować jeszcze raz?',
                'Hmm, chyba muszę założyć moje okulary! Możesz napisać dokładniej?',
                'Ooo, coś mi tu umknęło! Spróbuj jeszcze raz, proszę.',
                'Ho ho ho! Coś mi się pomieszało, możesz doprecyzować?',
                'Niestety, nie rozumiem. Może napiszesz dokładniej? Ho ho ho!',
                'Oj, chyba mam zły dzień! Możesz powtórzyć swoją wiadomość?',
                'Nie wiem, co masz na myśli... Może spróbujesz z nowym pytaniem?',
                'Mikołaj czasem się gubi, powtórz proszę, co chciałeś powiedzieć!',
                'Ho ho ho! Może to kwestia mojego zmęczenia, powtórz jeszcze raz!',
                'Mógłbyś napisać jaśniej? Mikołaj nie zawsze wszystko rozumie od razu!'
            ];
            
            return noKeywordResponses[Math.floor(Math.random() * noKeywordResponses.length)];
        }

        // Funkcja do obsługi wysyłania wiadomości
        document.getElementById('sendButton').addEventListener('click', () => {
            const userInput = document.getElementById('userInput').value;

            if (userInput) {
                // Dodaj wiadomość użytkownika do czatu
                const userMessageDiv = document.createElement('div');
                userMessageDiv.classList.add('message', 'user-message');
                userMessageDiv.textContent = userInput;
                document.getElementById('chatbot__wiadomosci').appendChild(userMessageDiv);

                // Wyślij zapytanie do chatbota Mikołaja
                const botResponse = getSantaResponse(userInput);

                // Dodaj odpowiedź bota do czatu
                const botMessageDiv = document.createElement('div');
                botMessageDiv.classList.add('message', 'bot-message');
                botMessageDiv.textContent = botResponse;
                document.getElementById('chatbot__wiadomosci').appendChild(botMessageDiv);

                // Przewiń czat na dół
                document.getElementById('chatbot__wiadomosci').scrollTop = document.getElementById('chatbot__wiadomosci').scrollHeight;

                // Wyczyść input
                document.getElementById('userInput').value = '';
            }
        });