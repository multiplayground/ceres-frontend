import { createStore, combineReducers } from 'redux';
import counter from './reducers/counter';

const rootReducer = combineReducers({ counter });
const store = createStore(rootReducer);
export default store;
