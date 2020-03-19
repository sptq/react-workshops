import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import todoReducer from './TodoReducer';

const reducers = combineReducers({
    todo: todoReducer
});

const middlewares = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducers, compose(middlewares));

export default store;