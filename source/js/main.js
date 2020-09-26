var swiper_1 = new Swiper('.swiper-container-1', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination-1',
    clickable: true,
  },
  /* autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
});

var swiper_2 = new Swiper('.swiper-container-2', {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination-2',
    clickable: true,
  },
  /* autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
});

/* Бургер меню  */
$(document).ready(function() {
	$('#nav-icon').click(function() {
		$(this).toggleClass('open');
	});
});

$('body').on('click', '.menu-control__button', function() {

	$('.header__bottom').toggleClass('show-nawigation');

	return false;
});
