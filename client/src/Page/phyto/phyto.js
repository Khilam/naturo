import React from 'react'
import phyto from '../../images/phyto.jpg'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react'
import { useHistory } from 'react-router'
import { logout } from '../../Redux/Action/authAction'
import './phyto.css'
import Footer from '../../Shared/footer'
import Navbar from '../../Shared/navbar'
import { getPaperAPI } from '../../Redux/Action/paperAction'
const Phyto = () => {
    const dispatch=useDispatch();
    const history=useHistory();
    const paper = useSelector((state)=>state.paper.datas);
    useEffect(() => {
        dispatch(getPaperAPI())
           }, [dispatch])
           console.log("my data",paper)
    return (
        <div>
         <Navbar/>
            <div className="parent1" >
            <h1 className="fraze">Phytothérapie</h1>
  
            <div >
            <img  className="imagearpop" src={phyto} alt="fpage1"/>
            </div>
            
            <div className="Rectang">
             
            </div>
        </div>
        
        <div className="espace"/>
{
    paper
    .filter((el) => el.catégorie === 'phyto')
    .map((el,key)=>(
         <div  key={key}>

        <div className="card-phyto">
            <div className="phyto-title-parag">
        <h6 className="title-phyto">{el.titre}</h6>
        <p className="parag-phyto">{el.contenu.substring(0, 500)}...</p>
        <button onClick={()=>{dispatch(logout());
            history.push('/PhytoPage')
            }}>En savoir plus</button>
        </div>
        <img className="img-phyto"
        src={el.image} alt="imgs"/>
        </div>
       
    
      
        
    
         
       </div> 
    )
     ) 
     
        }
         <Footer/>
     </div> 
          
     )
     }
     
        
      
        
       
       
        
    

            
        
    
   
  

export default Phyto
