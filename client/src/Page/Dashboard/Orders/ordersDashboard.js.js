import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Table, Button} from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
import '../papersDashboard/papersDashboard.css'

import { deleteOrder, getOrderAPI } from '../../../Redux/Action/orderAction';
import { IoMdArrowRoundForward } from 'react-icons/io'
// import AddPaper from './addPaper'
// import UpdatePaper from './update'

const OrdersDashboard = ()=>{

  const mouna = useSelector((state) => state.order.datas)
  const dispatch = useDispatch()
  
  console.log(IoMdArrowRoundForward)
 
  useEffect(() => {
    dispatch(getOrderAPI())
       }, [dispatch])
       console.log("my orders",mouna)

       //Delete Paper

 
  //  const deleteOrder =(id)=>{
  //   dispatch (deleteOrder(id) )
  //   console.log(deleteOrder(id))
  // }
  return (
    <div>
       {/* <AddPaper/> */}
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
              </tr>
            </thead>
            <tbody>
           
              {mouna.map((order) => (
                <tr key={mouna._id}>
                  <td className="paper-dash">{mouna._id}</td>
                  {/* <td className="paper-dash">{order.orderItems.title}</td> */}
                  <td className="paper-dash">{mouna.userName}{order.userLastName}</td>
                  <td className="paper-dash">{mouna.userAdresse}</td>
                  <td className="paper-dash">{mouna.totalPrice}</td>
                  <td className="paper-dash">{mouna.userPhone}</td>
                  <td className="paper-dash">{mouna.userMail}</td>
                  <td>
                  
                  {/* <Button 
                      variant="danger"
                      className="dash-paper-editt">
                      <UpdatePaper className="dash-paper-editt" id={paper._id}  el={paper}/>
                      
                      </Button> */}
                    {/* <Button
                      variant="danger"
                      className="dash-paper-delete"
                      onClick={() => deleteOrder(order._id)}
                    >
                      < DeleteIcon/>
                    </Button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

</div>

)}

   
export default OrdersDashboard 