import React from 'react'
import "../Shared/navbar.css"
import fotopage1 from './../images/fotopage1.png'
import beauté from './../images/beauté.jpg'
import maladies from './../images/maladies.jpg'
import phyto from './../images/phyto.jpg'
import boutique from './../images/boutique.jpeg'
import treemen from './../images/treeman.jpg'





function Home() {
    return (
        <div>
         
            <div className="parent" >
            <h1 className="fraze">LE CHEMAIN VERS UNE VIE EPANOUIE</h1>
  
            <div >
            <img  className="image1" src={fotopage1} alt="fpage1"/>
            </div>
            <div className="rectangle">
             
            </div>
            {/******* * ** ****Crad *******/}
            <div>
            <h3 className="noservices">NOS SERVICES</h3>
            </div>
            </div>
           <div className="total-card">
            <div className="card">
                <div >
                    <img className="card-imag" src={phyto} alt="imgphyto"/>
                    <div  className="deco">
                        <h3 className="card-text">PHYTOTHERAPIE</h3>

                    </div>
                </div>
            </div>
            <div className="card">
                <div >
                    <img className="card-imag" src={maladies} alt="imgphyto"/>
                    <div  className="deco">
                        <h3 className="card-text">MALADIES</h3>

                    </div>
                </div>
            </div>
            
            <div className="card">
                <div >
                    <img className="card-imag" src={beauté} alt="imgphyto"/>
                    <div  className="deco">
                        <h3 className="card-text">BEAUTÉ</h3>

                    </div>
                </div>
            </div>
            <div className="card">
                <div >
                    <img className="card-imag" src={boutique} alt="imgphyto"/>
                    <div  className="deco">
                        <h3 className="card-text">BOUTIQUE</h3>

                    </div>
                </div>
            </div>
            </div>
{/* **************************Contact ******************************/}

<div className="cadre">
{/* <div className="nousommes" >
    <h2>En savoir plus</h2>
    <lu>
       <li> À propos </li>
       <li> Phytothérapie</li>
       <li> Maladies</li>
       <li> Beauté</li>
       <li> Boutique</li>
    </lu>

</div> */}

<div className="consulta">
<h6>Votre consultation de naturopathie en ligne</h6>
<p className="paragraf1">Ces consultations ne remplacent pas une consultation médicale. Ce sont des bilans de vitalité qui permettent d’évaluer votre état de santé global et votre niveau d’énergie. Lors de la consultation nous mettrons en place un programme  d’hygiène de vie qui sera votre feuille de route au quotidien. 

Le but de ces consultations est de vous apporter une réponse globale à vos problématiques physiques et émotionnelles, à travers des conseils d’hygiène de vie, qui se basent uniquement sur des techniques exclusivement naturelles : alimentation, exercice physique, gestion des émotions, phytologie, huiles essentielles, hydrologie, etc </p>

</div>

<div>
<img className="treemen" src={treemen} alt="treemen"/>
</div>
<div className="paragraf2">
    <h6>Qu’est-ce qu’un naturopathe ?</h6>
    <p>Le naturopathe est un éducateur de santé.  Il établit un bilan de vitalité personnalisé et vous permet de mieux vous connaître. Vous prendrez conscience de vos forces et de vos faiblesses, de votre niveau d’énergie vitale. Vous repartirez avec une meilleure connaissance de votre organisme. Ensemble, vous établirez un programme qui vous permettra d’optimiser votre forme : alimentation, habitudes de vie à mettre en place, conseils phytothérapie et aromathérapie. Le rôle du naturopathe est ainsi de vous rendre le plus informé possible et le plus autonome vis-à-vis de votre santé.</p>
</div>
</div>
</div>

  
    )
}

export default Home
