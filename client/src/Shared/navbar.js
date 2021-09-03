import React from 'react'

import { FaPagelines} from 'react-icons/fa';
import {BsPersonFill} from 'react-icons/bs'
import {FaShoppingCart} from 'react-icons/fa'

import { Link } from 'react-router-dom'
import './searchanimate.css'




import "./navbar.css"



function Navbar() {
 
    
	return (

  
        <div >


 <h1 className="bigTitle" href="#home" >
      <FaPagelines/> NATUROPATHIE </h1> 
      <div className="navbar navbar-expand ">
            <div className="container-fluid">
                
  
                    
                <div className="navbarr" >
                

                   
                   
               
                    < div className="navbar-nav">
                        <Link to="Phyto" className="nav-item nav-link active phyto">Phytothérapie</Link>
                        <Link to="Maladies" className="nav-item nav-link">Maladies</Link>
                        <Link to="Beauté" className="nav-item nav-link">Beauté</Link>
                        <Link to="Boutique" className="nav-item nav-link">Boutique</Link>
                        <Link to="apropos" className="nav-item nav-link">À propos </Link>
                        <Link to="/" className="nav-item nav-link">Acceuil </Link>
                       
   

                        <div className="icons">
                      
                        <Link to="sign" className="nav-item nav-link"><BsPersonFill/></Link>
                        <Link to="/panier">
                <a className="nav-item nav-link">
                  <FaShoppingCart />
                </a>
              </Link>

              
        <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <div className="search-container">
          <input type="text" name="search" placeholder="Search..." className="search-input" />
          <a href="search" className="search-btn">
            <i className="fas fa-search" />      
          </a>
        </div>
                        {/* <Link to="searchAnimate" className="nav-item nav-link"><FaSearch/></Link> */}
                       </div>
                      
                       
                   
                       
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

