const btn = document.getElementById('toggleDarkMode');
btn.addEventListener('click', () => {
document.body.classList.toggle('dark');
if(document.body.classList.contains('dark')) {
    btn.textContent = 'Wyłącz ciemny motyw';
} else {
    btn.textContent = 'Włącz ciemny motyw';
}
})
