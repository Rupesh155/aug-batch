import React from 'react';

const Cart = ({ cartData }) => {
  console.log(cartData,"hello ");
  
  return (
    <div>
      <h2>Cart Items</h2>
      {cartData.length > 0 ? (
        cartData.map((item, index) => (
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
