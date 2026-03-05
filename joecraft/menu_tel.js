document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var mobileOpcje = document.getElementsByClassName('tel-opcja');

    menuToggle.addEventListener('click', function() {
        mobileOpcje.classList.toggle('visible');
   });
});
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var mobileOpcje1 = document.getElementById('tel-opcje');

    menuToggle.addEventListener('click', function() {
        mobileOpcje1.classList.toggle('visible');
   });
});
function rozwijane() {
  var rozwijaneOpcje = document.getElementsByClassName('rozwijane-opcje');
  for (var i = 0; i < rozwijaneOpcje.length; i++) {
    rozwijaneOpcje[i].classList.toggle('visible');
  }
}
document.addEventListener("DOMContentLoaded", function() {
    const style = document.createElement('style');
    style.innerHTML = `
        .archive-pill {
            position: fixed !important;
            top: calc(100vh - 80px) !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            z-index: 2147483647 !important;
            background: rgba(15, 23, 42, 0.85) !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
            border: 1px solid rgba(59, 130, 246, 0.4) !important;
            border-radius: 50px !important;
            padding: 12px 25px !important;
            display: flex !important;
            align-items: center !important;
            gap: 12px !important;
            color: #f8fafc !important;
            font-family: 'Outfit', sans-serif !important;
            font-size: 14px !important;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5) !important;
            animation: slideInUpArchive 0.5s ease-out forwards !important;
            pointer-events: none !important;
            width: max-content !important;
            max-width: 90vw !important;
            margin: 0 !important;
        }

        .archive-pill strong {
            color: #3b82f6 !important;
        }

        @keyframes slideInUpArchive {
            from { top: 100vh; opacity: 0; }
            to { top: calc(100vh - 80px); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    const pill = document.createElement('div');
    pill.className = 'archive-pill';
    pill.innerHTML = `
        <span style="font-size: 18px;">⚠️</span>
        <span>To <strong>strona archiwalna</strong>. Projekt służy wyłącznie jako pokaz umiejętności w portfolio.</span>
    `;

    document.documentElement.appendChild(pill);
});