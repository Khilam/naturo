import {fetchAllPapers} from "../request"
//getALL
// export const getAllPapers=()=>async (dispatch)=> {
// try{
// const res= await fetchAllPapers()

// dispatch({
//     type:"GET_PAPER",
//     payload:res.data
// })
// }
// catch (error) {
//               console.log(error);
//              }
// }


export function getAllPapers() {
    return dispatch => {
        fetchAllPapers()
        .then (papers =>dispatch (
            {type: "GET_PAPERS_SUCCED",payload: papers}) 
        )
        .catch(err=>dispatch( {
            type: "GET_PAPERS_FAILED",
            payload: err
          }))
    }

}