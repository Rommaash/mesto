import { Popup } from './Popup.js';
export class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._imagePopupPicture = document.querySelector('.popup__img-photo');
		this._imagePopupCaption = document.querySelector('.popup__img-text');

	}

	open({ link, name, alt }) {
		super.open();
		this._imagePopupPicture.src = link;
		this._imagePopupCaption.textContent = name;
		this._imagePopupPicture.alt = alt;

	}


}