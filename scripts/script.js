let popup = document.querySelector('.popup');
let buttonEdit = document.querySelector('.profile__button-edit');
let buttonClose = document.querySelector('.popup__close');
let popupOpen = document.querySelector('.popup_opened');
let popupSubmit = document.querySelector('.popup__button');
let nameInput = document.querySelector('.profile__title');
let jobInput = document.querySelector('.profile__subtitle');
let addNameInput = document.querySelector('.popup__input_type_name');
let addJobInput = document.querySelector('.popup__input_type_job');
buttonEdit.addEventListener('click', function openPopup() {
	addNameInput.value = nameInput.textContent;
	addJobInput.value = jobInput.textContent;
	popup.classList.add('popup_opened');
});


function closePopup() {
	popup.classList.remove('popup_opened');
};


let formElement = document.querySelector('.popup__form');

function formSubmitHandler(evt) {
	evt.preventDefault();
	nameInput.textContent = addNameInput.value;
	jobInput.textContent = addJobInput.value;
	closePopup;
};

buttonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);


