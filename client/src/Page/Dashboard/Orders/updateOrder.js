import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';

import {useDispatch} from 'react-redux'

// import './papersDashboard.css'
import { updateOrder } from '../../../Redux/Action/orderAction';



const UpdateOrder = ({el,_id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [update,setupdate]=useState({userPhone: el.userPhone, userAdresse:el.userAdresse,userMail:el.userMail
        })
    // handelInput
    const handleChange=(e)=>{
        const {name,value}=e.target
        setupdate({
            ...update,
            [name]:value
        })
        console.log("input",update)
    }
    // update Menu

    const updateorder=()=>{
        dispatch (updateOrder(_id,update.userPhone, update.userAdresse, update.userMail) )
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div className='container mt-5'>
 {/* <Button className="btn btn-warning" onClick={handleShow}>
   Modifier
</Button> */}
  <EditIcon className="dash-paper-edit" onClick={handleShow}/>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<h3>Modifier Produit</h3>
</Modal.Header>
<Modal.Body>
<Form >
{/* <Form.Group controlId="formBasicEmail">
<Form.Label>Titre</Form.Label>
<Form.Control type="text" placeholder="title" name='qnty' defaultValue={el.qnty}  onChange={handleChange}/>

</Form.Group> */}
<Form.Group controlId="formBasicPassword">
<Form.Label>Adresse</Form.Label>
<Form.Control type="text" placeholder="enter la nouvelle adresse"  name='userAdresse' defaultValue={el.userAdresse}  onChange={handleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>Phone</Form.Label>
<Form.Control type="text" placeholder="enter le nouveau numéro de téléphone"  name='userPhone'  defaultValue={el.userPhone}   onChange={handleChange} />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Mail</Form.Label>
<Form.Control type="text" placeholder="enter le nouveau mail"  name="userMail"  defaultValue={el.userMail}  onChange={handleChange} />
</Form.Group>

{/* <Form.Group controlId="formBasicPassword">
<Form.Label>Conseils</Form.Label>
<Form.Control type="text" placeholder="enter conseils"  name="conseils"  defaultValue={el.conseils}  onChange={handleChange} />
</Form.Group> */}

{/* <Form.Group controlId="formBasicPassword">
<Form.Label>Quantité</Form.Label>
<Form.Control type="text" placeholder="enter quantité"  name='qnty' onChange={handleChange}/>
</Form.Group> */}

<Button className="ms-3  mt-3" variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button onClick={updateorder} >valider</Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default UpdateOrder