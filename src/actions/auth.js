import api from '../api/fakeApi';
import { AUTH_REQUEST, AUTH_SUCCESS } from '../constants';

function authenticating() {
  return {
    type: AUTH_REQUEST,
  };
}

function authenticate(userData) {
  return {
    type: AUTH_SUCCESS,
    payload: userData,
  };
}

export function login() {
  return (dispatch) => {
    dispatch(authenticating());
    return api.login()
      .then((user) => dispatch(authenticate(user)));
  };
}
