import axios from 'axios'

const Api = axios.create({ baseURL: 'http://localhost:4005/app/order' })

// //addOrder
function addOrder(orderItems, totalPrice) {
  return Api.post('/add', { orderItems, totalPrice })
}

//   //getOrder
//   function getOrders() {
//     return Api.get("/get");
//   }

// //deleteOrder
// function deleteOrder(id) {
//   return Api.delete(`/${id}`);
// }

// //update Order

// function updateOrder(id) {
//   return Api.put(`/${id}`);
// }

export { addOrder }
export default { addOrder }