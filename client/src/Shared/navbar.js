import React from 'react'
import { FaPagelines} from 'react-icons/fa';
import {BsPersonFill} from 'react-icons/bs'
import {FaShoppingCart} from 'react-icons/fa'
import {FaSearch} from 'react-icons/fa'
import "./navbar.css"

function Navbar() {
    return (
        <div >
 <h1 className="title" href="#home" >
      <FaPagelines/> NATUROPATHIE </h1> 
      <div className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                

                <div className="collapse navbar-collapse  " id="navbarCollapse">
                    <div className="navbar-nav  ml-auto">
                        <a href="#Phytothérapie" className="nav-item nav-link active phyto">Phytothérapie</a>
                        <a href="#Maladies" className="nav-item nav-link">Maladies</a>
                        <a href="#Beauté" className="nav-item nav-link">Beauté</a>
                        <a href="#Boutique" className="nav-item nav-link">Boutique</a>
                        <a href="apropos" className="nav-item nav-link">À propos </a>
                        <a href="/" className="nav-item nav-link">Acceuil </a>
                        <a href="#sign" className="nav-item nav-link"><BsPersonFill/></a>
                        <a href="#panier" className="nav-item nav-link"><FaShoppingCart/></a>
                        <a href="#search" className="nav-item nav-link"><FaSearch/></a>
                      

 
                    </div>
                </div>
            </div>
        </div>
     
           

       <div>
       <h3 className="fraze2">Porte ouverte sur la santé</h3>
       </div>
           
</div>


 )
}

export default Navbar
