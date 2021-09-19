import React, { useState, useEffect } from 'react'

import { saveOrder } from '../../Redux/Action/orderAction'
import { connect, useSelector, useDispatch } from 'react-redux'
import Navbar from '../../Shared/navbar'
import CartItems from './cartItems/cartItems'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './panier.css'

const Cart = ({history}) => {
  console.log(history)
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
            <div class="col col-3">Produit</div>
            <div class="col col-2">Prix</div>
            <div class="col col-3">Image</div>
            <div class="col col-3">Quantité</div>
            <div class="col col-1">Somme</div>
            {/* <div class="col col-2">Supprimer</div> */}
          </li>
         
          <tbody className="panier">
            {cart.map((item) => (
              <CartItems item={item} />
            ))}
          </tbody>
          </ul>

        <h4 className="total">Contenu de votre panier</h4>
        <div className="summary__price">
          <span>TOTAL: ({totalItems} produits)</span>
          <span>$ {totalPrice}</span>
        </div>
        <Button 
        
          
          onClick={() => dispatch(saveOrder(cart, totalPrice,history))}
          
        >
        
         Valider
        </Button>
      <Link to ="/boutique" className="bouttonP"  >
                      
                      <Button>Retour </Button>
                       
                     
                    </Link>
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