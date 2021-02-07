export class UserInfo {
	constructor(name, info) {
		this._name = name;
		this._info = info;
	}

	getUserInfo() {
		return {
			name: this._name.textContent,
			info: this._info.textContent
		};
	}

	setUserInfo({ editName, editJob }) {
		this._name.textContent = editName;
		this._info.textContent = editJob;
	}
}