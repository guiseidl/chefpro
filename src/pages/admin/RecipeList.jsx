import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carrega receitas do localStorage quando o componente monta
  useEffect(() => {
    const loadedRecipes = JSON.parse(localStorage.getItem("recipes") || "[]");
    setRecipes(loadedRecipes);
    setLoading(false);
  }, []);

  const handleDelete = (id) => {
    // Filtra a receita a ser excluída
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    
    // Atualiza o estado e o localStorage
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  if (loading) {
    return <p>Carregando receitas...</p>;
  }

  return (
    <div>
      <h2>Lista de Receitas</h2>
      {recipes.length === 0 ? (
        <p>
          Nenhuma receita cadastrada.{" "}
          <Link to="/admin/nova" style={{ color: "#007bff" }}>
            Adicionar receita
          </Link>
        </p>
      ) : (
        <ul style={{ 
          listStyle: "none", 
          padding: 0,
          display: "grid",
          gap: "15px" 
        }}>
          {recipes.map((recipe) => (
            <li key={recipe.id} style={{ 
              border: "1px solid #ddd", 
              borderRadius: "4px",
              padding: "15px",
              backgroundColor: "#f9f9f9"
            }}>
              <h3>{recipe.title}</h3>
              <p>
                <strong>Ingredientes:</strong>{" "}
                {recipe.ingredients ? recipe.ingredients.split("\n").length : 0} itens
              </p>
              <div style={{ 
                display: "flex", 
                gap: "10px",
                marginTop: "10px" 
              }}>
                <button 
                  style={{
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                  onClick={() => handleDelete(recipe.id)}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;