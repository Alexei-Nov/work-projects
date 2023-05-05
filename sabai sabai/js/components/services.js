let showMoreBtnRev = document.querySelector('.salon-services__btn');
let btnStatus = false;

if (document.querySelector('.salon-services__btn')) {
	showMoreBtnRev.addEventListener('click', showMoreRev);
}

function showMoreRev(e) {

	btnStatus = !btnStatus;
	parentElem = document.querySelector('.salon-services__wrapper')
	parentElem.classList.add('open');

	if (btnStatus) {
		parentElem.classList.add('open');
		showMoreBtnRev.innerHTML = 'СКРЫТЬ';
	}
	else {
		parentElem.classList.remove('open');
		showMoreBtnRev.innerHTML = 'ПОКАЗАТЬ ВСЕ';
	}
}