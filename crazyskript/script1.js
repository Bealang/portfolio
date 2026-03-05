document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var mobileOpcje = document.getElementById('mobile-przycisk');

    menuToggle.addEventListener('click', function() {
        mobileOpcje.classList.toggle('visible');
   });
});
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var mobileOpcje1 = document.getElementById('przyciski');

    menuToggle.addEventListener('click', function() {
        mobileOpcje1.classList.toggle('visible');
   });
});