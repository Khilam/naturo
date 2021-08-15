import React from 'react'
import phyto from '../../images/phyto.jpg'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react'
import { useHistory } from 'react-router'
import { logout } from '../../Redux/Action/authAction'
import {getAllPapers} from '../../Redux/Action/paperAction'
import './phyto.css'
const Phyto = () => {
    const dispatch=useDispatch();
    const history=useHistory();
    const paper = useSelector((state)=>state.paper.datas);
    useEffect (()=>{
        dispatch(getAllPapers())
    })
    return (
        <div>
         
            <div className="parent1" >
            <h1 className="fraze">Phytothérapie</h1>
  
            <div >
            <img  className="imagearpop" src={phyto} alt="fpage1"/>
            </div>
            
            <div className="Rectang">
             
            </div>
        </div>
        <div className="espace">
{
    paper
    .filter((el) => el.catégorie === 'phyto')
    .map((el)=>(

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


    ))
}
</div>

            
        </div>
    )
}

export default Phyto
