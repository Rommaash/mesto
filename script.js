let popup = document.querySelector('.popup');
let buttonEdit = document.querySelector('.profile__button_edit');
let buttonClose = document.querySelector('.popup__close');
let popupOpen = document.querySelector('.popup__opened');
let popupSubmit = document.querySelector('.popup__button');
let nameInput = document.querySelector('.profile__title');
let jobInput = document.querySelector('.profile__subtitle');
let addNameInput = document.querySelector('.pupup__input_name');
let addJobInput = document.querySelector('.pupup__input_job');
buttonEdit.addEventListener('click', function () {
	popup.classList.add('popup__opened');
	addNameInput.value = nameInput.textContent;
	addJobInput.value = jobInput.textContent;
});


function close() {
	popup.classList.remove('popup__opened');
};


let formElement = document.querySelector('.popup__form');

function formSubmitHandler(evt) {
	evt.preventDefault();


	nameInput.textContent = addNameInput.value;
	jobInput.textContent = addJobInput.value;

};

popupSubmit.addEventListener('click', close);
buttonClose.addEventListener('click', close);
formElement.addEventListener('submit', formSubmitHandler);


