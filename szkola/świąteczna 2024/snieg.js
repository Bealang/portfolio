const canvas = document.getElementById('snowCanvas');
        const ctx = canvas.getContext('2d');

        const DEFAULT_FLAKE_COUNT = 70; // Domyślna liczba płatków
        let flakeCount = DEFAULT_FLAKE_COUNT;

        // Odczytaj ustawienia z localStorage
        const storedFlakeCount = localStorage.getItem('flakeCount');
        if (storedFlakeCount) {
            flakeCount = parseInt(storedFlakeCount);
        }

        // Ustaw wartość pola input na podstawie localStorage
        document.getElementById('flakeCount').value = flakeCount;

        // Dopasowanie wielkości canvasu do rozmiaru całej strony
        function resizeCanvas() {
            const fullHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight,
                document.body.clientHeight,
                document.documentElement.clientHeight
            );

            canvas.width = window.innerWidth;
            canvas.height = fullHeight;
        }
        resizeCanvas();

        const snowflakes = [];

        // Klasa płatka śniegu
        class Snowflake {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 4 + 1;
                this.speedY = Math.random() * 1 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX;

                if (this.y > canvas.height) {
                    this.y = -this.radius;
                    this.x = Math.random() * canvas.width;
                }

                if (this.x > canvas.width || this.x < 0) {
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = "white";
                ctx.fill();
            }
        }

        // Tworzenie płatków śniegu
        function createSnowflakes(count) {
            snowflakes.length = 0; // Wyczyść istniejące płatki
            for (let i = 0; i < count; i++) {
                snowflakes.push(new Snowflake());
            }
        }

        // Aktualizacja i rysowanie
        function updateSnowflakes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            snowflakes.forEach(snowflake => {
                snowflake.update();
                snowflake.draw();
            });
        }

        // Pętla animacji
        function animate() {
            updateSnowflakes();
            requestAnimationFrame(animate);
        }

        // Inicjalizacja
        createSnowflakes(flakeCount);
        animate();

        // Obsługa zmiany rozmiaru okna
        window.addEventListener('resize', resizeCanvas);

        // Funkcja obsługująca kliknięcie przycisku "Zastosuj"
        function ustawPlatki() {
            const count = parseInt(document.getElementById('flakeCount').value);
            if (!isNaN(count) && count >= 10 && count <= 500) {
                localStorage.setItem('flakeCount', count); // Zapisz wartość w localStorage
                flakeCount = count;
                createSnowflakes(flakeCount); // Odśwież płatki
            }
        }

        // Funkcja resetująca liczbę płatków
        function resetPlatki() {
            localStorage.removeItem('flakeCount'); // Usuń wartość z localStorage
            flakeCount = DEFAULT_FLAKE_COUNT; // Przywróć domyślną wartość
            document.getElementById('flakeCount').value = flakeCount; // Zaktualizuj pole input
            createSnowflakes(flakeCount); // Odśwież płatki
        }