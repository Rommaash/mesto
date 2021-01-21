export const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inputErrorClass: 'popup_span-error',
	inactiveButtonClass: 'popup__button_error',
}

export class FormValidator {
	constructor(data, formSelector) {
		this._form = data.formSelector;
		this._input = data.inputSelector;
		this._submitButton = data.submitButtonSelector;
		this._inputErrorClass = data.inputErrorClass;
		this._inactiveButtonClass = data.inactiveButtonClass;
		this._formSelector = formSelector;
	}

	_showError(form, input) {
		const error = form.querySelector(`#${input.id}-error`);
		error.textContent = input.validationMessage;
		input.classList.add(this._inputErrorClass);
	}


	_hideError(form, input) {
		const error = form.querySelector(`#${input.id}-error`);
		error.textContent = '';
		input.classList.remove(this._inputErrorClass);
	}



	_checkInputValidity(form, input) {

		if (!input.validity.valid) {
			this._showError(form, input);

		} else {
			this._hideError(form, input);
		}
	}


	_setButtonState(button, isActive) {

		if (isActive) {
			button.classList.remove(this._inactiveButtonClass);
			button.disabled = false;

		} else {
			this._disableButton(button);
		}
	}

	_disableButton(button) {
		button.classList.add(this._inactiveButtonClass);
		button.disabled = true;
	}


	_setEventListeners(form) {
		const inputsList = form.querySelectorAll(this._input);
		const submitButton = form.querySelector(this._submitButton);

		inputsList.forEach((input) => {
			input.addEventListener('input', () => {
				this._checkInputValidity(form, input);
				this._setButtonState(submitButton, form.checkValidity());
			});
		});
	}

	//aeyrwbz ghjdthrb
	enableValidation() {
		const forms = document.querySelectorAll(this._form);
		forms.forEach((form) => {
			this._setEventListeners(form);

			form.addEventListener('submit', (evt) => {
				evt.preventDefault();
				this._disableButton(submitButton);
			});

			const submitButton = form.querySelector(this._submitButton);
			this._setButtonState(submitButton, form.checkValidity())
		});
	}

}

