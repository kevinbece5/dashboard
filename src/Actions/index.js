import * as actionTypes from '../actionTypes';


export const confirmLogin = (email, password) => {
    return {
        type: actionTypes.CONFIRM_LOGIN,
        email,
        password
    }
}


export const confirmLoginSuccess = (email, name) => {
    return {
        type: actionTypes.CONFIRM_LOGIN_SUCCESS,
        name,
        email
    }
}

export const confirmLoginError = () => {
    return {
        type: actionTypes.CONFIRM_LOGIN_ERROR
    }
}

export const confirmLogout = () => {
    return {
        type: actionTypes.CONFIRM_LOGOUT
    }
}

export const confirmLogoutError = () => {
    return {
        type: actionTypes.CONFIRM_LOGOUT_ERROR
    }
}

export const confirmLogoutSuccess = () => {
    return {
        type: actionTypes.CONFIRM_LOGOUT_SUCCESS
    }
}