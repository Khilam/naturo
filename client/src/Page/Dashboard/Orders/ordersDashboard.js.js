import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Table, Button} from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateOrder from './updateOrder'
// import EditIcon from '@material-ui/icons/Edit';
import '../papersDashboard/papersDashboard.css'

import { deleteOrder, getOrderAPI } from '../../../Redux/Action/orderAction';
import { IoMdArrowRoundForward } from 'react-icons/io'
import { DialogTitle } from '@material-ui/core'
// import AddPaper from './addPaper'
// import UpdatePaper from './update'

const OrdersDashboard = ()=>{

  const mouna = useSelector((state) => state.order.datas)
  const dispatch = useDispatch()
  
  console.log(mouna)
 
  useEffect(() => {
    dispatch(getOrderAPI())
       }, [dispatch])
       console.log("my orders",mouna)

       //Delete Paper

 
   const deleteOrderr =(id)=>{
    dispatch (deleteOrder(id) )
    console.log(deleteOrder(id))
  }
  return (
    <div>
      
        <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr className="dash-titr">
                <th className="dash-titr-id">ID</th>
                <th className="dash-titr-titr">Produits</th>
                <th className="dash-titr-cont">Nom et prénom</th>
                <th className="dash-titr-catégo">Adresse</th>
                <th className="dash-titr-img">Phone</th>
                <th className="dash-titr-img">Mail</th>
                <th className="dash-titr-op"> Total</th>
                <th className="dash-titr-op"> Options</th>
              </tr>
            </thead>
            <tbody>
           
              {mouna.map((order) => (
                <tr key={order._id}>
                  <td className="paper-dash">{order._id}</td>
                  <td className="paper-dash">{order.orderItems.map((x)=>(
                   <p className="comm" >{x.title}</p>))}
                 </td>  
                  <td className="paper-dash">{order.userName} {order.userLastName}</td>
                  <td className="paper-dash">{order.userAdresse}</td>
                  <td className="paper-dash">{order.userPhone}</td>
                  <td className="paper-dash">{order.userMail}</td>
                  <td className="paper-dash">{order.totalPrice}</td>
              
                 
                  <td> 
                  
                    <Button 
                      variant="danger"
                      className="dash-paper-editt">
                      {/* <UpdateOrder className="dash-paper-editt" id={order._id}  el={order}/> */}
                      
                      </Button> 
                    <Button
                      variant="danger"
                      className="dash-paper-delete"
                      onClick={() => deleteOrderr(order._id)}
                    >
                      < DeleteIcon/>
                    </Button> 
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

</div>

)}

   
export default OrdersDashboard 