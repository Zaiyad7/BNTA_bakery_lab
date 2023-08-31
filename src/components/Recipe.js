const Recipe = ({cakeName, ingredients, price, rating}) => {
return (
    <div className="recipe">
        <h2>{recipeName}</h2>
        <p>Price: ${price}</p>
        <p>Rating: {rating} *</p>
        <ul>
            {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
        </ul>
    </div>
);

};



export default Recipe;