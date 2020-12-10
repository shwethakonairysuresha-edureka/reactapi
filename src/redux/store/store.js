import {createStore, applyMiddleware} from 'redux';
// cretaeStore is used to create the store
// applyMiddleware is used to connect the thunk
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {}
const middleware = [thunk]
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;