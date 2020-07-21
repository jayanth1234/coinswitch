import { combineReducers } from 'redux';
import coin from '../reducers/coinReducer';

const rootReducer = combineReducers({
    coin
})

export default rootReducer;