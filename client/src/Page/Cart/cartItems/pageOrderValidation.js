import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../../Shared/navbar'
import '../panier.css'

const OrderValidation = () => {
    const user = useSelector((state) => state.user.user)
    console.log(user)
    return (
<div>
<Navbar/>
        <div className="container">
         
        
          <li className="cardd cards__item">
            <div className="cardd__frame">
              <div className="cardd__picture">
                <img src="https://image.freepik.com/vecteurs-libre/femme-fleurs-printemps-dans-panier_113065-437.jpg" alt="" width={120} />
              </div>
              <h2 className="cardd__title">Bonjour {user.name} ! </h2>
            
             
           
             
             
            </div>
            <p>Votre commande a ete passé par succés, vous serez contacté pour planifier la livraison sur votre numéro de télephone {user.phone}</p>
            <h2 className="hh2">Merci pour votre visite a bientot </h2>
          </li>
       
        </div>
        
        </div>





    )}

export default OrderValidation





 //         <div>
//             <Navbar/>

       
       

//             <h1 className="orderValidation">Bonjour {user.name}</h1>
//             <div className="validation">
//             <h3 >Votre commande a ete passé par succés, vous serez contacté pour planifier la livraison sur votre numéro de télephone {user.phone}</h3>
//             </div>
//             <h3 className="validationn"> Merci pour votre visite </h3>

// </div> 
        