import './index.css';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';

import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { ConfirmDelete } from '../components/PopupWithButton.js'
import { UserInfo } from '../components/UserInfo.js'
import Api from '../components/Api.js'
import {
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
	elementsContainer,
	element,
	popupImage,
	validationConfig,
	deleteConfirm,
	profileImage,
	avatar,
	profileButton,
	formAvatar,
} from '../utils/constants.js';

const api = new Api({
	baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20/',
	headers: {
		authorization: '0ec7c01e-aede-44de-99a3-5cc3df2c0d39',
		'Content-Type': 'application/json'
	}
});







function renderLoading(popupSelector, isLoading) {
	const buttonElement = document.querySelector('.popup__button');
	if (isLoading) {
		buttonElement.textContent = 'Сохранение...';
	} else {
		if (popupSelector === '.popup__element') {
			buttonElement.textContent = 'Создать';

		} else {
			buttonElement.textContent = 'Сохранить';

		}
	}
}
const popupAvatar = new PopupWithForm({
	popupSelector: avatar,
	handlerFormSubmit: (data) => {
		renderLoading(avatar, true)
		api.updateAvatar(data.avatarLink)
			.then(() => {
				userInfo.setAvatar(data);
				popupAvatar.close();
				renderLoading(avatar, false)
			})
	}
})
const avatarValidation = new FormValidator(validationConfig, formAvatar);
avatarValidation.enableValidation()
popupAvatar.setEventListeners();


api.getUserInfo()
	.then(res => {
		userInfo.setUserInfo(res);
		userInfo.setUserId(res._id)
	})
	.catch(err => {
		console.log(err);
	})

const cardList = new Section((item) => {
	cardList.appendItem(createCard(item))

}, elementsContainer
);

api.getInitialCards()
	.then((res) => {
		cardList.renderItems(res)
	}, elementsContainer
	)




const userInfo = new UserInfo(nameInput, jobInput, profileImage);

const popupWithProfileForm = new PopupWithForm({
	popupSelector: popupProfile,
	handlerFormSubmit: (data) => {
		renderLoading(popupProfile, true)
		api.editUserInfo(data)
			.then((data) => {
				userInfo.setUserInfo(data);
				renderLoading(popupProfile, false)
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				popupWithProfileForm.close();
			})
	}
}
);

const popupWithButton = new ConfirmDelete(deleteConfirm);
popupWithButton.setEventListeners();

const removeCard = (card) => {
	return () => {
		api.removeCard(card.returnCardId())
			.then(() => {
				popupWithButton.close();
				card.deleteElement(card)
			})
	}
}
function createCard({ name, link, likes, owner, _id }) {
	const card = new Card({ name, link, likes, owner, _id, userId: userInfo.returnUserId() }, element,

		() => {
			popupWithImage.open({ name, link });
		},
		() => {
			popupWithButton.open(removeCard(card));

		},
		() => {
			api.like(card.returnCardId())
				.then((res) => {
					card.changeLikes(res.likes.length)
				})
		},
		() => {
			api.removeLike(card.returnCardId())
				.then((res) => {
					card.changeLikes(res.likes.length)
				})
		},

	);
	return card.generateCard();
}



const popupWithCardForm = new PopupWithForm({
	popupSelector: popupElement,
	handlerFormSubmit: (data) => {
		renderLoading(popupElement, true)
		api.createCard(data)
			.then((res) => {
				cardList.addItem(createCard(res))
				renderLoading(popupElement, false)
			})
			.catch((err) => {
				console.log(err)
			})


		popupWithCardForm.close();
	}
});



popupWithProfileForm.setEventListeners();

buttonEditList.addEventListener('click', () => {
	profileValidator.resetValidation();
	popupWithProfileForm.open();
	const profileInfo = userInfo.getUserInfo();
	addNameInput.value = profileInfo.name;
	addJobInput.value = profileInfo.about;
});

profileButton.addEventListener('click', () => {
	popupAvatar.open()
})

const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();




popupWithCardForm.setEventListeners();


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

