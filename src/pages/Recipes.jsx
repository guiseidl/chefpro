import { Link } from "react-router-dom";

const dummyRecipes = [
  { id: 1, title: "Lasanha" },
  { id: 2, title: "Feijoada" },
];

const Recipes = () => (
  <div>
    <h1>Receitas</h1>
    <ul>
      {dummyRecipes.map((r) => (
        <li key={r.id}>
          <Link to={`/receita/${r.id}`}>{r.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Recipes;
