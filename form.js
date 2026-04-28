// ============================================================
// EMAILJS KONFIGURACJA
// Aby formularz działał, musisz uzupełnić poniższe dane:
// 1. Wejdź na https://www.emailjs.com/ i załóż konto (bezpłatne)
// 2. Dodaj usługę e-mail (Service) i zapisz SERVICE_ID
// 3. Utwórz szablon wiadomości (Template) i zapisz TEMPLATE_ID
//    Zmienne w szablonie: {{imie}}, {{nazwisko}}, {{kontakt}}, {{tresc}}
// 4. Skopiuj swój Public Key z zakładki Account > API Keys
// ============================================================
const EMAILJS_PUBLIC_KEY = 'RZK1nw4Vj1eZiggfr';   // ← wpisz swój klucz
const EMAILJS_SERVICE_ID = 'service_dnkrj6g';   // ← wpisz Service ID
const EMAILJS_TEMPLATE_ID = 'template_h5b0n9s';  // ← wpisz Template ID

emailjs.init(EMAILJS_PUBLIC_KEY);

// ─── Elementy DOM ────────────────────────────────────────────
const form = document.getElementById('kontakt__form');
const submitBtn = document.getElementById('form__submit');
const btnText = submitBtn?.querySelector('.btn__text');
const btnIcon = submitBtn?.querySelector('.btn__icon');
const btnLoading = submitBtn?.querySelector('.btn__loading');
const notification = document.getElementById('form__notification');
const notifIcon = notification?.querySelector('.notification__icon');
const notifText = notification?.querySelector('.notification__text');

// ─── Walidacja pól ───────────────────────────────────────────
function showError(fieldId, message) {
    const el = document.getElementById(fieldId + '__error');
    const input = document.getElementById(fieldId) || document.querySelector('[name="' + fieldId + '"]');
    if (el) {
        el.textContent = message;
        el.classList.add('visible');
    }
    if (input) input.classList.add('input--error');
}

function clearError(fieldId) {
    const el = document.getElementById(fieldId + '__error');
    const input = document.getElementById(fieldId) || document.querySelector('[name="' + fieldId + '"]');
    if (el) {
        el.textContent = '';
        el.classList.remove('visible');
    }
    if (input) input.classList.remove('input--error');
}

function validateForm() {
    let valid = true;

    // Imię
    const imie = document.getElementById('imie').value.trim();
    if (!imie) {
        showError('imie', 'Imię jest wymagane.');
        valid = false;
    } else {
        clearError('imie');
    }

    // Nazwisko
    const nazwisko = document.getElementById('nazwisko').value.trim();
    if (!nazwisko) {
        showError('nazwisko', 'Nazwisko jest wymagane.');
        valid = false;
    } else {
        clearError('nazwisko');
    }

    // Kontakt (Adres e-mail)
    const kontakt = document.getElementById('kontakt_info').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!kontakt) {
        showError('kontakt', 'Podaj adres e-mail.');
        valid = false;
    } else if (!emailRegex.test(kontakt)) {
        showError('kontakt', 'Podaj poprawny adres e-mail.');
        valid = false;
    } else {
        clearError('kontakt');
    }

    // Treść
    const tresc = document.getElementById('tresc').value.trim();
    if (!tresc || tresc.length < 10) {
        showError('tresc', 'Wpisz wiadomość (min. 10 znaków).');
        valid = false;
    } else {
        clearError('tresc');
    }

    // RODO
    const rodo = document.getElementById('rodo').checked;
    if (!rodo) {
        showError('rodo', 'Wymagana zgoda na przetwarzanie danych.');
        valid = false;
    } else {
        clearError('rodo');
    }

    return valid;
}

// ─── Resetowanie błędów na bieżąco ───────────────────────────
['imie', 'nazwisko', 'kontakt_info', 'tresc'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const errorId = id === 'kontakt_info' ? 'kontakt' : id;
    el.addEventListener('input', () => clearError(errorId));
});
document.getElementById('rodo')?.addEventListener('change', () => clearError('rodo'));

// ─── Powiadomienie ────────────────────────────────────────────
function showNotification(type, message) {
    notification.className = 'form__notification ' + type;
    notifIcon.className = 'notification__icon fa-solid ' + (type === 'success' ? 'fa-check-circle' : 'fa-circle-exclamation');
    notifText.textContent = message;
    notification.style.display = 'flex';
    notification.classList.add('animate__animated', 'animate__fadeInUp');

    // Auto-ukryj po 6 sekundach
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notification.style.display = 'none';
            notification.classList.remove('animate__animated', 'animate__fadeInUp', 'fade-out');
        }, 400);
    }, 6000);
}

// ─── Wysyłanie formularza ─────────────────────────────────────
function setLoading(loading) {
    if (loading) {
        btnText.style.display = 'none';
        btnIcon.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        submitBtn.disabled = true;
    } else {
        btnText.style.display = 'inline';
        btnIcon.style.display = 'inline';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
    }
}

form?.addEventListener('submit', function (e) {
    e.preventDefault();

    // Limit wysyłania: 1 wiadomość na 2 minuty
    const lastSentTime = localStorage.getItem('lastEmailSentTime');
    const cooldownTime = 2 * 60 * 1000; // 2 minuty w milisekundach

    if (lastSentTime) {
        const timeElapsed = Date.now() - parseInt(lastSentTime, 10);
        if (timeElapsed < cooldownTime) {
            const timeLeft = Math.ceil((cooldownTime - timeElapsed) / 1000);
            const minutesLeft = Math.floor(timeLeft / 60);
            const secondsLeft = timeLeft % 60;
            const timeString = minutesLeft > 0 ? `${minutesLeft}m ${secondsLeft}s` : `${secondsLeft}s`;

            showNotification('error', `⏳ Odczekaj jeszcze ${timeString} przed wysłaniem kolejnej wiadomości.`);
            return;
        }
    }

    if (!validateForm()) return;

    setLoading(true);

    const templateParams = {
        imie: document.getElementById('imie').value.trim(),
        nazwisko: document.getElementById('nazwisko').value.trim(),
        kontakt: document.getElementById('kontakt_info').value.trim(),
        tresc: document.getElementById('tresc').value.trim(),
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(() => {
            setLoading(false);
            showNotification('success', '✅ Wiadomość wysłana! Odpiszę najszybciej jak mogę.');
            form.reset();
            // Zapisz aktualny czas po udanej wysyłce
            localStorage.setItem('lastEmailSentTime', Date.now().toString());
        })
        .catch((error) => {
            setLoading(false);
            console.error('EmailJS error:', error);
            showNotification('error', '❌ Nie udało się wysłać wiadomości. Napisz bezpośrednio na srokalukasz03@gmail.com');
        });
});
