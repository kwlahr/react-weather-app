import basicDataReducer from './basicData';
import fiveDayReducer from './fiveDay';
import savedReducer from './saved';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    basicDataReducer,
    fiveDayReducer,
    savedReducer
});

export default rootReducer;