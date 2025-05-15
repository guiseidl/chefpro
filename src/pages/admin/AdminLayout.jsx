import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      
      // Implementação do logout
      localStorage.removeItem("token");
      // Se estiver usando outros itens de autenticação, remova-os também
      localStorage.removeItem("user");
      
      // Redirecionar para a página de login com refresh forçado
      window.location.href = "/login";
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px" }}>
        <div>ChefPro Admin</div>
        <button 
          onClick={handleLogout}
          disabled={isLoading}
          style={{
            padding: "6px 12px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          {isLoading ? "Saindo..." : "Logout"}
        </button>
      </header>
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
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;