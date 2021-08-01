import {combineReducers, applyMiddleware, createStore} from 'redux';

import thunk from 'redux-thunk';

import {reducers, actions} from './modules';

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk));

export {store, actions};
