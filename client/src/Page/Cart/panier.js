import React, { useState, useEffect } from 'react'

import { saveOrder } from '../../Redux/Action/orderAction'
import { connect, useSelector, useDispatch } from 'react-redux'
import Navbar from '../../Shared/navbar'
import CartItems from './cartItems/cartItems'
import './panier.css'

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const [qty, setQty] = useState(1)
  const [input, setInput] = useState(1)
  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)
  const dispatch = useDispatch()
  const onChangeHandler = (e) => {
    setQty(e.target.value)
  }

  useEffect(() => {
    let items = 0
    let price = 0

    cart.forEach((item) => {
      items += Number(item.qanty)
      price += item.qanty * item.price
    })

    setTotalItems(items)
    setTotalPrice(price)
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])

  return (
    <div className="cart">
      <Navbar />

      <div class="container">
        <h2>Votre panier</h2>
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">Produit</div>
            <div class="col col-1">Prix</div>
            <div class="col col-3">Image</div>
            <div class="col col-4">Quantité</div>
            <div class="col col-1">Somme</div>
            <div class="col col-1"></div>
          </li>

          <tbody className="panier">
            {cart.map((item) => (
              <CartItems item={item} />
            ))}
          </tbody>
        </ul>

        <h4 className="summary__titre">Cart Summary</h4>
        <div className="summary__price">
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button
          className="summary__checkoutBtn"
          onClick={() => dispatch(saveOrder(cart, totalPrice))}
        >
          Proceed To Checkout
        </button>
        {/* <Button className="col col-1">
                      <DeleteIcon
                        onClick={() => dispatch(clearCart())}
                        className="deletoneitem"
                      />
                    </Button> */}
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