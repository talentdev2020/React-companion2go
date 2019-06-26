import { browserHistory } from 'react-router';
import { dispatch } from '../../core/helpers/EventEmitter';
import { login, refreshToken as updateToken } from '../../actions';
import User from '../helpers/User';

export function emailLogin(data, onSuccess, onFail) {
  login(
    { ...data },
    ({ token, user }) => {
      // Starting user session
      User.beginSession({ token, user });

      // On success function call if provided
      onSuccess && onSuccess({ token, user });
    },
    (e) => {
      // On fail function call if provided
      onFail && onFail(e);
    }
  );
};

export function refreshToken(onSuccess, onFail) {
  updateToken(
    { token: User.token },
    ({ token, user }) => {
      // Update user token
      User.token = token;

      // On success function call if provided
      onSuccess && onSuccess({ token, user });
    },
    (e) => {
      // On fail function call if provided
      onFail && onFail(e);
    }
  );
};

export function logout(props) {
  // Remove localStorage data
  User.endSession();
  localStorage.removeItem("event");
  localStorage.removeItem("triedToCreateOffer");

  // Redirect to default url
  props.router.push('/');

  // On success function call if provided
  dispatch('user:loggedout');

  return null;
};
