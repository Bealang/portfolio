var toggle = false;
function openmenu() {
	$("#rozwijane__menu").fadeToggle(500);
	if (toggle == true){
		toggle = false;
		document.getElementById('navbar__menu__span').textContent = 'menu';
	}
	else if(toggle == false){
		toggle = true;
		document.getElementById('navbar__menu__span').textContent = 'close';

	}
}