
import React from 'react'
import boutiqueImg from '../../images/boutiqueImg.jpg'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react'
import Navbar from '../../Shared/navbar'
import Footer from '../../Shared/footer'
import { getProductAPI } from '../../Redux/Action/productAction'
import './boutique.css'
import Modale from './pageBoutique'
import Rating from '../../Component/Rating'


const Boutique = ({boutique}) => {
 
    const dispatch=useDispatch();
    const product = useSelector((state)=>state.product.datas);
    useEffect(() => {
        dispatch(getProductAPI())
           }, [dispatch])
           console.log("my data",product)
    return (
        <div>
         <Navbar/>
            <div className="parent1" >
            <h1 className="fraze">Boutique</h1>
  
            <div >
            <img  className="imagearpop" src={boutiqueImg} alt="fpage1"/>
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
        <Rating 
            rating={el.rating}
            
          />
       
        
        
        
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
