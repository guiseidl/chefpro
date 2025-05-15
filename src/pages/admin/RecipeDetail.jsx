import React from "react";
import { useParams } from "react-router-dom";
import { recipes } from "../../recipesData";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id)); // parseInt ou Number

  if (!recipe) {
    return <p>Receita não encontrada.</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p><strong>Descrição:</strong> {recipe.description}</p>

      <h3>Ingredientes:</h3>
      <ul>
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>

      <h3>Modo de Preparo:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
