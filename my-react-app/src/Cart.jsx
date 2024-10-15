// import React, { useContext } from 'react';
// import { Context } from './Context';
// import './App.css'
// const Cart = ({  }) => {
//   // console.log(cartData,"hello ");
//    let {cart}=   useContext(Context)
//    console.log(cart,"context");
   
  
//   return (
//     <div>
//       <h2>Cart Items</h2>
//       {cart.length > 0 ? (
//         cart.map((item, index) => (
//           <div key={index} className='cart-item'>
//             <img src={item.image} alt={item.name} />
//             <p>{item.name}</p>
//           </div>
//         ))
//       ) : (
//         <p>No items in the cart</p>
//       )}
//     </div>
//   );
// };

// export default Cart;



import React, { useContext } from 'react'
import './App.css'
import { Context } from './Context'
const Cart = () => {
  let {cart} =   useContext(Context)
  
  return (
    <div>
      {
        cart.map((a)=>{
          return(<>
          <div id='card'>
            <img  src={a.image}/>
            <p>{a.name}</p>
          </div>
          </>)
          

        })
      }
    </div>
  )
}

export default Cart
