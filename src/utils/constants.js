const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];

const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inputErrorClass: 'popup_span-error',
	inactiveButtonClass: 'popup__button_error',
}


const popupProfile = document.querySelector('.popup_profile');
const buttonEditList = document.querySelector('.profile__button-edit');
const buttonAddList = document.querySelector('.profile__button-add')
const nameInput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.profile__subtitle');
const addNameInput = document.querySelector('.popup__input_type_name');
const addJobInput = document.querySelector('.popup__input_type_job');
const formEdit = document.querySelector('.popup__form_edit');
const formAdd = document.querySelector('.popup__form_add');
const popupElement = document.querySelector('.popup_element');
const cardName = popupElement.querySelector('#cardname');
const cardLink = popupElement.querySelector('#cardlink');
const elementsContainer = document.querySelector('.elements');
const element = document.querySelector('.template');
const popupImage = document.querySelector('.popup_img');

export {
	initialCards,
	popupProfile,
	buttonEditList,
	buttonAddList,
	nameInput,
	jobInput,
	addNameInput,
	addJobInput,
	formEdit,
	formAdd,
	popupElement,
	cardName,
	cardLink,
	elementsContainer,
	element,
	popupImage,
	validationConfig
};