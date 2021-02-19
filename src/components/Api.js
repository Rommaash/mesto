export default class Api {
	constructor(options) {
		this._baseUrl = options.baseUrl;
		this._headers = options.headers;
	}

	getInitialCards() {
		return fetch(`${this._baseUrl}cards`, {
			headers: this._headers
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			})
	}

	getUserInfo() {
		return fetch(`${this._baseUrl}users/me`,
			{
				headers: this._headers
			})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}. А вот всё`);
			})
	}

	editUserInfo(data) {
		return fetch(`${this._baseUrl}users/me`,
			{
				method: 'PATCH',
				headers: this._headers,
				body: JSON.stringify({
					name: data.name,
					about: data.about
				})
			})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}. Данные пользователя не отправлены на сервер`);
			})
	}




	createCard(data) {
		return fetch(`${this._baseUrl}cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: data.popName,
				link: data.popText
			})
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			})
	}

	removeCard(id) {
		return fetch(`${this._baseUrl}cards/${id}`, {
			method: 'DELETE',
			headers: this._headers
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			})
	}

	like(id) {
		return fetch(`${this._baseUrl}cards/likes/${id}`, {
			method: 'PUT',
			headers: this._headers
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			})
	}

	removeLike(id) {
		return fetch(`${this._baseUrl}cards/likes/${id}`, {
			method: 'DELETE',
			headers: this._headers
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}. Лайк не удален`);
			})
	}


	updateAvatar(imageUrl) {
		return fetch(`${this._baseUrl}users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: imageUrl
			})
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}. Аватар не обновлен`);
			})
	}



}


