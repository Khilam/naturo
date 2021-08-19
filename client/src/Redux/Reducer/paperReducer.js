
const mouna = {
    datas:[]
};
//  export const paperReducer = ( state=mouna , action) => {
//     const { type, payload } = action;
//     switch (type){
//       case "GET_ALL_PAPER":
        
//         return {
//           ...state,
//           datas: payload
//         //   loading: false
//         }
        
//     }
//     return state
// };

export  const paperReducer = (state = mouna, action ) => {
    const { type, payload } = action;
    switch( type) {
        case   "GET_PAPERS_SUCCED":
            return {
                ...state,
                datas: payload 
              }
            case   "ADD_PAPERS_SUCCED":
                return {
                    ...state,
                    datas: [...state.papers, payload]
              
                   }

    }
return state
};

export  const paperDetailReducer = (state = mouna , action ) => {
    const { type, payload } = action;
    switch( type) {
        case   "GET_DETAIL_PAPER_SUCCED":
            return {
                ...state,
                datas: payload 
              }
            case   "ADD_DETAIL_PAPER_SUCCED":
                return {
                    ...state,
                    datas: [...state.papers, payload]
              
                   }

    }
return state
};