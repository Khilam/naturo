import React from 'react'
import './apropos.css'
import apropos from './../images/apropos.jpg'
import conceptnaturo from './../images/conceptsnatoro.jpg'
import nousommes from './../images/nousommes.jpg'

function Apropos() {
    return (
        <div>
         
            <div className="parent" >
            <h1 className="fraze">À propos</h1>
  
            <div >
            <img  className="imagearpop" src={apropos} alt="fpage1"/>
            </div>
            
            <div className="Rectang">
             
            </div>
        </div>
        <div>
        <img  className="imageconcept" src={conceptnaturo} alt="fpage1"/>
        <h3 className="titre2">NOS CONCEPTS</h3>
        </div>
        <div className="intro1">
    

        </div>
        <div>
        <img  className="imagenousommes" src={nousommes} alt="fpage1"/>
        <h3 className="titre1">QUI SOMMES-NOUS</h3>
        </div>
        <div className="intro2">

</div>
        </div>
        
    )
}

export default Apropos