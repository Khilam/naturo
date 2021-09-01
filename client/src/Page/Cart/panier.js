import React, { useState, useEffect } from 'react'
// import styles from "./Cart.module.css";

import { connect, useSelector } from 'react-redux'
import Navbar from '../../Shared/navbar'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import DeleteIcon from '@material-ui/icons/Delete';
import {Table, Button} from 'react-bootstrap'
import './panier.css'

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
      <Navbar/>


      <div class="container">
  <h2>Votre panier</h2>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-3">Produit</div>
      <div class="col col-1">Prix</div>
      <div class="col col-3">Image</div>
      <div class="col col-1">Quantité</div>
      <div class="col col-2">Somme</div>
      <div class="col col-2"></div>
    </li>
   
<tbody className="panier">


{cart.map((item) => (
                <tr key={item._id}>
                  {/* <td className="paper-dash">{product._id}</td> */}
                  <td className="col col-2">{item.title}</td>
               
                
                  <td className="col col-2">{item.price}</td>
                  <td> <img className="col col-2" src={item.imageUrl} alt=""/></td>
               
                  <td className="col col-1"> {item.somme} <UnfoldMoreIcon /> </td>
                  
                  <td className="col col-2"> {item.somme} </td>
                  <td><Button> 
                    < DeleteIcon />
                     
                    </Button> 
                    </td>
                  <td>
                  
                  
                      
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </ul>
          <h3 className="total">Total: {totalItems.price}</h3>
          <Button >
                     Valider
                      
                      </Button>
                      <Button >
                   Annuler
                      
                      </Button>
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
