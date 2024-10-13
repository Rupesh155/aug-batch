import React, { useContext } from 'react';
import { CartContext } from './Context';
import './App.css'
const Cart = ({  }) => {
  // console.log(cartData,"hello ");
   let {cart}=   useContext(CartContext)
   console.log(cart,"context");
   
  
  return (
    <div>
      <h2>Cart Items</h2>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} className='cart-item'>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;
