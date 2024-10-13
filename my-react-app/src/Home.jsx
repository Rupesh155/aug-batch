import React, { useState, useEffect } from 'react';
import Food from './Food';
import './App.css'

const Home = ({ cartData, SetCartData }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch('http://dummyjson.com/recipes')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.recipes, "API Data");
        setApiData(data.recipes);
      });
  }, []);

  return (
    <div>
      <Food apiData={apiData} cartData={cartData} SetCartData={SetCartData} />
    </div>
  );
};

export default Home;

