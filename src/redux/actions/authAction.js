import { LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from "./types";
import axios from 'axios';

export const registerUser = formData =>async dispatch => {
    try {
        const res = await axios.post('http://localhost:9050/api/auth/signup', formData)

        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })
    }
    catch(err) {
        dispatch({
            type:REGISTER_FAIL
        })
    }
}

export const login=(username, password) => async dispatch => {
    const body = {username, password}
    try {
        const res = await axios.post('http://localhost:9050/api/auth/signin', body)

        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
    }
    catch(err) {
        dispatch({
            type:LOGIN_FAIL
        })
    }
}