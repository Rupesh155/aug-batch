import { Children, createContext, useReducer } from "react";

export const CartContext = createContext();
let data={
    cart:[]
}
function reduser(state,action){
    if(action.type==='add'){
        return {
            ...state,cart:[...state.cart,action.payload]
          
        }
    }
    else  if(action.type==='remove'){
        return   

    }
    else{
        return state
    }

}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reduser, data);
  
    return (
      <CartContext.Provider value={{ cart: state.cart, dispatch }}>
        {children}
      </CartContext.Provider> 
    );
  };
  
















