import { combineReducers } from 'redux';
import { userReducer } from './authReducer';
import { paperReducer } from './paperReducer';
import { paperDetailReducer } from './paperReducer';

export const rootReducer = combineReducers({
	 userReducer,
	paper: paperReducer,
	detailPaper: paperDetailReducer 
	
});