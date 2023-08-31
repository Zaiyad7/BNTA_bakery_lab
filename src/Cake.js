import React from 'react';

const Cake = ({ cakeName, ingredients, price, rating }) => {
  return (
    <div className="cake">
      <h2>{cakeName}</h2>
      <p>Price: ${price}</p>
      <p>Rating: {rating} ★</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cake;