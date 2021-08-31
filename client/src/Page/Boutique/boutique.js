
import React from 'react'
import  boutikPrincipal from '../../images/boutikPrincipal.jpg'
import { useDispatch, useSelector} from 'react-redux'
import  { useState } from 'react'
import {useEffect} from 'react'
import Navbar from '../../Shared/navbar'
import Footer from '../../Shared/footer'
import { getProductAPI } from '../../Redux/Action/productAction'
import './boutique.css'
import Modale from './pageBoutique'
import Rating from '../../Component/Rating'




// Redux
import { connect } from "react-redux";
import { propTypes } from 'react-bootstrap/esm/Image'
// import {
//   loadCurrentItem,
//   addToCart,
// } from '../../Redux/Action/orderAction';






const Boutique = ({ boutique}) => {
    const [qanty, setQanty] = useState(1)
    const dispatch = useDispatch()
    const product = useSelector((state) => state.product.datas)
    
//     useEffect(() => {
//       dispatch(getProductAPI())
//     }, [dispatch])
   
//     console.log('my data', product)
//     dispatch(detailsProduct(productId));
// }, [dispatch, productId]);
//     const addToCartHandler = () => {
//         props.history.push(`/cart/${productId}?qty=${qty}`);
     // };
/**** */


useEffect(() => {
    
        dispatch(getProductAPI())
    }, []);
     
  const addToCartHandler = () => {
   
  };

    return (
        <div>
         <Navbar/>
            <div className="parent1" >
            <h1 className="fraze">Boutique</h1>
  
            <div >
            <img  className="imagearpop" src={boutikPrincipal} alt="fpage1"/>
            </div>
            
            <div className="Rectang">
             
            </div>
        </div>
        <div className="espace"/>
        <div className="trending">
{
    product
    .map((el, key)=>(
        <div  key={key}>

        <div className="media">
      
        
        <img className="poster"
        src={el.imageUrl} alt=""/>
       
            <div className="phyto-title-parag">
            <Modale   id={el._id} el={el} />
        {/* <h6 className="title">{el.title} </h6> */}
      
        <h6 className="title">Prix: {el.price} DT</h6>
        <Rating className="Rating-boutik"
            rating={el.rating}
            
          />
       
       <button
       onClick={() => dispatch(addToCartHandler(el.title, qanty))}
                  

                
                >
                   
                  Add To Cart
                 
                </button>
        
        
        </div>
       
        </div>
      

     
        </div> 
    )
     ) 
     
        }
        </div>
         <Footer/>
     </div> 
          
     )
     }

     export default Boutique