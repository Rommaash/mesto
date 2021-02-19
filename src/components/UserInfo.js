export class UserInfo {
	constructor(name, about, avatar) {
		this._name = name;
		this._about = about;
		this._avatar = avatar;
	}

	getUserInfo() {
		return {
			name: this._name.textContent,
			about: this._about.textContent
		};

	}

	setUserInfo(data) {
		this._name.textContent = data.name;
		this._about.textContent = data.about;
		this._avatar.src = data.avatar;
	}

	setUserId(id) {
		this._userId = id
	}

	returnUserId() {
		return this._userId
	}

	setAvatar(data) {
		this._avatar.src = data.avatarLink;
	}
}