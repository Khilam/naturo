import React from 'react'
import maladies from '../../images/maladies.jpg'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react'

//  import { useHistory } from 'react-router'
// import { logout } from '../../Redux/Action/authAction'

import Navbar from '../../Shared/navbar'
import Footer from '../../Shared/footer'
import { getPaperAPI } from '../../Redux/Action/paperAction'
// import './phyto.css'
const Maladie = () => {
    const dispatch=useDispatch();
    // const history=useHistory();
    const paper = useSelector((state)=>state.paper.datas);
    useEffect(() => {
        dispatch(getPaperAPI())
           }, [dispatch])
           console.log("my data",paper)
    return (
        <div>
         <Navbar/>
            <div className="parent1" >
            <h1 className="fraze">Maladies</h1>
  
            <div >
            <img  className="imagearpop" src={maladies} alt="fpage1"/>
            </div>
            
            <div className="Rectang">
             
            </div>
        </div>
        <div className="espace"/>
{
    paper
    .filter((el) => el.catégorie === 'maladie')
    .map((el, key)=>(
        <div  key={key}>

        <div className="card-phyto">
            <div className="phyto-title-parag">
        <h6 className="title-phyto">{el.titre}</h6>
        <p className="parag-phyto">{el.contenu.substring(0, 500)}...</p>
        <a href="/pageMaladies"> en savoir plus</a>
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

export default Maladie
