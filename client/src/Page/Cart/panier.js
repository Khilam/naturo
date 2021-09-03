import React, { useState, useEffect } from 'react'
// import styles from "./Cart.module.css";

import { connect, useSelector } from 'react-redux'
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
      <div class="col col-1">Produit</div>
      <div class="col col-1">Prix</div>
      <div class="col col-3">Image</div>
      <div class="col col-4">Quantité</div>
      <div class="col col-1">Somme</div>
      <div class="col col-1"></div>
    </li>
    
   
<tbody className="panier">


{cart.map((item) => (
                <tr key={item._id}>
                  {/* <td className="paper-dash">{product._id}</td> */}
                  <div className="table-row">
                  <td className="col col-2">{item.title}</td>
               
                
                  <td className="col col-1">{item.price}</td>
                  <td> <img className="col col-3" src={item.imageUrl} alt=""/></td>
               
                  <td className="col col-4">  <AddIcon /> {item.qty}<RemoveIcon/> </td>
                  
                  <td className="col col-1"> {item.somme} </td>
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
          <h3 className="total">Total: {totalItems.price}</h3>
          <Button className="boutonpanier">
                     Valider
                      
                      </Button>
                      <Button className="boutonpanier">
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
