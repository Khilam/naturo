import React, { useState } from 'react'
// import styles from './CartItem.module.css'

import { connect } from 'react-redux'
import {  removeFromCart } from '../../../Redux/Action/orderAction'

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty)

  const onChangeHandler = (e) => {
    setInput(e.target.value)
    adjustQty(item._id, e.target.value)
  }

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={item.img} alt={item.title} />
      <div className="cartItem__details">
        <p className="details__title">{item.name}</p>
        <p className="details__desc">{item.qty}</p>
        <p className="details__price">$ {item.price}</p>
      </div>
      <div className="cartItem__actions">
        <div className="cartItem__qty">
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={item.qty}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(item._id)}
          className="actions__deleteItemBtn"
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    // adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  }
}

export default connect(null, mapDispatchToProps)(CartItem)