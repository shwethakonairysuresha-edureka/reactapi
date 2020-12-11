import {combineReducers} from 'redux';
import authReducer from './authReducer';
import auth from './authReducer';

export default combineReducers({
    auth:authReducer
})