import React from 'react'
import beauté from '../../images/beauté.jpg'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react'
import '../phyto/phyto.css'


import Modale from './pageBeaute'
import Footer from '../../Shared/footer'
import Navbar from '../../Shared/navbar'
import { getPaperAPI } from '../../Redux/Action/paperAction'
// import './phyto.css'
const Beaute = () => {
    const dispatch=useDispatch();
  
    const paper = useSelector((state)=>state.paper.datas);
    useEffect(() => {
        dispatch(getPaperAPI())
           }, [dispatch])
           console.log("my data",paper)
    return (
        <div>
         <Navbar/>
            <div className="parent1" >
            <h1 className="fraze">Beauté</h1>
  
            <div >
            <img  className="imagearpop" src={beauté} alt="fpage1"/>
            </div>
            
            <div className="Rectang">
             
            </div>
        </div>
        <div className="espace">
{
    paper
    .filter((el) => el.catégorie === 'beauté')
    .map((el, _id)=>(

        <div className="card-phyto">
            <div className="phyto-title-parag">
        <h6 className="title-phyto">{el.titre}</h6>
        <p className="parag-phyto">{el.contenu.substring(0, 300)}...</p>
    <Modale id={el._id} el={el} />

        </div>
        
        <img className="img-phyto"
        src={el.image} alt="imgs"/>
        </div>


    ))
    
}
</div>

<Footer/> 
        </div>
    )
}

export default Beaute
