import { takeEvery, call, put } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import * as _ from 'lodash';
import axios from 'axios'

export const quielaRequester = axios.create({
    baseURL: '/',
});

function* confirmLogin(action) {
    try {
        const body = {
            email: action.email,
            password: action.password
        }
        const response = yield call(quielaRequester.post, '/login', body);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('name', response.data.name);
        yield put({
            type: actionTypes.CONFIRM_LOGIN_SUCCESS,
            name: response.data.name,
            email: response.data.email
        });
    } catch (e) {
        yield put({
            type: actionTypes.CONFIRM_LOGIN_ERROR,
        });
    }
}

function* confirmLogout(action) {
    try {
        yield call(quielaRequester.get, '/logout');
        localStorage.clear();
        yield put({
            type: actionTypes.CONFIRM_LOGOUT_SUCCESS
        })
    } catch (e) {
        yield put({
            type: actionTypes.CONFIRM_LOGIN_ERROR
        })
    }
}


export default function* quinelaSagas() {
    yield takeEvery(actionTypes.CONFIRM_LOGIN, confirmLogin);
    yield takeEvery(actionTypes.CONFIRM_LOGOUT, confirmLogout)
}