import {
    FAIL_USER,
	LOAD_USER,
	REGISTER_USER,
	LOGIN_USER,
	// FAIL_USER,
	// LOGOUT_USER,
	
} from '../Const/authConst.js';

import axios from 'axios';


export const registerUser = (user) => async (dispatch) => {
	dispatch({ type: LOAD_USER });
	try {
		const result = await axios.post('app/auth/register', user); //{newUser+msg+token}
		dispatch({ type: REGISTER_USER, payload: result.data });
	
	} catch (error) {
		dispatch({type:FAIL_USER, payload:error.response.data})
	}
};

export const loginUser = (user) => async (dispatch) => {
	dispatch({ type: LOAD_USER });
	try {
		const result = await axios.post('app/auth/login', user); //{newUser+msg+token}
		dispatch({ type: LOGIN_USER, payload: result.data });
	
	} catch (error) {
		dispatch({type:FAIL_USER, payload:error.response.data})
	}
};