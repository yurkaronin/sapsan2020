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

var swiper_3 = new Swiper('.swiper-container-3', {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  /* autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
});

/* Слайдер в карточке товара  */
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop: true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
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
