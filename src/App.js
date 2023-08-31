import React, { useState } from 'react';
import Cake from './Cake';
import AverageRating from './AverageRating';

const cakesData = [
  {
    cakeName: "Victoria Sponge",
    ingredients: [
      "eggs",
      "butter",
      "sugar",
      "self-raising flour",
      "baking powder",
      "milk"
    ],
    price: 5,
    rating: 5
  },
  {
    cakeName: "Tea Loaf",
    ingredients: [
      "eggs",
      "oil",
      "dried fruit",
      "sugar",
      "self-raising flour", 
      "strong tea"
    ],
    price: 2,
    rating: 3
  },
  {
    cakeName: "Carrot Cake",
    ingredients: [
      "carrots",
      "walnuts",
      "oil",
      "cream cheese",
      "flour",
      "sugar"
    ],
    price: 8,
    rating: 5
  }
  
];

const calculateAverageRating = (cakes) => {
  const totalRating = cakes.reduce((sum, cake) => sum + cake.rating, 0);
  return totalRating / cakes.length;
};

const App = () => {
  const [cakes] = useState(cakesData);
  const averageRating = calculateAverageRating(cakes);

  return (
    <div className="app">
      {cakes.map((cake, index) => (
        <Cake
          key={index}
          cakeName={cake.cakeName}
          ingredients={cake.ingredients}
          price={cake.price}
          rating={cake.rating}
        />
      ))}
      <AverageRating averageRating={averageRating} />
    </div>
  );
};

export default App;
