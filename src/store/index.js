import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
//redux-thunk 这个中间件使得action可以是一个函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);
const store = createStore(reducer,enhancer);

export default store;