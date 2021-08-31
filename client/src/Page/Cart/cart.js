import React, { useState, useEffect } from 'react'
// import styles from "./Cart.module.css";

import { connect, useSelector } from 'react-redux'

import CartItem from './cartItems/cartItems'

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)
  useEffect(() => {
    let items = 0
    let price = 0

    cart.forEach((item) => {
      items += item.qty
      price += item.qty * item.price
    })

    setTotalItems(items)
    setTotalPrice(price)
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])

  return (
    <div className="cart">
      <div className="cart__items">
        {cart.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </div>
      <div className="cart__summary">
        <h4 className="summary__titre">Cart Summary</h4>
        <div className="summary__price">
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className="summary__checkoutBtn">Proceed To Checkout</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.product,
  }
}

export default connect(mapStateToProps)(Cart)