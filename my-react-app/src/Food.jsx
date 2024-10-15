// import React, { useContext } from 'react';
// import {  Context } from './Context';

// const Food = ({ apiData}) => {
//   // console.log(SetCartData,"fun111");

//   // let {distach}=    CartProvider
//   // let [isTrue,]
//       //  console.log(distach,'carrrr');
//       let {dispatch,cart }=   useContext(Context)
//       //  console.log( useContext(CartContext),"ye kiyaa");
      

//         function isTrue(id){
//           console.log(id,"heheh");
          
//           return cart.some(cartItem => cartItem.id === id);
      
//         }
    
        
        
  
        
         
  
//   const addToCart = (item) => {
//     console.log(item,"dekhoooooooo");
    


//     dispatch({
//       type:"add",
//       payload:item
//     })


  


//     }
//     function removeItem(item){
//       dispatch({
//         type:"remove",
//         payload:item
//       })

//     // console.log(apiData,"heh");
//     //       let filterData=apiData.filter((a,id)=>{
//     //         return id===item
//     //       })
//     //       SetCartData(filterData)
//     //       console.log(cartData,"dataa");
//     // console.log(apiData,"don");
    
//     // console.log(item,"eheheh");
    
//     // console.log('gmmm');
    
//     // console.log(item,"heheheheh");
//     // console.log(cartData,"mujhe dekhoo"); 

//     // setCartData([...cartData, item],'idherr');
   
    
    
    
//     // Ceck if the item is already in the cart
//     // const itemExists = cartData.find((cartItem) => cartItem.id === item.id);

//   //   if (!itemExists) {
    
//   //   } else {
//   //     alert('Item already in cart');
//   //   }
//   };


//   return (
//     <div>
//       {apiData.map((item,index) => (
//         <div key={item.id} id='card'>
//           <img src={item.image} alt={item.name} />
//           <p>{item.name}</p>

//           {isTrue(item.id) ? (
//             <button onClick={ ()=>removeItem(item)} >Remove</button>
//           ) : (
//             <button onClick={() => addToCart(item)}>Add to Cart</button>
//           )}


           
       

//         </div>
//       ))}
//     </div>
//   );
// };

// export default Food;


import React, { useContext } from 'react'
import './App.css'
import { Context } from './Context'
const Food = ({apiData}) => {

   let {dispatch}=    useContext(Context)
  
  const addToCart=(item)=>{
    dispatch({
      type:"add",
      payload:item
    })
  }
  return (
    <div>
      {
        apiData.map((val)=>{
          return(<>
          <div id='card'>
            <img    src={val.image}/>
            <p>{val.name}</p>
            <button onClick={()=>addToCart(val)}>addToCart</button>
          </div>

          </>)
        })
      }
    </div>
  )
}

export default Food
