import { useState } from "react";

const NewRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setMessage("O título é obrigatório");
      return;
    }

    // Aqui você pode integrar API para salvar receita
    setMessage(`Receita "${title}" criada com sucesso!`);

    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div>
      <h2>Nova Receita</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Título:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Ingredientes:</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows={4}
        />

        <label>Instruções:</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          rows={6}
        />

        <button type="submit" className="primary">
          Criar Receita
        </button>
      </form>
    </div>
  );
};

export default NewRecipe;
