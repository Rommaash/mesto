import { openPopup } from './index.js'

export class Card {

	constructor(data) {
		this._name = data.name;
		this._link = data.link;
	}

	_getTemplate() {
		const cardElement = document.querySelector('.template').content.querySelector('.element').cloneNode(true);
		return cardElement;
	}

	generateCard() {
		this._element = this._getTemplate();
		this._setEventListeners();
		const cardImg = this._element.querySelector('.element__image');
		cardImg.src = this._link;
		cardImg.alt = this._name;
		this._element.querySelector('.element__info-text').textContent = this._name;
		return this._element;
	}

	_setEventListeners() {
		this._element.querySelector('.element__delete').addEventListener('click', () => {
			this._deleteElement();
		});
		this._element.querySelector('.element__image').addEventListener('click', () => {
			this._openImgPopup();
		});
		this._element.querySelector('.element__info-btn').addEventListener('click', () => {
			this._handleLike();
		});
	}
	_deleteElement = () => {
		this._element.remove();
	}
	_handleLike() {
		this._element.querySelector('.element__info-btn').classList.toggle("element__info-btn_active");
	}

	_openImgPopup = () => {
		openPopup(document.querySelector('.popup_img'));
		document.querySelector('.popup__img-photo').src = this._link;
		document.querySelector('.popup__img-photo').alt = this._name;
		document.querySelector('.popup__img-text').textContent = this._name;
	}
}

