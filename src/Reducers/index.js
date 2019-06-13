import * as actionTypes from '../actionTypes';

const initialState = {
    name: '',
    email: '',
    loggedIn: false,
    loginError: false
}


export default function Dashboard(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CONFIRM_LOGIN_SUCCESS: {
            return {
                ...state,
                name: action.name,
                email: action.email,
                loggedIn: true
            }
        }
        case actionTypes.CONFIRM_LOGIN_ERROR: {
            return {
                ...state,
                loginError: true
            }
        }

        case actionTypes.CONFIRM_LOGOUT_SUCCESS: {
            return {
                ...state,
                loggedIn: false,
                name: '',
                email: ''
            }
        }
    }
    return state;
}