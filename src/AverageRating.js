import React from 'react';

const AverageRating = ({ averageRating }) => {
  return (
    <div className="average-rating">
      <p>Average Rating: {averageRating.toFixed(1)} ★</p>
    </div>
  );
};

export default AverageRating;
