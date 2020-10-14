import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/appReducer';
import listProductsReducer from './reducers/listProductsReducer';
const rootReducer = combineReducers({app : appReducer, listProducts: listProductsReducer})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;