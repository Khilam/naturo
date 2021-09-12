import {
  ADD_TO_CART,
  ADD_TO_CART_FAIL,
  ADJUST_ITEM_QTY,
  REMOVE_FROM_CART,
  LOAD_CURRENT_ITEM,
  SAVE_ORDER_SUCCESS,
  SAVE_ORDER_FAIL,
  REMOVE_ALL_FROM_CART
} from '../Const/orderConst'
import axios from 'axios'
 //import { addOrder } from '../requestOrder'
 import {POST_ORDER ,GET_ORDER, DELETE_ORDER,PUT_ORDER } from "../Const/orderConst"
 import * as actionTypes from "../Const/orderConst"

 import {addOrder, getAllOrders, deleteOrders,updateOrders, getOrdersAPI}   from "../requestOrder"



export const addToCart = (id, qanty) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:4005/app/product/${id}`)
  // console.log(data)
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        description: data.description,
        imageUrl: data.imageUrl,
        price: data.price,
        rating: data.rating,
        title: data.title,
        id: data.id,
        qanty: 1,
      },
    })
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload: { error: error },
    })
  }
}

export const removeFromCart = (itemID) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  }
}
export const clearCart = (itemID) => {
  return {
    type: REMOVE_ALL_FROM_CART,
    payload: {
      id: itemID,
    },
  }
}

export const adjustItemQty = (itemID, qty) => {
  return {
    type: ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty:qty,
    },
  }
}
export const loadCurrentItem = (item) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item,
  }
}

export const saveOrder = (orderItems, totalPrice,history) => async (dispatch) => {
  try {
    const res = await addOrder(orderItems, totalPrice)
    dispatch({
      type: SAVE_ORDER_SUCCESS,
      payload: res.data,
      // payload: {
      //   cart,
      //   totalPrice: totalPrice,
      // },
    })
    history.push('/ordervalidation')
  } catch (error) {
    dispatch({
      type: SAVE_ORDER_FAIL,
      payload: { error: error },
    })
  }
}








export const addOrdersApi=( id, orderItems, userName, userLastName,userPhone, userAdresse,userMail, userId, totalPrice )=> async (dispatch) =>{
    try{
        const res=await addOrder (id, orderItems, userName, userLastName,userPhone, userAdresse,userMail, userId, totalPrice);
        dispatch ({
            type:POST_ORDER,
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}
//getALL
export const getOrderAPI=()=>async (dispatch)=> {
try{
const res=await getAllOrders ();
dispatch({
    type:GET_ORDER,
    payload:res.data
})
}
catch (error) {
              console.log(error);
             }
}

export const deleteOrder = (id)=> async (dispatch) => {
    try {
      await deleteOrder (id);
      dispatch({
        type:DELETE_ORDER,
        payload:id
    })
      console.log("delete")
      dispatch(getOrderAPI);
    } catch (error) {
      console.log(error);
    }
  };
// update Menu
export const updateOrder = ( userName,userLastName,userPhone, userAdresse,userMail, id, totalPrice, orderItems ) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:4005/app/order/${id}`,{ userName, userLastName,userPhone, userAdresse,userMail, id, totalPrice,orderItems}) 
       
      dispatch({
        type: PUT_ORDER, 
        payload: res.data
      });
      console.log("superrr")
    } catch (error) {
      console.log(error);
    }
  };
  export const getOrderDetails = (_id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_ORDER_DETAILS_REQUEST });
  
      const res = await axios.get(`http://localhost:4005/app/order/get/${_id}`);
  
      dispatch({
        type: actionTypes.GET_ORDER_DETAILS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_ORDER_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };