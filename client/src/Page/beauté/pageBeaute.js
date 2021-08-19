import Modal from 'react-bootstrap/Modal'
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import './modal.css'



function Modale ({id,el}) {



    // return (
    //             <div className="product">
    //             <img src={el.image} alt="" />
          
    //             <div className="product__info">
    //               <p className="info__name" defaultValue ={el.titre}/>
          
    //               <p className="info__description" defaultValue ={el.contenu}/>
          
            
        
    //             </div>
    //           </div>
    //         );
    //       };







    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  
    return (
      <div>
          
        <Button variant="primary" onClick={handleShow}>
          Voir plus
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
          <img className="modalImage"src={el.image} alt="" />
          </Modal.Header>
          <Modal.Body>
            
          <h6 className="title-phyto">{el.titre}</h6>
        <p className="parag-phyto">{el.contenu}</p>
        
        
          {/* <div className="product">
        <img src={el.image} alt="" />
  
         <div className="product__info">
           <p className="info__name" defaultValue ={el.titre}></p>
  
           <p className="info__description" defaultValue ={el.contenu}></p>
</div>
</div> */}

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
        
        </div>
    );
  }
  export default Modale;

















// import React from 'react'
// import beauté from '../../images/beauté.jpg'
// import { useDispatch, useSelector } from 'react-redux'
// import {useEffect} from 'react'
// import {getDetailPaper} from '../../Redux/Action/paperAction'
// // import './phyto.css'



// const PageBeaute = ({ el, id }) => {
//     return (
//         <div className="product">
//         <img src={el.image} alt="" />
  
//         <div className="product__info">
//           <p className="info__name" defaultValue ={el.titre}/>
  
//           <p className="info__description" defaultValue ={el.contenu}/>
  
    

//         </div>
//       </div>
//     );
//   };

// export default PageBeaute

