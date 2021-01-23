
export class Card {

	constructor(data, cardSelector, handleCardClick) {
		this._name = data.name;
		this._link = data.link;
		this._cardSelector = cardSelector;
		this._handleCardClick = handleCardClick;

	}

	_getTemplate() {
		const cardElement = document.querySelector('.template').content.querySelector('.element').cloneNode(true);
		return cardElement;
	}

	generateCard() {
		this._element = this._getTemplate();
		this._cardImg = this._element.querySelector('.element__image');
		this._setEventListeners();
		this._cardImg.src = this._link;
		this._cardImg.alt = this._name;
		this._element.querySelector('.element__info-text').textContent = this._name;
		return this._element;
	}

	_setEventListeners() {
		this._element.querySelector('.element__delete').addEventListener('click', () => {
			this._deleteElement();
		});
		this._cardImg.addEventListener('click', () => {
			this._handleCardClick(this._name, this._link);
		});
		this._like = this._element.querySelector('.element__info-btn');
		this._like.addEventListener('click', () => {
			this._handleLike();
		});
	}
	_deleteElement = () => {
		this._element.remove();
	}
	_handleLike() {
		this._like.classList.toggle("element__info-btn_active");
	}

}

