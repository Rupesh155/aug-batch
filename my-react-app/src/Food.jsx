import React from 'react';

const Food = ({ apiData, cartData, SetCartData }) => {
  console.log(SetCartData,"fun111");
  
  const addToCart = (item) => {
    console.log(apiData,"heh");

          let filterData=apiData.filter((a,id)=>{
            return id===item

          })
          SetCartData(filterData)
          console.log(cartData,"dataa");
          
    

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

  return (
    <div>
      {apiData.map((item,index) => (
        <div key={item.id} id='card'>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <button onClick={() => addToCart(index)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Food;
