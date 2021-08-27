import { combineReducers } from 'redux';
import { userReducer } from './authReducer';
import {cartReducer} from '../Reducer/cartReducer';
import { paperReducer } from './paperReducer';
import { productReducer } from './productReducer';


export const rootReducer = combineReducers({
	 user:userReducer,
	paper: paperReducer,
	product: productReducer,
	cart: cartReducer
	// detailPaper: paperDetailsReducer
	
});