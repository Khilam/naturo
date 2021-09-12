import axios from 'axios'

const Api = axios.create({ baseURL: 'http://localhost:4005/app/order' })

// //addOrder
function addOrder(orderItems, totalPrice) {
  const token = localStorage.getItem('token')
  return Api.post(
    '/add',
    { orderItems, totalPrice },
    {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    },
  )
}

  //getOrder
  function getAllOrders() {
    return Api.get("/get");
  }

//deleteOrder
function deleteOrders(id) {
  return Api.delete(`/${id}`);
}

//update Order

function updateOrders(id) {
  return Api.put(`/${id}`);
}

export {addOrder, getAllOrders, deleteOrders,updateOrders} 
export default {addOrder,getAllOrders, deleteOrders,updateOrders}
