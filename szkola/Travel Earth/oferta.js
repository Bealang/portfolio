function setcountry(slide_nr) {
    $('.offer__content').removeClass('visible');
    var selectedSlide = $('.offer__content__' + slide_nr);
    selectedSlide.addClass('visible');
    var slideButtons = document.getElementsByClassName('offer__select');

    for (let i = 0; i < slideButtons.length; i++){
        slideButtons[i].classList.remove('active');
    }
    slideButtons[slide_nr-1].classList.add('active');
}