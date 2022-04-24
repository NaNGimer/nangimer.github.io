/* SLIDE SEARCH */

const searchButton = document.getElementById('searchButton');
const closeSearchButton = document.getElementById('closeSearchButton');
const desktopNav = document.getElementById('menuList');
const searchContainer = document.getElementById('searchContainer');
const searchOverlay = document.querySelector('.overlay');

searchButton.addEventListener('click', () => {
	desktopNav.classList.add('hideOverlay');
	searchContainer.classList.remove('hideOverlay');
	searchOverlay.classList.add('overlay');
	searchOverlay.classList.add('entryOverlay');
	searchOverlay.classList.add('on');
});

closeSearchButton.addEventListener('click', () => {
	desktopNav.classList.remove('hideOverlay');
	searchContainer.classList.add('hideOverlay');
	searchOverlay.classList.remove('on');
});

searchOverlay.addEventListener('click', () => {
	desktopNav.classList.remove('hideOverlay');
	searchContainer.classList.add('hideOverlay');
	searchOverlay.classList.remove('overlay');
	searchOverlay.classList.remove('on');
	document.getElementById('navCategories').style.animation = 'collapse 0.12s forwards';
	document.getElementById('mainContainer').style.animation = '';
	document.getElementById('firstSubContainerAudio').style.animation = '';
	document.getElementById('firstSubContainerShoes').style.animation = '';
	document.getElementById('SecondSubContainerAudioInEar').style.animation = '';
	document.getElementById('SecondSubContainerAudioOverEar').style.animation = '';
	document.getElementById('SecondSubContainerShoesRunning').style.animation = '';
	document.getElementById('SecondSubContainerShoesTraining').style.animation = '';
	document.getElementById('contentAudio').style.animation = '';
	document.getElementById('contentShoes').style.animation = '';
});

/* SLIDE CATEGORIES */

function openNav() {
	document.getElementById('navCategories').style.display = 'block';
	document.getElementById('navCategories').style.animation = 'expand 0.3s forwards';
	document.getElementById('navCategoriesOut').style.display = 'block';
	searchOverlay.classList.add('overlay');
	searchOverlay.classList.add('entryOverlay');
	searchOverlay.classList.add('on');
}

function navCategoriesOut() {
	document.getElementById('navCategories').style.animation = 'collapse 0.12s forwards';
	searchOverlay.classList.remove('entryOverlay');
	searchOverlay.classList.remove('on');
	document.getElementById('mainContainer').style.animation = '';
	document.getElementById('firstSubContainerAudio').style.animation = '';
	document.getElementById('firstSubContainerShoes').style.animation = '';
	document.getElementById('SecondSubContainerAudioInEar').style.animation = '';
	document.getElementById('SecondSubContainerAudioOverEar').style.animation = '';
	document.getElementById('SecondSubContainerShoesRunning').style.animation = '';
	document.getElementById('SecondSubContainerShoesTraining').style.animation = '';
	document.getElementById('contentAudio').style.animation = '';
	document.getElementById('contentShoes').style.animation = '';
}

function navCategoriesDescription() {
	document.getElementById('mainContainer').style.animation = '';
	document.getElementById('firstSubContainerAudio').style.animation = '';
	document.getElementById('firstSubContainerShoes').style.animation = '';
	document.getElementById('SecondSubContainerAudioInEar').style.animation = '';
	document.getElementById('SecondSubContainerAudioOverEar').style.animation = '';
	document.getElementById('SecondSubContainerShoesRunning').style.animation = '';
	document.getElementById('SecondSubContainerShoesTraining').style.animation = '';
	document.getElementById('contentAudio').style.animation = '';
	document.getElementById('contentShoes').style.animation = '';
}

document.getElementById('contentAudio').addEventListener('click', () => {
	document.getElementById('mainContainer').style.animation = 'mainAway 0.3s forwards';
	document.getElementById('firstSubContainerAudio').style.animation = 'subBack 0.3s forwards';
});

document.getElementById('mainMenuAudio').addEventListener('click', () => {
	document.getElementById('firstSubContainerAudio').style.animation = 'subPush 0.3s forwards';
	document.getElementById('mainContainer').style.animation = 'mainBack 0.3s forwards';
});

document.getElementById('contentShoes').addEventListener('click', () => {
	document.getElementById('mainContainer').style.animation = 'mainAway 0.3s forwards';
	document.getElementById('firstSubContainerShoes').style.animation = 'subBack 0.3s forwards';
});

document.getElementById('mainMenuShoes').addEventListener('click', () => {
	document.getElementById('firstSubContainerShoes').style.animation = 'subPush 0.3s forwards';
	document.getElementById('mainContainer').style.animation = 'mainBack 0.3s forwards';
});

document.getElementById('subContainerAudioInEar').addEventListener('click', () => {
	document.getElementById('contentAudio').style.animation = 'mainAway 0.3s forwards';
	document.getElementById('SecondSubContainerAudioInEar').style.animation = 'subBack 0.3s forwards';
});

document.getElementById('mainMenuAudioInEar').addEventListener('click', () => {
	document.getElementById('SecondSubContainerAudioInEar').style.animation = 'subPush 0.3s forwards';
	document.getElementById('firstSubContainerAudio').style.animation = 'mainBack 0.3s forwards';
	document.getElementById('contentAudio').style.animation = 'mainBack 0.3s forwards';
});

document.getElementById('subContainerAudioOverEar').addEventListener('click', () => {
	document.getElementById('contentAudio').style.animation = 'mainAway 0.3s forwards';
	document.getElementById('SecondSubContainerAudioOverEar').style.animation = 'subBack 0.3s forwards';
});

document.getElementById('mainMenuAudioOverEar').addEventListener('click', () => {
	document.getElementById('SecondSubContainerAudioOverEar').style.animation = 'subPush 0.3s forwards';
	document.getElementById('firstSubContainerAudio').style.animation = 'mainBack 0.3s forwards';
	document.getElementById('contentAudio').style.animation = 'mainBack 0.3s forwards';
});

document.getElementById('subContainerShoesRunning').addEventListener('click', () => {
	document.getElementById('contentShoes').style.animation = 'mainAway 0.3s forwards';
	document.getElementById('SecondSubContainerShoesRunning').style.animation = 'subBack 0.3s forwards';
});

document.getElementById('mainMenuShoesRunning').addEventListener('click', () => {
	document.getElementById('SecondSubContainerShoesRunning').style.animation = 'subPush 0.3s forwards';
	document.getElementById('firstSubContainerShoes').style.animation = 'mainBack 0.3s forwards';
	document.getElementById('contentShoes').style.animation = 'mainBack 0.3s forwards';
});

document.getElementById('subContainerShoesTraining').addEventListener('click', () => {
	document.getElementById('contentShoes').style.animation = 'mainAway 0.3s forwards';
	document.getElementById('SecondSubContainerShoesTraining').style.animation = 'subBack 0.3s forwards';
});

document.getElementById('mainMenuShoesTraining').addEventListener('click', () => {
	document.getElementById('SecondSubContainerShoesTraining').style.animation = 'subPush 0.3s forwards';
	document.getElementById('firstSubContainerShoes').style.animation = 'mainBack 0.3s forwards';
	document.getElementById('contentShoes').style.animation = 'mainBack 0.3s forwards';
});

/* SLIDE CAROUSEL */

var slideIndex = 2;
var millis = 1000;
var interval;

function showSlide() {
	var i;
	var slides = document.getElementsByClassName('carouselSliderGroup');
	var bars = document.getElementsByClassName('carouselBarIn');
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	if (slideIndex < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < bars.length; i++) {
		bars[i].className = bars[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	bars[slideIndex - 1].className += ' active';
}

function startSlides() {
	interval = setInterval(nextSlide, millis);
}

/* force preload in show of 3  */

startSlides();
nextSlide();
nextSlide();
nextSlide();

/* */

function pauseSlides() {
	clearInterval(interval);
}

function carouselBarOn(n) {
	clearInterval(interval);
	slideIndex = n + 1;
	nextSlide();
}

function carouselButtonOn(n) {
	clearInterval(interval);
	slideIndex += n;
	nextSlide();
}

function nextSlide() {
	showSlide();
	slideIndex++;
}

/* SLIDE TENDENCIES */

var slide2Index = 2;

function showTendencies() {
	var h;
	var slides1 = document.getElementsByClassName('topsellersDisplaySectionActive');

	for (h = 0; h < slides1.length; h++) {
		slides1[h].style.display = 'none';
	}
	if (slide2Index > slides1.length) {
		slide2Index = 1;
	}
	if (slide2Index < 1) {
		slide2Index = slides1.length;
	}

	slides1[slide2Index - 1].style.display = 'flex';
}

/* evade adsolute mobile resolution in show of 3 */

nextSlide2();
nextSlide2();
nextSlide2();

/* */

function topsellersDisplayButtonOn(n) {
	slide2Index += n;
	nextSlide2();
}

function nextSlide2() {
	showTendencies();
	slide2Index++;
}

/* FAVORITES/Shopping BUTTON */

var color = ['#ffffff', '#ffffff', '#d50b0f'];
var q0 = 0;
var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;

var color1 = ['#ffffff', '#ffffff', '#fbff33'];
var k0 = 0;
var k1 = 0;
var k2 = 0;
var k3 = 0;
var k4 = 0;
var k5 = 0;

document.getElementById('topsellersFavorites0').addEventListener('click', function () {
	q0 = q0 < color.length ? ++q0 : 0;

	q0 = q0 < color.length ? ++q0 : 0;

	document.getElementById('topsellersFavorites0').style.color = color[q0];
});

document.getElementById('topsellersShopping0').addEventListener('click', function () {
	k0 = k0 < color1.length ? ++k0 : 0;
	k0 = k0 < color1.length ? ++k0 : 0;
	document.getElementById('topsellersShopping0').style.color = color1[k0];
});

document.getElementById('topsellersFavorites1').addEventListener('click', function () {
	q1 = q1 < color.length ? ++q1 : 0;
	q1 = q1 < color.length ? ++q1 : 0;
	document.getElementById('topsellersFavorites1').style.color = color[q1];
});

document.getElementById('topsellersShopping1').addEventListener('click', function () {
	k1 = k1 < color1.length ? ++k1 : 0;
	k1 = k1 < color1.length ? ++k1 : 0;
	document.getElementById('topsellersShopping1').style.color = color1[k1];
});

document.getElementById('topsellersFavorites2').addEventListener('click', function () {
	q2 = q2 < color.length ? ++q2 : 0;
	q2 = q2 < color.length ? ++q2 : 0;
	document.getElementById('topsellersFavorites2').style.color = color[q2];
});

document.getElementById('topsellersShopping2').addEventListener('click', function () {
	k2 = k2 < color1.length ? ++k2 : 0;
	k2 = k2 < color1.length ? ++k2 : 0;
	document.getElementById('topsellersShopping2').style.color = color1[k2];
});

document.getElementById('topsellersFavorites3').addEventListener('click', function () {
	q3 = q3 < color.length ? ++q3 : 0;
	q3 = q3 < color.length ? ++q3 : 0;
	document.getElementById('topsellersFavorites3').style.color = color[q3];
});

document.getElementById('topsellersShopping3').addEventListener('click', function () {
	k3 = k3 < color1.length ? ++k3 : 0;
	k3 = k3 < color1.length ? ++k3 : 0;
	document.getElementById('topsellersShopping3').style.color = color1[k3];
});

document.getElementById('topsellersFavorites4').addEventListener('click', function () {
	q4 = q4 < color.length ? ++q4 : 0;
	q4 = q4 < color.length ? ++q4 : 0;
	document.getElementById('topsellersFavorites4').style.color = color[q4];
});

document.getElementById('topsellersShopping4').addEventListener('click', function () {
	k4 = k4 < color1.length ? ++k4 : 0;
	k4 = k4 < color1.length ? ++k4 : 0;
	document.getElementById('topsellersShopping4').style.color = color1[k4];
});

document.getElementById('topsellersFavorites5').addEventListener('click', function () {
	q5 = q5 < color.length ? ++q5 : 0;
	q5 = q5 < color.length ? ++q5 : 0;
	document.getElementById('topsellersFavorites5').style.color = color[q5];
});

document.getElementById('topsellersShopping5').addEventListener('click', function () {
	k5 = k5 < color1.length ? ++k5 : 0;
	k5 = k5 < color1.length ? ++k5 : 0;
	document.getElementById('topsellersShopping5').style.color = color1[k5];
});

/* TEMPORIZADOR */

const countDown = new Date('12/31, 2022 23:59:59').getTime();
$days = document.getElementById('timerDays');
$hours = document.getElementById('timerHours');
$minutes = document.getElementById('timerMinutes');
$seconds = document.getElementById('timerSeconds');

let intervalTimer = setInterval(function () {
	const today = new Date().getTime();

	let distance = countDown - today;

	let days = Math.floor(distance / (1000 * 60 * 60 * 24));

	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	$days.innerHTML = days;
	$hours.innerHTML = hours;
	$minutes.innerHTML = minutes;
	$seconds.innerHTML = ('0' + seconds).slice(-2);
}, 1000);

let firstDropDownOpen = false;

function firstDropDown() {
	firstDropDownOpen = !firstDropDownOpen;
	if (firstDropDownOpen) {
		document.querySelector('#firstDropDown i').setAttribute('class', 'arrowVerticalIconDown');
		document.getElementById('firstContainer').style.display = 'flex';
		document.getElementById('firstContainer').style.height = '600px';
	} else {
		document.querySelector('#firstDropDown i').setAttribute('class', 'arrowVerticalIcon');

		document.getElementById('firstContainer').style.height = '0px';
		document.getElementById('firstContainer').style.transition = 'height 0.3s';
		setTimeout(() => {
			document.getElementById('firstContainer').style.display = 'none';
		}, 200);
	}
}

/* 

MODIFICACIONES PENDIENTES

- FALTA ORGANIZAR TODOS LOS ID Y CONSTANTES EN UNA MATRIZ DE UNA ÚNICA FUNCIÓN Y OPTIMIZAR
LAS REGLAS DE LA FUNCIÓN (POSIBLEMENTE AL FINALIZAR "var slide2Index = 2" CAMBIARÁ A "var slide2Index = 1")

*/
