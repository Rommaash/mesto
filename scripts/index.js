import { FormValidator, validationConfig } from './validate.js';
import { initialCards } from './initial-cards.js';
import { Card } from './Card.js';

const popupProfile = document.querySelector('.popup__profile');
const buttonEditList = document.querySelector('.profile__button-edit');
const buttonAddList = document.querySelector('.profile__button-add')
const buttonCloseList = document.querySelectorAll('.popup__close');
const nameInput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.profile__subtitle');
// инпуты профиля
const addNameInput = document.querySelector('.popup__input_type_name');
const addJobInput = document.querySelector('.popup__input_type_job');
const formEdit = document.querySelector('.popup__form_edit');
const formAdd = document.querySelector('.popup__form_add');
const formElement = document.querySelector(".popup__button");
const popupElement = document.querySelector('.popup__element');
const cardName = popupElement.querySelector('#cardname');
const cardLink = popupElement.querySelector('#cardlink');
const popupAll = document.querySelectorAll('.popup');

//функция открытия попапа
export function openPopup(popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('click', closePopupOverlay);
	document.addEventListener('keydown', closePopupOnEscape);

}

//функция закрытия через оверлей
function closePopupOverlay(evt) {
	if (evt.target.classList.contains('popup')) {
		closePopup(evt.target);
	}
}

//функция закрытия черещ Escape
function closePopupOnEscape(evt) {
	if (evt.key === 'Escape') {
		const shownPopup = Array.from(popupAll).find(element => element.classList.contains('popup_opened'));
		closePopup(shownPopup);
	}
}

//функция закрытия попапов
function closePopup(popup) {
	popup.classList.toggle('popup_opened');
	document.removeEventListener('click', closePopupOverlay);
	document.removeEventListener('keydown', closePopupOnEscape);
}

const handlePopupProfile = () => {
	addNameInput.value = nameInput.textContent;
	addJobInput.value = jobInput.textContent;
};

//функция переноса данных в профиле
function HandleProfileSubmit(evt) {
	evt.preventDefault();
	nameInput.textContent = addNameInput.value;
	jobInput.textContent = addJobInput.value;
	closePopup(popupProfile);
	formEdit.reset();
	const validation = new FormValidator(validationConfig)
	validation.enableValidation();
}

const validation = new FormValidator(validationConfig)
validation.enableValidation();

function submitElement(evt) {
	evt.preventDefault();
	const newCard = new Card({
		name: cardName.value,
		link: cardLink.value,
	});
	const card = newCard.generateCard();
	document.querySelector('.elements').append(card);
	closePopup(popupElement);

	formAdd.reset();
}

initialCards.forEach((element) => {
	const card = new Card(element, 'elements')
	const cardElement = card.generateCard();
	document.querySelector('.elements').append(cardElement);
});

buttonEditList.addEventListener('click', () => {
	handlePopupProfile();
	openPopup(popupProfile);
});

buttonAddList.addEventListener('click', () => {
	openPopup(popupElement);

});

formElement.addEventListener('click', HandleProfileSubmit)


buttonCloseList.forEach((button) => {
	button.addEventListener('click', (event) => {
		closePopup(event.target.closest('.popup'));
	});
});




popupElement.addEventListener('submit', submitElement);
