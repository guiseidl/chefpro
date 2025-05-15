import { NavLink, Outlet } from "react-router-dom";


const AdminLayout = () => {
  return (
    <>
      <header>ChefPro Admin</header>
      <aside className="sidebar">
        <nav>
          <NavLink
            to="/admin/lista"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Lista de Receitas
          </NavLink>
          <NavLink
            to="/admin/nova"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Nova Receita
          </NavLink>
        </nav>
      </aside>
      <main className="main-content">
        <Outlet /> {/* Renderiza as subrotas de admin aqui */}
      </main>
    </>
  );
};

export default AdminLayout;
