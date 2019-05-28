
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import { signup, login, logout } from '../util/session_api_util';

export const receiveCurrentUser = (currentUser) => ({
        type: RECEIVE_CURRENT_USER,
        currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const loginUser = (user) => (dispatch) => {
    return login(user).then(response => dispatch(receiveCurrentUser(response)));
};

export const logoutUser = () => (dispatch) => {
    return logout().then(() => dispatch(logoutCurrentUser()));
};

export const signupUser = (user) => dispatch => {
    return signup(user).then(response => dispatch(receiveCurrentUser(response)));
};