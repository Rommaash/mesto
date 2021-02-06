//import './index.css';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';

import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { UserInfo } from '../components/UserInfo.js'

import {
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
} from '../utils/constants.js';


const cardList = new Section({
	items: initialCards,
	renderer: (item) => {
		createCard(item);
	}
}, elementsContainer
);
cardList.renderItems()

function createCard(item) {
	const card = new Card(item, element,
		{
			handleCardClick: () => {
				popupWithImage.open(item);
			}
		});
	const cardElement = card.generateCard();
	cardList.addItem(cardElement);
}



const popupWithProfileForm = new PopupWithForm({
	popupSelector: popupProfile,
	handlerFormSubmit: () => {
		userInfo.setUserInfo(addNameInput, addJobInput);
		popupWithProfileForm.close();
	}
}
);
const popupWithCardForm = new PopupWithForm({
	popupSelector: popupElement,
	handlerFormSubmit: () => {
		createCard({
			link: cardLink.value,
			alt: cardName.value,
			name: cardName.value
		});

		popupWithCardForm.close();
	}
});


popupWithProfileForm.setEventListeners();

buttonEditList.addEventListener('click', () => {
	profileValidator.resetValidation();
	popupWithProfileForm.open();
	const profileInfo = userInfo.getUserInfo();
	addNameInput.value = profileInfo.name;
	addJobInput.value = profileInfo.info;
});


const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();




popupWithCardForm.setEventListeners();
const userInfo = new UserInfo(nameInput, jobInput);

const profileValidator = new FormValidator(validationConfig, formEdit)
profileValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig, formAdd)
addCardValidator.enableValidation();



buttonAddList.addEventListener('click', () => {
	formEdit.reset();
	popupWithCardForm.open();
	addCardValidator.resetValidation();
});







//--------------------------------------------------------------

