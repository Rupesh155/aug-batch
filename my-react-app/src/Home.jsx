// import React, { useState, useEffect } from 'react';
// import Food from './Food';
// import './App.css'

// const Home = () => {
//   const [apiData, setApiData] = useState([]);

//   useEffect(() => {
//     fetch('http://dummyjson.com/recipes')
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data.recipes, "API Data");
//         setApiData(data.recipes);
//       });
//   }, []);

//   return (
//     <div>
//       <Food    apiData={apiData}/>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react'
import Food from './Food'

const Home = () => {

  let [apiData,SetApiData]=useState([])


  useEffect(()=>{
    fetch('https://dummyjson.com/recipes').then((res)=>{
      return res.json()
  
    }).then((data)=>{
      // console.log(data,"hdhehe");
      SetApiData(data.recipes)
      
  
    })

  },[])

  return (
    <div>
      <Food    apiData={apiData}/>
    </div>
  )
}

export default Home

