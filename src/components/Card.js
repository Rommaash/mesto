
export class Card {

	constructor({ name, link, likes, owner, _id, userId }, cardTemplate, handleCardClick, handlerDelete, addLike, removeLike,) {
		this._name = name;
		this._link = link;
		this._cardTemplate = cardTemplate;
		this._handleCardClick = handleCardClick;
		this._ownerId = owner._id;
		this._imageId = _id;
		this._likes = likes;
		this._userId = userId;
		this._handlerDelete = handlerDelete;
		this._addLike = addLike;
		this._removeLike = removeLike

	}

	_getTemplate() {
		const cardElement = this._cardTemplate.content.querySelector('.element').cloneNode(true);
		return cardElement;
	}

	_checkId() {
		if (this._ownerId !== this._userId) {
			this._element.querySelector('.element__delete').remove()
		}
	}

	returnCardId() {
		return this._imageId
	}

	generateCard() {
		this._element = this._getTemplate();
		this._cardImg = this._element.querySelector('.element__image');
		this._cardImg.src = this._link;
		this._cardImg.alt = this._name;

		this._setEventListeners();
		this._element.querySelector('.element__info-text').textContent = this._name;
		this._element.querySelector('.element__info-likes').textContent = this._likes.length
		return this._element;
	}

	_setEventListeners() {
		this._element.querySelector('.element__delete').addEventListener('click', this._handlerDelete)
		this._checkId();
		this._cardImg.addEventListener('click', () => {
			this._handleCardClick({ name: this._name, link: this._link });
		});
		this._like = this._element.querySelector('.element__info-btn');
		this._like.addEventListener('click', this._handleLike.bind(this));
		this._likes.forEach((item) => {
			if (item._id === this._userId) {
				this._like.classList.add('element__info-btn_active');
			}
		})
	}
	deleteElement() {
		this._element.remove();
	}
	_handleLike(evt) {
		//this._removeLike()
		if (!evt.target.classList.contains("element__info-btn_active")) {
			this._like.classList.add("element__info-btn_active");
			this._addLike();
		} else {
			this._like.classList.remove("element__info-btn_active");
			this._removeLike();
		}
	}
	changeLikes(item) {
		this._element.querySelector('.element__info-likes').textContent = item;
		//	this._like.classList.toggle("element__info-btn_active");
	}
}

