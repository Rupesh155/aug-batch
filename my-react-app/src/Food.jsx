import React, { useContext } from 'react';
import { CartContext, CartProvider } from './Context';

const Food = ({ apiData, cartData, SetCartData }) => {
  // console.log(SetCartData,"fun111");
  console.log(CartProvider,'CARTTTTTT');
  // let {distach}=    CartProvider
  
      //  console.log(distach,'carrrr');
      let {dispatch }=   useContext(CartContext)
      //  console.log( useContext(CartContext),"ye kiyaa");
       
        console.log( dispatch,'hjeh');
        
         
  
  const addToCart = (item) => {
    console.log(item,"dekhoooooooo");
    


    dispatch({
      type:"add",
      payload:item
    })

    // console.log(apiData,"heh");
    //       let filterData=apiData.filter((a,id)=>{
    //         return id===item
    //       })
    //       SetCartData(filterData)
    //       console.log(cartData,"dataa");
    // console.log(apiData,"don");
    
    // console.log(item,"eheheh");
    
    // console.log('gmmm');
    
    // console.log(item,"heheheheh");
    // console.log(cartData,"mujhe dekhoo"); 

    // setCartData([...cartData, item],'idherr');
   
    
    
    
    // Ceck if the item is already in the cart
    // const itemExists = cartData.find((cartItem) => cartItem.id === item.id);

  //   if (!itemExists) {
    
  //   } else {
  //     alert('Item already in cart');
  //   }
  };
  let data=true

  return (
    <div>
      {apiData.map((item,index) => (
        <div key={item.id} id='card'>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          {
            data?  <button onClick={() => addToCart(item)}>Add to Cart</button>:   <button >remove</button> 
          }
         
       

        </div>
      ))}
    </div>
  );
};

export default Food;
