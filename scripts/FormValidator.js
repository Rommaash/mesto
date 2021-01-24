export const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inputErrorClass: 'popup_span-error',
	inactiveButtonClass: 'popup__button_error',
}

export class FormValidator {
	constructor(validationConfig, form) {
		this._input = validationConfig.inputSelector;
		this._submitButtonSelector = validationConfig.submitButtonSelector;
		this._inputErrorClass = validationConfig.inputErrorClass;
		this._inactiveButtonClass = validationConfig.inactiveButtonClass;
		this._formSelector = validationConfig.formSelector;
		this._form = form;
		this._inputList = this._form.querySelectorAll(this._input);
		this._submitButton = this._form.querySelector(this._submitButtonSelector);

	}

	_showError(input) {
		const error = this._form.querySelector(`#${input.id}-error`);
		error.textContent = input.validationMessage;
		input.classList.add(this._inputErrorClass);
	}


	_hideError(input) {
		const error = this._form.querySelector(`#${input.id}-error`);
		error.textContent = '';
		input.classList.remove(this._inputErrorClass);
	}




	_checkInputValidity(input) {
		if (!input.validity.valid) {
			this._showError(input);

		} else {
			this._hideError(input);
		}
	}


	_setButtonState(isActive) {
		if (isActive) {
			this._submitButton.classList.remove(this._inactiveButtonClass);
			this._submitButton.disabled = false;
		} else {
			this._submitButton.classList.add(this._inactiveButtonClass);
			this._submitButton.disabled = true;
		}
	}

	_setEventListeners() {
		this._inputList.forEach(input => {
			input.addEventListener('input', () => {
				this._checkInputValidity(input);
				this._setButtonState(this._form.checkValidity());
			});
		});
	}

	resetValidation() {
		this._inputList.forEach((inputElement) => {
			this._hideError(inputElement)
		});

		this._setButtonState(this._form.checkValidity());

	}


	//aeyrwbz ghjdthrb
	enableValidation() {
		this._setEventListeners();
		this._form.addEventListener('submit', () => {
			this._setButtonState(this._form.checkValidity())
		})
	}

}

