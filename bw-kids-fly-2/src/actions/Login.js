import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from './index';
import axiosWithAuth from '../React-II-Components/Authorization/axiosWithAuth';

export const loginParent = user => dispatch => {
    console.log('user', user);
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
        //this link is for parents
        .post('https://kids-fly-2.herokuapp.com/api/auth/login-parent', user)
        .then(res => {
            console.log('RESULT', res);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err });
        });
}

export const loginAssistant = assistant => dispatch => {
    console.log('assistant', assistant);
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
        //this link is for assistant
        .post('https://kids-fly-2.herokuapp.com/api/auth/login-assistant', assistant)
        .then(res => {
            console.log('RESULT', res);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err });
        });
}