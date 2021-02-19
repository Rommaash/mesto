export class Popup {
	constructor(popupSelector) {
		this._popup = popupSelector;
		this._closeButton = this._popup.querySelector('.popup__close');
		this._handleEscClose = this._handleEscClose.bind(this);
		this._handleOverlayClose = this._handleOverlayClose.bind(this);
	}

	open() {
		this._popup.classList.add('popup_opened');
		document.addEventListener('click', this._handleOverlayClose);
		document.addEventListener('keydown', this._handleEscClose);
	}

	close() {
		this._popup.classList.remove('popup_opened');
		document.removeEventListener('click', this._handleOverlayClose);
		document.removeEventListener('keydown', this._handleEscClose);
	}

	_handleEscClose(evt) {
		if (evt.key === 'Escape') {
			this.close();
		}
	}

	_handleOverlayClose(evt) {
		const popupIsOpen = evt.target;
		if (popupIsOpen.classList.contains('popup_opened')) {
			this.close();
		}
	}

	setEventListeners() {
		this._closeButton.addEventListener('click', () => {
			this.close();
		})
	}
}
