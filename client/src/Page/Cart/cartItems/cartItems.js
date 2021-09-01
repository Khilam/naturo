import React, { useState } from 'react'
// import styles from './CartItem.module.css'

import { connect } from 'react-redux'
import { adjustItemQty, removeFromCart } from '../../../Redux/Action/orderAction'

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty)

  const onChangeHandler = (e) => {
    setInput(e.target.value)
    adjustQty(item._id, e.target.value)
  }
  const [qty, setQty] = useState(1)

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={item.imageUrl} alt={item.title} />
      <div className="cartItem__details">
        <p className="details__title">{item.title}</p>
        {/* <p className="details__desc">{item.description}</p> */}
        <p className="details__price">$ {item.price}</p>
      </div>
      <div className="cartItem__actions">
        <div className="cartItem__qty">
        <div>Qty</div>
                          
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(item.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
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
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  }
}

export default connect(null, mapDispatchToProps)(CartItem)
