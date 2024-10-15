// // // import { Children, createContext, useReducer } from "react";

import { createContext,useReducer,useState } from "react";

// import { createContext, useReducer } from "react";



    export let Context   = createContext()

    let data={
        input:'',
        arrData:[]
    }

    function reduser(state,action){
        if(action.type==='addIn')
{
    return {
        ...state,input:action.payload
    }
}
 else if(action.type==='addTodo'){
    return {
        ...state,
        input:'',
        arrData:[...state.arrData,action.payload]
    }
 }
 else{
    return state
 }

    }
       function ContextP({children}){

       let [state,distach]=    useReducer(reduser,data)
 
        return(<>
        <Context.Provider value={{input:state.input,arrData:state.arrData,distach}}>
        {children}
        </Context.Provider>
        </>)

    }
    export default ContextP

//    export  let Context=    createContext()
// let data={
//     cart:[]
// }
// const cartReduser=(state,action)=>{
//     if(action.type==='add'){
//         return {
//                      ...state,cart:[...state.cart,action.payload]
                      
//                    }
//     }

// }


//  export   const CartProvider=({children})=>{
//     let [state,dispatch]=     useReducer(cartReduser,data)

//     return(<>
//     <Context.Provider  value={{cart:state.cart,dispatch}}>
// {children}
//     </Context.Provider>
//         </>)

// }

// import { createContext, useReducer } from "react";
//  export   const Context=   createContext()
// let data={
//     cart:[]
// }
//  function reduser(state,action){
//     if(action.type==='add'){
//         return {
//             ...state,cart:[...state.cart,action.payload]
          
//         }
//     }
//     else  if(action.type==='remove'){
//         return  {
//             ...state,cart:[...state.cart.filter((a,b)=>b!==action.payload.id)]
//         } 

//     }
//     else{
//         return state
//     }

// }

//  const CartProvider=({ children })=>{
//          let [state,dispatch]= useReducer(reduser,data)
//     return(
//         <Context.Provider value={{cart:state.cart,dispatch}}>
//                      {children}
//         </Context.Provider>
//     )
//  }
//  export default CartProvider


// export const CartContext = createContext();
// let data={
//     cart:[],

// }
// function reduser(state,action){
//     if(action.type==='add'){
//         return {
//             ...state,cart:[...state.cart,action.payload]
          
//         }
//     }
//     else  if(action.type==='remove'){
//         return  {
//             ...state,cart:[...state.cart.filter((a,b)=>b!==action.payload.id)]
//         } 

//     }
//     else{
//         return state
//     }

// }

// export const CartProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reduser, data);
  
//     return (
//       <CartContext.Provider value={{ cart: state.cart, dispatch }}>
//         {children}
//       </CartContext.Provider> 
//     );
//   };










  
















