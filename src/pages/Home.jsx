import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Bem-vindo ao ChefPro</h1>
    <p><Link to="/receitas">Ver receitas</Link></p>
  </div>
);

export default Home;
