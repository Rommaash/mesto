const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];




const popupProfile = document.querySelector('.popup__profile');
const buttonEdit = document.querySelector('.profile__button-edit');
const butttonAdd = document.querySelector('.profile__button-add')
const buttonClose = document.querySelectorAll('.popup__close');
const popupOpen = document.querySelector('.popup_opened');
const popupSubmit = document.querySelector('.popup__button');
const nameInput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.profile__subtitle');
const addNameInput = document.querySelector('.popup__input_type_name');
const addJobInput = document.querySelector('.popup__input_type_job');
const formElement = document.querySelector(".popup__button");
const popImageText = document.querySelector('.popup__img-text');
const popupElement = document.querySelector('.popup__element');
const elementContent = document.querySelector('#element').content;
const elements = document.querySelector('.elements');

const cardName = popupElement.querySelector('#cardname');
const cardLink = popupElement.querySelector('#cardlink');

const popupImage = document.querySelector('.popup_img');
const hugeImg = document.querySelector('.popup__img-photo');



function profileInfo() {
	addNameInput.value = nameInput.textContent;
	addJobInput.value = jobInput.textContent;
}

function openPopup(popup) {
	popup.classList.add('popup_opened');
}

function closePopup(popup) {
	popup.classList.remove('popup_opened');
};




function profileSubmitHandler(evt) {
	evt.preventDefault();
	nameInput.textContent = addNameInput.value;
	jobInput.textContent = addJobInput.value;
	closePopup(popupProfile);
};

function submitElement(evt) {
	let newCard = {
		name: cardName.value,
		link: cardLink.value,
	};
	closePopup(popupElement);
	elements.prepend(createCard(newCard));
	evt.preventDefault();
}

function createCard(element) {
	let cardElement = elementContent.cloneNode(true);
	let cardElementImage = cardElement.querySelector('.element__image');

	cardElement.querySelector('.element__info-text').textContent = element.name;
	cardElement.querySelector('.element__image').src = element.link;
	cardElement.querySelector('.element__info-btn').addEventListener('click', (event) => {
		event.target.classList.toggle('element__icon_active');
	});
	cardElement.querySelector('.element__delete').addEventListener('click', (event) => {
		event.target.closest('.element').remove();
	});
	cardElement.querySelector('.element__image').addEventListener('click', function () {
		hugeImg.src = cardElementImage.src;
		popImageText.textContent = element.name;
		openPopup(popupImage);
	});

	return cardElement;
};


buttonEdit.addEventListener('click', () => {
	profileInfo();
	openPopup(popupProfile);
});

butttonAdd.addEventListener('click', () => {
	openPopup(popupElement);
});

formElement.addEventListener('click', profileSubmitHandler)


buttonClose.forEach((button) => {
	button.addEventListener('click', (event) => {
		closePopup(event.target.closest('.popup'));
	});
});

initialCards.forEach((element) => {
	elements.append(createCard(element));
});

popupElement.addEventListener('submit', submitElement);