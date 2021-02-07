import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
	constructor({ popupSelector, handlerFormSubmit }) {
		super(popupSelector);
		this._handlerFormSubmit = handlerFormSubmit;
		this._form = this._popup.querySelector('.popup__form');
		this._inputList = this._form.querySelectorAll('.popup__input');
	}

	_getInputValues() {
		this._item = {};
		this._inputList.forEach(input => {
			this._item[input.name] = input.value;
		});
		return this._item;
	}



	setEventListeners() {
		super.setEventListeners();
		this._form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._handlerFormSubmit(this._getInputValues());
		});
	}

	close() {
		super.close();
		this._form.reset();
	}
}