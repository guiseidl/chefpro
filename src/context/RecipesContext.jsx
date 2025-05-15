import { createContext, useContext, useState } from "react";

const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
    { id: 1, title: "Lasanha", description: "Deliciosa lasanha caseira." },
    { id: 2, title: "Feijoada", description: "Tradicional feijoada brasileira." },
  ]);

  const addRecipe = (recipe) => {
    setRecipes((prev) => [...prev, { ...recipe, id: Date.now() }]);
  };

  return (
    <RecipesContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipes = () => useContext(RecipesContext);
