//here we combine all our reducers to one reducer and set it into single parent
import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
    movies: searchReducer
}); 