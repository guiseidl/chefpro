import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalhes da Receita {id}</h1>
      <p>Aqui vai o conteúdo da receita {id}</p>
    </div>
  );
};

export default RecipeDetails;
