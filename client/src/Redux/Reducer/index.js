import { combineReducers } from 'redux';
import { userReducer } from './authReducer';
import { paperReducer } from './paperReducer';

export const rootReducer = combineReducers({
	 userReducer,
	paper: paperReducer
	
});