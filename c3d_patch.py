import re

# ─── 1. ADD CSS ─────────────────────────────────────────────────────
css_path = r'c:\Users\Łukasz\Desktop\programowanie\portfolio\style.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

c3d_css = """

/* =========================================
   3D PROJECT CAROUSEL
   ========================================= */

#projekty {
    padding: 100px 0 80px;
    overflow: hidden;
    position: relative;
}

.projekty__heading {
    text-align: center;
    margin-bottom: 60px;
    padding: 0 20px;
}

.projekty__heading h2 {
    font-size: 52px;
    margin-bottom: 12px;
    line-height: 1.1;
}

.projekty__subtitle {
    color: var(--text-secondary);
    font-size: 16px;
    margin: 0;
}

.c3d__scene {
    position: relative;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.c3d__track {
    position: relative;
    width: 100%;
    height: 100%;
}

.c3d__card {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 320px;
    height: 420px;
    border-radius: 28px;
    overflow: hidden;
    cursor: grab;
    will-change: transform, opacity, filter;
    transition: transform 0.7s cubic-bezier(0.33, 1, 0.68, 1),
                opacity 0.7s ease,
                filter 0.7s ease,
                box-shadow 0.7s ease;
}

.c3d__card:active { cursor: grabbing; }

.c3d__card-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 30px;
    box-sizing: border-box;
    position: relative;
}

.c3d__card-inner::before {
    content: '';
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background: var(--card-accent, rgba(139,92,246,0.2));
    filter: blur(70px);
    z-index: 0;
    pointer-events: none;
}

.c3d__logo-wrap {
    position: relative;
    z-index: 1;
    width: 140px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 28px;
    transition: transform 0.5s ease;
}

.c3d__logo-wrap img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 12px 24px rgba(0,0,0,0.6));
}

.c3d__card.is-active .c3d__logo-wrap {
    transform: translateY(-6px);
}

.c3d__name {
    position: relative;
    z-index: 1;
    color: #ffffff;
    font-size: 26px;
    font-weight: 800;
    margin: 0 0 8px;
    text-align: center;
    text-shadow: 0 2px 12px rgba(0,0,0,0.5);
}

.c3d__tag {
    position: relative;
    z-index: 1;
    color: rgba(255,255,255,0.45);
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 3px;
}

.c3d__cta {
    position: absolute;
    z-index: 2;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%) translateY(12px);
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    color: #fff !important;
    padding: 13px 30px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s ease, transform 0.35s ease;
    box-shadow: 0 10px 30px rgba(139,92,246,0.6);
    display: flex;
    align-items: center;
    gap: 8px;
}

.c3d__card.is-active:hover .c3d__cta {
    opacity: 1;
    pointer-events: all;
    transform: translateX(-50%) translateY(0);
}

.c3d__nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.95);
    border: none;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    font-size: 30px;
    line-height: 1;
    color: #8b5cf6;
    cursor: pointer;
    z-index: 100;
    box-shadow: 0 6px 20px rgba(139,92,246,0.2);
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.c3d__nav--prev { left: calc(50% - 280px); }
.c3d__nav--next { right: calc(50% - 280px); }

.c3d__nav:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 10px 30px rgba(139,92,246,0.4);
}

.c3d__dots {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 32px;
}

.c3d__dot {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: rgba(139,92,246,0.25);
    cursor: pointer;
    transition: all 0.35s;
    border: none;
    padding: 0;
}

.c3d__dot.is-active {
    background: #8b5cf6;
    width: 30px;
}

@media (max-width: 900px) {
    .c3d__scene { height: 430px; }
    .c3d__card { width: 270px; height: 370px; }
    .c3d__nav--prev { left: 10px; }
    .c3d__nav--next { right: 10px; }
    .projekty__heading h2 { font-size: 36px; }
}

@media (max-width: 600px) {
    .c3d__cta {
        opacity: 1 !important;
        pointer-events: all !important;
        transform: translateX(-50%) !important;
    }
}
"""

if '.c3d__scene' not in css:
    css += c3d_css
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(css)
    print('CSS patched')
else:
    print('CSS already has c3d styles')

# ─── 2. PATCH JS IN HTML ─────────────────────────────────────────────
html_path = r'c:\Users\Łukasz\Desktop\programowanie\portfolio\index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

c3d_js = """
    <script>
    (function () {
        var cards = Array.from(document.querySelectorAll('.c3d__card'));
        var dotsEl = document.getElementById('c3dDots');
        var prevBtn = document.getElementById('c3dPrev');
        var nextBtn = document.getElementById('c3dNext');
        var total = cards.length;
        var current = 0;
        var autoTimer = null;
        var CARD_W = 320;
        var GAP = 360;

        // Apply brand colors
        cards.forEach(function(card) {
            var inner = card.querySelector('.c3d__card-inner');
            inner.style.background = card.dataset.color || '#111';
            inner.style.setProperty('--card-accent', card.dataset.accent || 'rgba(139,92,246,0.2)');
        });

        // Build dots
        cards.forEach(function(_, i) {
            var d = document.createElement('button');
            d.className = 'c3d__dot';
            d.setAttribute('aria-label', 'Slajd ' + (i + 1));
            d.addEventListener('click', function() { goTo(i); });
            dotsEl.appendChild(d);
        });

        function relPos(i) {
            var d = i - current;
            if (d > total / 2) d -= total;
            if (d < -total / 2) d += total;
            return d;
        }

        function applyLayout(dragging) {
            cards.forEach(function(card, i) {
                var rel = relPos(i);
                var abs = Math.abs(rel);
                var tx = rel * GAP - CARD_W / 2;
                var ty = -50 + (abs === 0 ? -10 : 0);
                var scale = abs === 0 ? 1 : (abs === 1 ? 0.78 : 0.62);
                var opacity = abs === 0 ? 1 : (abs === 1 ? 0.55 : (abs === 2 ? 0.3 : 0));
                var brightness = abs === 0 ? 1 : (abs === 1 ? 0.55 : 0.3);
                var zIndex = abs === 0 ? 20 : (abs === 1 ? 15 : 5);
                var shadow = abs === 0
                    ? '0 50px 100px rgba(0,0,0,0.35), 0 20px 40px rgba(139,92,246,0.2)'
                    : '0 15px 35px rgba(0,0,0,0.15)';

                card.style.transform = 'translate(' + tx + 'px, ' + ty + '%) scale(' + scale + ')';
                card.style.opacity = opacity;
                card.style.filter = 'brightness(' + brightness + ')';
                card.style.zIndex = zIndex;
                card.style.boxShadow = shadow;
                card.classList.toggle('is-active', abs === 0);
                card.style.transition = dragging
                    ? 'transform 0.12s ease, opacity 0.3s ease, filter 0.3s ease'
                    : 'transform 0.7s cubic-bezier(0.33,1,0.68,1), opacity 0.7s ease, filter 0.7s ease, box-shadow 0.7s ease';
            });

            var dots = dotsEl.querySelectorAll('.c3d__dot');
            dots.forEach(function(d, i) {
                d.classList.toggle('is-active', i === current);
            });
        }

        function goTo(idx) {
            current = ((idx % total) + total) % total;
            applyLayout(false);
            resetAuto();
        }

        function resetAuto() {
            if (autoTimer) clearInterval(autoTimer);
            autoTimer = setInterval(function() { goTo(current + 1); }, 3500);
        }

        prevBtn.addEventListener('click', function() { goTo(current - 1); });
        nextBtn.addEventListener('click', function() { goTo(current + 1); });

        // Drag
        var startX = 0;
        var isDragging = false;
        var scene = document.querySelector('.c3d__scene');

        scene.addEventListener('mousedown', function(e) {
            isDragging = true;
            startX = e.clientX;
            if (autoTimer) clearInterval(autoTimer);
        });
        window.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
        });
        window.addEventListener('mouseup', function(e) {
            if (!isDragging) return;
            isDragging = false;
            var delta = e.clientX - startX;
            if (Math.abs(delta) > 55) goTo(delta < 0 ? current + 1 : current - 1);
            else resetAuto();
        });

        scene.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            if (autoTimer) clearInterval(autoTimer);
        }, { passive: true });
        scene.addEventListener('touchend', function(e) {
            var delta = e.changedTouches[0].clientX - startX;
            if (Math.abs(delta) > 50) goTo(delta < 0 ? current + 1 : current - 1);
            else resetAuto();
        });

        applyLayout(false);
        resetAuto();
    })();
    </script>
"""

# Remove old Swiper init script and add our custom carousel JS
old_scripts = """    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>"""

new_scripts = """    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>"""

html = html.replace(old_scripts, new_scripts)

# Replace the Swiper init block
old_swiper_block_start = '    <script>\n        AOS.init'
old_swiper_block_end = '        });\n    </script>'

# Find and replace the swiper init block
import re
html = re.sub(
    r'<script>\s*AOS\.init\(\{[^}]+\}\);\s*var swiper.*?\}\);\s*</script>',
    '<script>\n        AOS.init({ once: true, mirror: false, offset: 100 });\n    </script>',
    html,
    flags=re.DOTALL
)

# Inject c3d JS before </body>
html = html.replace('</body>', c3d_js + '\n</body>')

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

print('JS patched')
