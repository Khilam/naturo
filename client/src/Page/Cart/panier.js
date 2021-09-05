import React, { useState, useEffect } from 'react'
// import styles from "./Cart.module.css";
import { saveOrder } from '../../Redux/Action/orderAction'
import { connect, useSelector, useDispatch } from 'react-redux'
import Navbar from '../../Shared/navbar'
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import {Button} from 'react-bootstrap'
import './panier.css'

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)
  const dispatch = useDispatch()
  useEffect(() => {
    let items = 0
    let price = 0
   

    cart.forEach((item) => {
      items = item.qty
      price += item.qty * item.price
      
    })

    setTotalItems(items)
    setTotalPrice(price)
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])

  console.log('items', totalItems)
  console.log('price', totalPrice)
  return (
    
    <div className="cart">
      <Navbar/>


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
                <tr key={item.id}> 
                  {/* <td className="paper-dash">{product._id}</td> */}
                  <div className="table-row">
                  <td className="col col-2">{item.title}</td>
               
                
                  <td className="col col-1">{item.price}</td>
                  <td> <img className="col col-3" src={item.imageUrl} alt=""/></td>
               
                  <td className="col col-4">  <AddIcon /> {item.items}<RemoveIcon/> </td>
                  <p className="details__price"> {item.qty}</p>
                  {/* <td className="col col-1"> {item.price}*{item.qty} </td> */}
                  <td className="col col-1"><Button className="col col-1"> 
                    < DeleteIcon className="deletoneitem"/>
                     
                    </Button> 
                    </td>



                  <td>
                  
                  
                      
                   
                  </td>
                  </div>

                
                </tr>
              ))}
              
            </tbody>
           
          </ul>
          {/* <h3 className="total">Total: {totalItems}</h3>
          <Button className="boutonpanier">
                     Valider
                      
                      </Button>
                      <Button className="boutonpanier">
                   Annuler
                      
                      </Button>
          */}

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
