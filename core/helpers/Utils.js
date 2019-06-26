export function buildUrl(file) {
  file = file || {};

  return file.path ? `${config.backUrl}${file.path}/${file.name}` : `/images/no-picture.jpg`;
};

export function currencyIcon(code) {
  const currencies = {
    'USD': '$',
    'EUR': '€',
    'UAH': '₴',
    'RUB': '₽',
  };
  return currencies[code];
};

export function profilePhoto(user) {
  const defaultAvatar = require('../../staticFiles/img/icons/default-avatar.svg');
  if (!user || !user.settings || !user.settings.profile_photo) {
    return defaultAvatar;
  }
  const profilePhoto = user.settings.profile_photo;

  if (profilePhoto) {
    return profilePhoto.match(/http(s)?\:\/\//)
      ? profilePhoto
      : `${config.staticFiles}/${profilePhoto}`;
  } else {
    return defaultAvatar;
  }
};

/**
 * Get random integer
 */
export function getRandomInt(min, max) {
 return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Get random integer
 */
export function getRandomOrder() {
 return Math.random() > 0.5 ? 1 : -1;
};
