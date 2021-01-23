import { FormValidator, validationConfig } from './FormValidator.js';
import { Card } from './Card.js';
import { initialCards } from './initial-cards.js'


const popupProfile = document.querySelector('.popup_profile');
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
const popupElement = document.querySelector('.popup_element');
const cardName = popupElement.querySelector('#cardname');
const cardLink = popupElement.querySelector('#cardlink');
const popupAll = document.querySelectorAll('.popup');
const elementsContainer = document.querySelector('.elements');
const element = document.querySelector('.template');
const imagePopupPicture = document.querySelector('.popup__img-photo');
const imagePopupCaption = document.querySelector('.popup__img-text');
const popupImage = document.querySelector('.popup_img');



//функция открытия попапа
function openPopup(popup) {
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


const profileValidator = new FormValidator(validationConfig, formEdit)
profileValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig, formAdd)
addCardValidator.enableValidation();

const handlePopupProfile = () => {
	addNameInput.value = nameInput.textContent;
	addJobInput.value = jobInput.textContent;
};

//функция переноса данных в профиле
function handleProfileSubmit(evt) {
	evt.preventDefault();
	nameInput.textContent = addNameInput.value;
	jobInput.textContent = addJobInput.value;
	closePopup(popupProfile);
	formEdit.reset();

}


function CreateCard(data) {
	const card = new Card({ name: data.name, link: data.link }, element, handleCardClick);
	const cardElement = card.generateCard();
	return cardElement;
}


function handleCardClick(name, link) {
	openPopup(popupImage);
	imagePopupPicture.src = link;
	imagePopupCaption.textContent = name;
	imagePopupPicture.alt = name;

}

initialCards.forEach((item) => {
	const cardElement = CreateCard(item);
	elementsContainer.append(cardElement);
})


function submitElement(evt) {
	evt.preventDefault();
	const cardElement = CreateCard({ name: cardName.value, link: cardLink.value });
	elementsContainer.prepend(cardElement);
	closePopup(popupElement);
	formAdd.reset();
}



buttonEditList.addEventListener('click', () => {
	handlePopupProfile();
	profileValidator.resetValidation();
	openPopup(popupProfile);
});

buttonAddList.addEventListener('click', () => {
	formEdit.reset();
	openPopup(popupElement);
	addCardValidator.resetValidation();
});

formElement.addEventListener('click', handleProfileSubmit)


buttonCloseList.forEach((button) => {
	button.addEventListener('click', (event) => {
		closePopup(event.target.closest('.popup'));
	});
});




popupElement.addEventListener('submit', submitElement);
