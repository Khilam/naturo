import { combineReducers } from 'redux';
import { userReducer } from './authReducer';
import { paperReducer } from './paperReducer';


export const rootReducer = combineReducers({
	 user:userReducer,
	paper: paperReducer,
	// detailPaper: paperDetailsReducer
	
});