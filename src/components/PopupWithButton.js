import { Popup } from "./Popup";

export class ConfirmDelete extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._confirmButton = document.querySelector('.popup__confirmation')
	}

	setEventListeners(deleteCard) {
		super.setEventListeners();
		this._handleButtonConfirmation = deleteCard;
		this._confirmButton.addEventListener('click', this._handleButtonConfirmation)
	}
	close() {
		super.close();
		this._confirmButton.removeEventListener('click', this._handleButtonConfirmation)
	}
}