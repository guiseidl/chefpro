import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setMessage("O título é obrigatório");
      return;
    }

    // Criar nova receita
    const newRecipe = {
      id: Date.now().toString(),
      title,
      ingredients,
      instructions,
      createdAt: new Date().toISOString()
    };

    // Obter receitas existentes do localStorage
    const existingRecipes = JSON.parse(localStorage.getItem("recipes") || "[]");
    
    // Adicionar nova receita
    const updatedRecipes = [...existingRecipes, newRecipe];
    
    // Salvar no localStorage
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    setMessage(`Receita "${title}" criada com sucesso!`);
    
    // Limpar formulário
    setTitle("");
    setIngredients("");
    setInstructions("");
    
    // Redirecionar após 1,5 segundos
    setTimeout(() => {
      navigate("/admin/lista");
    }, 1500);
  };

  return (
    <div>
      <h2>Nova Receita</h2>
      {message && (
        <p style={{ 
          backgroundColor: "#dff0d8", 
          color: "#3c763d", 
          padding: "10px", 
          borderRadius: "4px" 
        }}>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <label>Título:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Ingredientes:</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows={4}
          placeholder="Coloque um ingrediente por linha"
        />

        <label>Instruções:</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          rows={6}
          placeholder="Descreva o passo a passo da receita"
        />

        <button type="submit" className="primary">
          Criar Receita
        </button>
      </form>
    </div>
  );
};

export default NewRecipe;