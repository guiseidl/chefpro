import React from "react";
import { Link } from "react-router-dom";
import { recipes } from "../../recipesData";


const RecipeList = () => {
  // Simulação de lista fixa (pode substituir pelo fetch depois)
  const recipes = [
    { id: 1, title: "Bolo de Chocolate" },
    { id: 2, title: "Macarrão ao Molho Branco" },
    { id: 3, title: "Salada Caesar" },
  ];

  return (
    <div>
      <h2>Lista de Receitas</h2>
      <ul>
        {recipes.map((r) => (
          <li key={r.id}>
            <Link to={`/admin/recipes/${r.id}`}>{r.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
