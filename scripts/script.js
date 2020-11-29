




const popupProfile = document.querySelector('.popup__profile');
const buttonEditList = document.querySelector('.profile__button-edit');
const buttonAddList = document.querySelector('.profile__button-add')
const buttonCloseList = document.querySelectorAll('.popup__close');
const nameInput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.profile__subtitle');
// инпуты профиля
const addNameInput = document.querySelector('.popup__input_type_name');
const addJobInput = document.querySelector('.popup__input_type_job');

const formAdd = document.querySelector('.popup__form_add')
const formElement = document.querySelector(".popup__button");
const popImageText = document.querySelector('.popup__img-text');
const popupElement = document.querySelector('.popup__element');
const elementContent = document.querySelector('#element').content;
const elements = document.querySelector('.elements');
const cardName = popupElement.querySelector('#cardname');
const cardLink = popupElement.querySelector('#cardlink');
const popupImage = document.querySelector('.popup_img');
const hugeImg = document.querySelector('.popup__img-photo');
const popupAll = document.querySelectorAll('.popup')

//функция открытия попапа
function openPopup(popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('click', closePopupOverlay);
	document.addEventListener('keydown', closePopupOnEscape);
}

//функция закрытия через оверлей
function closePopupOverlay(evt) {
	if (evt.target.classList.contains('popup')) {
		closePopup(evt.target);
	}
}

//функция закрытия черещ Escape
function closePopupOnEscape(evt) {
	if (evt.key === 'Escape') {
		const shownPopup = Array.from(popupAll).find(element => element.classList.contains('popup_opened'));
		closePopup(shownPopup);
	}
}

//функция закрытия попапов
function closePopup(popup) {
	popup.classList.toggle('popup_opened');
	document.removeEventListener('click', closePopupOverlay);
	document.removeEventListener('keydown', closePopupOnEscape);
}

const handlePopupProfile = () => {
	addNameInput.value = nameInput.textContent;
	addJobInput.value = jobInput.textContent;
};

//функция переноса данных в профиле
function HandleProfileSubmit(evt) {
	evt.preventDefault();
	nameInput.textContent = addNameInput.value;
	jobInput.textContent = addJobInput.value;
	closePopup(popupProfile);
}


function submitElement(evt) {
	const newCard = {
		name: cardName.value,
		link: cardLink.value,
	};
	closePopup(popupElement);
	elements.prepend(createCard(newCard));
	evt.preventDefault();
	formAdd.reset();
}

const removeElement = (event) => {
	event.target.closest('.element').remove();
};

//функция создания карточек 
function createCard(element) {
	const cardElement = elementContent.cloneNode(true);
	const cardElementImage = cardElement.querySelector('.element__image');
	cardElement.querySelector('.element__info-text').textContent = element.name;
	cardElementImage.src = element.link;
	cardElementImage.alt = element.name;
	cardElement.querySelector('.element__info-btn').addEventListener('click', (event) => {
		event.target.classList.toggle('element__info-btn_active');
	});

	cardElement.querySelector('.element__delete').addEventListener('click', removeElement);
	cardElementImage.addEventListener('click', function () {
		hugeImg.src = cardElementImage.src;
		hugeImg.alt = element.name;
		popImageText.textContent = element.name;
		openPopup(popupImage);
	});

	return cardElement;
}


buttonEditList.addEventListener('click', () => {
	handlePopupProfile();
	openPopup(popupProfile);

});

buttonAddList.addEventListener('click', () => {
	openPopup(popupElement);

});

formElement.addEventListener('click', HandleProfileSubmit)


buttonCloseList.forEach((button) => {
	button.addEventListener('click', (event) => {
		closePopup(event.target.closest('.popup'));
	});
});

initialCards.forEach((element) => {
	elements.append(createCard(element));
});

popupElement.addEventListener('submit', submitElement);
