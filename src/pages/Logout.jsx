// src/pages/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Lógica de logout
    localStorage.removeItem("token");
    // Se houver outros dados de autenticação, limpe-os também
    localStorage.removeItem("user");
    // sessionStorage.removeItem("token");
    
    // Redirecionamento para a página de login
    navigate("/login", { replace: true });
  }, [navigate]);
  
  // Este componente não renderiza nada visualmente, apenas executa a lógica
  return null;
};

export default Logout;