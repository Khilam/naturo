import React from 'react'
import { useDispatch} from 'react-redux'
// import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { logout } from '../../Redux/Action/authAction'

import {Tab, Nav, Col , Row} from 'react-bootstrap'
import { FaPagelines} from 'react-icons/fa';
import ListIcon from '@material-ui/icons/List';
import './dashboard.css'
import PapresDashboard from './papersDashboard/papersDashboard'
import ProductsDashboard from './product/productDashboard'
import OrdersDashboard from './Orders/ordersDashboard.js'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



const Dashboard = () => {
  const dispatch = useDispatch()
  const history = useHistory()
//   const paper = useSelector((state) => state.paper.datas)
//   const user = useSelector((state) => state.userReducer.user)
//   console.log(user)
//   console.log(paper)
  // useEffect (()=>{
  //     dispatch(CURRENT_USER())
  // })
//   useEffect(() => {
//     dispatch(getAllPapers())
//   }, [])
  return (
    <div>
       
   
        
       <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={1} className="sideBar">
      <Nav variant="pills" className="flex-column">
      {/* <Nav.Item>
      <Nav.Link className="titre-dash" eventKey="first"><FaPagelines/> NATUROPATHIE </Nav.Link> 
    
        </Nav.Item> */}
        <Nav.Item >
          <Nav.Link  calssName="firstt" eventKey="second"><ListIcon/>Papers </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link calssName="firstt" eventKey="third"><ListIcon/> Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link calssName="firstt" eventKey="fourth"><ListIcon/>Items</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <ExitToAppIcon  className="bouton-dash"
        onClick={() => {
          dispatch(logout())
          history.push('/sign')
        }}
      >
         </ExitToAppIcon>
        {/* Déconnexion
      </button> */}
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={11}>
      <Tab.Content>
      <Nav.Item>
      <Nav.Link className="titre-dash" eventKey="first"><FaPagelines/> NATUROPATHIE </Nav.Link> 
    
        </Nav.Item>
      <Tab.Pane calssName=" first" eventKey="first">

     
         <h1 className="welcom-dash">Welcome to your dashboard Mouna</h1>
        </Tab.Pane>
        <Tab.Pane calssName=" firstt" eventKey="second">
        <PapresDashboard/>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <OrdersDashboard />
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
         
          <ProductsDashboard/>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        {/* <button
        onClick={() => {
          dispatch(logout())
          history.push('/sign')
        }}
      >
        logout
      </button> */}
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
     







     
   
    </div>
  )
}

export default Dashboard