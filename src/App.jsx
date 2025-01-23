import React, { useState } from 'react';

export default function App() {
  const [food, setFood] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [rating, setRating] = useState(null);
  const [foodList, setFoodList] = useState([]);

  const handleAddFood = () => {
    const newFood = {
      name: food,
      ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
      rating: rating
    };
    setFoodList([...foodList, newFood]);
    setFood('');
    setIngredients('');
    setRating(null);
  };

  const compareIngredients = () => {
    const ingredientRatings = {};
    foodList.forEach(foodItem => {
      foodItem.ingredients.forEach(ingredient => {
        if (!ingredientRatings[ingredient]) {
          ingredientRatings[ingredient] = [];
        }
        ingredientRatings[ingredient].push(foodItem.rating);
      });
    });

    const problematicIngredients = Object.entries(ingredientRatings).map(([ingredient, ratings]) => {
      const averageRating = ratings.reduce((a, b) => a + b, 0) / ratings.length;
      return { ingredient, averageRating };
    }).filter(item => item.averageRating < 3); // If average rating is less than 3, it is flagged

    return problematicIngredients;
  };

  const handleRatingClick = (value) => {
    setRating(value);
  };

  return (
    <div className="App">
      <h1>Food Tracker</h1>
      <input
        type="text"
        placeholder="Food Product"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <div>
      {
        // REPLACE WITH SVG'S
      }
        <span onClick={() => handleRatingClick(1)} role="img" aria-label="very sad">🟥</span>
        <span onClick={() => handleRatingClick(2)} role="img" aria-label="sad">🟧</span>
        <span onClick={() => handleRatingClick(3)} role="img" aria-label="neutral">🟨</span>
        <span onClick={() => handleRatingClick(4)} role="img" aria-label="happy">🍋‍🟩</span>
        <span onClick={() => handleRatingClick(5)} role="img" aria-label="very happy">🟩</span>
      </div>
      <button onClick={handleAddFood}>Add Food</button>
      <h2>Food List</h2>
      <ul>
        {foodList.map((foodItem, index) => (
          <li key={index}>
            {foodItem.name} - Ingredients: {foodItem.ingredients.join(', ')} - Rating: {foodItem.rating}
          </li>
        ))}
      </ul>
      <h2>Problematic Ingredients</h2>
      <ul>
        {compareIngredients().map((item, index) => (
          <li key={index}>
            {item.ingredient} - Average Rating: {item.averageRating.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}