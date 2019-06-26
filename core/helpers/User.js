export default class User {

  static get data() {
    try {
      return JSON.parse(localStorage.getItem('user')) || {};
    }
    catch (e) {
      return {};
    }
  }

  static get settings() {
    return this.data.settings || {};
  }

  static get profilePhoto() {
    const profilePhoto = this.settings.profile_photo;

    if (profilePhoto) {
      return profilePhoto.match(/http(s)?\:\/\//)
        ? profilePhoto
        : `${config.staticFiles}/${profilePhoto}`;
    } else {
      return require('../../staticFiles/img/icons/default-avatar.svg');
    }
  }

  static get token() {
    return localStorage.getItem('token');
  }

  static set data(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  static set token(token) {
    localStorage.setItem('token', token);
  }

  static beginSession({ user, token }) {
    this.data = user;
    this.token = token;
  }

  static endSession() {
    this.data = null;
    this.token = '';
  }

  static get hasSession() {
    return Object.keys(this.data).length > 0;
  }

  static get phone() {
    return this.settings.phone || '';
  }

  static get email() {
    return this.data.email || '';
  }

  static get profileType() {
    return +this.settings.profile_type;
  }
}
