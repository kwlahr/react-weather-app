import basicDataReducer from './basicData';
import fiveDayReducer from './fiveDay';
import savedReducer from './saved';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    basicData: basicDataReducer,
    fiveDay : fiveDayReducer,
    saved: savedReducer
});

export default rootReducer;