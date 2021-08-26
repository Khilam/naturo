import Modal from 'react-bootstrap/Modal'
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import '../beauté/modal.css'
import ModalNAv from '../beauté/modalNav';





function Modale ({id,el}) {



    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  
    return (
      <div>
          
        <a href className="title" variant="primary" onClick={handleShow}>
        {el.title}
       
        </a>
  
        <Modal dialogClassName="my-modal"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          
        >
       
          <ModalNAv className="navModal"/>
          <Modal.Body>
          
              
          <div >
         
         <div className="parent1" >
        
         <h6 className="title-phytoM">{el.title}</h6>
         <div >
         <img  className="imageModal" src={el.imageUrl} alt="fpage1"/>
         </div>
         
         <div className="Rectang">
          
         </div>
     </div>
     <div className="boutik">
     <div className="modal-B">
  
        <h3 className="text-dexcrip">Description:</h3>
        <p className="parag-boutikModal">{el.description}</p>
        <h4 className="text-dexcrip">Conseils d'utilisation:</h4>
        <p className="parag-boutikModal">{el.conseils}</p>
        </div>
        <div className="box-boutik">
        <p className="prix-modalBoutik"> Prix: {el.price} DT</p>
        </div>
        </div>
        
        
 </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="boutonModal" variant="secondary" onClick={handleClose}>
              Retour
            </Button>
            {/* <Button variant="primary">Understood</Button> */}
            </Modal.Footer>
           
        
        </Modal>
        
        </div>
    );
}
  
  export default Modale;
