import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside style={{ width: "200px", background: "#ccc", padding: "1rem", height: "100vh" }}>
      <nav>
        <ul>
          <li><Link to="/admin/nova">Nova Receita</Link></li>
          <li><Link to="/admin/lista">Lista de Receitas</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
